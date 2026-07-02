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

We get an error because of the variable's **scope**. Scope determines where a variable can be accessed from in our code. When we define `passwordChecker` we also define a **local scope** - the block of code enclosed inside `passwordChecker`'s function body. This means any variables we declare inside that local scope can only be accessed within the same block. If we attempt to reference a variable from outside the scope where it was declared we get a `ReferenceError`.

The `response` variable is declared _inside_ `passwordChecker`'s local scope so when we try to print it the `ReferenceError` is thrown. The `password` variable is declared _outside_ the function's local scope so we can access it without the error being thrown. 

### Global Scope

There are two ways in which we could fix this. The first is to move the `response` declaration outside of the function. That means it is no longer within the function's scope but that could cause some problems for us in future. What happens if the code in the function isn't executed? Our variable would always have the value `undefined` and we may not be prepared to handle that. 

The second is to remove the declaration altogether and handle declaration and assignment at the same time in the `if` block. TRy it now and see what happens!

```js {title="passwordCheckerFunction.js"}
const password = "secretword123";

function checkPassword(userInput){
  if (userInput === password) {
    response = "Correct password entered";
  } else {
    response = "Incorrect password, please try again";
  }
}

checkPassword("secretword123");

console.log(response);
```

No error, and the correct value is printed. So why does this work?

When we declare a variable using `const` or `let` it gives the variable local scope. When we don't use a keyword the variable has **global** scope instead. Now there are no restrictions, the variable can be accessed from anywhere. That doesn't sound very secure though, does it?

We have a stand-off: on one side our code is secure but we can't access the value we need, on the other we can access the value but so can everything else. We need to make some changes to our function to fix this.
