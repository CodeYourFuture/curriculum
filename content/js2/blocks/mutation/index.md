+++
title = ' mutation'
headless = true
time = 25
facilitation = false
emoji= '🧩'
[objectives]
    1='Define mutation'
+++

Let's take another look at `calculateMedian`

```js
function calculateMedian(list) {
  const middlePosition = Math.floor(list.length / 2);
  const median = list.splice(middlePosition, 1)[0]; // access the middle item in the array

  return median;
}

calculateMedian(list);
```

`calculateMedian` calculates the middle value by making a call to `splice`.
However, `splice` is a {{<tooltip title="mutating">}}For arrays, mutation means updating the contents of an array. This could mean changing the value of an item at a position or removing an item altogether.{{</tooltip>}} array method.

When we call `splice` it does 2 things:

- removes the specified item from the list
- returns the removed item

`splice` modifies the array: however, `calculateMean` is also passed a reference to this array too.
In other words, `calculateMedian` modifies the same array that is passed to `calculateMean`.
