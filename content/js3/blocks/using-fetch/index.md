+++
title = '🌐 Requesting from a server side API'
headless = true
time = 20
facilitation = false
emoji= '🧩'
[objectives]
1="List 4 preceding concepts of asynchronous programming in JavaScript"
2="Identify unknown concepts still to be learned"
3="Fetch data from a server side API"
+++

So now we have these pieces of our giant concept map

🗓️ we know that sending 📤 requests over a network takes time
🧵 we know that we should not stop our program to wait for data
📤 we know that we can send a request using `fetch()`
🐕 we know that `fetch` is a 💻 client side 🧰 Web API
🫱🏿‍🫲🏽 we know that `fetch` returns a `Promise`? (...this last one is pending)

But we still don't know how to use `fetch` to get data from a server side API. Let's find out. Run this code in the console in your browser.

```js
const endpoint = "//curriculum.codeyourfuture.io/dummy-apis/films.json";
const fetchPromise = fetch(endpoint);
const _ = fetchPromise.then((response) => {
  console.log(response.json());
});
```

In the console, you can see a `Promise` was logged. A `Promise` is a placeholder which contains some data, but where the data may not be known yet. If you expand the `PromiseResult`, you should see some data which was returned from a server.

So that's how we use `fetch` to get data from a server side API. In [our filterFilms code](https://curriculum.codeyourfuture.io/filterfilms), we can replace the films array with the data fetched from the server.

```js
// Begin with an empty state
const state = {
  films: [],
};
// Data
const endpoint = "//curriculum.codeyourfuture.io/dummy-apis/films.json";

const fetchFilms = async () => {
  const response = await fetch(endpoint);
  return await response.json();
}; // our async function returns a Promise

fetchFilms().then((films) => {
  render(filmContainer, films); // when
});
```

🐕 `fetch` returns a 🫱🏿‍🫲🏽 ‍`Promise`; the 🫱🏿‍🫲🏽 `Promise` fulfils itself with a 📥 response; the response contains our 💾 data.

We will dig into this syntax: `Promises`, `async`, `await`, and `then` in our next sprint and complete our concept map.
