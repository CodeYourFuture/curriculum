+++
title = 'Iteration'

time = 20
[objectives]
    1='Define iteration'
    2='Explain why iteration is relevant in a particular problem'
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

To solve the sub-goal, we have to repeatedly add each number in the array to the `total`, one at a time. In programming, the process of repeating something is called **iteration**.

In programming, we can **iterate** by using a {{<tooltip title="loop">}}A loop is a sequence of instructions that is continually repeated until some condition is reached.{{</tooltip>}}.

### The Standard `for` Loop

Before we look at shortcuts, it is important to understand the **standard `for` loop**. It gives you complete control over how the loop starts, when it stops, and how it moves to the next step.

Here is the syntax:

```js
for (let i = 0; i < 5; i++) {
    console.log("Iteration number: " + i);
}
```

```js
function calculateMean(list) {
  let total = 0;
  for (const item of list) {
    total += item;
  }
}
```

### 🐛 Visualising iteration with debugger

{{<youtube>}}https://www.youtube.com/watch?v=YX5jAFJlEqM{{</youtube>}}
