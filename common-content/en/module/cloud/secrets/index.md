+++
title = 'Secrets'

time = 10
[objectives]
    1='TODO'
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

Secrets are similar to environment variables. The difference is that secrets are encrypted and only exposed to selected actions, adding an extra layer of security. Use secrets for storing sensitive data like passwords and API keys.

You can add secrets via GitHub by navigating to your repository, then clicking on _Settings_ -> _Secrets_ -> _New Repository Secret_. Enter the secret's name and value, and it will be encrypted and stored securely.

To use a secret, use the secrets context in your YAML file like this:

```yaml
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Accessing secret
        run: echo Accessing secret ${{ secrets.MY_SECRET }}
```

Replace `MY_SECRET` with your actual secret's name, stored in the GitHub repository.

For more information about environment variable refer to their documentation: <https://docs.github.com/en/actions/learn-github-actions/variables> and for information about secrets refer to: <https://docs.github.com/en/actions/security-guides/using-secrets-in-github-actions>
