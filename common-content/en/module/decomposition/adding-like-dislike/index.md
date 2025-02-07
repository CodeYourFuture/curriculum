+++
title = "Adding like/dislike"
time = 120
emoji= "👍👎"
objectives = [
    "Identify what data needs to be stored and exchanged between a client and server.",
    "Devise a scheme for differentiating messages with different meanings (e.g. a new message vs a new like).",
    "Contrast giving updated values as absolute values or relative changes.",
    "Implement an end-to-end feature involving data updates and reconciliation across a client and server.",
]
+++

The last requirement we have for our chat application is the ability to like/dislike a message (and see what messages have been liked/disliked).

{{<note type="Exercise">}}
Think about what information a client would need to provide to a server in order to like/dislike a message.

Think about what information a server would need to provide to a client in order to display how many likes/dislikes a message has.

Think about what information a server would need to provide to a client in order to _update_ how many likes/dislikes a message has.

Write these things down.
{{</note>}}

### Identifiers

One of the key new requirements to add liking/disliking a message is knowing _which_ message is being liked/disliked.

When a client wants to like a message, it needs some way of saying _this_ is the message I want to like.

This suggests we need a unique identifier for each message:
* When the server tells a client about a message, it needs to tell it what the identifier is for that message.
* When a client tells the server it wants to like a message, it needs to tell it the identifier for the message it wants to like.
* When the server tells a client a message has been liked, it needs to tell the client which message was liked, and the client needs to know enough about that message to be able to update the UI.

### Message formats

Now that your server will be sending multiple kinds of updates ("Here's a new message", or "Here's an update to the number of likes of an existing message"), you'll need to make sure the client knows the difference between these messages. The client will need to know how to act when it receives each kind of message.

### Changes or absolutes?

When new likes happen, a choice we need to make is whether the server should tell a client "this message was liked again" or should tell the client "this message now has 10 likes". Both of these can work.

{{<note type="Exercise">}}
Write down some advantages and disadvantages of a server -> client update being "+1 compared to before" or "now =10".

Choose which approach you want to take.
{{</note>}}

{{<note type="Exercise">}}
Implement liking and disliking messages.

If a message has a non-zero number of likes or dislikes, the frontend needs to show this.

The frontend needs to expose some way for a user to like or dislike any message.

When a user likes or dislikes a message, the frontend needs to tell the backend about this, and the backend needs to notify all clients of this.

When a frontend is notified by a backend about a new like or dislike, it needs to update the UI to show this.

You may do this in your polling implementation, WebSockets implementation, or both.
{{</note>}}
