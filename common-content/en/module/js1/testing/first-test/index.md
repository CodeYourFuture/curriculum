+++
title = 'Writing Our First Test'

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
Now we can import it at the top of our test file using the `import` keyword:

```js {title="timeConverter.test.js"}
import {formatAs12HourClock} from "./timeConverter.js";
```

Now we can call the function from within `timeConverter.test.js`, even though it is defined somewhere else. We can `export` and `import` multiple functions at the same time by comma-separating them inside the braces.

### Testing tools

Node has some built-in tools which can help us with our testing. Using third-party tools like this is common practice for developers, otherwise we would need to write our own. By using industry-standard tools we give other developers confidence in our tests and in our code. In the next sprint we'll see some other examples.

We need to import two functions from Node into our test file: `test` and `assert`:

```js {title="timeConverter.test.js"}
import {formatAs12HourClock} from "./timeConverter.js";
import assert from "node:assert";
import test from "node:test";
```

Now we have access to everything we need to get started.


### Defining a test

We're going to use the `test()` function to define our test. Every time we use `test()` we need to pass it two arguments:
- A string describing what we're testing
- A function where we will call the function we are testing and define the expected outcome

Passing a function into another function like this may look strange but is a very common pattern in JavaScript. We will look at it in more detail in a future module.

We'll start by providing the string and an empty function.

```js {title="timeConverter.test.js"}
import {formatAs12HourClock} from "./timeConverter.js";
import assert from "node:assert";
import test from "node:test";

test("correctly convert time after 12:00", function(){
  // TODO
});
```

Inside the function we are going to use `assert` to compare two values:
- the _actual_ value returned when we call the function we are testing
- the _expected_ value we would see if everything is working correctly

```js {title="timeConverter.test.js"}
import {formatAs12HourClock} from "./timeConverter.js";
import assert from "node:assert";
import test from "node:test";

test("correctly convert time after 12:00", function(){
    assert.equal(formatAs12HourClock("23:00"), "11:00 pm");
});
```

When we run our test:
1. The value `"23:00"` will be passed to `formatAs12HourClock`
2. The code in the function will be executed and the returned value will be passed to `assert.equal()` as its first argument, representing the _actual_ value
3. The _actual_ value will be compared to the second argument, representing the _expected_ value
4. The test will **pass** if the two values match. If they don't it will **fail**.

Run the test from the terminal using `node timeConverter.test.js`. You should see the string we passed to `test()` printed in green with a check mark next to it, meaning our test passed! Success!