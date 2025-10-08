+++
title = 'Callbacks'

time = 30
[objectives]
1='Define a callback'
2="Sketch the event loop"
3="Predict the order of logged numbers using the event loop model"
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

Consider this visualisation of an asynchronous program:

**👉🏽 [Code running out of order and off the thread](http://latentflip.com/loupe/?code=c2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIjEiKTsKfSwgMjAwMCk7CnNldFRpbWVvdXQoZnVuY3Rpb24gdGltZW91dCgpIHsKICAgIGNvbnNvbGUubG9nKCIyIik7Cn0sIDUwMCk7CnNldFRpbWVvdXQoZnVuY3Rpb24gdGltZW91dCgpIHsKICAgIGNvbnNvbGUubG9nKCIzIik7Cn0sIDApOwo%3D!!!)**

When we call [`setTimeout`](https://developer.mozilla.org/en-US/docs/Web/API/setTimeout) we send **a function call** to a client side Web API. The code isn't executing in our single thread any more, so we can run the next line. The countdown _is_ happening, but it's not happening _in code we control_.

When the time runs out, the Web API sends a message to our program to let us know. This is called an {{<tooltip title="event">}}An event is a signal that something has happened.{{</tooltip>}}. The API sends its message to our {{<tooltip title="event loop">}}The event loop is a JavaScript mechanism that handles asynchronous callbacks.{{</tooltip>}}. And what message does the event loop send? It sends a **callback**. It sends _our_ call _back_. It tells our thread to run the code in that function.

{{<note type="tip" title="Our call is back">}}
A callback is our function call, sent back to us through the event loop, for us to run.
{{</note>}}

{{<tabs name="Event Loop">}}
===[[Sketch your mental model]]===
**With a pen and paper**, draw a diagram of your mental model of the event loop.

Use your model to predict the order of logged numbers in the following code snippet:

```js
setTimeout(function timeout1() {
  console.log("1");
}, 2000);
setTimeout(function timeout2() {
  console.log("2");
}, 500);
setTimeout(function timeout3() {
  console.log("3");
}, 0);
console.log("4");
```

===[[Compare your model]]===

```mermaid
graph
  Callbacks{{🪃 Callbacks}} --> |run on| SingleThread[🧵 Single thread]
    SingleThread --> |handled by| EventLoop[🔁 Event Loop]
    EventLoop --> |queues| Callbacks
    SingleThread --> |send tasks to| ClientAPIs{💻 Client APIs}
    ClientAPIs --> | send| Callbacks
```

Did yours look different? There are many ways to visualise the event loop. Work on building your own mental model that helps you predict how code will run.

{{</tabs>}}
