+++
title = '🪄 Declaring functions'
headless = true
time = 20
facilitation = false
emoji= '🗄️'
[objectives]
    1='Define a function in programming'
    2='Evaluate a function expression'
    3='Call a function with an input in REPL'
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

Wrap the functionality we want to reuse inside the curly braces by writing:

```js {linenos=table,linenostart=1}
function convertToPercentage() {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;
}
```
