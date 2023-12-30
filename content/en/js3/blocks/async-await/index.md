+++
title = 'Async/Await'
headless = true
time = 30
facilitation = false
emoji= '🧩'
[objectives]
    1='Define syntactic sugar'
    2='Write a function using the async keyword'
+++

Async/await is {{<tooltip title="syntactic sugar">}}A simpler, or "sweeter" way to write the same thing. The code works the same under the hood, but it's easier to read. {{</tooltip>}} for Promises. We group them together: async/await, because we {{<tooltip title="use them together. ">}}We can only use `await` inside an `async` function or at the [top level](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await#top_level_await) of a module.{{</tooltip>}}

We use the `async` [keyword](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#keywords) to define a function that returns a Promise.

```js
const getProfile = async (url) => {
  // the async keyword tells us this function handles a time problem
};
```

We use the [`await`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await) operator to wait for a Promise to resolve. This allows us to write code that looks like it's happening in time order, but doesn't block our main thread.

```js
const getProfile = async (url) => {
  const response = await fetch(url);
  return response.json();
};
```

When we use `await`, we are saying, "Wait for this Promise to resolve before moving on to the next line of code." But if the Promise _doesn't_ resolve, the next line of code will never run and an [error](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) will be thrown. But how can we find out what the error is?

We need to `catch` the error.
