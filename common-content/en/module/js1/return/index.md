+++
title = 'Returning from a function'

time = 30
[objectives]
    1='Identify the return value at a call site given its function declaration'
    2='Log the return value of a function'
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

We need a way to access the value that is created inside `checkPassword`. To access values created inside functions, we use the **return** keyword. When we **return** something from a function we make it available at the point the function was called.

We talked before about **expressions** - expressions evaluate to some value. When we call a function, it evaluates to whatever the function returned.

Let's undo our global variable changes from the last section and add a return statement to the function:

```js {title="passwordCheckerFunction.js"}
const password = "secretword123";

function checkPassword(userInput){

  let response;

  if (userInput === password) {
    response = "Correct password entered";
  } else {
    response = "Incorrect password, please try again";
  }

  return response;
}
```

We haven't quite fixed everything though. If we call the function and try to print `response` like before we'll still get a `ReferenceError`. 

### Using the output

We sometimes refer to the value returned by a function as its **output**. This is what calling the function evaluates to. So we can assign it to a variable if we want, just like any other expression:

```js {title="passwordCheckerFunction.js"}
const output = checkPassword("secretword123");
```

Now the value returned by our function is stored in the `output` variable and can be handled just like any other variable. Let's try printing it to check everything worked:

```js {title="passwordCheckerFunction.js"}
console.log(output);
// "Correct password entered"
```

Success!

### Different ways to use the return value

We don't always _need_ to assign a function call to a variable. It's an expression, just like any other expression. This means we _can_ assign it to a variable, but we can _also_ use it like any other expression, e.g.

```js
// Log it directly
console.log(checkPassword("secretword123"));
```

or

```js
// Concatenate another value to it:
const toPrint = "The result was: " + checkPassword("secretword123");
console.log(toPrint);
```
