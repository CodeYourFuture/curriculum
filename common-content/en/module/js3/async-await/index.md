+++
title = 'async/await'

time = 30
[objectives]
    1='Define syntactic sugar'
    2='Write a function using async/await'
    3='Explain what happens when an async function is awaited'
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

These two blocks of code do exactly the same thing:

```js
const getProfile = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  const htmlUrl = data.html_url;
  console.log(htmlUrl);
};

getProfile("https://api.github.com/users/SallyMcGrath");
```

```js
const getProfile = (url) => {
  return fetch(url)
    .then((response) => response.json())
    .then((data) => data.html_url)
    .then((htmlUrl) => console.log(htmlUrl));
};
getProfile("https://api.github.com/users/SallyMcGrath");
```

Async/await is {{<tooltip title="syntactic sugar">}}A simpler, or "sweeter" way to write the same thing. The code works the same under the hood, but it's easier to read. {{</tooltip>}} for Promises.

We group `async` and `await` together: async/await, because we {{<tooltip title="use them together. ">}}We can only use `await` inside an `async` function or at the [top level](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await#top_level_await) of a module.{{</tooltip>}}

We use the [`async`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function) [keyword](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#keywords) to define a function that returns a Promise. An async function always returns a Promise.

We can see this with a simple function which doesn't need to await anything. Save this in a file and run it with node:

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

We use the [`await`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await) operator to say "don't move on until this is done". Importantly, we are not actually _waiting_ for a Promise to resolve. We are scheduling a callback that will be called when the Promise resolves. But this allows us to write code that looks like it's happening in time order (as if we _are_ waiting), without actually blocking our main thread.

```js
const getProfile = async (url) => {
  const response = await fetch(url);
  return response.json();
};

getProfile("https://api.github.com/users/SallyMcGrath").then((response) =>
  console.log(response)
);
```

Save this to a file and run with with node. It works the same as before.
