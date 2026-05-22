+++
title = 'Environment Variables'

time = 20
[objectives]
    1='Automate the deployment process to a specified environment.'
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

In any development workflow, especially one that involves deployments, it's common to have configuration settings that should not be hard-coded in the codebase. This includes API keys, database URLs, and other sensitive information. GitHub Actions allows the use of environment variables and secrets to manage these configurations securely.

#### Github Environment Variables

Environment variables are key-value pairs that you can create and modify as part of your workflow. They can be accessed in your GitHub Actions YAML file via env context. For example, to set a Node.js environment, you can do:

```yaml
jobs:
  build:
    runs-on: ubuntu-latest
    env:
      NODE_ENV: production
```

And then use it in a script like this:

```yaml
- name: Using Environment Variable
  run: echo Node environment is ${{ env.NODE_ENV }}
```

{{<note type="activity" title="Try it yourself">}}

1. Create an `.env` file in the root of your working repo
1. ETC TODO

{{</note>}}
