+++
title = "Caching"
[build]
  render = 'never'
  list = 'local'
  publishResources = false
time = 15
emoji= "🛍️"
[objectives]
    1="Identify and explain how web browsers benefit from caching"
    2="Demonstrate how caching can trade memory for CPU"
+++

> Caching means storing a copy of something in a temporary, faster-to-access location. 

Instead of fetching or calculating the same thing over and over again, we use the stored copy. Caching is saving the result of work we have already done, so we can reuse it. 

### 🔖 Browser Caching

All browsers cache very heavily. When you visit a page, your browser downloads resources like [images, CSS, and so on](https://developer.chrome.com/docs/devtools/sources). The next time you visit any page that calls that resource, the browser checks its cache first. If it finds a valid local copy, it uses that instead of downloading from the internet.

Accessing local files is much faster than downloading over the network, so your page loads faster. In fact your browser has [many levels of caching](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Caching#types_of_caches). In the Purple Forest application, the application state is cached in [Local storage](https://developer.chrome.com/docs/devtools/application).

### 🫱🏽‍🫲🏿 The Memory vs. CPU/Network Trade-off

Browser caching is a classic example of trading memory for CPU time or network time. We use memory **space** to hold the cached copies and we save network **time** by not re-downloading assets.