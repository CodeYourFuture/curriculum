+++
title = '🧰 Methods'
headless = true
time = 30
facilitation = false
emoji= '🧩'
[objectives]
    1='Use the Teach Tech Together guide to construct your objectives'
    2='Limit the objectives to 3-5 items'
    3='Write objectives you can measure'
+++

As well as organising information in a meaningful way, we can also use functions to update the state meaningfully. A method is a function that acts on an object.

Let’s consider an array like

```js
const heights = [1, 4, 5, 6, 7, 10];
```

We can sort the heights like this `heights.sort()`

```js
const heights = [1, 4, 5, 6, 7, 10];
heights.sort(); // calling the sort method on the heights array
```

`.sort` is a method - it is a function that acts on the `heights` array. In particular, `sort` mutates the array, arrnaing the items by ascending order.

`sort()` also doesn’t have any arguments when it is called but it can still refer to the `heights` array it was called on.

We can do a similar thing with another array of `weights`👍

```js
const weights = [10, 30, 50, 60];
```

`weights.sort()`

here we’re calling the same method `sort` but on a different `weights` array.

So we have a function `sort` that can

- be called upon to sort different arrays
- can refer to the array it was called upon
- mutates the array it was called upon

In a similar way, with objects we can implement methods that mutate the state of an object.

### 🏷️ object methods

So the function `updateName` that acts upon `savingsPot` is a method.

We call it like this:

```js
savingsPot.updateName("Trip to Greece");
```

In this particular case, when `updateName` is called it must be able to refer to the `savingsPot` object.
