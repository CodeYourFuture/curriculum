+++
title = '🪄 Reacting to user input'
headless = true
time = 5
facilitation = false
emoji= '🧩'
[objectives]
    1='Explain how Javascript can react to user input from a search input'
+++

As users interact with web applications, they trigger events like clicking buttons, submitting forms, or typing text that we need to respond to. Let's explore a common example: searching.

```html
<label>
  <input type="search" id="q" name="q" placeholder="Search term" /> 🔍
</label>
```

When a user types text into a search box, we want to capture their input and use it to filter and redisplay search results. This means the **state** of the application changes as the user types. We need to **react** to this change by updating the UI.

We'll explore these ideas today. Code along with the examples in this lesson.
