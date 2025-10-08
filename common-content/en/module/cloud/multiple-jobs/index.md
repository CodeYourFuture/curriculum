+++
title = 'Creating a Workflow with Multiple Jobs'

time = 15
[objectives]
    1='Implement a multi-job workflow where jobs run sequentially, based on dependencies and requirements'
    2='Use the needs keyword to specify job dependencies'
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

In a real-world scenario, you often need multiple jobs to run different tasks in parallel or sequentially to speed up the process or manage dependencies. In this section, you'll learn how to set up a workflow with multiple jobs.

#### Example: npm test and Deployment

Here's an example YAML configuration file for a GitHub Actions workflow that has two jobs: one for running tests and another for deployment.

```yaml
name: CI/CD Pipeline

on: [push]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v3
      - name: Install Dependencies
        run: npm install
      - name: Run tests
        run: npm test

  deploy:
    needs: test
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v3
      - name: Deploy
        run: npm deploy
```

### Understanding the Workflow

1. **jobs**: Contains two job blocks: test and deploy.
1. **runs-on**: Specifies the type of runner that the job will run on.
1. **steps**: The sequence of tasks that will be executed in each job.
1. **needs**: This key in the deploy job specifies that it needs the test job to complete successfully before it starts.

By defining both jobs in the same YAML file, GitHub Actions will know to run them as part of the same workflow. The `needs` keyword ensures that the deploy job will only run if the test job completes successfully. We add a layer of protection against bugs making their way into production.

And that's how you set up a GitHub Actions workflow with multiple jobs. This allows you to make your CI/CD process more robust and maintainable.

{{<note type="activity" title="Sequence your jobs">}}

In your working repo, add your deploy stage to your test stage.

{{</note>}}
