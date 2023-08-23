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

As with arrays, objects are **mutable**.

Given an object

```js
const profileData = {
  firstName: "mitch",
  lastName: "lloyd",
  age: 32,
};
```

We can access the age property using . notation
console.log(profileData.age);
If we try to access a property that doesn’t exist then we get undefined.

console.log(profileData.address); // logs undefined

In this case, address doesn’t exist on the profileData object so we get undefined.
