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

Recall that a programming language is a set of rules for writing computer instructions. What would happen if we **_break_** those rules?

Let's take an example:

```js {linenos=table,hl_lines=["1"],linenostart=1}
const firstName = "Francesco;
const age = 33;
const nationality = "Italian";
```

On line 1, we have a variable declaration, but the string has a missing `"` We're not obeying the syntactic rules for JavaScript: the rules for writing expressions, statements and other parts of the language.

When we execute the code above, we get this:

```console
const firstName = "Francesco;
                  ^^^^^^^^^^^

Uncaught SyntaxError: Invalid or unexpected token
```

We get a **SyntaxError** message. This error message is telling us that we've broken one of the rules of the language. In this case the interpreter didn't expect to see the semicolon - it needs us to add the missing `"` before the expression makes sense.

{{<note type="exercise" title="Exercise: Predict and Explain">}}

Each block of code in this activity is broken. Create a new file to test these expressions in, but before you run each block of code:

1. Predict the error.
2. Explain why the error happened.

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
