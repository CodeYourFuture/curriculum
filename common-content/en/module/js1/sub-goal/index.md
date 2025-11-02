+++
title = 'Forming sub-goals'

time = 20
[objectives]
 1='Define a sub-goal'
 2='Explain why we use sub-goals'
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

For `formatAs12HourClock` our strategy for inputs like `"23:00"` involves checking if the `hours` value is less than 12. For this purpose, we can use the [**greater than** comparison operator `>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Greater_than).

`>` will check if the value on the operator's left side is less than the value on the operator's right side.

So `3 > 12` evaluates to `false`, as `3` is not greater than `12`.

So provided we have an expression for hours, we can write an `if` statement as follows:

```js
if (/* here goes an expression here that evaluates to the hours */ < 12) {
  // do code to format the 12 hours
}
```

To complete the logic, we can form a {{<tooltip title="sub-goal">}}A sub-goal is a goal for a smaller problem that makes up some bigger problem{{</tooltip>}}.

Any time we're solving a problem, we can define a goal - a thing we need to achieve to consider the problem solved.
We can break a problem into smaller problems, each with its own sub-goal. The problem-solving process involves continually breaking down problems into smaller manageable problems, each with its own sub-goal.

For the implementation of `formatAs12HourClock`, we can form a sub-goal as follows:

> 🎯 Sub-goal: Find the hours value from the `time` input
