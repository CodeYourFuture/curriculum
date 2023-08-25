+++
title = '📊 Calculating the median'
headless = true
time = 20
facilitation = false
emoji= '🧩'
[objectives]
1='Describe how to calculate the median of a list in JavaScript' 
+++

Now we're familiar with arrays, let's define a new problem.

We want to calculate the [median](https://www.bbc.co.uk/bitesize/guides/zwhgk2p/revision/2) value from an array of numbers.

_Given_ an array of numbers,
_When_ we call `calculateMedian`
_Then_ we get the median value

We calculate the median of a set of numbers by finding the middle value in the list.
Let's start with a test to check what the **return value** of `calculateMedian`.

```js
const list = [10, 20, 30, 50, 60];
const currentOutput = calculateMedian(list);
const targetOutput = 30;

expect(currentOutput).toBe(targetOutput);
```

### 🔨 Implementing `calculateMedian`

So we can implement `calculateMedian` - find the middle position of the list and access the middle element, return the middle element.
We can summarise our approach as follows.

1. Sort the list
2. Find the middle position
3. Access the array at the middle position
4. Return the middle item

```js
function calculateMedian(list) {
  const middlePosition = Math.floor(list.length / 2);
  const median = list.sort().splice(middlePosition, 1)[0]; // access the middle item in the list

  return median;
}
```
