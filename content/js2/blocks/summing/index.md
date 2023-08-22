+++
title = 'Summation'
headless = true
time = 30
facilitation = false
emoji= '🧩'
[objectives]
    1='Use the Teach Tech Together guide to construct your objectives'
    2='Limit the objectives to 3-5 items'
    3='Write objectives you can measure'
+++

Our sub-goal is to compute the sum of an array of numbers.
To sum a list we need to initialse a variable with a starting value of `0`.
We then need to **repeadtedly** increment the value of the `count` for each item in the `list`.

```js
let total = 0;
const list = [1, 2, 3, 4, 5];

list[0] += total; // access a list element and add to total
list[1] += total;
list[2] += total;
list[3] += total;
list[4] += total;
```

However, this method is _not_ effective. We have to continually write out a statement to update the `total` value each time. As well, if the number of items in `list` changes then we may have to change the number of statements updating the `total`.

Go through the list and update
