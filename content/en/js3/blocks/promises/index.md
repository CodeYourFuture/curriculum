+++
title = 'Promises'
headless = true
time = 30
facilitation = false
emoji= '🧩'
[objectives]
    1='Use the Teach Tech Together guide to construct your objectives'
    2='Limit the objectives to 3-5 items'
    3='Write objectives you can measure'
+++

To get data from a server, we make a request with fetch. We act on what comes back. But what happens in the middle? We know that JavaScript is single-threaded; it can only do one thing at a time. So do we just stop and wait? Run this code in your terminal:

```js
const url = "https://api.github.com/users/SallyMcGrath"; // try your own username
const response = fetch(url);
console.log(response);
```

The response is not [the data](https://api.github.com/users/SallyMcGrath). It's a `Promise`.

<details>
<summary>Your Promise should look like this:</summary>

```js
Promise {
  Response {
    [Symbol(realm)]: null,
    [Symbol(state)]: {
      aborted: false,
      rangeRequested: false,
      timingAllowPassed: true,
      requestIncludesCredentials: true,
      type: 'default',
      status: 200,
      timingInfo: [Object],
      cacheState: '',
      statusText: 'OK',
      headersList: [HeadersList],
      urlList: [Array],
      body: [Object]
    },
    [Symbol(headers)]: HeadersList {
      cookies: null,
      [Symbol(headers map)]: [Map],
      [Symbol(headers map sorted)]: null
    }
  },
  [Symbol(async_id_symbol)]: 54,
  [Symbol(trigger_async_id_symbol)]: 30
}
```

</details>
