+++
title = 'Using a Testing Library'
time = 20
[objectives]
    1='Explain why we need to use testing libraries'
    2='Explain the difference between `dependencies` and `devDependencies`'
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

Last sprint we wrote our first unit tests using the assertion libraries built in to Node. They did the job for us, but they can't do everything. There will be times when we need to bring in specialised tools to help.

In this section we will look at how we can test our code using a **testing framework**. We're going to use Jest, which is one of the most popular JavaScript testing frameworks. We can find out more about Jest from the [documentation](https://jestjs.io/docs/getting-started). We're going to recreate the tests we wrote last sprint using Jest and see how it compare to using `node:test`.

### Installing Jest

Before we can start using Jest we need a fresh directory to work in.

- Create a new directory called `testing-with-jest`. Make you are **outside** the `packages-practice` directory.
- Copy the `timeConverter.js` file from the last sprint into this directory.
- Create a new file called `timeConverter.test.js`
- Import `formatAs12HourClock()` into the test file

We're going to install Jest using npm. First we need to use `npm init -y` to create `package.json` like before, then we install Jest. There's going to be a slight difference this time though:

```sh {title="username/cyf-work/time-conversion"}
npm init -y
npm install --save-dev jest
```

This time we have included the `--save-dev` flag with the install command. Let's see what that changed in `package.json`:

```json {title="package.json"}
{
  // ...
  "devDependencies": {
    "jest": "^30.5.0"
  }
}
```

This time we have a `devDependencies` key instead of `dependencies`. There won't be a difference in terms of how we use the packages while we are writing code, but the two are handled differently when the time comes to deploy our code. Certain dependencies support core parts of our program, such as checking if a number is odd in the [previous example](itp/testing/sprints/2/prep/#using-a-package). Others are only useful while we are still developing. Testing falls into the second category: our end users won't need to run the tests when they have the finished app in front of them. Those dependencies are marked as `devDependencies`. 

### Version numbers

Every dependency we install has an associated version number. In this example we have installed version `30.5.0` of Jest. If a new version of a package is released these digits will change and npmjs has an[article explaining what each digit represents](https://docs.npmjs.com/about-semantic-versioning). It's important to keep a record of which version of a package we have used in development.

That applies to our packages' dependencies too, which is where the `package-lock.json` file comes in. This keeps track of the version numbers of _every_ dependency in our tree so we can exactly recreate the structure of our program later, even if something in the middle of the tree receives an update.
