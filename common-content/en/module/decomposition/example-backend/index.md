+++
title = "Example backend"
headless = true
time = 30
facilitation = false
hide_from_overview = true
objectives = [
    "Run a backend using Express and NodeJS.",
]
+++

Here is a small backend written in JavaScript:

```js
import express from "express";

const app = express();
const port = 3000;

const quotes = [
  {
    quote: "Either write something worth reading or do something worth writing.",
    author: "Benjamin Franklin",
  },
  {
    quote: "I should have been more kind.",
    author: "Clive James",
  },
];

function pickRandomQuote() {
  const index = Math.floor(Math.random() * quotes.length);
  return quotes[index];
}

app.get("/", (req, res) => {
  console.error("Received a request for a quote");
  const quote = pickRandomQuote();
  res.send(`"${quote.quote}" -${quote.author}`);
});

app.listen(port, () => {
  console.error(`Quote server listening on port ${port}`);
});
```

If you save it in a file, make sure there's a `package.json` file in the same directory, `npm install express`, and run the file, it will start a server listening on TCP port 3000.

Express is a library which lets you listen for HTTP requests, and describe how you want to respond to them with callback functions.

Only two things in this file are new to us:

```js
app.listen(port, () => {
  console.error(`Quote server listening on port ${port}`);
});
```

This code tells Express to listen for incoming HTTP requests on the port specified by the `port` variable (and also to log to stderr saying it's doing so).

```js
app.get("/", (req, res) => {
  console.error("Received a request for a quote");
  const quote = pickRandomQuote();
  res.send(`"${quote.quote}" -${quote.author}`);
});
```

This code is instructing Express how to handle a request. It says "If you get a GET request for the path `/`, call this callback function".

What this callback function does is pick a random quote from an array, format it as a string, and send it as the body of an HTTP response. It also logs to stderr when it does this.

{{<note type="Exercise">}}
Run this code on your computer.

Open your web browser and visit [http://127.0.0.1:3000](http://127.0.0.1:3000)

You should see a quote displayed.

Refresh the page a few times. You should see the quote isn't always the same.

Look at the stderr of your `node` process. What do you see?

Make sure you understand how your web browser is talking to your server, and why you're seeing what you see.
{{</note>}}

{{<note type="Exercise">}}
We can also use the `curl` command line tool to make an HTTP request from our terminal.

Try running: `curl http://127.0.0.1:3000` and see what it outputs.

Try running: `curl -v http://127.0.0.1:3000` - try to explain what every line that was printed means.
{{</note>}}
