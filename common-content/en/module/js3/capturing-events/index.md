+++
title = 'Capturing the user event'
time = 20
[objectives]
    1='Add an event listener to a user input'
[build]
  render = 'never'
  list = 'local'
  publishResources = false
+++

We've introduced our state, and our render works for different values of that state. But users of our website can't change the `searchTerm` state themselves. We need to introduce a way for them to change the `searchTerm` state via the UI.

To listen for the search input event, we can add an {{<tooltip title="event listener">}} An event listener waits for a specific **event** to occur. It runs in response to things like clicks, and key presses. We register listeners with <code>addEventListener</code> by passing the event name and a handling function. {{</tooltip>}}

```js
const searchBox = document.getElementById("search");

searchBox.addEventListener("input", handleSearchInput);

function handleSearchInput(event) {
  // React to input event
}
```

These listeners wait for specific events to occur, and when they do, they trigger a callback function we've defined. This gives us a way to make our code respond to user actions rather than running all at once.

```js
const search = document.getElementById("search");
search.addEventListener("input", handleInput);
```

When we call `addEventListener`, it doesn't immediately execute the `handleInput` function. Instead, it sets up a listener that will run this function later. Event listeners are part of the web browser's Event API. But event listeners themselves aren't part of the core JavaScript language! When you create an event listener, you're making a request to a Web API to handle this functionality for you. In this pattern, the callback function (`handleInput`) only executes when a user types. These callback functions need to execute in response to user interactions. This lets us tell the browser exactly what actions to take once a particular event occurs.

Callback functions are essential for handling user interactions in web browsers. They allow our code to execute in response to an event. The browser listens for events and executes our callback functions at the right time. It is our job to define what should happen when those events occur.
