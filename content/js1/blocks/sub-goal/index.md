+++
title = '🧠 Forming sub-goals'
headless = true
time = 30
facilitation = false
emoji= '🧩'
[objectives]
 1='Define a sub-goal'
 2='Explain why we use sub-goals'
+++

##

So for `formatAs12HourClock` we said part of the strategy for handling `"23:00"` would involve checking that the `hours` value is less than 12. For this purpose, we can use another comparison operator: `>`.
`>` will check if the value on the operator's left side is less than the value on the operator's right side.

So `3 > 12` would evaluate to be `false`, as `3` is not greater than `12`.

So provided we have an expression for hours, we can write an `if` statement as follows:

```js
if ( /* here goes an expression that evaluates to the hours from the time */ < 12) {
  // do code to format the 12 hours
}
```

To complete the logic, we now have to achieve a sub-goal:

> 🎯 Sub-goal: Find the hours value from the `time` input
