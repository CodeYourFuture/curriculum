+++
title = '🏤  Value vs reference'
headless = true
time = 30
facilitation = false
emoji= '🧩'
[objectives]
    1='Explain the difference between value and reference'
+++

Arrays are stored by **reference**.

A reference is a like an address. In other words, arrays point an address in memory.

Consider the following example,

```js
const list = [10, 20, 30];
const copy = list;
copy.push(60, 70);

console.log(list);
console.log(copy);
```

Let's break down what is happening in this program.

Line 1: `list` is assigned a **reference** to `[10, 20, 30]`
Line 2: `copy` is assigned the same **reference** as `list`
At this stage in the program, `list` and `copy` point to the same location in memory.

Line 3: `push` function mutates the array that `copy` points to.
Line 4: prints out `list`: `[10, 20, 30, 60, 70]`
Line 5: prints out `copy`: `[10, 20, 30, 60, 70]`

So as `copy` and `list` point to the same array. If we mutate `list` then we're mutating the same list that `copy` points to.
So the console output is the same.

We can also check that these arrays point to the same location in memory.

```js
const list = [10, 20, 30];
const copy = list;
copy.push(60, 70);

console.log(list);
console.log(copy);
console.log(list === copy);
```

This evaluates to `true` as both arrays store the same reference.
