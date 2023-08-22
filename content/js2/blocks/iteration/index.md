+++
title = '🔁 iterating'
headless = true
time = 30
facilitation = false
emoji= '🧩'
[objectives]
    1='Use the Teach Tech Together guide to construct your objectives'
    2='Limit the objectives to 3-5 items'
    3='Write objectives you can measure'
+++

In programming, we use **iteration** when we want to repeat a particular set of steps.

Let's visualise how iteration works.

```mermaid

graph TD
    A[Start] --> B(Initialize total to 0)
    B --> C{Next Element}
    C -->|Yes| D[Add Element to total]
    C -->|No| E[end of loop]
    D --> F[Move to Next Element]
    F --> C

```

We can use a `for...of` loop to implement this sequence of steps.

```js
function calculateMean(list) {
  let total = 0;
  for (const item in list) {
    total += item;
  }

  return total / list.length;
}
```
