+++
title = '🌐 Requesting from a server side API'
headless = true
time = 20
facilitation = false
emoji= '🧩'
[objectives]
1="List 5 preceding concepts of asynchronous programming in JavaScript"
2="Identify 2 unknown concepts still to be learned"
3="Fetch data from a server side API using a client side Web API"
+++

So now we have these pieces of our giant concept map

1. 📤 we know that we can [send a request](#fetching-data) using `fetch()`
1. 🐕 we know that `fetch` is a [💻 client side 🧰 Web API](#fetching-data)
1. 🗓️ we know that sending 📤 requests over a network takes [time](#latency)
1. 🧵 we know that we should [not stop our program](#asynchrony) to wait for data
1. 🪃 we know that we can [use callbacks](#callbacks) to manage events

But we still don’t know how to use `fetch` to get data from a server side API. Let’s find this out now. In [our filterFilms code](https://curriculum.codeyourfuture.io/filterfilms), replace the films array with data fetched from a server.

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
