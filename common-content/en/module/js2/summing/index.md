+++
title = 'Summation'

time = 20
hide_from_overview = true
[objectives]
    1='Describe how to sum the numbers in a list'
    2='Explain why repeated statements are hard to maintain'
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

> 🎯 Sub-goal: compute the sum of an array of numbers.

To sum a list we can start by creating a variable `total` with an initial value of `0`.

We then need to **repeatedly** add each value in the list to our `total`.

```js
function sumValues(list) {
  let total = 0;
  total += list[0]; // access a list element and add to total
  total += list[1];
  total += list[2];
  total += list[3];
  total += list[4];
  return total;
}

sumValues([1, 2, 3, 4, 5]);
```

However, this approach is flawed.

## 🧠 Explain

Explain why the approach above is flawed when it comes to summing the numbers for an array of _any_ length.
