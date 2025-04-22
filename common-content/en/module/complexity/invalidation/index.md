+++
title = "Cache Invalidation"
[build]
  render = 'never'
  list = 'local'
  publishResources = false
time = 15
emoji= "⛓️‍💥"
[objectives]
    1="Identify and explain staleness risks with caching, and the difficulty of invalidation"
+++


> "There are only two hard things in Computer Science: cache invalidation and naming things." ~ Phil Karlton

### 🍣 Stale/Fresh

What happens if the answer changes after we have cached it? The user might see an old version. This is called a stale cache or staleness. How do we tell the cache: "This item is old, get a fresh copy"? This is cache invalidation, and [it's tricky.](https://shouldiblamecaching.com/)

In the browser, common invalidation strategies include:

- **[Time-To-Live](https://developer.mozilla.org/en-US/docs/Glossary/TTL)** (TTL): Items expire after a set time (e.g., "cache this image for 1 hour"). 
- **[ETags/Last-Modified Headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Last-Modified)**: The browser asks the server "I have version X, is it still current?". If yes, the server sends back a "304 Not Modified" response (fast); if no, it sends the new version.
- **Cache-Busting**: Change the name when the content changes. The browser sees a new URL and must download it. Inspect this web page and look at the CSS link in the header. The file is automatically [fingerprinted](https://gohugo.io/hugo-pipes/fingerprint/) to bust the cache when the fingerprint changes.

### 🤔 Why Is This Hard?

If there are so many solutions, why do we say cache invalidation is hard? It's because every cache is a tradeoff between running out of time, running out of resources, and giving the right answer. Your program can be fast and cheap, but probably not accurate. It can be fast and accurate, but that's not cheap. And it can be cheap and accurate, but that's not likely to be fast. 

When we do not cache, our program is _slow_. If we do not invalidate our cache at the right moment, our program is **wrong**. 


