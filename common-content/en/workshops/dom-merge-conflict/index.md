# DOM Merge Conflicts

This workshop contains a collection of DOM components. For this workshop, you will be creating branches for refactoring and updating the components and then resolving the merge conflicts that arise. You'll be working in pairs, learning how to handle branching, refactoring, and creating pull requests.

## Overview

- **Objective**: Learn to resolve merge conflicts that arise during software development
- **Activity**: Update and refactor DOM components in two different Git branches
- **Duration**: 1 hour

## Learning Objectives

- Describe how merge conflicts can occur in a development setting
- Interpret a merge conflict message
- Resolve a merge conflict while preserving changes to the code

## Prerequisites

- JS DOM syntax
- Access to documentation
- Some knowledge of how to run tests using Jest

## Setup

- Get into pairs
- Before starting, ensure you create a fork of the [workshop code repository on Github](https://github.com/Ara225/workshop-code) to use as a pair. Each person in the pair must clone down the fork of this repository from Github and navigate to the project directory

## Instructions

### 1. Start Branching from `main`

Each pair will need to branch off from `main`. Firstly, make sure you both start on the main branch and it's up to date:

```
git switch main
git pull origin main
```

### 2. Choose a task

As a pair, choose one task from the the `dom-merge-conflict/tasks` folder in the [workshop code repository on Github](https://github.com/Ara225/workshop-code) that you will both follow.

### 3. Follow the task instructions until the end

Choose who will be Person 1 and who will be Person 2 and then follow the instructions in your task's directory.
Once finished, continue the instructions on this page.

Some tasks will ask you to unskip tests, remove the skip before from the appropriate describe block in this case.

### 4. Test your changes

Use the provided test suite to ensure your app works correctly. Run the tests according to the task's testing instructions.

### 5. Raise a pull request

Once you have tested your changes and are satisfied with the changes, commit your changes and push your branch to the remote repository:

```
git add <files-you-changed>
git commit -m "<description of change>"
git push origin [your-branch-name]
```

You should raise a pull request on your pair's fork of this repository.

### 6. Handling merge conflicts

Once you have both raised your pull requests, choose one Pull Request to review first and then merge it.

Now you will need to handle the second pull request. For this pull request, you should now have a [merge conflict](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts/about-merge-conflicts) in the remaining pull request.

On the branch to be merged run:

```
git pull origin main
```

So that you can resolve the changes locally using Git.

Use [this guide from GitHub to resolve the conflict using Git](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-using-the-command-line).

When you come to resolve the merge conflict, you need to make sure to keep the updates and refactors. Make sure to test that your app still works.

Once you've resolved the conflict, you should be ready to merge the second PR. Discuss with your partner whether the tasks assigned have been completed after both merges.
