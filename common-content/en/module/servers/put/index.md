+++
title = '📨 PUT'
[build]
    render = false
    list = 'local'
    publishResources = false
time = 20
facilitation = false
emoji= '🧩'
[objectives]
    1='Process a PUT request using Express and Node and update an array held in memory'
+++

> `PUT /movies/:movieId should update a movie (that matches the passed movieId)`

This means that `PUT /movies/2` should update an movie with the id `2` and return `200` with `JSON { success: true }` to the user.

The code should look something like this:

```js
app.put("/movies/:movieID", (req, res) => {
  console.log("PUT /movies route");
});
```

Remember, you have got to update the movie, not add it to the list.

Test that your API works by updating one of the movies.
