+++
title = "Using existing middleware"
time = 30
objectives = [
    "Use an existing middleware with Express.",
]
+++

We don't always need to write our own middlewares. For common tasks, such as parsing JSON request bodies, there are existing middlewares we can re-use.

{{<note type="Exercise">}}
Make a copy of your previous middleware application.

Delete the middleware you wrote that handles the JSON request POST body.

Switch to instead the JSON middleware built in to Express.

Debug why the `curl` command suggested in the previous exercise doesn't work. Fix this problem by modifying the `curl` command.
{{</note>}}
