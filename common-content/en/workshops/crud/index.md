# CRUD 101

## Learning Objectives

```objectives
- [ ] Define the acronym CRUD
- [ ] Process a GET request using Express and Node to retrieve data from memory
- [ ] Process a POST request using Express and Node and store data in memory
- [ ] Process a DELETE request using Express and Node to remove data from memory
```

## Requirements

Today we will build a CRUD API. CRUD stands for *C*reate, *R*etrieve,* U*pdate, *D*elete. If you think about it, this is what most applications do:

*C*reate some "resources"
*R*etrieve them (GET them)
*U*pdate them
*D*elete them

Make sure you have [a clone of the workshop code repo](https://github.com/Ara225/workshop-code) repository on your local machine before starting. The content for this workshop can be found in the `crud` subdirectory, including the `server.js` file mentioned below and the associated files required to run the app.

### 🎯 Workshop Objective

Our API will manage Beyoncé albums. It will:

*C*reate a new album,
*R*etrieve a list of albums or a single album,
*U*pdate an existing album's information
*D*elete an album

We will build these endpoints:

1. `GET /albums should return all the albums`
1. `GET /albums/:albumId should return a single album (that matches the passed albumId)`
1. `POST /albums should save a new album`
1. `DELETE /albums/:albumId should delete the album (that matches the passed albumId)`

### 1. `GET /albums should return all the albums`

In `server.js`, create a `GET /albums` endpoint that returns all the albums. Some albums have been provided for you in `albums.json`.

```js
app.get("/albums", (req, res) => {
  res.send(albumsData);
});
```

#### 🧪 Run and test

1. `npm run dev`
1. Open Postman
1. Make a GET request to `http://localhost:3000/albums`

### 2. `GET /albums/:albumId should return a single album (that matches the passed albumId)`

Sometimes, we do not want to list all the information in one request, maybe we only want to get the information related to a single album. Imagine if we have a page to display the details of one album. We could call the server and get all albums then filter the one we need client-side. It would be more effective to tell the server to just return the one album we are interested in.

We will now add a new endpoint to return only a single album GET /albums/:albumId. In this case, albumId will tell us what album we can return. The call will be `GET /albums/10` and that will return the album with that has `albumId: "10"`.

This endpoint has something different. The endpoint `/albums/:albumId` has a dynamic part. The `albumId` will vary depending on what the client sends.

In `server.js`, create a `GET /albums/:albumId` endpoint that returns a single album. The albumId will be passed as a parameter in the URL.

```js
app.get("/albums/:albumId", (req, res) => {
  const albumId = req.params.albumId;
 // now find the given album from the `albumsData` using the `albumId`
 // finally send the album you found back to the client
});
```

#### 🧪 Run and test

1. Save your changes
1. Make a GET request to `http://localhost:3000/albums/10`
1. Try changing the id in the URL and calling the endpoint again. What do you see?

### 3. `POST /albums should save a new album`

In order for our server-side to receive and use the data sent by the client, we will need to install and use a middleware.

The JSON middleware makes it easy for our route handlers to read JSON data from the request. If the Content-Type request header indicates that the request body contains JSON data then the middleware calls JSON.parse to convert the request body into a JavaScript data structure.

To register the JSON middleware, add the following to the server code:

```js
app.use(express.json()); // before our routes definition
```

In `server.js`, create a `POST /albums` endpoint that saves a new album. The album will be passed as a JSON object in the request body.

<details>
<summary> Step by step if you get stuck </summary>

1. Add the following code to `server.js`:

```js
app.post("/albums", function (req, res) {
  const newAlbum = req.body;
  albumsData.push(newAlbum);
  res.send("Album added successfully!");
});
```

1. Open Postman and create a new request.
1. Set the Request Type to POST.
1. Enter the URL for your endpoint, which should be http://localhost:3000/albums.
1. Set the Body Type to raw and format to JSON (application/json).
1. Enter the Album Data in the body of the request as JSON:

```
{
  "albumId": "13",
  "artistName": "Beyoncé",
  "collectionName": "B'Day (Deluxe Edition)",
  "artworkUrl100": "http://is5.mzstatic.com/image/thumb/Music/v4/6c/fc/6a/6cfc6a13-0633-f96b-9d72-cf56774beb4b/source/100x100bb.jpg",
  "releaseDate": "2007-05-29T07:00:00Z",
  "primaryGenreName": "Pop",
  "url": "https://www.youtube.com/embed/RQ9BWndKEgs?rel=0&controls=0&showinfo=0"
}
```

1. Click Send.
1. You should see the album you just created in the response.

</details>

### 4. `DELETE /albums/:albumId should delete the album (that matches the passed albumId)`

This means that `DELETE /albums/2` should delete an album with the id 2 and return `200` with `JSON { success: true }` to the user.

The code will look like this

```js
// notice .delete
app.delete("/albums/:albumID", function (req, res) {
  console.log("DELETE /albums route");
});
```

Can you work out how to remove an album using this code?

## Acceptance Criteria

- I have written a server that can handle the following requests:
  - GET /albums
  - GET /albums/:albumId
  - POST /albums
  - DELETE /albums/:albumId
- I have used Postman to test my server

## Resources

- [Express](https://expressjs.com/)
- [Express Cheatsheet](https://github.com/nbogie/express-notes/blob/master/express-cheatsheet.md)
