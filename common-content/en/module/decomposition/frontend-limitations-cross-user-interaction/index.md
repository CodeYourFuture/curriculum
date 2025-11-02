+++
title = "Limited cross-user interaction"
headless = true
time = 10
facilitation = false
hide_from_overview = true
objectives = [
    "Explain why sharing state across users may require us to write (or use) a backend.",
]
+++

We know if we want to share information between different computers, we need some backend to store that information so that the other computer can ask for it.

When we have multiple users, we have the same problem.

Imagine we're building a chat website, where multiple people can visit and talk with each other.

We couldn't build this if we only had a static frontend. When one user sends a message, other users wouldn't have any way of knowing it was sent. The message doesn't _go_ anywhere, it stays in the sender's browser.

If we want different users to be able to interact in any way, we need a backend they can interact through.

There are lots of examples of interaction, e.g.
* Live chat
* Seeing each other's posts
* Liking someone else's picture
* Seeing what someone else wrote in a list

All of these things require storing information from one user somewhere, so that another user can ask for it.

On websites, users don't interact directly with each other. They interact with a backend.
