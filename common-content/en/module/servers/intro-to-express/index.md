+++
title = 'Introduction to Express'

time = 30
[objectives]
    1='Create an Express server'
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

We have already learned about the **[Node.js](https://nodejs.org/en/)** runtime environment and how it allows us to run JavaScript code outside of the browser. We have also learned about the **[Node Package Manager (npm)](https://www.npmjs.com/)** and how it allows us to download and use other people's code in our own projects.

Now we will learn about **[Express](https://expressjs.com/)**, a Node.js framework that helps us to build web servers and APIs.

## 💁🏼‍♂️ What is a web server?

A web server is software that accepts requests for web pages, assets, APIs, and other network resources from client programs like web browsers. When a browser requests a web page, the server finds the desired content and returns the appropriate response.

### 🗺️ Explore the web server

Let's investigate a web server made in Node.

```runkit
//Load the 'express' library to easily handle HTTP conversations:
const express = require("express");

const app = express();

//Register some handlers for different routes.
app.get("/", (request, response) => {
    response.send("Hello thar!");
});
app.get("/two", (request, response) => {
    response.send("Another route");
});
app.get("/numbers", (request, response) => {
  const someData = [1, 2, 3];
  response.json(someData);
});
//Tell the server to start listening for requests.
app.listen(3000);
```

{{<note type="activity" title="Explore 5m">}}

Investigate the different parts of [the Node App](https://runkit.com/sallymcgrath/cyf-simple-server)

- `require` on Line 3
- `express()` on Line 5
- `app.get()` on Line 12, 26 and 20
- `app.listen()` on Line 29
- `response.send()` on Line 13 and Line 17
- `response.json()` on Line 22

Can you work out what each those lines are doing? Write down your predictions.

{{</note>}}

<details>
<summary>📚 Stretch Goals: make and run a local copy</summary>

### 🏘️ Run the Simple Server locally

{{<note type="activity" title="Set up your copy 5m">}}

1. Fork and clone: [https://github.com/CodeYourFuture/Node-Exercises](https://github.com/CodeYourFuture/Node-Exercises).
1. `cd` into the `cyf-simple-express` directory.
1. Run `npm install` to install the dependencies.
1. Once everything is installed, start the server with `npm start`

{{</note>}}
{{<note type="tip" title="Localhost">}}
Access your local API by going to `http://localhost:3000`
{{</note>}}

### 💅🏿 Modify the Server

{{<note type="activity" title="Poke around (10m)">}}
Now try to modify the `server.js` code to do something different.

#### Examples:

1. Say "Hello Margarita", instead of "Hello thar!"
2. Make it return an array of strings as json.
3. Make it return the current time
4. Advanced: make it return whatever you want!
   {{</note>}}

</details>
