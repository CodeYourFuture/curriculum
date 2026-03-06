+++
title = "Extracting a middleware"
time = 105
objectives = [
    "Identify and explain the risks and costs of manually calling code (e.g. authentication validators/extractors) from multiple route handlers.",
    "Explain the middleware pattern.",
    "Implement and wire up a middleware with Express.",
]
+++

It is very common that in an application there are operations we want to perform for most or all requests.

For instance, we often want to check authentication details for _every_ request to an endpoint which requires authentication.

And typically we use the same format for all POST request bodies to an application (often JSON, but some applications use other formats) - we want to parse _all_ POST request bodies in that format.

It can be annoying to have to write the same code (like calling `parseRequestAsJsonObject`) in every handler. It can also be **dangerous** to require doing so:

> [!WARNING]
>
> If we forget to call a function to check a user is logged in in one endpoint, that may be a big security problem.

One strategy to improve this is to use a {{<tooltip title="Middleware" text="middleware">}}A middleware is a piece of code which is called before route handlers.{{</tooltip>}}. A middleware may process the request, do extra checks (e.g. check an authorization token), or attach extra data (e.g. parsing a POST body as JSON and adding the fields to the request object). It can choose to respond to the request itself, or allow the route handler to do so.

{{<note type="Reading">}}
Read the [Express documentation on writing middleware](https://expressjs.com/en/guide/writing-middleware.html).
{{</note>}}

{{<note type="Exercise">}}
Write a tiny Express application. You must write two separate middlewares.

Requirements:
* There must be an endpoint which handles POST requests.
* A middleware should look for a header with name `X-Username`. If this is set, it will modify `req` to add a `username` property set to this value. If it is not set, the property should be set to `null`.
* A middleware should parse the request POST body as a JSON array. It should modify `req` to add a `body` property to this value. If the POST body was not a JSON array, or the array contains non-string elements, it should reject the request.
* The response should look like:

```
You are authenticated as Ahmed.

You have requested information about 4 subjects: Birds, Bats, Lizards, Bees.
```

or

```
You are not authenticated.

You have requested information about 1 subject: Bees.
```

or

```
You are authenticated as Gemma.

You have requested information about 0 subjects.
```

You can test your application by running some `curl` commands like:

```console
% curl -X POST --data '["Bees"]' -H "X-Username: Ahmed" http://localhost:3000
You are authenticated as Ahmed.

You have requested information about 1 subject: Bees.
{{</note>}}
