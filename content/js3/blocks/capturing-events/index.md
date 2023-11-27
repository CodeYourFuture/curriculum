+++
title = 'Capturing the user event'
headless = true
time = 45
facilitation = false
emoji= '🧩'
[objectives]
    1='Add an event listener to a user input'
+++

To listen for the search input event, we can add an {{<tooltip title="event listener">}} An event listener waits for a specific **event** to occur. It runs in response to things like clicks, and key presses. We register listeners with <code>addEventListener</code> by passing the event name and a handling function. {{</tooltip>}}

```js
const searchBox = document.getElementById("search");

searchBox.addEventListener("input", handleInput);

function handleInput(event) {
  // React to input event
}
```

When the "input" event fires, our handler function will run. Inside the handler we can access the updated input value: `const searchTerm = event.target.value;`

So our key steps are:

1. Add input event listener to search box
2. In handler, get `value` of input element
3. Pass search term to filter and update UI

This allows us to capture search text on every keystroke. But what happens inside the handler function? Let's explore creating a new state of the application.
