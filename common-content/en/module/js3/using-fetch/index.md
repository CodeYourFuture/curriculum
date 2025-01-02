+++
title = 'Requesting from a server side API'

time = 20
facilitation = false
emoji= '🌐'
[objectives]
1="Fetch data from a server side API using a client side Web API"
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

So now we have these pieces of our giant concept map

1. 📤 we know that we can send a request using `fetch()`
1. 🐕 we know that `fetch` is a 💻 client side 🧰 Web API
1. 🗓️ we know that sending requests over a network takes time
1. 🧵 we know that we should not stop our program to wait for data
1. 🪃 we know that we can use callbacks to manage events

But we still don’t know how to use `fetch` to get data from a server side API. Let’s find this out now.

Let's pick our film display exercise back up. Before we had a list of films hard-coded in our `state`. We're going to replace the films array with data fetched from a server.

```js
// Begin with an empty state
const state = {
  films: [],
  searchTerm: "",
};

const endpoint = "https://programming.codeyourfuture.io/dummy-apis/films.json";

const fetchFilms = async () => {
  const response = await fetch(endpoint);
  return await response.json();
}; // Our async function returns a Promise

fetchFilms().then((films) => {
  // When the fetchFilms Promise resolves, this callback will be called.
  state.films = films;
  render();
});
```

`fetch` returns a `Promise`; the `Promise` fulfils itself with a response; the response contains our data.

Next we will dig into `Promise`s, `async`, `await`, and `then`, and complete our concept map.
