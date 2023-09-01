+++
title = '🚪 Property access'
headless = true
time = 30
facilitation = false
emoji= '🧩'
[objectives]
    1='Access object property values with dot notation'
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
console.log(profileData.firstName); // logs "mitch"
```

In this case, address doesn’t exist on the profileData object so we get undefined.

{{<tabs name="Exercises">}}

{{<tab name="Predict and explain 💬 🧠">}}

```js
const profileData = {
  firstName: "mitch",
  lastName: "lloyd",
  age: 32,
};
console.log(profileData.city);
console.log(profileData.firstname);
```

Predict and explain what the console output be when we run the code above runs?

{{</tab>}}

{{</tabs>}}
