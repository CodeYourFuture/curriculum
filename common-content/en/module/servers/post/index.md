+++
title = 'POST'

time = 30
[objectives]
    1='Process a POST request using Express and Node and store data in memory'
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

`POST /movies should save a new movie`

In order for our server-side to receive and use the data sent by the client, we will need to install and use a middleware.

The JSON middleware makes it easy for our route handlers to read JSON data from the request. If the Content-Type request header indicates that the request body contains JSON data then the middleware calls JSON.parse to convert the request body into a JavaScript data structure.

To register the JSON middleware, add the following to the server code:

```js
app.use(express.json()); // before our routes definition
```

In `server.js`, create a `POST /movies` endpoint that saves a new movie. The movie will be passed as a JSON object in the request body.

<details>
<summary> Step by step if you get stuck </summary>

1. Add the following code to `server.js`:

```js
app.post("/movies", (req, res) => {
  const newMovie = req.body;
  moviesData.push(newMovie);
  res.send("movie added successfully!");
});
```

1. Open Postman and create a new request.
1. Set the Request Type to POST.
1. Enter the URL for your endpoint, which should be http://localhost:3000/movies.
1. Set the Body Type to raw and format to JSON (application/json).
1. Enter the movie Data in the body of the request as JSON:

```
{
  "id": "13",
  "title": "Boyhood",
  "certificate": "15",
  "yearOfRelease": 2014,
  "director": "Richard Linklater"
}
```

1. Click Send.
1. You should see the movie you just created in the response.

</details>
