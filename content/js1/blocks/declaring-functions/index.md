+++
title = '🪄 Declaring functions'
headless = true
time = 20
facilitation = false
emoji= '🗄️'
[objectives]
    1='Define a function in programming'
    2='Evaluate a function expression'
    3='Label and describe the syntactic features of a function declaration'
    4='Call a function with an input in REPL'
+++

Now we need to wrap up the expression to convert any number into a percentage. Write a function declaration to reuse your code. A function declaration looks like this:

```js {linenos=table,linenostart=1}
function convertToPercentage() {}
```

The `function` declaration consists of the following syntactic elements:

- `function` keyword, begins the function declaration
- `convertToPercentage` - names the function
- `()` - any input to the function will go between these round braces (our function above doesn't take any input (yet), but it still needs the `()`s)
- `{}` - the body of the function is written inside the curly braces (our function above doesn't do anything yet, but it still needs the `{}`s)

We can create a function declaration by wrapping up the `percentage` variable and the expression for the percentage inside the function.

```js {linenos=table,linenostart=1}
const decimalNumber = 0.5;

function convertToPercentage() {
  const percentage = `${decimalNumber * 100}%`;
}
```

We've left `decimalNumber` out of the function body. We're going to explore if this will work.
