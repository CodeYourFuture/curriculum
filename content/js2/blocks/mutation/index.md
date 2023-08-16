+++
title = '🖊️ mutation'
headless = true
time = 30
facilitation = false
emoji= '🧩'
[objectives]
    1='Use the Teach Tech Together guide to construct your objectives'
    2='Limit the objectives to 3-5 items'
    3='Write objectives you can measure'
+++

We can use arrays to organise and structure an ordered set of data.
However, we need ways to manipulate the data too.
one of the most common operations we'll want to do is adding/ removing elements.

Let's consider the `items` again.

```js
const items = [10.3, 6.7, 5.4, 11.2];
```

We can check the length of the `items` array by accessing the `length` property.

```js
const items = [10.3, 6.7, 5.4, 11.2];
console.log(items.length); // evaluates to 4
```

Now we can update the contents of the list in another way.

We can directly update an element in a particular position.

```js
const items = [10.3, 6.7, 5.4, 11.2];
items[3] = 10.2;

console.log(items);
console.log(items[3]);
```

This is known as **mutation**.

The line `items[3] = 10.2` is an example of a **mutation**. A **mutation** is an update to the contents of some data structure.
So we can say `items[3] = 10.2` has the _effect_ of updating the contents of `items`.

## Reassignment vs mutation

We can use `const` to declare variables👍

```js
const year = 2023;
```

A `const` variable declaration means we cannot reassign the value of `year`.

```js
const year = 2023;
year = 2024; // will throw Uncaught TypeError: Assignment to constant variable.
```

We use the `const` keyword in situations where we don't want to the value of a variable to change.

The same is true with arrays.

```js
const items = [10.3, 6.7, 5.4, 11.2];
items = [1, 2, 3]; // will throw Uncaught TypeError: Assignment to constant variable.
```

In the code above, we're trying to reassign the whole value of the `items` array to another array.

However, **mutation** works fine with arrays declared using the `const` keyword.
