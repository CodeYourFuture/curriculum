+++
title = "Limitations of a single request/response"
headless = true
time = 30
facilitation = false
emoji= "✋"
objectives = [
    "Identify the limitations of loading a website via a single request and response.",
    "Give examples of functionality that relies on subsequent data transfer from the server to the client.",
    "Identify and explain why clients typically initiate requests.",
]
+++

HTTP is a single-request/single-response protocol.

A client makes a single request, and a server sends a single response.

This leaves no room for updates. In our chat example, we made a request, and the server could tell us all of the messages it knew about when it responded.

If a new message comes in, the server has no way of telling us about it. It already sent its response.

We can imagine a few ways to overcome this limitation, for example:
1. The client could ask the server again.
2. We could use something _other_ than an HTTP request which allows multiple responses, or bi-directional communication.
3. The client could ask the server to make an HTTP request to it if there are new updates.

### Limitations of an un-addressable client

The client probably can't ask the server to make an HTTP request to it if there are new updates.

This would effectively ask the client to act as a server, and the server to act as a client.

This is possible! One program can be both a client and a server.

But it is difficult, because to make a connection to a server we need to know an address for it. And most computers running web browsers don't have a public address other computers can use to access them.

If it did have a public address, the client would also need to reserve a port so that when an HTTP request came into the computer, the operating system would know how to give it to the right web-page.

Most web browsers don't have an API for reserving a port and sending a publicly accessible address+port to a server, so we probably can't do this.

### Overcoming these limitations

We've seen that asking the server to make an HTTP request to the client is hard. Let's explore the other two options we mentioned.

#### The client could ask the server again

We've seen that the server can't just send a response to the client without a request. But a frontend can do things after a page first loads. The frontend could ask the backend for any new messages.

#### The client and server could set up bi-directional communication separate from HTTP request/response pairs

Most Web browsers support [the WebSocket API](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API), which allows bi-directional communication.

We will try out both of these solutions.
