+++
title = 'Errors'

time = 20
[objectives]
    1='Identify the cause of syntax errors in small snippets of JavaScript'
    2='Interpret syntax error messages to determine their cause and how to fix them'
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

> 🗣️ Recall: A programming language is a set of rules for writing computer instructions.

So we need to understand what happens when we **_break_** those rules.

Let's take an example:

```js {linenos=table,hl_lines=["1"],linenostart=1}
const firstName = "Francesco;
const age = 33;
const nationality = "Italian";
```

On line 1, we have a variable declaration, but the string has a missing `"` We're not obeying the syntactic rules for JavaScript: the rules for writing expressions, statements and other parts of the language.

When we execute the code above, we get this:

```node
const firstName = "Francesco;
                  ^^^^^^^^^^^

Uncaught SyntaxError: Invalid or unexpected token
```

We get a **SyntaxError** message. This error message is telling us that we've broken the rules of the language.

{{<note type="activity" title="Predict, Explain">}}

Each block of code in this activity is broken. Before you run each block of code:

1. Predict the error.
1. Explain why the error happened.

```js
const volunteer = "Shadi";
const volunteer = "Abdi";
```

```js
const volunteer = "Shadi";
volunteer = "Hinde";
```

```js
console.log(Math.round(10.3);
```

{{</note>}}

### Saving return values

We can store the return value of a function in a variable. Function calls are also expressions. This means their value can also be stored in variables, just like with operations on numbers or strings.

Suppose we have a file `arithmetic.js` containing this code:

```js title="arithmetic.js"
const result = Math.round(10.3);
```

When this program is executed, it creates a variable called `result` and assigns to it **the return value of the function**, in this case the rounded number.

So `result` will have a value of `10`.

### 🔭 Logging and returning

Most functions return values we can use in our program.

`Math.round` takes a single input, does a calculation and then returns a value that we can use when our program is running.

Some functions don't produce useful return values in our running program; but they can still cause **effects**.

{{<note title="Predict, Run, Observe" type="exercise">}}

```js
const result = console.log("hello world");
```

1. Predict what `result` will _evaluate to_ when the code above runs.
1. Execute this line in the Node REPL.
1. Evaluate the value of the `result` variable to observe what happens.

{{</note>}}

When this program runs, the variable `result` will evaluate to `undefined`. `undefined` is a data type in JavaScript which usually means no value has been assigned. Unlike the `number` data type, which contains many possible values (`1`, `2`, `10.3`, etc), the `undefined` data type has exactly one value, `undefined`.

This can feel confusing as `console.log` _is_ a function with a set of instructions. `console.log` _does_ have an effect: it logs values to the console. However, `console.log` doesn't produce an output that we can use _inside_ the rest of our running program.

{{<note type="tip">}}

Key fact: `console.log` is used to print values to the terminal. It doesn’t produce an output in the running program.

{{</note>}}
