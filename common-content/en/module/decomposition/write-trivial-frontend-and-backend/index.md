+++
title = "Write a frontend and backend"
headless = true
time = 60
facilitation = false
[objectives]
    1="Run a frontend and backend which can communicate with each other"
+++

{{<note type="Exercise">}}
Take the example stateful backend we already saw, and adapt it so that it serves the API we designed.

You can test it by running your backend and making the following requests to it:

* `curl http://127.0.0.1:3000/`
* `curl -X POST --data '{"author": "Ibrahim", "quote": "Hello"}' http://127.0.0.1:3000/`

Make sure the responses you get match the API specification we designed.
{{</note>}}

Now that you have a backend which meets the API specification we designed, let's make a frontend that can talk to it.

You are free to borrow parts of your previous quote generator website, or make one from scratch.

{{<note type="Exercise">}}
Make a quote generator frontend which fetches quotes from your backend.

Your frontend should not have any quotes hard-coded in it. It should make a `fetch` request to your backend, and render whatever quote was returned.

It should have a button to fetch a new quote, which should fetch and render a different quote.

It can be as ugly as you want, the purpose of this exercise is not to make a beautiful UI, but to see how things connect.

You don't need to support adding new quotes yet - we'll do that later.
{{</note>}}

> [!TIP]
> You will probably hit errors when your frontend tries to talk to your backend due to [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS).
>
> You can work around these by adding the following lines of code to your backend:
> ```js
> import cors from "cors";
> app.use(cors());
> ```
>
> You will need to `npm install cors` as well. [Read up on CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) to understand why this is.

Because our frontend talks to our backend, it has fewer limitations than the previous quote generator you made.

We don't currently expose the capability to add new quotes in our frontend. But our backend _does_ allow this. A user who knew where our backend was running, and what API it exposes, could use `curl` to add quotes, or could even build their own frontend for adding quotes.
