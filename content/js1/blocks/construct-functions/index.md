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
    5='Explain how to reuse some code to perform a specific task'
    6='Log the return value of a function'
    7='Given a short program, state the number of times a given function is called'
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
  const percentage = `${num * 100}%`;
}
```

### 🔎 Checking the output

We know how to store a function's return value in a variable.

```js
const result = Math.round(10.3);
console.log(result); // logs 10 to the console
```

We call `Math.round` which takes the input `10.3` and then returns the rounded number `10`. So `result` stores a value of `10`.

`Math.round` is a function implemented by other developers but `convertToPercentage` is a function _we're_ implementing. But calling `convertToPercentage` is just like calling `Math.round`.

We want to call the function `convertToPercentage` and store the return value in a variable. We can store the return value in a variable in exactly the same way:

```js {linenos=table,hl_lines=["5"],linenostart=1}
function convertToPercentage() {
  const decimalNumber = 0.5;
  const percentage = `${num * 100}%`;
}
const result = convertToPercentage(0.3);
```

Log out the value of `result` to the terminal using `console.log`.

```js {linenos=table,hl_lines=["6"],linenostart=1}
function convertToPercentage() {
  const decimalNumber = 0.5;
  const percentage = `${num * 100}%`;
}
const result = convertToPercentage(0.3);
console.log(result);
```

{{<note type="question" title="Predict">}}
Given the code above, play computer and predict what `result` will evaluate to. Write your prediction down.

{{</note>}}

#### Undefined values

If our function works, the value of `result` will be `"30%"`. We expect to see `30%` printed in the terminal:

```
30%
```

When we log `result`'s value to the terminal we actually get `undefined`. We need to specify the value we want to return from our function. If we don't state what our function should return, the default return value will be `undefined`.

#### Setting a return value

We write a return statement to specify a function's return value (what an expression calling the function will evaluate to).

If your function call is like a question, the return statement is the answer. It's what comes back.

We can add a return statement to the function as follows:

```js {linenos=table,hl_lines=["4"],linenostart=1}
function convertToPercentage() {
  const decimalNumber = 0.5;
  return `${num * 100}%`;
}
```

However, we can also keep the variable `percentage` and refer to it in the return statement:

```js {linenos=table,hl_lines=["4"],linenostart=1}
function convertToPercentage() {
  const decimalNumber = 0.5;
  const percentage = `${num * 100}%`;
  return percentage;
}
```

Now the function contains a `return` statement, re-run your script to check the output.

#### Checking with different inputs

Now we have a function declaration we can check if our function works for any number. We can call `convertToPercentage` with different arguments and check the return value we get each time.

```js {linenos=table,hl_lines=["7-8"],linenostart=1}
function convertToPercentage() {
  const decimalNumber = 0.5;
  const percentage = `${num * 100}%`;
  return percentage;
}

const output1 = convertToPercentage(0.5);
const output2 = convertToPercentage(0.231);

console.log(output1);
console.log(output2);
```

When we execute the code we _want_ to log the target output for each input `0.5` and `0.231`:

```
50%
23.1%
```

However, _given the function's current implementation_, we get the following logs:

```
50%
50%
```
