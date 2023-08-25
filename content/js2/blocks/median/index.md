+++
title = '📊 Calculating the median'
headless = true
time = 30
facilitation = false
emoji= '🧩'
[objectives]
1='Describe how to calculate the median of a list in JavaScript' 
+++

In this problem, we want to computer the mean of a list of numbers. The mean is a type of average.
We calculate the mean of a set of numbers by summing them together and then dividing by the total number of items in the list.

```js
const list = [10, 20, 30, 50, 60];
const average = 10 + 20 + 30 + 50 + 60;
```

```js
function calculateMedian() {}
```

```js
expect(calculateMedian([10, 20, 30, 50, 60])).toBe(30);
```

So we can implement `calculateMedian` - find the middle position of the list and access the middle element, return the middle element.

```js
function calculateMedian(list) {
  const middlePosition = Math.floor(list.length / 2);
  const median = list.splice(middlePosition, 1)[0]; // access the middle item in the list

  return median;
}
```
