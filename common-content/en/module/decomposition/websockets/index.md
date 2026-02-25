+++
title = "WebSockets"
time = 120
objectives = [
    "Stream live updates from a server using WebSockets.",
    "Discuss the trade-offs of using WebSockets or polling.",
    "Describe properties of message formats (e.g. including a command name).",
]
+++

> [WebSockets ](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API) are an API and protocol which create a two-way communication channel between two programs.

Websockets are used to establish a channel so that a backend can send updates to a frontend website.

You can read [an introduction to WebSockets](https://docs.developer.tech.gov.sg/docs/data-engineering-initiative-playbook/Chapter5/Introduction_to_WebSockets), as well as roughly [what a client looks like](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications), and [what a server does](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_servers).

On the server side, we will be using the [websocket npm package](https://www.npmjs.com/package/websocket) which lists a server example in its README.

> [!TIP]
>
> This sprint, you will need to submit _both_ a copy of your code which supports polling, _and_ a copy which supports WebSockets.
>
> You probably want to make a copy of your polling code, and have two separate (similar) pages in your repo.
>
> Note that this is different from other work you've done, where you make different branches for different pieces of work. We want both of your implementations on one branch.
>
> You should aim to share code between these implementations where possible.

On the backend, create a WebSocket server by adding this code:

```js
import { server as WebSocketServer } from "websocket";
const server = http.createServer(app);
const webSocketServer = new WebSocketServer({ httpServer: server });
```

Next, follow the example in the `websocket` npm package's documentation to have your server handle requests.

On the client-side, you will need to make a new `WebSocket` connection to the server.

Some things to think about when implementing WebSockets updates:

### Learn new APIs in isolation

It will be easier for you to learn a new API (like WebSockets) with a simple example.

Your goal is to make a WebSocket to stream new messages from the server to the client. Your existing codebase is more complicated and handles many other concerns. To explore WebSockets, configure the server to always report the message "Hello". This way, you can isolate the new process and test things out more easily.

You could even write a whole new website which _only_ makes a WebSocket connection and displays a message.

Once you have an example WebSocket working, and understand how it works, keep going. Apply your new understanding to the real problem you're trying to solve.

### Think about the protocol you want

WebSockets let you send arbitrary text (or binary) messages.

In our quote server, we switched from our backend returning a pre-formatted string of a quote, to returning a JSON object so we could get the parts ourselves.

Think about what structure would be useful for our client and our server to know about.

If we're going to add more messages in the future (e.g. for "liking" a message), how will the receiver of the message know what kind of message the one it receives is?

One thing we often do is wrap our message in an object, with a field specifically saying what the command is.

e.g. instead of sending:
```json
{
    "user": "Azin",
    "message": "Hello!"
}
```

we may send:

```json
{
    "command": "send-message",
    "message": {
        "user": "Azin",
        "message": "Hello!"
    }
}
```

This means that if we add new commands in the future, we don't need to change our existing code.

### Think about timings

When we first load a page, we need to get all of the messages that already exist.

After that, we can ask to be notified of new messages.

There are a few ways we could do that. An interesting question is what happens _between_ these events?

Imagine we made an HTTP GET request to ask for all of the messages, then created a WebSocket to get new messages. What happens if someone sent a message between when we got our response, and when the WebSocket was connected? How can we make sure we don't miss any messages?

Or imagine we made a WebSocket request, and expected to receive a list of all previous messages, and then to keep receiving updates. Does the server need to remember which messages have already been sent to each client?

{{<note type="Exercise">}}
How will you make sure that your client won't miss any new messages, after getting the initial messages? Write down your strategy.
{{</note>}}

### Remember WebSockets are bi-directional

Now, we're using a `POST` request to send a new message, and a `WebSocket` to stream receiving new messages. But we know that WebSockets are bi-directional - we can both send and receive information on them. We could change our sending logic to also use our WebSocket. Or we could keep using HTTP POST requests. Both of these approaches work.

{{<note type="Exercise">}}
Think: What advantages does each approach have?

Why might we want to change our implementation to use a WebSocket for sending messages?

Why might we want to keep using POST requests for sending messages?

Why might we want to support _both_ on our server? Why might we only want to support one on our server?
{{</note>}}
