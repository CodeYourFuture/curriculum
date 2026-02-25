+++
title = 'Writing an assertion'

time = 45
[objectives]
1='Describe the difference between console.log and console.assert'
2='Write an assertion to check for some behaviour of a given function'
3='Implement a piece of functionality specified in an assertion'
4='Given an assertion and a function declaration, identify and explain whether the assertion will succeed or fail'
5 ='Write an assertion for a function that implements a solution to a given problem'
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

{{<tabs name="Predict, explain, check">}}

===[[Define assertion]]===

We now have 2 new concepts: **booleans** and **comparisons**. From these concepts, we can now write an assertion about the function `formatAs12HourClock`.

> 🔑 An assertion is a _check_ that our code behaves in a particular way: this check can either succeed or fail.

So far we've used the log function `console.log`. We can write assertions using another function: [`console.assert`](https://developer.mozilla.org/en-US/docs/Web/API/console/assert). The documentation says that `console.assert` writes an error message to the console if the assertion is false. If the assertion is true, nothing happens. As `10 + 32 === 42` evaluates to true, no message will be written to the console.

```js
const calculation = 10 + 32;
const result = 42;
console.assert(calculation === result);
```

🎮 [Work through the exercises](#predict-explain-check-1)

===[[Exercise 1]]===

### Experiment with assertions

```js
const calculation = 10 + 32;
const result = 42;
console.assert(calculation === result);
```

Change the value assigned to the `result` variable to make the assertion fail. Check the output you get in the console.

👉🏿 [Keep Going](#predict-explain-check-2)
===[[Exercise 2]]===

Let's look at an example using `formatAs12HourClock`:

```js
function formatAs12HourClock() {}
console.assert(formatAs12HourClock("08:00") === "08:00 am");
```

Predict and explain if the assertion will succeed or fail. Pay particular attention to the return value of `formatAs12HourClock`.

{{</tabs>}}

### Clarity with arguments

It would be useful to have more information as to why this assertion failed. We can pass an additional argument to `console.assert`:

```js
function formatAs12HourClock() {}

console.assert(
  formatAs12HourClock("08:00") === "08:00 am",
  `current output: ${formatAs12HourClock("08:00")}, target output: 08:00 am`
);
```

Let's break down these arguments to make sense of what's going on:

1. **first argument** - `formatAs12HourClock("08:00") === "08:00 am"` - the condition we're checking
2. **second argument** - `` `current output: ${formatAs12HourClock("08:00")}, target output: 08:00 am` `` - a message string that will be logged to the console if the condition is false.

#### 🧹 Refactor

We can tidy up the assertion even further. As we’re reusing the same expressions, we can store their result in variables with meaningful names so we can reuse them:

```js {linenos=table,linenostart=1}
function formatAs12HourClock() {}

const currentOutput = formatAs12HourClock("08:00");
const targetOutput = "08:00 am";
console.assert(
  currentOutput === targetOutput,
  `current output: ${currentOutput}, target output: ${targetOutput}`
);
```

Execute this code; we now get a log in the console:

```bash
Assertion failed: current output: undefined, target output: 08:00 am
```

## 🧰 Implementing the functionality

On line 3, the function is being passed a single argument `"08:00"`. But our function ignores it: it doesn't declare any parameters. We can parameterise the function and label the input as `time`:

```js
function formatAs12HourClock(time) {}
```

According to our assertion, when we call our function with an input of `"08:00"` we need to create an output of `"08:00 am"`. If we add `"am"` to the `time`, we'll get the target output. We can update our function with a template literal, set the return value and then _re-run_ our code including our assertion to check the function is returning the correct value.

📓 We can and should continually check our assertions to see if our function’s current output meets our target output.

```js {linenos=table,linenostart=1}
function formatAs12HourClock(time) {
  return `${time} am`;
}

const currentOutput = formatAs12HourClock("08:00");
const targetOutput = "08:00 am";
console.assert(
  currentOutput === targetOutput,
  `current output: ${currentOutput}, target output: ${targetOutput}`
);
```

✅ Nothing is printed to the console, so this assertion is passing 😎

{{<note type="activity" title="Try yourself">}}
Create a javascript file on your local machine and execute the code above. Double check you are seeing the same output in your terminal.
{{</note>}}

## 💼 Checking different cases

So far we’ve only created assertions that check the function’s behaviour for times _between midnight and midday_. In these cases, there is a pattern: take the current time and add `" am"` to the end.

But this isn't the pattern we need to follow for _all_ times. To make sure our function works for all times, we need to write more assertions.

We need to assert that the function behaves correctly when the time is later than midday.

Before we think about any code, we should think about our problem. Separating _problem_ and _code_ lets us focus better. First we can focus on the data. Then we can focus on the code.

First, let's think of an example time in 24 hour clock - we'll pick `23:00`.

Next, let's work out what we expect our example time to be in 12 hour clock: `11:00 pm`.

Now that we've thought about the problem, we can write the code. Let's create an assertion for our function when passed an input of `"23:00"`:

```js {linenos=table,linenostart=1}
function formatAs12HourClock(time) {
  return `${time} am`;
}

const currentOutput = formatAs12HourClock("08:00");
const targetOutput = "08:00 am";
console.assert(
  currentOutput === targetOutput,
  `current output: ${currentOutput}, target output: ${targetOutput}`
);

const currentOutput = formatAs12HourClock("23:00");
const targetOutput = "11:00 pm";
console.assert(
  currentOutput === targetOutput,
  `current output: ${currentOutput}, target output: ${targetOutput}`
);
```

Save this code to a file. Before you run it in Node, write down what you think will happen. Then run it with Node - compare what you saw with what you predicted.
