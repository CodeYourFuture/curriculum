+++
title = 'Reacting to user input'

time = 5
[objectives]
    1='Explain how JavaScript can react to user input from a search input'
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

As users interact with web applications, they trigger events by doing things like clicking buttons, submitting forms, or typing text. We need to respond to these events. Let's explore a common example: searching.

```html
<label>
  Search <input type="search" id="q" name="q" placeholder="Search term" /> 🔍
</label>
```

When a user types text into a search box, we want to capture their input and use it to filter and redisplay search results. This means the **state** of the application changes as the user types. We need to **react** to this change by updating the UI.

We'll explore these ideas today. Code along with the examples in this lesson.
