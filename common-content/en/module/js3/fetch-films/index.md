+++
title = 'Fetch Films'

time = 30
[objectives]
    1='Apply fetch to get data from an API'
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

Now that we have a basic understanding of Web APIs and Promises, let's use look again at our code for fetching film data:

```js
const endpoint = "https://programming.codeyourfuture.io/dummy-apis/films.json";

const fetchFilms = async () => {
  const response = await fetch(endpoint);
  return await response.json();
};

fetchFilms().then((films) => {
  // When the fetchFilms Promise resolves, this callback will be called.
  state.films = films;
  render();
});
```

We are defining `fetchFilms`: an `async` function - a function which returns a `Promise`.

When we call `fetchFilms`, what we get is an unresolved `Promise`.

What `fetchFilms` does is fetch a URL (with our call to `fetch` itself returning a `Promise` resolving to a `Response`). When the `Promise` from `fetch` resolves, `fetchFilms` reads the body of the `Response` (a string), and parses is as JSON. The `Promise` returned by `fetchFilms` then resolves with the result of parsing the string as JSON.

When the `Promise` from `fetchFilms` resolves, our next callback is called: We update our `state`, and call `render()`.

After this is done, the rest of our code works exactly the same as it did before. We _have_ our list of films in our state, so we never need to fetch the list of films again.

`render` works the same - it only cares that `state.films` is an array of films, it doesn't care where they came from.

When we change our filter by typing, events fire and our event handler will be called back exactly the same as it did before.
