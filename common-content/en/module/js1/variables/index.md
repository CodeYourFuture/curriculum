+++
title = 'Saving expressions'

time = 25
[objectives]
1='Identify the syntactic features of a variable declaration'
2='Explain why we use variable declarations'
3='Create strings using variables and template literals'
4='Describe the difference between `const` and `let`'
5='Describe the difference between a declaration and a statement'
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

In programming we often want to _reuse_ our work. Consider the string: `"Hello there"`

Suppose we want to create different greetings for different people, like: `"Hello there, Alicia"` or `"Hello there, Barney"`

We can use a **variable** to store this string and reuse it. A variable is a label for a piece of data. We assign a piece of data to a label and then refer back to this label, in place of the data.

### Declaring variables

We can create a variable in our program by writing a **variable declaration**. A declaration is an instruction that binds an identifier to a value, like this:

```js
const greeting = "Hello there";
```

Break down the different syntactic elements of this variable declaration:

- `const` is a keyword used to indicate we're creating a variable.
- `greeting` is the **identifier** - it can be used to refer to a variable after it has been declared.
- `=` is the assignment operator. It means assign to the label `greeting` the value of the expression on the right hand side.
- `"Hello there"` - this is the expression whose value we're assigning to the label `greeting`.

{{<note type="exercise" title="Exercise: Declare a variable">}}
In your terminal create a new file called `greeting.js`. Open the file in VSCode and declare a variable called `greeting` like we did above.
{{</note>}}


### Accessing variables

Our data is stored in a variable, so how can we use it again later?

To access the data stored in a variable we just need to type the variable's name. When our code is executed the appropriate value will be inserted and the expression will be evaluated. Try it now with your new variable:

```js {title="greeting.js"}
console.log(greeting);
```

`"Hello there"` has been printed to the terminal even though we didn't explicitly write that in the code.


### Using variables in expressions

Accessing variables can form part of complex expressions. Let's add a second variable called `name` to our program. We'll also add this variable to our `console.log` call so we print the greeting and the name together.

```js {title="greeting.js"}
const greeting = "Hello there";
const name = "Alicia";
console.log(`${greeting}, ${name}`);
```

We just used backticks to create a template literal.

```js
A template literal places ${expressions} inside strings;
```

With template literals, we can insert expressions into strings to produce new strings. Any time we want to reference a variable inside a template literal we use a dollar sign `$` and a set of curly braces `{}`. We can put any expression (e.g. a variable name) inside the curly braces. The value that expression evaluates to is then placed inside the string.

When an operation uses an expression, that expression is immediately evaluated, and how it was written is forgotten about. Each of these expressions evaluates to the same thing:

```js
"Hello there, Alicia";
`Hello there, ${name}`;
`${greeting}, ${name}`;
greeting + ", " + name;
```

{{<note type="definition" title="Definition: String literal">}}
In the first example we don't use a variable or a template to create a string. Instead we write a string `"Hello there, Alicia"`.

A sequence of characters enclosed in quotation marks is called a **string literal**. `"Hello there, Alicia"` is a string literal.

Similarly, `10` is a **number literal**.
## {{</note>}}

### Reassigning a variable

Let's say we want to greet people in a different way. That would mean changing the value of our `greeting` variable. This is a very common thing to do, in fact many of the programs you write will need you to do this. 

We reassign a variable using the `=` operator:

```js {title="greeting.js"}
const greeting = "Hello there";
greeting = "Good morning"
```

If we try to run our code now we'll see an error (more on these at the end of this sprint). What went wrong?

The `const` keyword means that our variable is a **constant** - we can't change its value! If we need to reassign a variable we need to use the `let` keyword when declaring the function instead.

```js {title="greeting.js"}
let greeting = "Hello there";
greeting = "Good morning"
```

Now it works! 

The first line of this block is the variable **declaration**, the second line is a **statement**. Note that we don't need to use `let` again when reassigning the variable.
