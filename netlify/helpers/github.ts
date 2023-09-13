import { createOAuthAppAuth } from "@octokit/auth-oauth-app";
import * as _ from "lodash";
import { App, Octokit } from "octokit";
import { GraphQlQueryResponseData } from "@octokit/graphql/dist-types/types";
import { Issue, Milestone, CloneResponse } from "./types";
import config from "./config";
import { GITHUB_DEFAULT_LABELS } from "./const";
import {
  addProjectV2ItemByIdMutation,
  getUserProjectsV2Query,
  linkProjectV2RepositoryMutation,
  makeProjectPublicMutation,
} from "./gql";

export const auth = createOAuthAppAuth({
  clientType: "oauth-app",
  clientId: config().github.oauth.clientId,
  clientSecret: config().github.oauth.clientSecret,
});

class GithubService {
  /** The Octokit instance that is used with user's JWT (specific to user) */
  private octokit: Octokit;
  /** Global repository id */
  repositoryId: string;
  /** The username for the authenticated user (trainee). */
  private login: string;
  /** The ID of the owner of the repository (node_id). */
  private ownerId: string;
  /** Project ID used to track coursework */
  projectId: string;
  /** A map of milestone numbers to milestone IDs. */
  milestoneMap: {
    [key: string]: Milestone["number"];
  } = {};

  /**
   * Creates a new instance of the GitHub service.
   * @constructor
   * @param {Octokit} octokit - The Octokit instance to use.
   * @param {string} ownerId - The ID of the owner of the repository.
   * @param {string} login - The username for the authenticated user.
   */
  constructor(octokit: Octokit, ownerId: string, login: string) {
    this.octokit = octokit;
    this.ownerId = ownerId;
    this.login = login;
  }

  /**
   * Gets a list of issues for the specified repository.
   * @async
   * @param {string} repo - The name of the repository to get issues for.
   * @param {string} [owner=config.defaultOwner] - The owner of the repository. Defaults to the DEFAULT_OWNER specified in the environment variables.
   * @returns {Promise<Issue[]>} An array of issues for the specified repository.
   * @throws {HttpException} If the list of issues cannot be retrieved.
   */
  async getIssuesForRepo(
    repo: string,
    owner: string = config().defaultOwner
  ): Promise<Issue[]> {
    const issues = await this.octokit
      .paginate(this.octokit.rest.issues.listForRepo, {
        owner,
        repo,
        per_page: 100,
      })
      .catch((error) => {
        throw new Error(
          `Could not get issues for ${owner}/${repo}, error: ${error.message}`
        );
      });

    return issues;
  }

  /**
   * Gets a list of milestones for the specified repository.
   * @async
   * @param {string} repo - The name of the repository to get issues for.
   * @param {string} [owner=config.defaultOwner] - The owner of the repository. Defaults to the DEFAULT_OWNER specified in the environment variables.
   * @returns {Promise<Milestone[]>} An array of milestones for the specified repository.
   * @throws {HttpException} If the list of milestones cannot be retrieved.
   */
  async getMilestonesForRepo(
    repo: string,
    owner: string = config().defaultOwner
  ): Promise<Milestone[]> {
    const milestones = await this.octokit
      .paginate(this.octokit.rest.issues.listMilestones, {
        owner,
        repo,
        state: "all",
        per_page: 100,
      })
      .catch((error) => {
        throw new Error(
          `Could not get milestones for ${owner}/${repo}, error: ${error.message}`
        );
      });
    return milestones;
  }

  /**
   * Creates a default repository with the specified name.
   * @async
   * @function
   * @name createDefaultRepo
   * @memberof GithubService
   * @param {string} [repoName=this.configService.get("defaultRepo")] - The name of the repository to create. Defaults to the default repository specified in the config.
   * @returns {string} The created repository's node_id.
   * @throws {Error} If the repository cannot be created.
   */
  async createDefaultRepo(
    repoName: string = config().defaultRepo
  ): Promise<string> {
    const { data } = await this.octokit.rest.repos
      .createForAuthenticatedUser({
        name: repoName,
        has_issues: true,
        private: false,
        has_projects: true,
      })
      .catch((error) => {
        throw new Error(
          `Could not create ${repoName}, error: ${error.message}`
        );
      });

    this.repositoryId = data.node_id;

    // remove all labels (these are the default labels)
    for (const label of GITHUB_DEFAULT_LABELS) {
      await this.octokit.rest.issues
        .deleteLabel({
          owner: this.login,
          repo: repoName,
          name: label,
        })
        .catch((error) => {
          // non-fatal error, but still log
          console.error(error);
        });
    }

    return data.node_id;
  }

  /**
  Creates a repository with the specified name or gets the existing one.
  * @async
  * @function
  * @name createOrGetDefaultRepo
  * @memberof GithubService
  * @param {string} [repoName=this.configService.get("defaultRepo")] - The name of the repository to create. Defaults to the DEFAULT_REPO specified in the environment variables.
  * @returns {Promise<string>} The created repository's node_id or the existing one's node_id if found.
  * @throws {Error} If the repository cannot be created.
  */
  async createOrGetDefaultRepo(
    repoName: string = config().defaultRepo
  ): Promise<string> {
    const foundRepo = await this.octokit.rest.repos
      .get({
        owner: this.login,
        repo: repoName,
      })
      .catch((error) => {
        if (error.status !== 404) {
          throw new Error(`Could not get ${repoName}, error: ${error.message}`);
        }
      });

    if (!foundRepo) {
      const res = await this.createDefaultRepo(repoName);
      return res;
    }

    this.repositoryId = foundRepo.data.node_id;
    return foundRepo.data.node_id;
  }

  async upsertMilestones(sourceRepoName: string): Promise<boolean> {
    // get milestones for user
    const userMilestones = await this.getMilestonesForRepo(
      config().defaultRepo,
      this.login
    ).catch((error) => {
      throw new Error(
        `Could not get milestones for ${this.login}/${
          config().defaultRepo
        }, error: ${error.message}`
      );
    });

    // create hash map of milestones
    // because id is not guaranteed to be the same for everyone
    userMilestones.forEach((milestone) => {
      if (milestone?.title) {
        this.milestoneMap[milestone.title] = milestone.number;
      }
    });

    const newMilestones: Milestone[] = [];

    // create labels and milestones that don't exist
    const repoMilestones = await this.getMilestonesForRepo(
      sourceRepoName
    ).catch((error) => {
      throw new Error(
        `Could not get milestones for ${this.login}/${sourceRepoName}, error: ${error.message}`
      );
    });

    repoMilestones.forEach((milestone) => {
      if (milestone?.title) {
        if (!this.milestoneMap[milestone.title]) {
          newMilestones.push(milestone);
        }
      }
    });

    const uniques = _.uniqWith<Milestone>(newMilestones, _.isEqual);

    const promises = uniques.map((milestone) => {
      if (!milestone || !milestone.title) {
        return;
      }
      return this.octokit.rest.issues
        .createMilestone({
          owner: this.login,
          repo: config().defaultRepo,
          title: milestone.title as string,
          description: milestone.description as string,
          state: "open",
          due_on: milestone.due_on || undefined,
        })
        .then((res) => {
          this.milestoneMap[milestone.title] = res.data.number;
        })
        .catch((error) => {
          throw new Error(
            `Could not create milestone ${milestone.title}, error: ${error.message}`
          );
        });
    });

    await Promise.all(promises);
    return true;
  }

  async setupDefaultProject(): Promise<string> {
    const {
      user: {
        projectsV2: {
          nodes: [project],
        },
      },
    } = await this.octokit
      .graphql<GraphQlQueryResponseData>(getUserProjectsV2Query, {
        login: this.login,
      })
      .catch((error) => {
        throw new Error(
          `Could not get projects for ${this.login}, error: ${error.message}`
        );
      });

    if (!project?.id) {
      throw new Error(
        "No project found that matches 'coursework planner' query, please clone the project template provided. See <a href='https://curriculum.codeyourfuture.io/fundamentals/prep/' target='_blank'>here</a> for more information."
      );
    }

    if (!project.repositories.nodes.length) {
      // add default repo to project
      await this.octokit
        .graphql(linkProjectV2RepositoryMutation, {
          projectId: project.id,
          repositoryId: this.repositoryId,
        })
        .catch((error) => {
          throw new Error(
            `Could not link project ${project.id} to repository ${this.repositoryId}, error: ${error.message}`
          );
        });
    } else {
      // set repoId from project
      this.repositoryId = project.repositories.nodes[0].id;
    }

    // make project public
    if (!project.public) {
      await this.octokit
        .graphql(makeProjectPublicMutation, {
          projectId: project.id,
        })
        .catch((error) => {
          throw new Error(
            `Could not make project ${project.id} public, error: ${error.message}`
          );
        });
    }

    this.projectId = project.id;

    return project.id;
  }

  async initialSetup(): Promise<string> {
    await this.createOrGetDefaultRepo();

    await this.setupDefaultProject();

    return "OK";
  }

  async createIssue(issue: Issue, res: CloneResponse) {
    const createIssueRes = await this.octokit.rest.issues
      .create({
        owner: this.login,
        assignees: [this.login],
        repo: config().defaultRepo,
        title: issue.title,
        body: issue.body || "",
        milestones: issue.milestone
          ? [this.milestoneMap[issue.milestone.title]]
          : [],
        labels: issue.labels,
      })
      .catch((error) => {
        res.failed++;
        console.error(error, "GithubService:createIssue");
      });

    if (createIssueRes && this.projectId) {
      await this.octokit
        .graphql<GraphQlQueryResponseData>(addProjectV2ItemByIdMutation, {
          projectId: this.projectId,
          contentId: createIssueRes.data.node_id,
        })
        .catch((error) => {
          console.error(error, "GithubService:createIssue");
        });
    }

    return createIssueRes;
  }

  async cloneAllIssues(
    sourceRepoName: string,
    sprint: string | undefined,
    allowDuplicates: boolean = false
  ): Promise<CloneResponse> {
    const issues = await this.getIssuesForRepo(sourceRepoName).catch(
      (error) => {
        throw new Error(
          `Could not get issues for ${sourceRepoName}, error: ${error.message}`
        );
      }
    );

    if (!issues || issues.length === 0) {
      throw new Error(`No issues found for ${sourceRepoName}`);
    }

    await this.initialSetup();

    await this.upsertMilestones(sourceRepoName);

    // get all issues from user's repo to check for duplicates
    const userIssueMap: { [key: string]: boolean } = {};
    if (!allowDuplicates) {
      const userIssues = await this.getIssuesForRepo(
        config().defaultRepo,
        this.login
      ).catch((error) => {
        throw new Error(
          `Could not get issues for ${this.login}/${
            config().defaultRepo
          }, error: ${error.message}`
        );
      });

      userIssues.forEach((issue) => {
        if (issue?.title) {
          userIssueMap[issue.title] = true;
        }
      });
    }

    const res = new CloneResponse(issues.length);
    const promises = issues.map((issue) => {
      // skip if issue is not in sprint
      if (
        sprint &&
        issue.labels.findIndex((l) => {
          if (typeof l === "string") {
            return l.toLowerCase().includes(sprint.toLowerCase());
          }
          return l.name?.toLowerCase().includes(sprint.toLowerCase());
        }) === -1
      ) {
        res.skipped++;
        return;
      }

      if (!issue.body || userIssueMap[issue.title]) {
        res.skipped++;
        return;
      }

      return this.createIssue(issue, res);
    });

    await Promise.all(promises);

    return res;
  }

  async cloneIssue(
    sourceRepoName: string,
    issueNumber: number,
  ): Promise<CloneResponse> {
    const { data } = await this.octokit.rest.issues
      .get({
        owner: config().defaultOwner,
        repo: sourceRepoName,
        issue_number: issueNumber,
      })
      .catch((error) => {
        console.error(error, "GithubService:cloneSingleIssue");
        throw new Error(
          `Could not get issue ${issueNumber} for ${sourceRepoName}, error: ${error.message}`
        );
      });

    await this.initialSetup();

    await this.upsertMilestones(sourceRepoName);

    const res = new CloneResponse(1);

    await this.createIssue(data, res);
    return res;
  }
}

export const githubServiceBuilder = async (
  token: string
): Promise<GithubService> => {
  const userOctokit = new Octokit({
    auth: token,
  });

  // get authenticated user to get login and node_id
  const { data } = await userOctokit.rest.users.getAuthenticated();

  return new GithubService(userOctokit, data.node_id, data.login);
};
