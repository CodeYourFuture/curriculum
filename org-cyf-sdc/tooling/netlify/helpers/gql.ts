export const makeProjectPublicMutation: string = `
mutation makeProjectPublic($projectId: ID!) {
  updateProjectV2(input: {projectId: $projectId, public: true}) {
      projectV2 {
          id
      }
  }
}
`;

export const addProjectV2ItemByIdMutation = `
mutation AddProjectV2ItemById($projectId: ID!, $contentId: ID!) {
  addProjectV2ItemById(input: {projectId: $projectId, contentId: $contentId}) {
    clientMutationId
  }
}`;

export const getUserProjectsV2Query = `
query User($login: String!) {
  user(login: $login) {
      projectsV2(first: 10, query: "coursework planner") {
          nodes {
              id
              title
              public
              repositories(first: 10) {
                  nodes {
                      id
                      name
                  }
              }
          }
      }
  }
}`;

export const linkProjectV2RepositoryMutation = `
mutation linkProjectV2ToRepository($projectId: ID!, $repositoryId: ID!) {
  linkProjectV2ToRepository(input: {projectId: $projectId, repositoryId: $repositoryId}) {
    clientMutationId
  }
}
`;
