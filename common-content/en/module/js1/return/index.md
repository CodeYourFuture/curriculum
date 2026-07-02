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

We sometimes refer to the value returned by a function as its **output**. We can store that output in a variable.

```js {title="passwordCheckerFunction.js"}
const output = checkPassword("secretword123");
```

Now the value returned by our function is stored in the `output` variable and can be handled just like any other variable. Let's try printing it to check everything worked:

```js {title="passwordCheckerFunction.js"}
console.log(output);
// "correct"
```

Success!