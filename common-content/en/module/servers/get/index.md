+++
title = 'GET'

time = 30
[objectives]
    1='Process a GET request using Express and Node to retrieve data from memory'
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

> `GET /movies should return all the movies`

In `server.js`, create a `GET /movies` endpoint that returns all the movies (see below for some sample data).

```js
app.get("/movies", (req, res) => {
  res.send(moviesData);
});
```

<details>
<summary>Copy sample movie data</summary>

```js
const movies = [
  {
    id: 1,
    title: "The Godfather",
    certificate: "18",
    yearOfRelease: 1972,
    director: "Francis Ford Coppola",
  },
  {
    id: 2,
    title: "The Shawshank Redemption",
    certificate: "15",
    yearOfRelease: 1994,
    director: "Frank Darabont",
  },
  {
    id: 3,
    title: "Schindler's List",
    certificate: "15",
    yearOfRelease: 1993,
    director: "Steven Spielberg",
  },
];
```

</details>

#### 🧪 Run and test

1. `npm run dev`
1. Open Postman
1. Make a GET request to `http://localhost:3000/movies`
