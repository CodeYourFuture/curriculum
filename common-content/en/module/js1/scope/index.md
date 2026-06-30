+++
title = 'Scope'

time = 20
[objectives]
1='Define scope'
2='Explain what happens when a variable is referenced out of scope'
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

At the moment our password checking function does what we need it to but is quite limited. The only way it can let us know if the input was correct or not is by printing a message, but what if another part of the program needs to know?

For that to happen we will need to store the response in a variable, so let's make some changes to our code:

```js {title="passwordCheckerFunction.js"}
const password = "secretword123";

function checkPassword(userInput){

  let response;

  if (userInput === password) {
    response = "Correct password entered";
  } else {
    response = "Incorrect password, please try again";
  }
}
```

Now we can call our function then try printing `response`:

```js {title="passwordCheckerFunction.js"}
checkPassword("secretword123");

console.log(response);
```

It looks like we have a problem though...

```console
ReferenceError: response is not defined
```

We definitely did define `response` though, it's right there above the `if` statement! It's the only variable which throws this error: if we print `password` the value will be displayed. So why does it work for one and not the other?

We get an error because of the variable's **scope**. Scope determines where a variable can be accessed from in our code. When we define `passwordChecker` we also define a **local scope** - the region of code enclosed inside `passwordChecker`'s function body. This means any variables we declare inside that local scope can only be accessed within the same block. If we attempt to reference a variable from outside the scope where it was declared we get a `ReferenceError`.

The `response` variable is declared _inside_ `passwordChecker`'s local scope so when we try to print it the `ReferenceError` is thrown. The `password` variable is declared _outside_ the function's local scope so we can access it without the error being thrown. 

### Global Scope

