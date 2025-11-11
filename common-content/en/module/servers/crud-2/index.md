+++
title = 'CRUD Again'

time = 10
[objectives]
    1='Define CRUD'
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

We are building a CRUD API. CRUD stands for **C**reate, **R**etrieve, **U**pdate, **D**elete. If you think about it, this is what most applications do:

✨ **C**reate some "resources"
🐕 **R**etrieve them (GET them)
📨 **U**pdate them
🗑️ **D**elete them

### 🎯 Goal

Our API will manage movie data. It will:

✨ **C**reate a new movie,
🐕 **R**etrieve a list of movies or a single movie
📨 **U**pdate a movie

We will build this endpoint:

1. `PUT /movies/:movieId should update a movie (that matches the passed movieId)`

👉 You should already have a project using the [Node-Starter-Kit](https://github.com/CodeYourFuture/Node-Starter-Kit). If not, do last week's prep before you go on.
