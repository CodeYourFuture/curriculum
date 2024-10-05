+++
title = '🔬 Identifying missing tests'

time = 30
facilitation = false
emoji= '🔬'
[objectives]
1='Define groups of input'
2='Define edge cases'
3='Identify groups of input for a function'
4='Identify edge cases for a function'
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

We started off writing one test for our code - checking that it correctly handled the input `08:00`.

We wrote an implementation that passed all our (1) tests!

Then we realised there was a bug - it didn't handle times after midday correctly.

So we wrote another test - for the input `23:00`. We saw our implementation failed that test. And we fixed it.

And we had an implementation that passed all our (2) tests!

> When will we be happy that our implementation works for all possible inputs? When do we have enough tests?

### Groups of input

One way to consider this question is to think about what _groups_ of input there may be to our problem.

We've already identified two examples of groups of input to the problem of converting 24 hour clocks to 12 hour clocks: Times before midday and times after midday.

One way to find extra cases to consider (and extra tests to write) is to try to think of different groups of input.

For example, some times are exactly on the hour (end in `:00`) and other times have a non-zero number of minutes.

Try to think of as many groups of input to this problem as you can. Write an example assertion for each one.

If you find any bugs in the implementation, go fix them!

### Edge cases

Another way to consider this question is to think about what _edge cases_ there are in the problem.

{{<note type="definition" title="Definition: edge case">}}
An edge case is an unusual value which may need special treatment.

Some examples are the minimum value, the maximum value, the boundary between two groups of input.
{{</note>}}

Some example edge cases for this problem are `00:00` (the minimum time, which is `12:00 am` in 12 hour clock, as well as the only hour that is _bigger_ in 12 hour clock than 24 hour clock), `24:00` (the maximum time), and `12:00` (where time changes from am to pm).

Often these edge cases are where bugs happen.

Try to think of as many edge cases of input to this problem as you can. Write an example assertion for each one.

If you find any bugs in the implementation, go fix them!
