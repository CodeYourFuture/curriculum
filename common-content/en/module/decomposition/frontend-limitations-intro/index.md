+++
title = "Limitations of frontends"
headless = true
time = 5
facilitation = false
emoji= "📖"
objectives = [
    "Explain what can't be achieved with just a frontend",
]
+++

You've made static websites, both as part of the "world-wide web" reading, and in previous courses/modules.

These were HTML pages, which perhaps included some JavaScript. The JavaScript made them interactive. But they were still static.

A static website is one where your web browser requests some files from a server, and all the web server does is hand over the files.

From that point on, your web browser works on its own. Any event handlers, timers, etc are processed by the web browser.

And the job of the server was just to hand over files. Those files will probably be the same, no matter what user asked for them, or what computer they were using.

We often call these static files a **frontend**.

And we can build impressive, useful websites with just a frontend. We can include images, videos, and sounds. We can react to user input. We can change what we show on the page. We can even use things like [the Web Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API) to store data so that if you leave the page and come back, your data is still there.

But frontends also have limitations.

### Limitations of a frontend

Three major limitations of a website which only has a frontend are:
1. We only have access to information we knew when we made the frontend.
2. We can't share information across computers.
3. We can't interact with other users.

Let's talk about each of these.
