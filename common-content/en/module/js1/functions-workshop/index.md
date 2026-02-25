+++
title = 'Solving Problems with Functions'

time = 60
[objectives]
    1='Practice solving problems with functions'
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

{{<youtube>}}https://youtu.be/foc8E5Yi4c0{{</youtube>}}

To get the most out of this workshop - don't just watch, code along 💻
You can use the code samples below as a starting point.

### Exercise 1

```js
// Write a function that will calculate the area of a rectangle
//   given it's width and height

let width = 3;
let height = 4;

function calculateArea() {
  const area = width * height;
}

console.log(area);
```

### Exercise 2

```js
function capitaliseFirstLetter(name) {
  console.log(name[0].toUpperCase() + name.substring(1));
}

function createGreeting(name) {
  const result = capitaliseFirstLetter(name);
  return `Welcome ${result}`;
}

const greeting = createGreeting("barath");
console.log(greeting);
```
