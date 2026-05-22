+++
title = "Long-polling"
headless = true
time = 90
facilitation = false
objectives = [
    "Stream live updates from a server by using long-polling.",
    "Compare the trade-offs involved with frequent small requests vs long-polling.",
]
+++

We noticed when we were repeatedly polling for updates that we were making lots of requests, and a lot of their responses were empty.

Another approach we could take is to make an HTTP request, but have the server not respond to it until there is a non-empty response.

One request gets one response, but the server can take some time to make that response.

This is _also_ expensive, but in a different way.

### Different kinds of expensive

Making lots of requests was expensive because establishing connections takes time, CPU, and network resource. And on the server calculating that there were no new messages to respond with took a bit of time.

Keeping requests open for a long time is expensive because it means the server needs to keep all of the resources associated with a request open. The whole time the request is waiting, the server needs to keep the TCP connection open, needs to keep the memory associated with the request, needs to remember that it should respond to it (and how to). It also means that we need to be careful about restarting the server (e.g. if we change its code and want to run the new code) - stopping the server will break any connections that are waiting.

When we were making lots of small quick connections, we could do things like start a new server, shift over all new traffic to it, and turn off the old server. This was easy for us to do because each request was quick, so we knew when we switched to the new server, any requests to the old server would be done quickly, and it wouldn't get any more.

Now that we're using long connections, if we turn on a new server and switch new requests to it, it may still be a while before the old server's requests are finished.

In different contexts, it may be worse to have lots of short requests, or fewer longer requests.

### Changing our code to support long-polling

On the client side, we probably don't need to change anything about our code. Just the requests it makes may take longer to resolve.

On the server side, we will need to change things around. Right now, our `GET` handler _always_ responds based on what it currently knows.

We want to change this.

If we don't have any messages to respond with, we want to wait until we _do_ have something to respond with.

We know `res.send` is a callback function - it's a function we can call when we have a response to send.

Now we don't always want to call `res.send` in our handler. Sometimes we want to say: "When we next get a message, call `res.send` with that message".

This means we need to share our callback between the `GET` handler for asking about new messages, and the `POST` handler for sending new messages.

When the `POST` handler saves a new message, we want to check if there are any `GET` handlers waiting for a message, and call those `GET` handlers' `res.send` callbacks with the new message.

To achieve this, we probably want to make a new piece of state on our server where we can remember which callbacks still need to be called with responses:

```js
const callbacksForNewMessages = [];
```

In our `GET` handler, we want to write some code to remember that someone of our callbacks aren't being instantly called, and will need calling in the future:

```js
if (messagesToSend.length === 0) {
    // Note: We need to use an arrow function here, rather than just pushing `res.send` directly.
    // This is because of handling of "this".
    // You can read about "this" at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
    callbacksForNewMessages.push((value) => res.send(value));
} else {
    res.send(messagesToSend);
}
```

and in our `POST` handler, when we are saving a new message we want to run some code to call any callbacks which are still waiting for a response when we get a new message:

```js
while (callbacksForNewMessages.length > 0) {
    const callback = callbacksForNewMessages.pop();
    callback([newMessage]);
}
```

Note how we're wrapping `newMessage` in an array - we need to return the same type of information whether we're immediately calling our callback, or doing it later on.

{{<note type="Exercise">}}
Update your backend to support long-polling.

You may want to make this an optional behaviour (e.g. by adding a command line flag, or allowing a client to opt in to fast- or long-polling based on a query parameter) so that you can easily experiment with both.
{{</note>}}
