+++
title = 'Logging'

time = 10
[objectives]
    1='Use console.log to print a value'
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

### Printing to the terminal

To look at values when our program runs, we can use a function called `console.log`.

{{<note type="tip" title="console.log">}}
**console** usually means _a text interface_ like a terminal. A **log** is a written record of something that happened.

So `console.log` will _record something that happens in our program_ and print it to a _text based interface_.

{{</note>}}

`console.log` logs the result of expressions while our program is executing.
This is very useful for complex programs when we need to check what values expressions evaluate to at _specific moments_ of our program execution.

Let's see how to use `console.log` . In a file called `example.js`, write the name of the function `console.log`.

```js title="example.js"
console.log;
```

If we run this file with Node, we won't be able to see anything in the terminal. As with `Math.round` we need to use the syntax for calling a function. Add brackets after the function name:

```js title="example.js"
console.log("hello there!");
```

We should see the string `"hello there!"` logged out in the terminal.
