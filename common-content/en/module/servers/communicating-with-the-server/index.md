+++
title = 'Communicating with the server'

time = 30
[objectives]
    1='Define a handler function'
    2='Inspect the request and response objects in console'
    3='Inspect the request and response objects in Postman'
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

Now that we've built the server, we need to communicate with it. We are going to control the server with **handler functions**.

#### What is a handler function?

When a request reaches the server, we need a way of responding to it. In comes the handler function. The handler function receives requests and handles them, hence the name.

The handler function is always called with a `request` and `response` object. The response object is what gets sent back to the client. It contains the information that gets displayed in the web page. You can decide what to send back in your response.

#### What does a handler function look like in Express?

The `get()` [method](http://expressjs.com/en/api.html#app.get.method) is one of the methods used to define a handler function in Express. It takes two parameters: the **endpoint** at which to trigger an action, and the handler function that tells it exactly what to do.

Here's an example:

```js
// req is the Request object, res is the Response object
// (these are variable names, they can be anything but it's a convention to call them req and res)
app.get("/", (req, res) => {
  res.send("Hello World!");
});
```

Here, we are telling our server to respond with "Hello World!" when someone tries to access the webpage.

#### 1. Create your own handler function

Add a handler handler function to send back a message to the client. To do that, use the Express `send()` [method](http://expressjs.com/en/api.html#res.send). This will update the response object with the message.

Update your handler function:

```runkit
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Yay Node!");
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000. Ready to accept requests!");
});
```

`console.log` the `request` object inside the handler function.

1. Restart your server
1. Send the request again with Postman
1. Go to your terminal to see what it looks like.

You should see a lot of data come through!

#### 2. Check it out in Postman

Quit your server in the terminal with `ctrl + c`. Then restart it to run your new changes.

```sh
node server.js
```

1. Open Postman
1. Send a `GET` request to `http://localhost:3000`.

If you see your message in Postman, congratulations! You just sent your first response from the server.

#### Checkpoint

Do you understand all these terms? You should be able to see examples of them in Postman

```objectives
- [ ] Client
- [ ] Server
- [ ] Front-end
- [ ] Back-end
- [ ] Full stack developer
- [ ] Request
- [ ] Response
- [ ] HTTP
- [ ] HTTP Response Codes
- [ ] HTTP Request Methods (or Verbs)
```
