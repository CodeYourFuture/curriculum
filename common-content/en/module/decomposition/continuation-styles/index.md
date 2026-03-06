+++
title = "Continuation styles"
time = 45
objectives = [
    "Compare different approaches to choosing how to handle potential request errors.",
]
+++

We extracted functions from our code. We saw three different ways of deciding what to do next:

```js
app.post("/message", (req, res) => {
  parseRequestAsJsonObject(req, res, (req, res, body) => {
    if (!ensureFields(body, res, ["user", "message"])) {
      return;
    }
    receiveMessage(body.user, body.message);
    res.send("ok");
  });
});
```

1. `app.post` takes a callback which expects two arguments: a request, and a response. It resolves to a completed state when `res.send` is called (which may be done asynchronously).
1. `parseRequestAsJsonObject` takes a callback very similar to `app.post`'s, but which also takes a `body` parameter.
1. `ensureFields` itself calls `res.send` if there was an error, and returns a boolean indicating whether the function should keep going or stop.

Each of these approaches is doing something similar, but they're all a little different.

Let's look at a few different ways we could've written `ensureFields` and `parseRequestAsJsonObject`:

## More callbacks

`ensureFields` could've taken a callback to call if the fields were correct:

```js
app.post("/message", (req, res) => {
  parseRequestAsJsonObject(req, res, (req, res, body) => {
    ensureFields(req, res, body, ["user", "message"], (req, res, body) => {
      receiveMessage(body.user, body.message);
      res.send("ok");
    });
  });
});
```

This works, but lots of callbacks can get quite hard to read and follow.

We've seen a similar problem before with asynchronous code. And we've seen Promises, and `async`/`await` as ways of solving that problem.

Unfortunately, the reason we need callbacks here is different, and so can't be solved exactly the same way. The problem here is that a function cannot tell the function that called it to stop running. That's what we're doing in the original code with:

```js
if (!ensureFields(body, res, ["user", "message"])) {
  return;
}
```

`ensureFields` really wants to tell the calling function "If the fields aren't correct, I've already rejected the request, you should stop running". But it can't automatically do this. So it returns a boolean, and we need to _check_ it and decide to call `return` ourselves.

We could use Promises to manage our callbacks a bit better, but we can't use `async`/`await` because it doesn't have a way to say "return early and stop running".

## Hiding information in existing parameters

`parseRequestAsJsonObject` takes a callback which takes three parameter: `req`, `res`, and `body`.

Alternatively, we could've written `parseRequestAsJsonObject` in such a way that it would add information to the `req` parameter, rather than require an extra one:

```js
app.post("/message", (req, res) => {
  parseRequestAsJsonObject(req, res, (req, res) => {
    ensureFields(req, res, ["user", "message"], (req, res) => {
      receiveMessage(req.body.user, req.body.message);
      res.send("ok");
    });
  });
});
```

Here `parseRequestAsJsonObject` would add a property named `body` to the `req` object it was passed, which callbacks can access as `req.body`.

In some ways, it's really useful to have this third parameter. It means it's obvious to us which functions expect to be able to access the parsed body. It also makes it obvious that we can't use our callback _without_ going via `parseRequestAsJsonObject` - i.e. we can't write:

```js
app.post("/message", (req, res) => {
  receiveMessage(body.user, body.message);
  res.send("ok");
});
```

Because there is no variable called `body` - we can _only_ use this in a callback which declares `body`.

In other ways, it's annoying that the {{<tooltip title="Function signature" text="signature of the function">}}The signature of a function is its name, parameters, and return value. It describes how the function is called, and what it produces, without worrying about how it does its work.{{</tooltip>}} has changed. Imagine if we had two different pieces of code here - one which parses the request body as an object, one which gets the user's username based on an authentication token. What order should they add their parameters to the expected callbacks? Would we write:

```js
app.post("/message", (req, res) => {
  parseRequestAsJsonObject(req, res, (req, res, body) => {
    checkAuthentication(req, res, body, (req, res, body, username) => {
      // Handle the request here
    });
  });
});
```

Or would we write:

```js
app.post("/message", (req, res) => {
  checkAuthentication(req, res, body, (req, res, username) => {
    parseRequestAsJsonObject(req, res, (req, res, username, body) => {
      // Handle the request here
    });
  });
});
```

Because we change the signatures here, the order actually matters. These two functions which extract independent information need to be aware of each other and can only be called in a particular order. Maybe in some of our endpoints we only want to call one of them, but they're now tied together. These {{<tooltip title="Orthogonality" text="orthogonal">}}Orthogonal means unrelated or independent. Parsing the Authorization header is orthogonal to parsing the request body because they can be done separately and don't impact each other.<br /><br />But using the results of those may not be orthogonal, e.g. if we're editing a post, and the request body contains the ID of the post we're trying to edit, the user you're authenticated as may affect whether you're allowed to edit that message.{{</tooltip>}} concepts have become linked.

Modifying the existing parameters (e.g. setting `req.body`) can keep our code more orthogonal. But it also makes some behaviour implicit rather than explicit: taking an argument as a parameter makes it explicit that you expect that parameter to be passed. Just calling `req.body` and hoping `body` has been set _hides_ the requirement that `parseRequestAsJsonObject` was already called. Including requirements in function signatures makes explicit the needs of the function.

## Control over next steps

Let's look at three different ways `ensureFields` could be written:

### Complete control over next steps

`ensureFields` could take a callback to call on success, and could reject the request on failure. It would have complete control over what happens next for this request:

```js
const ensureFields = (req, res, expectedFields, callback) => {
  const missingFields = [];
  for (const expectedField of expectedFields) {
    if (!(expectedField in req.body)) {
      missingFields.push(expectedField);
    }
  }
  if (missingFields.length > 0) {
    const joinedExpectedFields = expectedFields.join(", ");
    const joinedMissingFields = missingFields.join(", ");
    console.error(`Failed to extract fields ${joinedMissingFields} from post body: ${bodyString}`);
    res.status(400).send(`Expected body to be a JSON object containing keys ${joinedExpectedFields} but was missing ${joinedMissingFields}.`);
  } else {
    callback(req, res);
  }
};
```

### Responsible for rejecting but not continuing

```js
const ensureFields = (req, res, expectedFields) => {
  const missingFields = [];
  for (const expectedField of expectedFields) {
    if (!(expectedField in req.body)) {
      missingFields.push(expectedField);
    }
  }
  if (missingFields.length > 0) {
    const joinedExpectedFields = expectedFields.join(", ");
    const joinedMissingFields = missingFields.join(", ");
    console.error(`Failed to extract fields ${joinedMissingFields} from post body: ${bodyString}`);
    res.status(400).send(`Expected body to be a JSON object containing keys ${joinedExpectedFields} but was missing ${joinedMissingFields}.`);
    return false;
  } else {
    return true;
  }
};
```

### Responsible for deciding, but not rejecting or continuing

```js
const ensureFields = (req, res, expectedFields) => {
  const missingFields = [];
  for (const expectedField of expectedFields) {
    if (!(expectedField in req.body)) {
      missingFields.push(expectedField);
    }
  }
  return missingFields;
};
```

{{<note type="Exercise">}}
Compare these three approaches. What advantages does each have? What problems do they have? When would each be better to choose?

Write down your thoughts.

In class this sprint you will discuss this.
{{</note>}}
