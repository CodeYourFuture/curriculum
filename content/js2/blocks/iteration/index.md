+++
title = '🔁 repeating action'
headless = true
time = 30
facilitation = false
emoji= '🧩'
[objectives]
    1='Use the Teach Tech Together guide to construct your objectives'
    2='Limit the objectives to 3-5 items'
    3='Write objectives you can measure'
+++

Given a list of items, we might want to repeat a particular action.
For example, given a list of items, we might want to log every time in the array to check the value at each point in the array.

```js
const items = [10.3, 4.5, 6.7, 8.9, 10.3];

console.log(items[0]);
console.log(items[1]);
console.log(items[2]);
console.log(items[3]);
console.log(items[4]);
```

However, if we had a much larger array then this would become very ineffective. Our programs would become massive as we need to write many lines of code just to tell the computer to repeat a particular action. As with before, if the items in the array change then we'd need to update the `console.log` statements carefully to ensure we're logging the list of items in the correct order.

## 🔁 iterating

In programming, we use **iteration** when we want to repeat a particular set of steps.

We can use a `for...of` statement in JavaScript to iterate over the array and **repeat** something each time.

```js
const items = [10.3, 4.5, 6.7, 8.9, 10.3];

for (const price of items) {
  console.log(price);
}
```

`for..of` statement consists of the following syntatic elements:

`for...of` statement means that the instructions inside the body of the `for...of` statement will be executed as many times as the array length. So `items` above contains 5 elements, so therefore the `console.log` will be called 5 times.
In addition, the `for...of` statements declares a variable `price`. The `price` identifier will be assigned the value of the array in each successive iteration.

{{<note type="activity">}}
Something to do with using the python visualiser to step through the code.
{{</note>}}

## summing over an array

Earlier we had an in `items` array as follows:

```js
function calculateBillTotal(bill) {
  return 0;
}
```

We want to find the total price for the array.

We can find the `total` of the bill by going through and adding the value.

```js
function calculateBillsTotal(bill) {
  let total = 0; // <-- initialise bill total

  return 0;
}
```

Now we want to total the bill.
We want to **repeatedly** increment the total by the value of each price in the `bills` array

```js
function calculateBillsTotal(bill) {
  let total = 0; // <-- initialise bill total

  total += Number(bill[0].slice(1)); // assignment statement
  total += Number(bill[1].slice(1)); // assignment statement

  return total;
}
```

However, this code only works for a bill consisting of 2 items. As soon as the `bill` array is greater inside we will only be counting the first two items in the array.

```js
function calculateBillsTotal(bill) {
  let total = 0; // <-- initialise bill total

  for (const price of bill) {
    total += Number(price.slice(1)); // same step as earlier but now using the price to refer to each item in the array
  }

  return total;
}
```
