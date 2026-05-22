+++
title = 'First test case'

time = 40
[objectives]
    1='Outline the effect of running npm test'
    2='Interpret documentation to determine how part of a third-party API behaves'
    3='Describe what toEqual checks in the Jest library'
    4='State the current return value of a function and the target output for a given test'
    5='Implement a test case to describe the behaviour of a function'

[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

> 🎯 Goal: Write a test for the case below, using Jest:

#### Case 1 💼

Our first case is that the ordinal number for `1` should equal `"1st"`.

We can create a file called `get-ordinal-number.test.js` and write our first test there.
We can use [documentation](https://jestjs.io/docs/getting-started) to work out how to write our first test using Jest.

`get-ordinal-number.test.js`:

```js
test("converts 1 to an ordinal number", function () {});
```

Let's break down this syntax.

The `test` function is part of the Jest API, a function we use to perform a particular task.
In particular, we're using `test` to create a test case.
Before, we could use `Math.round` and `console.log` because `Math` and `console` are provided for us by Node.

`test` isn't provided by Node, but when we ask Jest to run our tests, it will make sure the `test` function exists and that our code can use it.

Let's break down the arguments we're passing to `test`:

- 1st argument: `"converts 1 to an ordinal number"`, a string which describes the behaviour we're testing for
- 2nd argument: `function() {}`, we will write some assertions in this `function() {}` to check the behaviour

### ⚖️ Creating assertions

We need to write an **assertion** inside the body of `function() {}` inside `get-ordinal-number.test.js`

`get-ordinal-number.test.js`:

```js
test("converts 1 to an ordinal number", function () {});
```

{{<note type="tip" title="Recall">}}
The assertion is the part of the test code that checks if a particular thing is true or not.
{{</note>}}

In this example, we want to check that the following is true:

We expect `getOrdinalNumber(1)` to be `"1st"`

An assertion in Jest looks like this:

```js
expect(currentOutput).toEqual(targetOutput);
```

The function `toEqual` is used to check that the current output of `getOrdinalNumber(1)` and the target output of `"1st"` are equal to each other.

`toEqual` is just one example of a function called a [matcher](https://jestjs.io/docs/using-matchers).
A matcher is a function we use to compare values in Jest.

So the whole test looks like this:

```js
test("converts 1 to an ordinal number", function () {
  expect(getOrdinalNumber(1)).toEqual("1st");
});
```

### 👟 Running tests

We can try running the file `get-ordinal-number.test.js` with node in the following way:

```bash
node get-ordinal-number.test.js
```

but we get an error:

```bash
ReferenceError: test is not defined
```

Googling "ReferenceError JavaScript", [MDN tells us this is because we're referring to a variable that doesn't exist](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError). This is because `test` isn’t defined anywhere in the file.

We need to execute this file so that the Jest API is available in our file. We can do this by running the test file using Jest: we do this using an npm script.

The "scripts" section of the `package.json` is where we can write useful commands we'll use in our project. We can add a "scripts" section to the `package.json` so that it reads as follows:

```json {linenos=table,hl_lines=["4-6"],linenostart=1}
{
  "name": "week-4-test-example",
  "description": "An example application showing how to write tests using the jest framework",
  "scripts": {
    "test": "jest"
  },
  "devDependencies": {
    "jest": "^29.5.0"
  }
}
```

Finally, we'll need to run our tests.
Now we can run the command `npm test`.

When we execute the command, `npm test`, we will run `npm`, and `npm` will look inside the "scripts" section of the `package.json` and look up the command for "test" - in this case, "jest". `npm` will then run "jest".

We can't ourselves just run `jest` on the command line, because it isn't installed in a place our terminal knows about. But when `npm` runs a script, it will make sure all dependencies installed for the project are available.
