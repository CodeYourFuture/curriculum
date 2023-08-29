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
However, `splice` is a **mutating** array method.

{{<note type="tip" title="Recall: mutation">}}
Mutation is a change to the contents of an array.
{{</note>}}

When we call `splice` it does 2 things:

- removes the specified item from the list
- returns the removed item
