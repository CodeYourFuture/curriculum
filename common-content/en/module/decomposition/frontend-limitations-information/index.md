+++
title = "Limited information"
headless = true
time = 20
facilitation = false
hide_from_overview = true
objectives = [
    "Identify strategies for updating information in a static website.",
    "Explain why needing dynamic information may require us to write a backend.",
]
+++

{{<multiple-choice
   question="What is a frontend?"
   answers="Everything needed to make a website work. | The part of the website the user directly interacts with. | The part of a website that stores data."
   feedback="No - a frontend is just one part of a website. Some websites only have a frontend, but many of other parts too. | Right! | No - The frontend is generally stateless (doesn't store data)."
   correct="1" >}}

When we ask a server to serve us a static frontend, it can only give us the files it knows about.

Imagine we wanted to display the current weather in Rome on our website.

How could the server know that information? How could it give it to the user?

We know that our static frontend can only serve the files it knows about. So someone will need to save in a file on the server what the weather currently is.

There are a number of ways we could achieve this, e.g.:
* We could never update our file, and just serve out of date data.
* Someone with access to the server could connect to it and edit the file.
* We could set up some automated process which checks the weather, generates a new file, and uploads the new version to the server.

If we only host a static frontend, it is possible for us to update the information in it. But it is limiting.

Another approach, is that our frontend could know how to request information from a backend. That could be a backend we run, or one that someone else runs.

We have seen this when we have used `fetch`. `fetch` allows our static frontend to ask some other server for information.

We might not know whether the server we're asking for information is static or dynamic:

It could:
* Only serve information it already knows in its own files (i.e. it is a static frontend itself).
* Look up the information from a database which may change.
* Ask yet another server for information.

Even if we use `fetch` from our frontend, it is still a static frontend. We still serve it to users by giving them the same static files.

If someone else already runs a server we can `fetch` from, we can probably keep our own website just being a static frontend.

But if we need more dynamic information, and there isn't a convenient place we can fetch it from, we may need to write/host something we can `fetch` from ourselves. We call this a backend.

{{<multiple-choice
   question="What is a backend?"
   answers="Everything needed to make a website work. | A part of the website that we didn't write. | A part of the website the user doesn't directly interact with."
   feedback="No - websites need frontends so that people can actually interact with them. | No - sometimes we may talk to a backend we didn't write, but this isn't always the case. | Right! A backend may supply information to a frontend, which will actually display it to the user."
   correct="2" >}}
