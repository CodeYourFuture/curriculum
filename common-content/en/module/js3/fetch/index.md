+++
title = 'fetch API'

time = 20
[objectives]
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

Let's suppose we have a remote API hosted at the following url: "https://api-film-data.com".

We can use applications like Postman to make requests to APIs. However, we want to make a request for the film data using JavaScript. We can use `fetch` to make network requests in JavaScript. Let's take a look at how we can do this:

```js
const filmData = fetch("https://api-film-data.com/films");
```

`fetch` is a JavaScript function. We call `fetch` using the url of the remote API we wish to fetch data from. Once `fetch` has got the data then we want to store it in a variable so we can then use it in our application. Let's log this data:

```js
const filmData = fetch("https://api-film-data.com/films");
console.log(filmData);
```

However, if we log this variable we don't get an array of data. We get:

```console
Promise <pending>
```
