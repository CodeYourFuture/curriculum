+++
title = 'Objects Workshop'

time = 60
[objectives]
    1='Practice solving problems with objects'
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

{{<youtube>}}https://youtu.be/CHu7iEmuZV4{{</youtube>}}

To get the most out of this workshop - don't just watch, code along 💻
You can use the code samples below as a starting point.

### Exercise 1

```js
// Write a function that returns true if I can eat the ice cream
//  The function has 1 parameter representing an ice cream object
//  I can eat the ice cream if it is lactose-free and contains less than 10 grams of sugar

function canEat(iceCream) {}

const iceCream1 = {
  flavour: "Vanilla",
  lactoseFree: false,
  gramsOfSugarPerScoop: 12,
};

const iceCream2 = {
  flavour: "Mango Sorbet",
  lactoseFree: true,
  gramsOfSugarPerScoop: 10,
};

const iceCream3 = {
  flavour: "Coconut",
  lactoseFree: true,
  gramsOfSugarPerScoop: 8,
};

const iceCream4 = {
  flavour: "Strawberry",
  lactoseFree: false,
  gramsOfSugarPerScoop: 8,
};

const iceCream5 = {
  flavour: "Lemon Sorbet",
  lactoseFree: true,
  gramsOfSugarPerScoop: 7,
};

console.log(canEat(iceCream1)); // what should this output?
console.log(canEat(iceCream2)); // what should this output?
console.log(canEat(iceCream3)); // what should this output?
console.log(canEat(iceCream4)); // what should this output?
console.log(canEat(iceCream5)); // what should this output?
```

### Exercise 2

```js
// Write a function called `getCheapest` that will take 2 book objects as parameters
//  and return the name of the cheaper book

const fictionBook = {
  title: "1984",
  author: "George Orwell",
  category: "Dystopian Fiction",
  subcategory: "Political",
  cost: 9.99,
};

const productivityBook = {
  title: "Atomic Habits",
  author: "James Clear",
  category: "Self-Help",
  subcategory: "Productivity",
  cost: 16.2,
};

// this should output 1984
console.log(getCheapest(fictionBook, productivityBook));
```

### Exercise 3

```js
// Write a function that takes an array of ice cream objects as a parameter
//	and returns an array of the names of ice creams I can eat
//  I can eat the ice cream if it is lactose-free and contains less than 10 grams of sugar
//  Use the solution from Exercise 1 to help you
function whichIceCreamsCanIEat(iceCreams) {}

const iceCream1 = {
  flavour: "Vanilla",
  lactoseFree: false,
  gramsOfSugarPerScoop: 12,
};

const iceCream2 = {
  flavour: "Mango Sorbet",
  lactoseFree: true,
  gramsOfSugarPerScoop: 10,
};

const iceCream3 = {
  flavour: "Coconut",
  lactoseFree: true,
  gramsOfSugarPerScoop: 8,
};

const iceCream4 = {
  flavour: "Strawberry",
  lactoseFree: false,
  gramsOfSugarPerScoop: 8,
};

const iceCream5 = {
  flavour: "Lemon Sorbet",
  lactoseFree: true,
  gramsOfSugarPerScoop: 7,
};

const allIceCreams = [iceCream1, iceCream2, iceCream3, iceCream4, iceCream5];

const iceCreamsICanEat = whichIceCreamsCanIEat(allIceCreams);
console.log(iceCreamsICanEat); // what should this output?
```
