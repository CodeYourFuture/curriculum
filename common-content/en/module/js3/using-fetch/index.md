+++
title = 'Requesting from a server side API'

time = 20
[objectives]
1="Fetch data from a server side API using a client side Web API"
[build]
  render = 'never'
  list = 'local'
  publishResources = false
+++

So now we have these pieces of our giant concept map:

1. 📤 We know that we can send a request using `fetch()`
2. 🐕 We know that `fetch` is a 💻 client-side 🧰 Web API that requires an HTTP connection
3. 🗓️ We know that sending requests over a network takes time
4. 🧵 We know that we should not stop our program to wait for data
5. 🪃 We know that we can use Promises to manage asynchronous operations

But we still don’t know how to use `fetch` to get data from a server side API.

### Loading html files

When you double-click an HTML file in your file explorer to open it directly in your browser, you're using what's called the "file protocol" or "file scheme." In your browser's URL bar, you'll see something like:

```
file:///Users/username/projects/my-website/index.html
```

The `file://` prefix indicates that your browser is reading the file directly from your computer's filesystem, without going through a web server. While this approach might seem convenient for simple HTML files, it will prevent us from using `fetch`.

### Web Server Access: The HTTP Protocol

Another approach involves using a local development server. You can create one using tools like [Python's built-in server](https://realpython.com/python-http-server/) or [npm's http-server](https://www.npmjs.com/package/http-server). These tools create a web server on your computer that serves your files using the HTTP protocol. Your browser will then access the files through a URL like:

```
http://localhost:8000/index.html
```

The `http://` prefix shows that you're accessing the file through a proper web server, even though that server is running on your own computer.

You need to be using `http://` (or `https://`) _not_ `file://` in order to use `fetch`.

## Using `fetch`

Previously, we had a list of films hard-coded in our `state`. Now, let's continue using our concept map to fetch data from a server.

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
};

fetchFilms().then((films) => {
  state.films = films;
  render();
});
```

{{<note type="remember" title="Serving files locally">}}
Remember: If you see an error message about fetch not being allowed from `file://` URLs, that's your signal to serve your files through a local development server instead of opening them directly in the browser.
{{</note>}}

fetch returns a Promise; the Promise fulfils itself with a response; the response contains our data.

Next, we'll dig into `Promise`s, `async`, `await`, and `then` in more detail to complete our concept map.
