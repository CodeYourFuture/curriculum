+++
title = 'CRUD'

time = 10
[objectives]
    1='Define CRUD'
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

We will build a CRUD API. CRUD stands for **C**reate, **R**etrieve, **U**pdate, **D**elete. If you think about it, this is what most applications do:

✨ **C**reate some "resources"
🐕 **R**etrieve them (GET them)
📨 **U**pdate them
🗑️ **D**elete them

### 🎯 Goal

Our API will manage movie data. It will:

✨ **C**reate a new movie,
🐕 **R**etrieve a list of movies or a single movie

We will build these endpoints:

1. `GET /movies should return all the movies`
1. `GET /movies/:movieId should return a single movie (that matches the passed movieId)`
1. `POST /movies should save a new movie`

👉 Fork the [Node-Starter-Kit](https://github.com/CodeYourFuture/Node-Starter-Kit) repo and clone it to your computer. Then run `npm install` to install the dependencies.
