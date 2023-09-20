+++
title = '♻️ Reusing functionality'
headless = true
time = 5
facilitation = false
emoji= '🗄️'
[objectives]
    1='Label and describe the syntactic features of a function declaration'
    2='Identify a call site'
    3='Differentiate between a function declaration and a function invocation'
    4='Identify the return value evaluated at a call site given its function declaration'
    5='Reuse code to perform the same calculation with different inputs'
    6='Log the return value of a function'
    7='Given a short program, state the number of times a given function is called'
+++

### Setting a return value

We write a return statement to specify a function's return value. If your function call is like a question, the return statement is the answer. It's what comes back.

We can add a return statement to the function like this:

```js {linenos=table,hl_lines=["3"],linenostart=1}
function convertToPercentage() {
  const decimalNumber = 0.5;
  return `${decimalNumber * 100}%`;
}
```

However, we can also keep the variable `percentage` and refer to it in the return statement:

```js {linenos=table,hl_lines=["4"],linenostart=1}
function convertToPercentage() {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;
  return percentage;
}
```

### 🔎 Checking the output

We know how to store a function's return value in a variable.

```js
const result = Math.round(10.3);
console.log(result); // logs 10 to the console
```

We call `Math.round` which takes the input `10.3` and then returns the rounded number `10`. So `result` stores a value of `10`.

`Math.round` is a function implemented by other developers and `convertToPercentage` is a function _we're_ implementing, but calling `convertToPercentage` is just like calling `Math.round`.

We want to call the function `convertToPercentage` and store the return value in a variable.

{{<tabs name="checking output">}}

{{<tab name="Store the return value">}}

We can store the return value in a variable in exactly the same way:

```js {linenos=table,hl_lines=["5"],linenostart=1}
function convertToPercentage() {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;
}
const result = convertToPercentage(0.5);
```

{{</tab>}}

{{<tab name="Log the return value">}}

Log out the value of `result` to the console using `console.log`.

```js {linenos=table,hl_lines=["6"],linenostart=1}
const decimalNumber = 0.5;

function convertToPercentage() {
  const percentage = `${decimalNumber * 100}%`;
}
const result = convertToPercentage(0.3);
console.log(result);
```

{{</tab>}}

{{</tabs>}}

{{<note type="question" title="Predict">}}

Given the code above, play computer and predict what `result` will evaluate to. Write your prediction down.

{{</note>}}

### Undefined values

If our function works, the value of `result` will be `"30%"`. We expect to see `30%` printed in the terminal:

```
30%
```

When we log `result`'s value to the terminal we actually get `undefined`. We need to specify the value we want to return from our function. If we don't state what our function should return, the default return value will be `undefined`.

Now the function contains a `return` statement, re-run your script to check the output.
