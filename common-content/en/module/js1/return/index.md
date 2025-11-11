+++
title = 'Returning from a function'

time = 30
[objectives]
    1='Identify the return value at a call site given its function declaration'
    2='Log the return value of a function'
    3='Given a short program, state the number of times a given function is called'
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

We need a way to access the percentage string that is created inside `convertToPercentage`. To access values created inside functions, we write {{<tooltip title="return statements">}}We write a return statement to specify a function's return value. If your function call is like a question, the return value is the answer. It's what comes back.{{</tooltip>}}.

We can add a return statement to `convertToPercentage` like this:

```js {linenos=table,hl_lines=["4-5"],linenostart=1}
const decimalNumber = 0.5;

function convertToPercentage() {
  const percentage = `${decimalNumber * 100}%`;
  return percentage;
}
```

If we want, we could also remove the variable `percentage`, since we can return the value of the expression directly:

```js {linenos=table,hl_lines=["4"],linenostart=1}
const decimalNumber = 0.5;

function convertToPercentage() {
  return `${decimalNumber * 100}%`;
}
```

### 🔎 Checking the output

We can store a function's return value in a variable.

```js
const result = Math.round(10.3);
console.log(result); // logs 10 to the console
```

We call `Math.round` which takes the input `10.3` and then returns the rounded number `10`. So `result` stores a value of `10`.

`Math.round` is a function implemented by other developers and `convertToPercentage` is a function _we're_ implementing, but calling `convertToPercentage` is just like calling `Math.round`.

Now we want to **call** the function `convertToPercentage` and **store the return value** in a variable.

{{<tabs name="checking output">}}

===[[Store the return value]]===

We can store the return value in a variable in exactly the same way:

```js {linenos=table,hl_lines=["8"],linenostart=1}
const decimalNumber = 0.5;

function convertToPercentage() {
  const percentage = `${decimalNumber * 100}%`;
  return percentage;
}

const result = convertToPercentage(0.5);
```

===[[Log the return value]]===

Log out the value of `result` to the console using `console.log`.

```js {linenos=table,hl_lines=["9"],linenostart=1}
const decimalNumber = 0.5;

function convertToPercentage() {
  const percentage = `${decimalNumber * 100}%`;
  return percentage;
}

const result = convertToPercentage(0.5);
console.log(result);
```

This will now print the following when run:

```
50%
```

{{</tabs>}}
