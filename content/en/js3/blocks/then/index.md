+++
title = '.then()'
headless = true
time = 30
facilitation = false
emoji= '🧩'
[objectives]
    1='Use the Teach Tech Together guide to construct your objectives'
    2='Limit the objectives to 3-5 items'
    3='Write objectives you can measure'
+++

[`.then()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) is a method that belongs to the Promise {{<tooltip title="prototype">}}A prototype object is like a template. `then` is a method available on any Promise.{{</tooltip>}} You can think of the commands as

1. _given_ a request to `fetch` some data
2. _when_ the `response` comes back / the promise resolves
3. `then` do this next thing with the data / execute this callback

The `.then()` method takes in a callback function that will run once the promise resolves.

For example:

```js
const url = "https://api.github.com/users/SallyMcGrath";
fetch(url).then((response) => {
  // this callback function will run when the fetch promise resolves
  return response.json();
});
```

It's a similar idea as the event loop we have already investigated, but this time we can control it clearly. The .then() method _queues_ up callback functions to execute in sequence once the asynchronous operation completes successfully. This allows us to write code as if it was happening in time order.

A `Promise` always returns a new `Promise`.

We can chain multiple .then() calls to run more logic, passing the resolved value to the next callback in the chain. This allows us to handle the asynchronous response in distinct steps. For example, run this code in your browser console:

```js
const url = "https://api.github.com/users/SallyMcGrath";
const getProfile = (url) =>
  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data));
```

So `then` returns a _new_ `Promise`, and you can call `then` again on the new object. You can chain Promises in ever more complex dependent steps. This is called [Promise chaining](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises#chaining).

It's important to understand some of what is happening with Promises and `then`. But for the most part, you will not be writing code in this style.

You will be writing a description of what you want to happen and an loosely-coupled set of stateless, single-purpose functions to make it so.

To help you stay thinking in this way, let's explore async/await.
