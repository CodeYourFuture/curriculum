+++
title = 'Installing Jest'
time = 20
[objectives]
    1='Explain the difference between `dependencies` and `devDependencies`'
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

We will test our code using a **testing framework** and there are lots to choose from. We're going to use Jest, which is one of the most popular JavaScript testing frameworks. We can find out more about Jest from the [documentation](https://jestjs.io/docs/getting-started).

### Installing Jest

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

This time we have a `devDependencies` key instead of `dependencies`. There won't be a difference in terms of how we use the packages while we are writing code, but the two are handled differently when the time comes to deploy our code. Certain dependencies support core parts of our program, such as checking if a number is odd in the [previous example](itp/testing/sprints/1/prep/#using-a-package). Others are only useful while we are still developing. Testing falls into the second category: our end users won't need to run the tests when they have the finished app in front of them. Those dependencies are marked as `devDependencies`. 

### Version numbers

Every dependency we install has an associated version number. In this example we have installed version `30.5.0` of Jest. If a new version of a package is released these digits will change and npmjs has an[article explaining what each digit represents](https://docs.npmjs.com/about-semantic-versioning). It's important to keep a record of which version of a package we have used in development.

That applies to our packages' dependencies too, which is where the `package-lock.json` file comes in. This keeps track of the version numbers of _every_ dependency in our tree so we can exactly recreate the structure of our program later, even if something in the middle of the tree receives an update.
