+++
title = "Repeated client requests for updates"
headless = true
time = 90
facilitation = false
objectives = [
    "Stream live updates from a server by using repeated HTTP polling.",
]
+++

First let's explore how the client can remember "since when".

{{<note type="Exercise">}}
Teach your backend how to answer "since when" queries.

You can choose whether you want to use array indexes, timestamps in objects, or some other "since when" tracker.

You can also choose whether you want this to be the same endpoint as your "get all messages" endpoint (with some query parameter), or a separate endpoint.
{{</note>}}

Now that our backend can answer the question "show me messages since", we can update our frontend to repeatedly ask for new messages, and add them to the UI.

Here is an example function we could write to do this:

```js
const keepFetchingMessages = async () => {
    const lastMessageTime = state.messages.length > 0 ? state.messages[state.messages.length - 1].timestamp : null;
    const queryString = lastMessageTime ? `?since=${lastMessageTime}` : "";
    const url = `${server}/messages${queryString}`;
    const rawResponse = await fetch(url);
    const response = await rawResponse.json();
    state.messages.push(...response);
    render();
    setTimeout(keepFetchingMessages, 100);
}
```

It asks for messages since the last seen message (or all messages, if we don't know about any), updates the known messages state, re-renders the page, and then calls itself in 100ms.

This means that within about 100ms of a message being sent, we should know about it and display it.

We only transfer new messages, we're not sending all messages over the network every 100ms. That would be a lot of data.

But we _are_ making a lot of requests. Probably most of those requests get an empty response. And this is in its own way expensive - making a new HTTP connection over and over again takes some compute and network resources. And each time we make a request, our server has to do some work to work out how it should answer.
