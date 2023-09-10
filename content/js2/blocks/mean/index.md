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
test("calculates the mean of a list of numbers", () => {
  const list = [3, 50, 7];
  const currentOutput = calculateMean(list);
  const targetOutput = 20;

  expect(currentOutput).toBe(targetOutput); // 20 is (3 + 50 + 7) / 3
});
```

In this test, we're checking we get a value of `20` by adding together `3 + 50 + 7` and then dividing by the number of items (`3`). We calculate the mean of a list of numbers by:

1. summing all the numbers in the array
2. dividing the sum by the length of the array

We can define a **🎯 sub-goal** of calculating the sum of all numbers in the list.
