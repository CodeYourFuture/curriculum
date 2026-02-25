+++
title = 'Sub-goal #2'

time = 10
hide_from_overview = true
[objectives]
    1='Explain how different concepts are combined to solve a goal'
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

Now we can think about what we do when we've identified a time is after midday.

Earlier, we observed what to do when the time goes beyond midday: **subtract 12 from the hours time to get the new hours for the 12 hour clock time**.

_Before_ writing code, we can define our approach in steps:

Starting with an input like `"23:00"`:

```mermaid

flowchart LR

A[extract the hours, '23', from the time '23:00'] --> B[convert '23' to a number, 23]
B --> C{check: Are the hours greater than 12?}
C -- false --> D[add am to time string]
  C -- true --> E[subtract 12 from the hours, to get 11]
subgraph "Time after midday"
  E --> F[add 'pm' to the rest of the time, to get '11:00 pm']
  F --> G[return the new time]
end
```

Now we can format the string using our approach from earlier:
we’ll need to append `"pm"` to the string expression and subtract 12 from the hours. So we get the following:

```js
if (Number(time.slice(0, 2)) > 12) {
  return `${Number(time.slice(0, 2)) - 12}:00 pm`;
}
```

The `return` statement above implements the following steps we set out earlier:

```mermaid

flowchart LR

D[subtract 12 from the hours]
D --> E[add 'pm' to the rest of the time]
E --> F[return the new time]

```

Now we can **re-run** our assertions from earlier to check our function behaves as target.
