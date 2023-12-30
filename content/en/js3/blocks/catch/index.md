+++
title = 'try/catch'
headless = true
time = 30
facilitation = false
emoji= '🧩'
[objectives]
    1='Use the Teach Tech Together guide to construct your objectives'
    2='Limit the objectives to 3-5 items'
    3='Write objectives you can measure'
+++

We can use the `try` keyword to _try_ to do something, and if it fails, `catch` the {{<tooltip title="error">}}An [Error](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) is a global object produced when something goes wrong. We can throw an Error ourselves with the `throw` keyword.{{</tooltip>}}

```js
try {
  throw new Error("I'm flying!");
} catch (e) {
  console.error(`${e.name}: ${e.message}`);
}
```

```js
async function getProfile(url) {
  try {
    const response = await fetch(url);
    return response.json();
  } catch (e) {
    console.error(`${e.name}: ${e.message}`);
  }
}

getProfile("https://api.github.com/users/SallyMcGrath");
```
