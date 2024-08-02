+++
title = '🍬 async/await'
[build]
    render = false
    list = 'local'
    publishResources = false
time = 20
facilitation = false
emoji= '🧩'
[objectives]
    1='Define syntactic sugar'
    2='Write a function using the async keyword'
+++

```mermaid
graph LR
    Promise{{🤝 Promises}} --> |syntax| async{{🏃‍♂️ async}}
    async --> |syntax| await{{📭 await}}
    await --> |resolves to| Response{{📤 Response}}
```

Async/await is {{<tooltip title="syntactic sugar">}}A simpler, or "sweeter" way to write the same thing. The code works the same under the hood, but it's easier to read. {{</tooltip>}} for Promises. We group them together: async/await, because we {{<tooltip title="use them together. ">}}We can only use `await` inside an `async` function or at the [top level](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await#top_level_await) of a module.{{</tooltip>}}

We use the [`async`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function) [keyword](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#keywords) to define a function that returns a Promise. An async function always returns a Promise.

We can see this with a simple function which doesn't need to await anything:

```js
const getProfile = async (url) => url;

console.log(getProfile("hello")); // Logs a Promise.

getProfile("hello").then((value) => console.log(value)); // Logs a value
```

Even though the function above doesn't _have_ a time problem, the fact that we define the function as an `async` function means it returns a `Promise`.

But let's do something more interesting - let's actually solve a time problem.

```js
const getProfile = async (url) => {
  // the async keyword tells us this function handles a time problem
};
```

We use the [`await`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await) operator to _wait_ for a Promise to resolve. This allows us to write code that looks like it's happening in time order, but doesn't block our main thread.

```js
const getProfile = async (url) => {
  const response = await fetch(url);
  return response.json();
};
```

Go ahead and call this in your Node REPL in your terminal: `getProfile("https://api.github.com/users/SallyMcGrath").then(console.log)`. It works the same as before.

### 🫠 Handling errors

When we use `await`, we are saying, "Wait for this Promise to resolve before moving on to the next line of code." But if the Promise _doesn't_ resolve, the next line of code will never run and an [error](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) will be thrown.

Let's try this. Call `getProfile` with a url that doesn't exist: `getProfile("invalid_url");`

You will get a curious response:

<details><summary>Uncaught (in promise) TypeError...</summary>

```js
getProfile("invalid_url")
Promise {
  <pending>,
  [...]
}
> Uncaught [TypeError: Failed to parse URL from invalid_url] {
  [cause]: TypeError: Invalid URL
      [...] {
    code: 'ERR_INVALID_URL',
    input: 'invalid_url'
  }
}
```

_Some lines redacted [...] for clarity._

</details>

JavaScript is telling us we need to `catch` the error, but how, and why?
