+++
title = 'Reusing variable names'

time = 30
[objectives]
1='Fix code which declares the same identifier more than once'
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

We saw this error:

```
SyntaxError: Identifier 'currentOutput' has already been declared
```

Now that we understand it, let's fix it.

We're not allowed to declare a new variable with the same name as an old one. Both lines 5 and 12 here try to declare a new variable named `currentOutput`:

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

We want to do multiple assertions. And we're using variables in our assertions. But we're not allowed to use the same name twice. The simplest way we can fix this problem is by changing the name of the second variable. Remember to also change where we _use_ the variable, not just where we declare it!

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

{{<note type="exercise">}}
Fix this error, and try running your code again.
{{</note>}}

Now the second assertion fails with the following message:

```console
% node clock-example.js
Assertion failed: current output: 23:00 am, target output: 11:00 pm
```

We expect this. Our function just adds " am" to the end of the time, which only works for times in the morning. We have proven our code isn't complete yet. Next we can fix it so that this test passes.

{{<note type="exercise" title="Exercise 1">}}

✏️ Write another assertion that checks `formatAs12HourClock` returns the target output when passed another _time input in the afternoon._

{{</note>}}
