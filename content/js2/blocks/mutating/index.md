+++
title = '🖊️ Mutating'
headless = true
time = 30
facilitation = false
emoji= '🧩'
[objectives]
    1='Use the Teach Tech Together guide to construct your objectives'
    2='Limit the objectives to 3-5 items'
    3='Write objectives you can measure'
+++

Arrays are a type of object in JavaScript, they are still mutable data structures.

```js
profileData.firstName = "Sam";

console.log(profileData);
```

We can use the assignment operator to reassign the value that for a particular key.

Representing data

We can use objects to organise data.
Let’s imagine a problem where we’ve got a clock that stores data about a stop watch.
We decide to store information about the stop watch's hours, minutes and seconds.

So we have an object that looks like this

```js
const savingsPot = {
  name: "Holidays"
  deposits: [10],
  withdrawals: []
};
```

This object represents a saving pot that tracks deposits and withdrawals to the account.
