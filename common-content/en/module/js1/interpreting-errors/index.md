+++
title = '🔎 Interpreting errors'

time = 15
facilitation = false
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
/Users/dwh/CYF/clock-example.js:12
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

When an error is thrown, it means the execution of the program stops at this point and an error report is sent to the user.

As programmers, we will see a lot of errors. They are normally presented to us this same way, so it's useful for us to be able to read them.

### Interpreting the output

Each line of output here tells us something useful.

The first line tells us exactly where the problem happened:

```
/Users/dwh/CYF/clock-example.js:12
```

It says the problem was in a file called `/Users/dwh/CYF/clock-example.js`, on line 12 (you probably had a different file name in your output). See how the filename ends with `:12` - this means "on line 12".

If we look in the file it lists at line 12, we will see what line had the problem.

Often we don't need to look at more of the file to understand the error, so the message also shows us a copy of the line that caused the problem:

```
const currentOutput = formatAs12HourClock("23:00");
```

Then the output tells us the error message:

```
SyntaxError: Identifier 'currentOutput' has already been declared
```

we may not know what this means yet, but it's something we can learn about (e.g. by searching online, or asking on Slack).

After this, we're shown something called a stack trace (each line starting with "at"). We'll skip over this for now. In the future we'll see how it can be useful to us.

Finally, we're told the version of Node that we're using:

```
Node.js v22.4.1
```

This can be useful if you're pasting an error to someone on Slack or StackOverflow to get help.
