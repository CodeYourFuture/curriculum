+++
title = 'First test case'

time = 40
[objectives]
    1='Export a function from a file'
    2='Implement a test case to describe the behaviour of a function'
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

It's time to write our first test! We're going to start off by checking something we know already works: `formatAs12HourClock("23:00")`.

{{<note type="caution" title="Testing in practice">}}
We wouldn't usually test our code by writing the tests _after_ we have written the code. We're doing it here so that we're only covering one new concept at a time, but in practice it can lead to us writing tests which just tell us what we want to hear.

Instead developers aim to write the tests first according to the product specification, then write the code to make the tests pass. This is called **test-driven development** and we'll look at it in the next sprint.
{{</note>}}

We're going to need a file to write our tests in. Create a new file called `timeConverter.test.js`.

{{<note type="tip" title="Directory structure">}}
As your projects get bigger you will likely want to separate your testing files into a separate `testing` directory to keep things organised
{{</note>}}

We need to access our function from our test file which means we'll need to `import` it, but before we can do that we need to make it accessible using `export`. Add the following line to the bottom of `timeConverter.js`:

```js {title="timeConverter.js"}
// ...
export {formatAs12HourClock};
```

Now we can import it at the top of our test file:

```js {title="timeConverter.test.js"}
import {formatAs12HourClock} from "./timeConverter";
```

### Defining a test

We're going to use Jest's `test()` function to define our test. Jest is a little different from other packages in that we don't need to import the functions to be able to use them.

Every time we use `test()` we need to pass it two arguments:
- A string describing what we're testing
- A function where we will call the function we are testing and define the expected outcome

Passing a function into another function like this may look strange but is a very common pattern in JavaScript. We will look at it in more detail in a future module.

We'll start by providing the string and an empty function.

```js {title="timeConverter.test.js"}
import {formatAs12HourClock} from "./timeConverter";

test("correctly convert time after 12:00", function(){
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

If we try to run `timeConverter.test.js` using Node we'll get an error. That's because Jest isn't designed to be run in teh same way as a typical program, we'll need to use npm to help us out.

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