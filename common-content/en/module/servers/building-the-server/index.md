+++
title = 'Building the server'

time = 30
[objectives]
    1='Import the Express package in a file'
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

The first thing we need to do is build our server. You will often need to build a server when writing back-end code. You can write a server in plain JavaScript, but Express is simpler to work with.

#### 1. Create a `server.js` file

Let's build our server! In your project, create a new file called `server.js`. This is where all our server code is going to live.

```zsh
touch server.js
```

#### 2. `import` the `express` library

We just installed Express, but we need to make sure it is included in this file specifically so we can use its methods. In Node.js, when you want to use Express in another file, you must `import` it.

To require Express, write the following inside `server.js`:

```js
import express from "express";
```

{{<note type="warning" title="CommonJS legacy">}}
Sometimes you will see `require` instead of `import`. This is because `require` is the old (CJS) way of importing packages in Node.js and not all environments (like runkit) are updated yet. If you see `require` in the curriculum, probably use `import` instead.

CJS syntax: `const express = require("express");`
MJS syntax: `import express from "express";`
{{</note>}}

#### 3. Initialise the server

To initialise our server, we need to call the `express()` function. This will create an Express application for us to work with.

Add the second line of code to your `server.js` file:

```js
const express = require("express");
const app = express();
```

#### 4. Start 'listening' for potential requests

One more step left, we need to set a **port** for our server to listen to. Think of a port as a door number: any requests that come to the server will come via that door. Setting a port will allow us to find where our server is running.

We use the **`app.listen`** method to do this. This method takes two arguments: a **port** and a **callback function** telling it what to do once the server is running.

> Need clarification? Read more about the `app.listen` method in the [Express documentation](http://expressjs.com/en/4x/api.html#app.listen).

We're going to run our server on port `3000`, and add a `console.log` in the callback function. Update your `server.js` file, calling the `app.listen` method:

```runkit
const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("Server is listening on port 3000. Ready to accept requests!");
});
```

#### 5. Switch the server on!

You've built your server, but it isn't running yet. We need to run a command in
the terminal to do this. We are going to use the `node` keyword to run the
server file.

Type the following command in your terminal:

```sh
node server.js
```

If you see this, congratulations! You have built yourself a server!

![success](https://raw.githubusercontent.com/node-girls/workshop-cms/master/readme-images/step2-server02.png)

#### 6. npm script

To exit the running the server, type `ctrl + c`. Instead of running the server with `node server.js` every time, we can create an alias for it in `package.json`.

Under the `scripts` property, add `start: node server.js`. We can now run our server using `npm start` which will be an alias (a shortcut) to `node server.js`.

Go to the terminal and type `npm start` and make sure that the server still runs.
