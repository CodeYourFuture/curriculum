+++
title = '🏷️ Saving expressions'
headless = true
time = 5
facilitation = false
emoji= '🗄️'
[objectives]
1='Identify the syntactic features of a variable declaration'
2='Explain why we use variable declarations'
3='Create strings using variables and template literals'
+++

In programming we often want to _reuse_ our work. Consider the string: `"Hello there";`

Suppose we want to create different greetings for different people, like: `"Hello there, Alicia"` `"Hello there, Barny";`

We can use a **variable** to store this string and reuse it. How can we create a {{<tooltip title="variable" emoji="🏷️">}} A **variable** is a label for a piece of data. We assign a piece of data to a label and then refer back to this label, in place of the data.{{</tooltip>}}

We can create a variable in our program by writing a **variable declaration**, like this:

```js title="variable declaration"
const greeting = "Hello there";
```

Break down the different syntactic elements of this variable declaration:

- `const` is a keyword used to indicate we're creating a variable.
- `greeting` is the variable name - like the name of the label for our piece of data.
- `=` this is the assignment operator. It means assign to the label `greeting` the value of the expression on the right hand side.
- `"Hello there"` - this is the expression whose value we're assigning to the label `greeting`.

{{<tabs name="greeting">}}

{{<tab name="Try it yourself">}}
Type this variable declaration into the REPL:

```
const greeting = "Hello there";
```

Now refer to the label `greeting` in the REPL:

```
`${greeting}, Alicia`
```

Our `greeting` variable is stored in memory. We can reuse it to build more expressions:

```
`${greeting}, Barny`
```

{{</tab>}}
{{<tab name="Watch and follow along">}}

[greeting](greeting.gif "Store your string in a variable and reuse it")
{{</tab>}}
{{</tabs>}}

We just used backticks to create a template literal.

```js
`A template literal places ${expressions} inside strings;
```

With template literals, we can insert expressions into strings to produce new strings. Any time we want to reference a variable inside a template literal we use a dollar sign `$` and a set of curly braces `()`. We can put any expression (e.g. a variable name) inside the curly braces. The value that expression evaluates to is then placed inside the string.

When an operation uses an expression, that expression is immediately evaluated, and how it was written is forgotten about. That means that the `greetAlicia` variable is the same in all three of these cases:

```js
const greetAlicia = "Hello there, Alicia";
```

{{<note type="note" title="string literal">}}
In this example, we don't use a variable or an expression to create a string. Instead we write a string `"Hello there, Alicia"`.

A sequence of characters enclosed in quotation marks is called a **string literal**. `"Hello there, Alicia"` is a string literal.

## {{</note>}}

```js
const name = "Alicia";
const greetAlicia = `Hello there, ${name}`;
```

```js
const greeting = "Hello there";
const name = "Alicia";
const greetAlicia = `${greeting}, ${name}`;
```

The `greetAlicia` variable doesn't remember whether you used variables to make it or not - in all three cases, `greetAlicia` contains the string `"Hello there, Alicia"`. Once a value is made, it doesn't matter _how_ it was made.

### 💬 Making statements

A variable declaration is an example of a{{<tooltip title="statement" type="definition">}} A **statement** is an instruction that produces some effect.{{</tooltip>}} A variable declaration is an example of a statement that has the _effect_ of creating a variable.

```js
const name = "Alicia"; // statement 1
const greetAlicia = `Hello there, ${name}`; // statement 2
```

The code above has two variable declarations; these are two different statements.

1. The first statement is an instruction to create a variable `name` with a value of "Alicia"
1. The second statement is an instruction to create a variable `greetAlicia` with a value of `"Hello there, Alicia"`

But some statements don't have useful effects.

```js
7 * 24; // <-- expression statement
365 * 3; // <-- expression statement
```

The code above consists of two **expression statements**.

**Expression statements** consist of an expression followed by a semi-colon `;`. When the computer executes the code shown, it will calculate the value of each expression but no other effect will take place. The values won't get stored anywhere as we're not using variable declaration statements.

In JavaScript, programs are built by combining _useful_ statements.
