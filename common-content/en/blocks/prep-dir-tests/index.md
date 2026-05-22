+++
title = 'Creating test files'
time = 5
[objectives]
    1='Create files for the first problem'
    2="Open the first problem in your prep directory"
    3="Use the terminal to control VSCode"
[build]
  render = 'never'
  list = 'local'
  publishResources = false
+++

### 📄 Create files for the first problem

Find the first problem in your prep for this module and create the files you'll need to work on it.

1. In your `prep` directory, create a test file for the problem. For example, if the first problem is about calculating the mean, you would create a file called `mean.test.js`.
1. In your `prep` directory, create a matching file for the problem. For example, `mean.js`.

Do this in your VSCode terminal by running the following commands:

```bash
touch mean.test.js
touch mean.js
```

In the same directory, open your test file by running:

```bash
code mean.test.js
```

You'll be writing in a "test driven development" style. This means you will write a test for the problem first, then write the code to make the test pass.
