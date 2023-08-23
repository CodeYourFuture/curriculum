+++
title = '🏦 Savings pot'
headless = true
time = 30
facilitation = false
emoji= '🧩'
[objectives]
    1='Use the Teach Tech Together guide to construct your objectives'
    2='Limit the objectives to 3-5 items'
    3='Write objectives you can measure'
+++

Let's consider an example of a savings pot.

We can think of a savings pots where users can **deposit** money.
They can **withdraw** money from the pot.
They can get their current **balance** from the pot too.
They can also specify a name for the pot - like `Holidays` so they know what the savings are for.

We can think of this as general overview of the pot.

Now we can come up with an object to represent this situation.

### Nested objects

**Deposits** and **withdrawals** will need to store multiple values as a user should be able to deposit money to their pot many times. Likewise they should be able to withdraw money too.
