+++
title = '🚪 Property access'
headless = true
time = 30
facilitation = false
emoji= '🧩'
[objectives]
    1='Use the Teach Tech Together guide to construct your objectives'
    2='Limit the objectives to 3-5 items'
    3='Write objectives you can measure'
+++

We use . dot notation to access values using their key.

Given an object

```js
const profileData = {
  firstName: "mitch",
  lastName: "lloyd",
  age: 32,
};
```

We start by referencing the object `profileData`.

Then we can use `.` notation followed by the key used to look up a value.

```js
console.log(profileData.firstName); // logs undefined
```

In this case, address doesn’t exist on the profileData object so we get undefined.
