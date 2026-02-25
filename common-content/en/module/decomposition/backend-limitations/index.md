+++
title = "Limitations of backends"
headless = true
time = 30
facilitation = false
objectives = [
    "Explain why a backend on its own doesn't provide reliable data persistence.",
    "Explain why we may prefer doing work in a frontend rather than backend to avoid latency.",
]
+++

We've already explored limitations of frontends.

We know a backend is just a program that runs for a long time.

### Lifetime

A major limitation of backends is that "a long time" probably isn't forever.

Sometimes we change the code of the backend. Or we need to restart the computer it's running on for an upgrade (computers are real, physical things!). Or its computer loses power and we need to start it again.

When this happens, the program starts again.

Think back to our quote server that allows users to POST new quotes. If we had to stop the server and start it again, we would lose all of the quotes users had saved. They're just stored in a variable, and a variable only lasts while the program it's in is running.

### Location

Another major limitation of a backend is where the code runs.

A backend's code runs on whatever server it's running on.

In contrast, a web frontend's code runs in the user's web browser.

#### Latency

One problem here is latency.

You've already seen latency problems when using `fetch`. We used Promises or `async`/`await` to handle a latency problem. And we did things like set placeholder text while waiting for data from a `fetch`.

Imagine if you had a "dark mode" button on a website, but clicking it required making a request to a backend.

Depending on where the backend and the user are physically located, it may take anywhere between 1ms and 500ms for a request to go between them.

If every time you clicked on something on a web page you needed to talk to the backend, you may need to wait half a second just for the request to travel to the server and for the response to travel back, ignoring how long it takes to actually process the request. This would be unusably slow for many applications.

So sometimes we do work in a frontend to avoid needing to talk to a backend.

For instance, many websites that show you a list of information let you sort or filter the information. We often implement sorting in the frontend, so that we don't need to wait for a round-trip to a backend. Sometimes this even means we implement some functionality twice - once on the backend _and_ once on the frontend, so that on first page load the backend will do some sorting or filtering, but if you interact with the frontend, additional sorting or filtering may be done there.

#### Context

Because web frontends run in the user's own browser, they have easy access to lots of information about the user's computer. For instance, a user's browser knows what language to use, what the user's time zone is, how big the browser window is, etc.

If our frontend code were instead running in a backend, the browser may need to include all of this information in every request it makes, just in case the backend needs to know it. This has a couple of drawbacks: It makes the requests bigger (which makes them slower, and maybe cost more), and it ends up sharing lots of data with the server that it may not need, which may compromise the user's privacy.

Imagine you're trying to buy a sofa. There are a few ways we could do this:
1. We could take the entire architectural plans for our home to a shop, and for each sofa work out where it could fit.
2. We could go to the shop, and for each sofa we may like, go home and see if the sofa would fit into our space.
3. We could measure the space we want to put it in, and then go to a shop where you can compare all of the available sofas against those measurements.

Approach 1 requires transferring a lot of data. Approach 2 requires a lot of traveling back and forth. Approach 3 tries to minimise both of these things.

### Pull not push

A backend lives at a well-known address - we know how to connect to it. A user's web browser does not.

This means that a backend cannot try to open a connection to a user's web browser. The web browser needs to initiate the request, and then the backend can reply to the request.

Once a web browser opens a request to a backend, there are some ways to keep a two-way communication channel open. But the very first request needs to come from the web browser.
