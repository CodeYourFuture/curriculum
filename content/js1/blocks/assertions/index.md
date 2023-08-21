+++
title = '✏️ Writing an assertion'
headless = true
time = 30
facilitation = false
emoji= '🧩'
[objectives]
1='Describe the difference between `console.log` and `console.assert`'
2 = 'Write an assertion to check for some behaviour of a given function'
3='Implement a piece of functionality specified in an assertion'
4='Given an assertion and a function declaration, identify and explain whether the assertion will pass or fail'
5 ='Write an assertion for a function that implements a solution to a given problem'
+++

We now have 2 new concepts: **booleans** and **comparisons**. From these concepts, we can now write an assertion about the function `formatAs12HourClock`.

> 🔑 An assertion is a _check_ that our code behaves in a particular way: this check can either succeed or fail.

Up to now we've used the log function `console.log`.
However, we can also write assertions using another function: [`console.assert`](https://developer.mozilla.org/en-US/docs/Web/API/console/assert). Let's look at an example using this function:

```js
function formatAs12HourClock() {}
console.assert(formatAs12HourClock("08:00") === "20:00");
```

The documentation for `console.assert` states that a message will be written to the console if a condition is `false`.

{{<note type="exercise" title="Exercise 2.1">}}

Predict and explain if the assertion above will succeed or fail. Pay particular attention to the return value of `formatAs12HourClock` above.

{{</note>}}

It would be useful to have more information as to why this assertion failed.
We can pass additional arguments to `console.assert`:

```js
function formatAs12HourClock() {}

console.assert(
  formatAs12HourClock("08:00") === "08:00 am",
  "current function output: %s, target output: %s",
  formatAs12HourClock("08:00"),
  "08:00 am"
);
```

Let's break down these arguments to make sense of what's going on:

1. first argument - `formatAs12HourClock("08:00") === "08:00 am"` - the condition we're checking

2. second argument - `"current function output: %s, target output: %s"` - a message string that will be logged to the console if the condition is false.

3. third argument - `formatAs12HourClock("08:00")` - this value will get substituted into the message string at the first "%s"

4. 4th argument - `"20:00"` - this value will get substituted into the message string at the second "%s"

We can tidy up the assertion even further. As we’re repeating the same expressions, we can store their result in variables with meaningful names so we can reuse them:

```js {linenos=table,linenostart=1}
function formatAs12HourClock() {}

const currentOutput = formatAs12HourClock("08:00");
const targetOutput = "08:00 am";
console.assert(
  currentOutput === targetOutput,
  "current output: %s, target output: %s",
  currentOutput,
  targetOutput
);
```

When the code above executes, we now get a log in the console:

```bash
Assertion failed: current output: undefined, target output: 08:00 am
```

## 🧰 Implementing the functionality

On line 4, the function is being passed a single argument `"08:00"`. But our function ignores it - it doesn't declare any parameters. We can parametrise the function and label the input as `time`:

```js
function formatAs12HourClock(time) {}
```

According to our assertion when we call our function with an input of `"08:00"` we need to create an output of `"08:00 am"`.

So we can add `"am"` to the `time` to get the target output.
We can update our function to make use of a template literal, set the return value and then _re-run_ our code including our assertion to check the function is returning the correct value.

📓 We can and should continually check our assertions to see if our function’s current output meets our target output.

So we have the following:

```js {linenos=table,linenostart=1}
function formatAs12HourClock(time) {
  return `${time} am`;
}

const currentOutput = formatAs12HourClock("08:00");
const targetOutput = "08:00 am";
console.assert(
  currentOutput === targetOutput,
  "current output: %s, target output: %s",
  currentOutput,
  targetOutput
);
```

✅ Nothing is printed to the console, so this assertion is passing 😎

## 💼 Checking different cases

So far we’ve only created assertions that check the function’s behaviour for times _after midnight and before midday_. In these cases, there is a clear pattern: take the current time and add `"am"` to the end.

However, we need to assert that the function behaves correctly when the time is later than midday. Let’s create an assertion for our function when passed an input of `"23:00"`:

```js {linenos=table,linenostart=1,hl_lines=["15-21"]}
function formatAs12HourClock(time) {
  return `${time} am`;
}

const currentOutput = formatAs12HourClock("08:00");
const targetOutput = "08:00 am";
console.assert(
  currentOutput === targetOutput,
  "current output: %s, target output: %s",
  currentOutput,
  targetOutput
);

const currentOutput = formatAs12HourClock("23:00");
const targetOutput = "11:00 pm";
console.assert(
  currentOutput === targetOutput,
  "current output: %s, target output: %s",
  currentOutput,
  targetOutput
);
```

## 🔄 Reusing variable names

When we run the file with Node, we get an error in the console:

```bash
SyntaxError: Identifier 'currentOutput' has already been declared
```

In this case, identifier means name of a variable, so in a variable declaration like

```js
const currentOutput = formatAs12HourClock("08:23");
```

`currentOutput` is the **identifier**.

When an error is thrown, it means the execution of the program stops at this point and an error report is sent to the user.
However, we want to do multiple assertions.

```js title="problem.js"
function formatAs12HourClock(time) {
  return `${time} am`;
}

const currentOutput = formatAs12HourClock("08:00");
const targetOutput = "08:00 am";
console.assert(
  currentOutput === targetOutput,
  "current output: %s, target output: %s",
  currentOutput,
  targetOutput
);

// ❌ this assertion now fails
const currentOutput2 = formatAs12HourClock("23:00");
const targetOutput2 = "11:00 pm";
console.assert(
  currentOutput === targetOutput,
  "current output: %s, target output: %s",
  currentOutput,
  targetOutput
);
```

Now the second assertion fails with the following message:

```bash
Assertion failed: current output: 23:00 am, target output: 11:00 pm
```

{{<note type="exercise" title="Exercise 2">}}

✏️ Write another assertion that checks `formatAs12HourClock` returns the target output when passed another _time input in the afternoon._

{{</note>}}
