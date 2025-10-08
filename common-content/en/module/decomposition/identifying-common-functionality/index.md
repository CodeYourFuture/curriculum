+++
title = "Identifying common functionality"
headless = true
time = 30
objectives = [
    "Identify and explain the risks and costs of duplicate code.",
    "Identify which code is equivalent, equivalent with parameters, or unique.",
]
+++

Often in different HTTP handlers we do the same thing. This happens because we use similar patterns. For instance, we may expect all of our request bodies to contain JSON objects. Or we may expect all requests from signed in users to have an `Authorization` header in a certain format.

For instance, an implementation of "receiving messages" and "receiving reactions to messages" may look like this:

```js {linenos=table}
app.post("/message", (req, res) => {
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
    if (typeof body !== "object" || !("user" in body) || !("message" in body)) {
      console.error(`Failed to extract user and message from post body: ${bodyString}`);
      res.status(400).send("Expected body to be a JSON object containing keys user and message.");
      return;
    }
    receiveMessage(body.user, body.message);
    res.send("ok");
  });
});

app.post("/react", (req, res) => {
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
    if (typeof body !== "object" || !("id" in body) || !("reaction" in body)) {
      console.error(`Failed to extract id and reaction from post body: ${bodyString}`);
      res.status(400).send("Expected body to be a JSON object containing keys id and reaction.");
      return;
    }
    if (!(body.id in messageReactions)) {
      res.status(404).send(`Got reaction to message id ${body.id} which doesn't exist.`);
      return;
    }
    const reactionsForMessage = messageReactions[body.id];
    if (!(body.reaction) in reactionsForMessage) {
      res.status(400).send(`Reaction ${body.reaction} isn't allowed.`);
      return;
    }
    reactionsForMessage[body.reaction]++;

    res.send("ok");
  });
});
```

(It's ok if your implementation looked different, but we're going to talk about this example).

Both of these POST handlers mostly contain code for parsing a response body as JSON.

This causes a few problems:
1. Imagine we found a bug in our parsing - we'd need to fix that bug in multiple places.
1. It's really hard to tell, at a glance, what each handler is actually doing.

Let's try to work out what is specific to each handler, and what is more general shared behaviour.

## Specific vs shared behaviours

Both handlers accumulate chunks of the request as a string, then parse them as a JSON object, returning an error if this failed:

```js {linenos=table,hl_lines=["2-13", "25-36"]}
app.post("/message", (req, res) => {
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
    if (typeof body !== "object" || !("user" in body) || !("message" in body)) {
      console.error(`Failed to extract user and message from post body: ${bodyString}`);
      res.status(400).send("Expected body to be a JSON object containing keys user and message.");
      return;
    }
    receiveMessage(body.user, body.message);
    res.send("ok");
  });
});

app.post("/react", (req, res) => {
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
    if (typeof body !== "object" || !("id" in body) || !("reaction" in body)) {
      console.error(`Failed to extract id and reaction from post body: ${bodyString}`);
      res.status(400).send("Expected body to be a JSON object containing keys id and reaction.");
      return;
    }
    if (!(body.id in messageReactions)) {
      res.status(404).send(`Got reaction to message id ${body.id} which doesn't exist.`);
      return;
    }
    const reactionsForMessage = messageReactions[body.id];
    if (!(body.reaction) in reactionsForMessage) {
      res.status(400).send(`Reaction ${body.reaction} isn't allowed.`);
      return;
    }
    reactionsForMessage[body.reaction]++;

    res.send("ok");
  });
});
```

Both implementations check that the object contains certain keys, but they each check for different specific keys. These are doing the same thing, but with different parameters:

```js {linenos=table,hl_lines=["14-18", "37-41"]}
app.post("/message", (req, res) => {
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
    if (typeof body !== "object" || !("user" in body) || !("message" in body)) {
      console.error(`Failed to extract user and message from post body: ${bodyString}`);
      res.status(400).send("Expected body to be a JSON object containing keys user and message.");
      return;
    }
    receiveMessage(body.user, body.message);
    res.send("ok");
  });
});

app.post("/react", (req, res) => {
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
    if (typeof body !== "object" || !("id" in body) || !("reaction" in body)) {
      console.error(`Failed to extract id and reaction from post body: ${bodyString}`);
      res.status(400).send("Expected body to be a JSON object containing keys id and reaction.");
      return;
    }
    if (!(body.id in messageReactions)) {
      res.status(404).send(`Got reaction to message id ${body.id} which doesn't exist.`);
      return;
    }
    const reactionsForMessage = messageReactions[body.id];
    if (!(body.reaction) in reactionsForMessage) {
      res.status(400).send(`Reaction ${body.reaction} isn't allowed.`);
      return;
    }
    reactionsForMessage[body.reaction]++;

    res.send("ok");
  });
});
```

Then each implementation does something quite different. The highlighted code is very specific to what the endpoint is for:

```js {linenos=table,hl_lines=["19-20", "42-53"]}
app.post("/message", (req, res) => {
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
    if (typeof body !== "object" || !("user" in body) || !("message" in body)) {
      console.error(`Failed to extract user and message from post body: ${bodyString}`);
      res.status(400).send("Expected body to be a JSON object containing keys user and message.");
      return;
    }
    receiveMessage(body.user, body.message);
    res.send("ok");
  });
});

app.post("/react", (req, res) => {
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
    if (typeof body !== "object" || !("id" in body) || !("reaction" in body)) {
      console.error(`Failed to extract id and reaction from post body: ${bodyString}`);
      res.status(400).send("Expected body to be a JSON object containing keys id and reaction.");
      return;
    }
    if (!(body.id in messageReactions)) {
      res.status(404).send(`Got reaction to message id ${body.id} which doesn't exist.`);
      return;
    }
    const reactionsForMessage = messageReactions[body.id];
    if (!(body.reaction) in reactionsForMessage) {
      res.status(400).send(`Reaction ${body.reaction} isn't allowed.`);
      return;
    }
    reactionsForMessage[body.reaction]++;

    res.send("ok");
  });
});
```

Ideally, most of the code in these functions would be specific to the behaviour of the handler. It would be easy to see each function does from reading them.
