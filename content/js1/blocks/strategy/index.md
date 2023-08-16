+++
title = '↙️ ↘️ Making a choice'
headless = true
time = 30
facilitation = false
emoji= '🧩'
[objectives]
    1='Propose a strategy for solving a problem'
+++

Our function works for morning inputs like `"08:00"`.
In this case, the function returns the target output of `"08:00 am"` as required.

However, at the moment, the output of `formatAs12HourClock("23:00")` is `"23:00 am"`.

> 💡 We need to execute some different logic when the time is beyond midday

We can interpret this behaviour as a question:

```mermaid

flowchart LR

A{Is the time before midday?} -- true --> B[Add am to time string]
A -- false --> C[???]
```

We need to work out what to do in the case when the time input is later than midday.

## 🧭 Describing the strategy

Let's describe the strategy for dealing with an input that is after midday.

Earlier we observed that when the time goes beyond midday then **we can subtract 12 from the hours time to get the new hours for the 12 hour clock time**.

_Before_ writing code, we can define our approach in steps using a flowchart:

Starting with an input like `"23:00"`:

```mermaid

flowchart TD

A[extract the hours from the time '23:00', to get '23'] --> B[convert '23' to a number, to get 23]
B --> C{check: Are the hours greater than 12?}
C -- false --> D[add am to time string]
C -- true --> E[subtract 12 from the hours, to get 11]
E --> F[add 'pm' to the rest of the time, to get '11:00 pm']
F --> G[return the new time]
```

This approach involves running some code **conditionally**.

In this case, we're only going to continue doing Steps 4-6 if the condition **hours are greater than 12** is `true`.
