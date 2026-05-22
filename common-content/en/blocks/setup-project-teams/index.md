+++
title="Setup project teams"
time=60
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

This is a project you will build in a team. First form your team, then start the project by forking the repo.

### 1. Form your team

1. Split into teams of 3 or 4. Use a [random team generator](https://www.randomlists.com/team-generator).
1. Get together with your team during class day and agree on your way of working for this project.

### 2. Agree your [Way of working](https://www.atlassian.com/practices)

#### This is the most successful strategy

- [ ] Create a temporary Slack channel for your team. Use this channel and your class time for communication about the project management and the product development.
- [ ] Each team member must understand the requirements of a ticket before moving it from the Backlog to Ready. Make use of your class time to discuss the tickets as a team.
- [ ] Decide whether you are going to work on tickets individually or as a pair. You may work faster on your own but may learn more as a pair.
- [ ] Each feature must be reviewed by another member of your team . Set a branch protection rule on your main branch to enforce this.
- [ ] Each team member can pick up a new ticket only when their old ticket is in review. **Work on one thing at a time.**

### 3. Set up the repo

1. One person should fork the project repo to their own GitHub account.
2. Add the other team members as collaborators to the repo.
3. Now someone else should make a copy of the example planner and link it to your project repo.
4. All the tickets for your project are created as issues in this repo. Batch clone the tickets into your project planner.

#### On your [branch protection settings](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/managing-a-branch-protection-rule#creating-a-branch-protection-rule):

`Require a pull request before merging`. When this is enabled, all commits must be made to a non-protected branch and submitted via a pull request before they can be merged into a branch that matches this rule.

`Require approvals: 1`. When this is enabled, pull requests targeting a matching branch require a number of approvals and no changes requested before they can be merged.
