+++
title = "Designing a streaming API"
headless = true
time = 30
facilitation = false
objectives = [
    "Describe the trade-offs of different streaming APIs.",
]
+++

So far we have a frontend that asks a backend for all of its chat messages, and shows them.

We want the frontend to find out about new messages.

One way we could do this is for our frontend to frequently ask our backend for all of its messages. We could then either re-render the page with all of the messages, or we could work out which messages are new and add them to the UI.

This approach can work, but it is {{<tooltip title="expensive">}}When we use the word expensive, we don't always mean in terms of money. Sometimes we mean something is slow, something will use a lot of memory, or will use a lot of some other resource{{</tooltip>}}. In this case, the reason it's expensive is that it involves sending a lot of data over the network. Often the _same_ data _repeatedly_.

A cheaper approach would be for the client to be able to ask only for the new messages. But this is a more complicated question than it seems. What does "new" mean? New since when?

We can divide approaches to identifying new messages based on whose job it is to answer the question "since when?".

### Remembering "since when" on the client

If the server tells the client, in its response, some identifier for its newest message (e.g. the timestamp, or some ID), the client could ask in its next request "Please give me all messages since this timestamp".

The client would need to remember the last timestamp/ID it has seen.

The server will need to be able to answer that question: "What messages have been sent since this time?".

There are a few ways we can support this on the server:
1. If we're storing messages in an array, in all our responses we could tell the client what the last index we returned to it was. Then the server could just `slice` the array to get the values to return.
2. Or if we don't want to expose array indexes (e.g. because perhaps messages can be deleted), we could put a timestamp in every message object, and `filter` our array based on the timestamp we're searching from.

### Remembering "since when" on the server

The server could remember, for each client, what the last message it sent to that client was.

The client would no longer need to remember the last timestamp/ID it had been sent. It would just ask for new messages.

The server would need a way of identifying which client is making a request, and would itself need to remember which messages it had already sent that client.

This simplifies things for the client, but means that the server needs to remember information for each client it has. If there are a lot of clients, this may be a lot of work, and take up a lot of memory. One challenge with this approach is that the server needs to know when it can forget about a client - if it never forgets about clients, it will keep using more and more memory to track this information for every client it's ever had. And we probably can't rely on a client to tell our backend "you can forget about me now".

We will try out both of these approaches in two different frontends to the same backend.
