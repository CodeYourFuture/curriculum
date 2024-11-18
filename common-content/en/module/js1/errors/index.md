+++
title = '❌ Errors'

time = 20
facilitation = false
emoji= '❌'
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

When we execute the code above, we get a **SyntaxError**:

```console
const firstName = "Francesco;
                  ^^^^^^^^^^^

Uncaught SyntaxError: Invalid or unexpected token
```

This error message is telling us that we've broken the rules of the language.

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
