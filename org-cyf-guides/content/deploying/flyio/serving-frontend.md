---
emoji: 🚀
title: Serving frontend from your backend
description: Learn how to add support for serving frontend files to Express.JS backends
weight: 2
---

Fly.io doesn't have a built-in CDN for serving static frontend files directly, so if you wish to deploy your frontend you need to do it through your backend.
Fortunately, Express.JS has a built-in middleware for serving your frontend through your backend. You only need to set the location of your frontend files, and it will take care of serving the contents for you.
For example, if you add the following middleware inside your `/server/app.js`:

```js
const staticDir = path.join(__dirname, "..", "static");
app.use(express.static(staticDir));
```

Then anything under the `/static` directory will be served as-is.

{{<note type="warning" title="Note">}}
Express.JS will not compile these files for you. If you have Javascript files that need compilation, like React JSX files you need to do that separately.
{{</note>}}

If you have a React application and you wish it to support React Routes you also need to make sure that every request that doesn't correspond to a real file gets routed to your main website. You can do that by adding the following code:

```js
app.use((req, res, next) => {
  if (req.method === "GET" && !req.url.startsWith("/api")) {
    return res.sendFile(path.join(staticDir, "index.html"));
  }
  next();
});
```

This will point to any request that was not yet handled in a previous middleware, and does not start with `/api` to your `index.html` allowing React Router to handle it internally.

You can find a full `app.js` example showing static file serving [here](https://github.com/sztupy/Full-Stack-Project-Assessment/blob/main/server/app.js).
