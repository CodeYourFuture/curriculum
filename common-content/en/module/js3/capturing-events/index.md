+++
title = '🦻🏻 Capturing the user event'

time = 15
facilitation = false
emoji= '🧩'
[objectives]
    1='Add an event listener to a user input'
[build]
  render = false
  list = 'never'
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

When the "input" event fires, our handler function will run. Inside the handler we can access the updated input value: `const searchTerm = event.target.value;`

So our key steps are:

1. Add an input event listener to the search box
2. In the handler, get `value` of input element
3. Set the new state based on this value.

{{<note type="warning" title="One thing at a time!">}}
But we're not going to do all of these at once! Stop and implement just the first two steps (adding the event listener, and getting the value), and `console.log` the search term.

{{</note>}}

We will make sure this works before we try to change the UI. Why? If we try to add the event listener and something _doesn't_ work, we will only have a little bit of code to debug.

If we tried to solve the whole problem (updating the UI) and something didn't work, we would have a _lot_ of code to debug, which is harder!

We've now demonstrated that we can capture search text on every keystroke:

```js
const searchBox = document.getElementById("search");

searchBox.addEventListener("input", handleSearchInput);

function handleSearchInput(event) {
  const searchTerm = event.target.value;
  console.log(searchTerm);
}
```

Now that we've shown we can log the search text, we can set the new value of the searchTerm state, and re-render the page.
