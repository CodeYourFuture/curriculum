+++
title = '🔄 Reusing variable names'

time = 30
facilitation = false
emoji= '🔄'
[objectives]
1='Interpret an error message'
2='Break down an error message and look up unfamiliar parts'
3='Rephrase an error message'
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

We saw this error - let's try to understand it:

```
SyntaxError: Identifier 'currentOutput' has already been declared
```

### Knowing what we changed

It can be useful to remember when our code last worked, and what we changed since then.

When we just had the first 10 lines of code here, everything worked, but we got this error when we added the rest:

```js {linenos=table,linenostart=1,hl_lines=["12-17"]}
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

{{<note type="tip" title="Tip">}}

This is one of the reasons it's useful to run our code often.

If we only changed one small thing since our code last worked, it's easier to find the problem. If we wrote 100 lines of code since we last saw it work, it will be harder to identify which change was the problem.

{{</note>}}

### Interpreting the error message

The error message is designed to tell us useful information:

```
SyntaxError: Identifier 'currentOutput' has already been declared
```

When we get an error, we should make sure we understand all of the words in the error message. If we don't, we should look them up or ask someone.

* **SyntaxError** - If we Google "JavaScript SyntaxError", [MDN tells us](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError) this is "an error when trying to interpret syntactically invalid code". So - we wrote some code which isn't allowed.
* **Identifier** - If we Google "JavaScript Identifier", [MDN tells us](https://developer.mozilla.org/en-US/docs/Glossary/Identifier): this is "a sequence of characters in the code that identifies a variable, function, or property". On line 12, the identifier is the variable name: `currentOutput`.
* **currentOutput** - This is the variable name we used in our code. This is the **identifier** that the error is about.
* **has**, **already**, and **been** are all standard English words with no special meaning.
* **declared** - We learnt about this already in this course - a **declaration** is where we make a new name (e.g. a new variable) in JavaScript.

Reading that back, we can rephrase this error message:

We wrote some code which isn't allowed. We tried to declare a new variable named `currentOutput`. But we had already declared something named `currentOutput`.

We're not allowed to declare a new variable with the same name as an old one.

Both lines 5 and 12 here try to declare a new variable named `currentOutput`:

```js {linenos=table,linenostart=1,hl_lines=["5", "12"]}
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

{{<note type="remember">}}

Make sure you understand the error message before you try to fix the code.

If you don't understand what's wrong, you probably won't be able to fix it!

{{</note>}}

### Fixing the error

We want to do multiple assertions. And we're using variables in our assertions. But we're not allowed to use the same name twice. The simplest way we can fix this problem is by changing the name of the second variable (remember to also change where we _use_ the variable, not just where we declare it!):

```js {linenos=table,linenostart=1,hl_lines=["12", "15", "16"]}
function formatAs12HourClock(time) {
  return `${time} am`;
}

const currentOutput = formatAs12HourClock("08:00");
const targetOutput = "08:00 am";
console.assert(
  currentOutput === targetOutput,
  `current output: ${currentOutput}, target output: ${targetOutput}`
);

const currentOutput2 = formatAs12HourClock("23:00");
const targetOutput = "11:00 pm";
console.assert(
  currentOutput2 === targetOutput,
  `current output: ${currentOutput2}, target output: ${targetOutput}`
);
```

### Trying again

After making this change, let's try running our code again. We get this output:

```console
% node clock-example.js
/Users/dwh/CYF/clock-example.js:13
const targetOutput = "11:00 pm";
      ^

SyntaxError: Identifier 'targetOutput' has already been declared
    at wrapSafe (node:internal/modules/cjs/loader:1383:18)
    at Module._compile (node:internal/modules/cjs/loader:1412:20)
    at Module._extensions..js (node:internal/modules/cjs/loader:1551:10)
    at Module.load (node:internal/modules/cjs/loader:1282:32)
    at Module._load (node:internal/modules/cjs/loader:1098:12)
    at TracingChannel.traceSync (node:diagnostics_channel:315:14)
    at wrapModuleLoad (node:internal/modules/cjs/loader:215:24)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:158:5)
    at node:internal/main/run_main_module:30:49

Node.js v22.4.1
```

Fortunately, we've seen this kind of error before. It's exactly the same as the last one, but about the `targetOutput` variable on line 13, instead of the `currentOutput` variable on line 12.

Let's fix this, and try again:

```js {linenos=table,linenostart=1,hl_lines=["13", "15", "16"]}
function formatAs12HourClock(time) {
  return `${time} am`;
}

const currentOutput = formatAs12HourClock("08:00");
const targetOutput = "08:00 am";
console.assert(
  currentOutput === targetOutput,
  `current output: ${currentOutput}, target output: ${targetOutput}`
);

const currentOutput2 = formatAs12HourClock("23:00");
const targetOutput2 = "11:00 pm";
console.assert(
  currentOutput2 === targetOutput2,
  `current output: ${currentOutput2}, target output: ${targetOutput2}`
);
```

Now the second assertion fails with the following message:

```console
% node clock-example.js
Assertion failed: current output: 23:00 am, target output: 11:00 pm
```

We expect this - our function just adds " am" to the end of the time, which only works for times in the morning. Now we have proven our code isn't complete yet, we can fix it so that this test passes.

{{<note type="exercise" title="Exercise 1">}}

✏️ Write another assertion that checks `formatAs12HourClock` returns the target output when passed another _time input in the afternoon._

{{</note>}}
