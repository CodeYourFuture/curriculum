+++
title = 'Actually re-rendering'

time = 30
emoji= '🔁'
[objectives]
    1='Group UI components by whether they need to re-render'
    2='Control which UI components are re-rendered'
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

We have seen that when we search, we're only _adding_ new elements, and not removing existing elements from the page.

We previously identified our strategy of clearing old elements before adding new ones. But we are not doing this.

We can clear out the existing children of an element by setting its `textContent` property to the empty string:

```js
document.body.textContent = "";
```

Add this to your `render` function before you add new elements. Try using your page. Try searching for a particular film.

Oh no, our search box is gone!

{{<note type="exercise">}}
Work out why our search box is gone. Remember what we just changed, and what we were trying to do by making that change.
{{</note>}}

We removed our search box from the page because we removed everything from the entire document body.

This was not our intention - we only wanted to remove any films we had previously rendered.

A way to solve this is to introduce a container element which our `render` function will re-fill every time it's called.

We should identify which elements in our page should be re-drawn every time we render, and which should always be present.

Introduce a new container, and keep any "always present" UI elements outside of it. Update your `render` function to clear and append to the container, not the whole body.

Remember to use semantic HTML. Your container should be an appropriate tag for the contents it will have.
