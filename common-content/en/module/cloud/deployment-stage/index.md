+++
title = 'Adding Deployment Stages'

time = 5
[objectives]
    1='Integrate deployment scripts into the GitHub Actions workflow'
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

Once your code has been built and tested, you can deploy it automatically using GitHub Actions.

Here's a simplified example:

```yaml
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Deploy
        run: npm deploy
```

In this example, we use a custom command script for deploy. In your package.json you will have a section for scripts:

```json
  "scripts": {
    "deploy": "echo this is a deploy",
  }
```
