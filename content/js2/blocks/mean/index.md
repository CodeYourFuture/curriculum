+++
title = '📊 Calculating the mean'
headless = true
time = 30
facilitation = false
emoji= '🧩'
[objectives]
1='Describe how to compute the mean of a data set in JavaScript'
+++

Suppose we now need to calculate mean of a list of data. We can calculate the mean of a lsit of data by summing the data and then dividing by the number of items in the list.

```js
const list = [10, 20, 30, 50, 60];
const average = 10 + 20 + 30 + 50 + 60;
```

```js
function calculateMean() {}
```

```js
expect(calculateMean([3, 40, 7])).toBe(25);
```

So we can implement `calculateMean` - find the middle position of the list and access the middle element, return the middle element.
Let's create a test to check its functionality:

```js
expect(calculateMean([3, 40, 7])).toBe(25);
```

In this test, we're checking we get a value of `25` by adding together `3 + 40 + 7` and then dividing by the number of items (`3`).
