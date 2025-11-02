+++
title = 'Adding Testing Stages'

time = 20
[objectives]
    1='Add a test stage to a GitHub action'
    2='Integrate existing test scripts to run automatically'
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

Testing is crucial in CI/CD pipelines. GitHub Actions can automatically run your tests every time someone pushes to your repository.

For example, if you're using Node.js and Jest for your tests:

```yaml
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
```

{{<note type="activity" title="Try it yourself">}}

In your own repo, which should contain a test suite, set up a testing stage.

{{</note>}}
