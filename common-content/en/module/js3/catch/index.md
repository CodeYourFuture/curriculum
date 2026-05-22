+++
title = 'try/catch'

time = 10
[objectives]
    1='Define a try/catch block'
    2='Handle an error'
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

We can handle errors with a try/catch block. We can use the `try` keyword to _try_ to do something, and if it fails, `catch` the {{<tooltip title="error">}}An [Error](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) is a global object produced when something goes wrong. We can throw an [Error](https://www.w3schools.com/js/js_errors.asp) manually with the `throw` keyword.{{</tooltip>}} We can use try/catch in both synchronous and asynchronous code.

```js
const getProfile = async (url) => {
  try {
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    console.error(error);
  }
};
```

Let's trigger an error to see this in action. In a Node REPL in your terminal, call getProfile on an API that does not exist again:

`getProfile("invalid_url");`

```js
TypeError: Failed to parse URL from invalid_url
  [...]
  [cause]: TypeError: Invalid URL
  [...]
    code: 'ERR_INVALID_URL',
    input: 'invalid_url'
```

It's actually the same error you saw before, without the word 'Uncaught' before it. But why do we care about this? It's not obvious in this simple, single function. If we don't catch the error, the function will {{<tooltip title="crash.">}}The JavaScript execution will halt with a fatal exception, causing the Node.js process to exit immediately. Any further statements will not be run.{{</tooltip>}}

You need to tell JavaScript what to do when something goes wrong, or it will give up completely. In fact, in synchronous programming, the entire program would crash. In asynchronous programming, only the function that threw the error will crash. The rest of the program will continue to run.

{{<note type="tip" title="Tip">}}
Handle your errors in all cases.
{{</note>}}
