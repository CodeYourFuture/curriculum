+++
title = 'Testing with Jest'

time = 40
[objectives]
    1='Define test cases using Jest'
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

Let's revisit `formatAs12HourClock()` and test it using Jest.

### Defining a test

We're going to use Jest's `test()` function to define our test. Jest is a little different from other packages in that we don't need to import the functions to be able to use them.

Every time we use `test()` we need to pass it two arguments:
- A string describing what we're testing
- A function where we will call the function we are testing and define the expected outcome

We'll start by providing the string and an empty function.

```js {title="timeConverter.test.js"}
import {formatAs12HourClock} from "./timeConverter";

test("correctly convert time after 12:00", () => {
  // TODO
});
```

Inside the function we are going to use two more functions from Jest:
- `expect()` will be used to call the function we are testing and capture the _actual_ value returned
- `toEqual()` will be used to provide the _expected_ value

```js {title="timeConverter.test.js"}
import {formatAs12HourClock} from "./timeConverter";

test("correctly convert time after 12:00", function(){
  expect(formatAs12HourClock("23:00")).toEqual("11:00 pm");
});
```

When we run our test:
1. The value `"23:00"` will be passed to `formatAs12HourClock`
2. The code in the function will be executed and the returned value will be stored as the _actual_ value by `expect()`
3. The _actual_ value will be compared to the _expected_ value passed to `toEqual()`
4. The test will **pass** if the two values match. If they don't it will **fail**.


### Running the test

If we try to run `timeConverter.test.js` using Node we'll get an error. That's because Jest isn't designed to be run in the same way as a typical program, we'll need to use npm to help us out.

Take a look at `package.json` and you'll see a `scripts` property with a nested object as its value. We can define scripts which can execute larger processes when we type `npm run {scriptName}`. We already have a value defined for `test`:

```json {title="package.json"}
{
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  }
}
```

Try running it by typing `npm test` in the terminal and see what happens:

```console
npm test

Error: no test specified
```

This is a useful default, but now that we have a test we don't want to see an error message when we try to run it. Replace the string associated with `test` with the one shown below:

```json {title="package.json"}
{
  "scripts": {
    "test": "node --experimental-vm-modules ./node_modules/.bin/jest"
  }
}
```

Remember to also update the `type` value to `"module"`.

Now try running `npm test` again. This time the test should run successfully and log the results to the terminal. You should see the string you passed to `test()` copied there with a check mark beside it to indicate that the test passed. Success!

{{<note type="exercise" title="Exercise: More than just equality">}}
The `toEqual()` function is an example of a **matcher**. Using the [Jest documentation](https://jestjs.io/docs/using-matchers) read about some other matchers which are available and identify which one would be most appropriate to use in each of these tests:
1. Checking if a function returns a value above a given minimum
2. Adding two decimal numbers
3. A function's return value **isn't** `null`

<details>
<summary>Solutions:</summary>

1. `toBeGreaterThan()`
2. `toBeCloseTo()`
3. `not.toBeNull()`
  
</details>
{{</note>}}