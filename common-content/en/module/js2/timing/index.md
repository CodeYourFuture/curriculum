+++
title = 'Timers'
time = 20
[objectives]
    1='Explain how we can call functions back after a set amount of time'
    2='Describe how to use setTimeout'
    3='Define a callback'
[build]
  render = 'never'
  list = 'local'
  publishResources = false
+++

To update the DOM, it's helpful to understand the idea of timers and {{<tooltip title="callbacks">}}A callback is a function you pass as an _argument_ to another function. The callback runs after the main function has finished its execution.{{</tooltip>}}.

```js
function printMessage(name) {
  console.log(`My name is ${name}`);
}

printMessage("Sally");
printMessage("Daniel");
```

In this example, we have 2 different parts: **function declaration** and **function calls**. We define the function `printMessage` and we call this function **twice**. However, sometimes we may want to define a function but have it _called back_ at a later point in time. Consider another example:

```js
function printMessage(name) {
  console.log(`My name is ${name}`);
}

setTimeout(printMessage, 3000, "Sally"); // <-- Call printMessage after at least 3000ms, with the argument "Sally"
printMessage("Daniel");
```

In this example, we define the function and call `printMessage` just once. We also call it ourselves once. We're also using a built-in function called `setTimeout`. `setTimeout` allows us to set a minimum amount of time after which a function will be called back.

```js
setTimeout(printMessage, 3000, "Sally");
```

Let's break this down this call to `setTimeout`. It is saying:

> "After at least 3000 ms, call the function `printMessage`, and when you call back `printMessage`, pass the input of `"Sally"` to `printMessage`."

Notice we're saying _at least_ 3000 ms because `setTimeout` guarantees a minimum amount of time: it doesn't say that `printMessage` must be called _exactly_ after 3000 ms. In this example, we say that `printMessage` is a {{<tooltip title="callback function">}}A callback function is a function that is passed as an argument to another function. We ourselves don't call the callback function - something else will call it for us at the right time.{{</tooltip>}} as it is _called back_ after 3000 milliseconds.

Run this code in your terminal. In the terminal, you'll see "Daniel" appear first. After at least a 3000 ms delay, you will see console log of "Sally". Now play computer with some different combinations of timeouts and function calls. Set timeouts on a series of simple functions you can write yourself. Play with the numbers and line orders, and see if you can predict the execution order reliably.

We will explore callbacks in more detail later on.
