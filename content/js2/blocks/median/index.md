+++
title = '📊 Calculating the median'
headless = true
time = 25
facilitation = false
emoji= '🧩'
[objectives]
1='Describe how to calculate the median of a list in JavaScript' 
+++

Now we're familiar with arrays, let's define a new problem.

We want to calculate the [median](https://www.bbc.co.uk/bitesize/guides/zwhgk2p/revision/2) value from an array of numbers.

_Given_ an array of numbers,
_When_ we call `calculateMedian` with the array of numbers
_Then_ we get the median value

We calculate the median of a set of numbers by finding the middle value in the list.

Let's start with a test to check the **return value** of `calculateMedian` given an array of numbers.

```js
test("calculates the median of a list of odd length", function () {
  const list = [10, 20, 30, 50, 60];
  const currentOutput = calculateMedian(list);
  const targetOutput = 30;

  expect(currentOutput).toBe(targetOutput);
});
```

### 🔨 Implementing `calculateMedian`

So we can implement `calculateMedian`.

We can summarise our approach as follows.

```mermaid
flowchart TD
    A[Step 1: Find the middle index of the array] --> B[Step 2: Sort the array]
    B --> C[Step 3: Access the array at the middle index]
    C --> D[Step 4: return the middle item]
```

In code we can write the following implementation, using [`sort`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) and [`splice`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice).

```js
function calculateMedian(list) {
  const middleIndex = Math.floor(list.length / 2);
  const sortedList = list.sort();
  const median = sortedList.splice(middlePosition, 1)[0];

  return median;
}
```
