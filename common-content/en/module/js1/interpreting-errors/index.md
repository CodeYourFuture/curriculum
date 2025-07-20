+++
title = 'Interpreting errors'

time = 20
emoji= '🔎'
[objectives]
1='Interpret an error trace to identify which line in which file caused the error'
2="Identify an error message from an error trace"
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

## An error is thrown

When we run the file with Node, we get an error in the console:

```console
% node clock-example.js
/Users/dwh/MCB/clock-example.js:12
const currentOutput = formatAs12HourClock("23:00");
      ^

SyntaxError: Identifier 'currentOutput' has already been declared
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

When an error is thrown, the program stops and an error report is sent to the user.

As programmers, we will see a lot of errors. It's useful for us to be able to read them.

### Interpreting the output

Each line of output here tells us something useful.

The first line is:

```
/Users/dwh/MCB/clock-example.js:12
```

Your output was probably different. But it will have the same parts. Some text, then a colon (`:`), then a number.

{{<note type="exercise" title="Exercise">}}

1. Work out what the parts of this line mean.

2. Why are they different on my computer than yours?

3. How can we use both pieces of information?

{{</note>}}

Often, looking at one line of a file is enough to understand what's wrong. So the message also shows us a copy of the line that caused the problem:

```
const currentOutput = formatAs12HourClock("23:00");
```

Then the output tells us the error message:

```
SyntaxError: Identifier 'currentOutput' has already been declared
```

We may not know what this means yet, but it's something we can learn about.

{{<note type="exercise" title="Exercise">}}
Write down three ways you could find out what this means.
{{</note>}}

Each line starting with "at" is showing us a "Stack trace". We'll skip over this for now. In the future we'll see how it can be useful to us.

Finally, we have this line:

```
Node.js v22.4.1
```

{{<note type="exercise" title="Exercise">}}

What does this line mean? Why might it be useful to know this information?

Add your answer to your spaced repetition calendar. Your understanding of this will grow over time. Answer the question again in the future, and compare it to your previous answer.

{{</note>}}
