+++
title = 'Learning GitHub Actions Basics'

time = 20
[objectives]
    1='Describe GitHub Actions workflows, jobs, steps, and actions.'
    2='Set up a basic CI/CD pipeline using GitHub Actions in a GitHub repository'
    3='Write a YAML file that specifies the actions to be taken when code is pushed to the repository'
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

### What are GitHub Actions?

GitHub Actions is an automation framework that runs in your GitHub repository. It can build, test, and deploy your code right from GitHub.

#### Key Components

1. **Workflows**: Orchestrates your CI/CD process.
1. **Jobs**: Sets of steps that execute sequentially.
1. **Steps**: Individual tasks within a job.
1. **Actions**: Pre-built steps that you can use in your jobs.

{{<note type="activity" title="Review a GitHub action">}}

Github Actions have been present in the course, now we are going to take a look at them and review them.

You may have opened a PR for this repo. Find your pull request and read the Github Action workflow. Go to <https://github.com/CodeYourFuture/JavaScript-Core-1-Coursework-Week1> to find your Pull Request or go directly to the Actions <https://github.com/CodeYourFuture/JavaScript-Core-1-Coursework-Week1/actions> to find your workflow run.

If you haven't opened a PR to this repo, find the one by [NAME]

{{</note>}}

## Setting up a Simple Workflow

To set up a simple GitHub Actions workflow, navigate to your GitHub repository and then to the Actions tab. From there, you can create a new workflow.

Here's a basic example:

```yaml
name: CI

on: [push]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v3
```

This YAML file specifies a single job called build that runs on an ubuntu-latest runner machine. The job has a single step that uses actions/checkout@v3 to download the code from the GitHub repository.

For more information on Github Actions Syntax refer to their documentation: <https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions>
