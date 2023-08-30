+++
title = '➕ Summation'
headless = true
time = 20
facilitation = false
emoji= '🧩'
[objectives]
    1='Describe how to sum the numbers in a list'
+++

> 🎯 Sub-goal: compute the sum of an array of numbers.

To sum a list we can initialise a variable with a value of `0`.

We then need to **repeatedly** increment `count` for each item in the `list`.

```js
let total = 0;
const list = [1, 2, 3, 4, 5];

total += list[0]; // access a list element and add to total
total += list[1];
total += list[2];
total += list[3];
total += list[4];
```

However, this approach is flawed.

{{<tabs name="Explain">}}

{{<tab name="🧠  Explain">}}
Explain why the approach above is flawed when it comes to summing the numbers for an array of _any_ length.

{{</tab>}}

{{</tabs>}}
