+++
title = '📊 Calculating the mean'
headless = true
time = 15
facilitation = false
emoji= '🧩'
[objectives]
1='Describe how to compute the mean of a data set in JavaScript'
+++

Let's consider another problem.
Besides the median, we can also calculate the mean of a set of numbers.

_Given_ an array of numbers,
_When_ we call `calculateMean` with the array of numbers
_Then_ we get the mean

Let's create a test to check its functionality:

```js
expect(calculateMean([3, 50, 7])).toBe(20); // 25 is (3 + 50 + 7) / 3
```

In this test, we're checking we get a value of `25` by adding together `3 + 40 + 7` and then dividing by the number of items (`3`).

We calculate the mean of a list of numbers by:

1. sum all the numbers in the array
2. dividing the sum by the length of the array

> Summing the numbers in the array is a good starting 🎯 sub-goal.
