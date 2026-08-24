+++
title = "DOM Merge Conflicts"
time = 60
objectives = [
    "Describe how merge conflicts can occur in a development setting.",
    "Interpret a merge conflict message.",
    "Resolve a merge conflict while preserving changes to the code.",
]
[build]
  list = "local"
  publishResources = false
  render = "never"
+++

This workshop contains a collection of DOM components. For this workshop, you will be creating branches for refactoring and updating the components and then resolving the merge conflicts that arise. You'll be working in pairs, learning how to handle branching, refactoring, and creating pull requests.

## Overview

- **Objective**: Learn to resolve merge conflicts that arise during software development
- **Activity**: Update and refactor DOM components in two different Git branches
- **Duration**: 1 hour

## Prerequisites

- JS DOM syntax
- Access to documentation
- Some knowledge of how to run tests using Jest

## Setup

- Get into pairs
- To make it easier to follow instructions, you might want to decide who is Person A and who is Person B.
- Before starting, Person A should create a fork of the [workshop code repository on Github](https://github.com/CodeYourFuture/workshop-code) - you will use this as a pair.
- Person A should add Person B to the new fork as a collaborator.
- Each person in the pair must now clone down this fork of the repository from Github and navigate to the project directory on their own computer.

Once you have followed the steps above, one person in the pair will own the forked repository and both people will have a cloned copy of the repository on their own laptops.

## Instructions

### 1. Start Branching from `main`

Each pair will need to branch off from `main` when they begin the task. Firstly, make sure you both start on the main branch and it's up to date using the following instructions:

```
git switch main
git pull origin main
```

### 2. Complete the Buttons and Counter task

As a pair, work on the `dom-merge-conflict/buttons-and-counter` folder in the [workshop code repository on Github](https://github.com/CodeYourFuture/workshop-code) that you will both follow.

You will both work on this task at the same time on separate branches. The instructions in the repo explain this fully. There is one task for Person A and another for Person B.

### 3. Test your changes

Use the provided test suite to ensure your app works correctly. Run the tests according to the task's testing instructions.

### 4. Raise a pull request

Once you have tested your changes and are satisfied with the changes, commit your changes and push your branch to the remote repository:

```
git add <files-you-changed>
git commit -m "<description of change>"
git push origin [your-branch-name]
```

When you have both done this, there should be two branches on Person A's fork now, not including `main`.

Each of you should raise a pull request from your branch on Person A's fork of this repository.

### 5. Handling merge conflicts

Once you have both raised your pull requests on Person A's fork, as a pair, choose one Pull Request to review first and then merge it.

Once you've merged the first branch you will need to handle the second pull request. For this remaining pull request, you should now have a [merge conflict](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts/about-merge-conflicts).

In your pair, locally on one computer, on the branch that will be merged, run the following command:

```
git pull origin main
```

By pulling `main` into the branch, you're pulling in the updated merged changes from the first branch you merged. You should see merge conflicts locally now.

We're doing this locally so you can resolve the changes using Git.

Use [this guide from GitHub to resolve the conflict using Git](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-using-the-command-line).

When you come to resolve the merge conflict, you need to make sure to keep the updates and refactors. Make sure to test that your app still works.

Once you've resolved the conflict, you should be ready to merge the second PR. Discuss with your partner whether the tasks assigned have been completed after both merges.

_This is one way to solve merge conflicts, not the only way, you can also do this on GitHub. We're doing it locally so we know how that feels._
