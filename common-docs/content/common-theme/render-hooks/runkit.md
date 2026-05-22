+++
title="Runkit"
description="Embed a Runkit notebook"
menu=["hooks"]
+++

Another [codefence render hook](https://gohugo.io/render-hooks/code-blocks/). Add runkit to a page by adding the word `runkit` after the three backticks. This will [render a Runkit](https://runkit.com/home) on the page. You can embed a REPL _with_ npm packages and endpoints.

Don't create loads of these on a page, they're heavy.

{{<columns>}}

````
```runkit
//Load the 'express' library
const express = require("express");

const app = express();

//Register some handlers for different routes.
app.get("/", (request, response) => {
    response.send("Hello thar!");
});
//Tell the server to start listening for requests.
app.listen(3000);
```
````

<--->

```runkit
//Load the 'express' library to easily handle HTTP conversations:
const express = require("express");

const app = express();

//Register some handlers for different routes.
app.get("/", (request, response) => {
    response.send("Hello thar!");
});
//Tell the server to start listening for requests.
app.listen(3000);
```

{{</columns>}}
