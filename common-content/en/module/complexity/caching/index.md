+++
title = "Caching"
time = 15
[build]
  render = 'never'
  list = 'local'
  publishResources = false
[objectives]
    1="Identify and explain how web browsers benefit from caching"
    2="Demonstrate how caching can trade memory for CPU"
+++

> Caching means storing a copy of something in a temporary, faster-to-access location. 

Instead of fetching or calculating the same thing over and over again, we use the stored copy. Caching saves the result of work we have already done, so we can reuse it. 

### 🔖 Browser Caching

All browsers cache very heavily. When you visit a page, your browser downloads resources like [images, CSS, and so on](https://developer.chrome.com/docs/devtools/sources). The next time you visit any page that calls that resource, the browser checks its cache first. If it finds a valid local copy, it uses that instead of downloading from the internet.

Accessing local files is much faster than downloading over the network, so your page loads more quickly. In fact your browser has [many levels of caching](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Caching#types_of_caches). In the Purple Forest application, the application state is cached in [Local storage](https://developer.chrome.com/docs/devtools/application).

### 🫱🏽‍🫲🏿 The Memory vs. CPU/Network Trade-off

Browser caching is a classic example of trading memory for CPU time or network time. We use extra memory **space** to hold the cached copies and we save network **time** by not re-downloading assets. We could have chosen to use less memory space, but it would have slowed down our application.

{{<note type="Activity" title="Activity">}}

Open [Purple Forest](https://github.com/CodeYourFuture/Module-Legacy-Code) in your browser and take a look at all the ways resources are cached in Devtools.

You could try opening the [Network tab](https://developer.chrome.com/docs/devtools/network) and selecting a Network request like a CSS file. Ask [AI Assistance](https://developer.chrome.com/docs/devtools/ai-assistance/network) something like "show me all the ways this resource is cached in this browser"

{{</note>}}