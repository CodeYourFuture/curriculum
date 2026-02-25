+++
title = 'Integration with NodeJS'

time = 45
[objectives]
    1='Connect a PostgreSQL database to a NodeJS application'
    2='Retrieve data from a PostgreSQL database in a NodeJS application'
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

### Introduction to node-postgres

_"node-postgres is a collection of node.js modules for interfacing with your PostgreSQL database."_ - [https://node-postgres.com/](https://node-postgres.com/)

In the following, we will use _node-postgres_ to...

1. Connect to a database
2. Send SQL queries to the database and get results

### Loading data from a database with a GET endpoint

Let's build a brand new NodeJS application with a single GET endpoint to load the list of customers that you already have in the `customers` table of the `{{<our-name>}}_hotels` database.

First, create a new NodeJS application that we will call **{{<our-name>}}-hotels-api** (enter `server.js` when asked for the entry point):

```bash
mkdir {{<our-name>}}-hotels-api
cd {{<our-name>}}-hotels-api
npm init
```

As before, we will use the Express library to build our API, and the node-postgres library to connect with our database:

```bash
npm install --save express
npm install --save pg
```

Create a `server.js` file, import express, initialise the server and start listening for requests:

```js
const express = require("express");
const app = express();

app.listen(3000, function () {
  console.log("Server is listening on port 3000. Ready to accept requests!");
});
```

Import pg library and create a new GET endpoint to load the list of customers:

```js
const { Pool } = require("pg");

const db = new Pool({
  user: "keith", // replace with you username
  host: "localhost",
  database: "{{<our-name>}}_hotels",
  password: "",
  port: 5432,
});

app.get("/customers", function (req, res) {
  db.query("SELECT id, name, city, phone FROM customers")
    .then((result) => {
      res.json(result.rows);
    })
    .catch((error) => {
      console.log(error);
    });
});
```

In the code above:

- We first import the `Pool` class from the pg library, which is used to connect to a database
- We create a new connection (`db`) where we specify the credentials to connect to the {{<our-name>}}\_hotel database
- We then create a new `/customers` endpoint where we use the method `query()` to send a SQL query to load all the customers from the table `customers` and return the results with `result.rows`. The `query` method returns a Promise: so we can access the returned rows using a `.then` block. You can write any valid SQL query that you learned in the `query()` method!

**_Note:_** There is no semicolon to end the SQL statement.

Start your server with `node server.js` and try to reach the `/customers` endpoint to see the list of customers currently available in your `{{<our-name>}}_hotels` database. You can try to create/update/delete customers using psql to verify that your API always returns what is stored in your database.
