+++
title = "Extracting common functionality"
time = 30
objectives = [
    "Extract functionality used by multiple route handlers into a common function.",
]
+++

Having identified these three parts of our handlers, we can extract functions to make them more clear.

One way we could do this is:

```js {linenos=table}
app.post("/message", (req, res) => {
  parseRequestAsJsonObject(req, res, (req, res, body) => {
    if (!ensureFields(body, res, ["user", "message"])) {
      return;
    }
    receiveMessage(body.user, body.message);
    res.send("ok");
  });
});

app.post("/react", (req, res) => {
  parseRequestAsJsonObject(req, res, (req, res, body) => {
    if (!ensureFields(body, res, ["id", "reaction"])) {
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

const parseRequestAsJsonObject = (req, res, callback) => {
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
    if (typeof body !== "object") {
      console.error(`Got POST body which was not an object: ${bodyString}`);
      res.status(400).send("Expected body to be a JSON object.");
      return;
    }
    callback(req, res, body);
  });
}

const ensureFields = (body, res, expectedFields) => {
  const missingFields = [];
  for (const expectedField of expectedFields) {
    if (!(expectedField in body)) {
      missingFields.push(expectedField);
    }
  }
  if (missingFields.length > 0) {
    const joinedExpectedFields = expectedFields.join(", ");
    const joinedMissingFields = missingFields.join(", ");
    console.error(`Failed to extract fields ${joinedMissingFields} from post body: ${bodyString}`);
    res.status(400).send(`Expected body to be a JSON object containing keys ${joinedExpectedFields} but was missing ${joinedMissingFields}.`);
    return false;
  }
  return true;
};
```

## Why is this better?

Before, the `/message` function body was 20 lines. 18 were just for processing the post body, and 2 were for the actual functionality. 10% of the function was for relevant functionality.

Now, the function body is 7 lines. They say: "I expect the request to be a JSON object", "I expect these fields in the object", and then do the relevant functionality.

We can see at a glance what the function does. And the common functionality has a clear name explaining what it's doing, rather than needing us to read 18 lines to work it out.

We can also more easily see the _difference_ between what the two endpoints do. Each endpoint expects the request to be a JSON object. They both expect some fields, but different fields. Then they do something different with them. This is much easier to see than before, where a subtle difference may have been hard to notice.

We can also ignore the details of the helper functions if we don't need to know them. If we don't care exactly how the body is parsed as JSON, we can just trust that the function does it somehow. If we _do_ need to know, we can look into the function. If we need to change or fix something, we only need to do it in one place.
