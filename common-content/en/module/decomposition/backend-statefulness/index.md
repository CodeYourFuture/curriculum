+++
title = "Backend statefulness"
headless = true
time = 30
facilitation = false
objectives = [
    "Identify whether some program is stateful or stateless.",
]
+++

Our example backend is {{<tooltip title="Stateless" text="stateless">}}Stateless means it doesn't keep state. It doesn't remember things between one request and the next. One request cannot impact another.{{</tooltip>}}. If you make several requests to it, it will always do the same thing (even though doesn't always return exactly the same result!).

If you made a request from a different computer, or from different country, or on a different day, it would keep doing exactly the same thing. If you restarted the server, it would keep doing exactly the same thing.

If our backend allowed users to add new quotes, it would start having _state_. It would need to remember what quotes had been added. It would be **stateful**.

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

function randomQuote() {
  const index = Math.floor(Math.random() * quotes.length);
  return quotes[index];
}

app.get("/", (req, res) => {
  const quote = randomQuote();
  res.send(`"${quote.quote}" -${quote.author}`);
});

app.post("/", (req, res) => {
  const bodyBytes = [];
  req.on("data", chunk => bodyBytes.push(...chunk));
  req.on("end", () => {
    const bodyString = String.fromCharCode(...bodyBytes);
    let body;
    try {
      body = JSON.parse(bodyString);
    } catch (error) {
      console.error(`Failed to parse body ${bodyString} as JSON: ${error}`);
      res.status(400).send("Expected body to be JSON.");
      return;
    }
    if (typeof body != "object" || !("quote" in body) || !("author" in body)) {
      console.error(`Failed to extract quote and author from post body: ${bodyString}`);
      res.status(400).send("Expected body to be a JSON object containing keys quote and author.");
      return;
    }
    quotes.push({
      quote: body.quote,
      author: body.author,
    });
    res.send("ok");
  });
});

app.listen(port, () => {
  console.error(`Quote server listening on port ${port}`);
});
```

Here we have added a new request handler. If someone makes a POST request to the path `/`, we try to interpret the body they posted as a JSON object.

If we can find a quote and author in it, we will store it in our list of quotes, and start serving it up to future requests.

If we can't process the request, we return an error describing what went wrong.

The details of exactly how we understand the request aren't important. The important thing is that we _are_ taking information from the request, and are then modifying the `quotes` array.

> [!NOTE]
> **State** is a general term that is used for related but different things in different contexts.
>
> State almost always refers to information that we store, which may change.

Because we're _modifying_ the `quotes` array, it is now state.
