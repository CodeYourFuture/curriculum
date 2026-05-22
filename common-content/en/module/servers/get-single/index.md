+++
title = 'GET single movie'

time = 10
[objectives]
    1='Use GET to match a specific query parameter'
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

> `GET /movies/:movieId should return a single movie (that matches the passed movieId)`

Sometimes, we do not want to list all the information in one request, maybe we only want to get the information related to a single movie. Imagine a page to display the details of one movie. We'd call the server, get all movies, then filter the one we need client-side. It would be more effective to tell the server to just return the one movie we are interested in.

We will now add a new endpoint to return only a single movie GET /movies/:movieId. In this case, movieId will tell us what movie we can return. The call will be `GET /movies/10` and that will return the movie with that has `movieId: "10"`.

This endpoint has something different. The endpoint `/movies/:movieId` has a dynamic part. The `movieId` will vary depending on what the client sends.

In `server.js`, create a `GET /movies/:movieId` endpoint that returns a single movie. The movieId will be passed as a parameter in the URL.

```js
app.get("/movies/:movieId", (req, res) => {
  const movieId = req.params.movieId;
  const movie = moviesData.find((movie) => movie.movieId === movieId);
  res.send(movie);
});
```

#### 🧪 Run and test

1. Save your changes
1. Make a GET request to `http://localhost:3000/movies/10`
