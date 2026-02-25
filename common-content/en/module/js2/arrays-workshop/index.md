+++
title = 'Arrays Workshop'

time = 60
[objectives]
    1='Practice solving problems with arrays'
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

{{<youtube>}}https://youtu.be/a_4gTaNYwTU{{</youtube>}}

To get the most out of this workshop - don't just watch, code along 💻
You can use the code samples below as a starting point.

### Exercise 1

```js
// Can you fix this code?
function doubleAllNumbers() {
  let doubledNumbers;

  for (let n of numbers) {
    doubledNumbers.push(n * 2);
  }

  return doubledNumbers;
}

const myNums = [10, 20, 30];
doubleAllNumbers(myNums);
console.log(myNums);
```

### Exercise 2

```js
// Write a function which takes an array as a parameter
//   and swaps the first element with the last element

function swapFirstAndLast(arr) {}

const myArray = [5, 2, 3, 4, 1];
swapFirstAndLast(myArray);
console.log(myArray); // what output should we expect?
```
