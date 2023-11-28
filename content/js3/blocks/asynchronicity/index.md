+++
title = 'Asynchronicity'
headless = true
time = 20
facilitation = false
emoji= '🧩'
[objectives]
+++

We can call functions and can store their return values in variables. However, storing the return value of `fetch` doesn't give us direct access to the film data that we need.

```js
const filmData = fetch("https://api-film-data.com/films");
console.log(filmData); // filmData not available here
```

`fetch `is an **asynchronous** function. `fetch` needs to request information across a network and requests like this take time. The length of time for the request to finish depends on lots of external factors such as how fast the external server processes our request. Such factors are beyond our control. When `fetch` is called, we still need other parts of our program. We cannot wait around for a network request to finish before we start handling other tasks in our application. To handle this asynchronicity, we can use {{<tooltip title="Promises">}}A **Promise** is a JavaScript object that enables us to access the eventual outcome of an asynchronous task{{</tooltip>}}.

### Promise object

Promise objects are in one of three different states:

- **pending** - this means the asynchronous task is waiting / not completed
- **fulfilled** - the async task succeeded
- **rejection** - the async task failed

### On fulfilment

Let's consider our example again:

```js
fetch("https://api-film-data.com/films"); // this is a Promise object
```

`fetch` **returns** a Promise object. When the Promise is first created, its state will be **pending** ( as the network request hasn't completed ).

> 💡 However, we'll need to execute some code when if the async task is successful. In other words, we'll need to execute some code when the Promise state moves from **pending** -> **fulfilled**.

To run some code when the network request is successful, we can use a special function called `then` available on the Promise object. `then` takes a function as an argument that is called automatically once the Promise's state is fulfilled.

```js
fetch("https://api-film-data.com/films").then(function runOnFulfilment(data) {
  console.log(data);
});

console.log("another log...");
```

Let's break down what's happening here.
`then` is passed a callback function defined as `runOnFulfilment`:

```js
function runOnFulfilment(data) {
  console.log(data);
}
```

We're also logging outside of this function too:

```js {linenos=table,hl_lines=["5"],linenostart=1}
fetch("https://api-film-data.com/films").then(function runOnFulfilment(data) {
  console.log("running the callback function after fetch completes...");
});

console.log("another log...");
```

Provided the request to the remote film API has succeeded, then the function passed to `then` - `runOnFulfilment` will be executed.
However, as it is asynchronous, other parts of the program will run. To illustrate this, when the code above runs we will see the following logs:

```console
another log...
running the callback function after fetch completes...
```

The function `runOnFulfilment` is defined earlier in the source code. However, we're not in charge of calling it. Instead this function is only called
