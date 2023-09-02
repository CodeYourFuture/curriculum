+++
title = '🚪 Property access'
headless = true
time = 10
facilitation = false
emoji= '🧩'
[objectives]
    1='Access object property values with dot notation'
+++

We use . dot notation to access values using their associated key.

Given an object

```js
const profileData = {
  firstName: "Franesco",
  lastName: "Leoni",
  age: 33,
};
```

We start by referencing the object `profileData`.

Then we can use `.` notation followed by the key used to look up a value.

```js
console.log(profileData.firstName); // logs "Francesco"
```

### Mutation

Objects are **mutable** data structures. We can use the assignment operator `=` to update the value associated with a particular key.

```js{linenos=table,hl_lines=["6"],linenostart=1}
const profileData = {
  firstName: "Francesco",
  lastName: "Leoni",
  age: 33,
};
profileData.firstName = "Fraz";
console.log(profileData.firstName); // firstName is now "Fraz"
```

{{<tabs name="Exercises">}}

{{<tab name="Predict and explain 💬 🧠">}}

```js
const profileData = {
  firstName: "Francesco",
  lastName: "Leoni",
  age: 33,
};
const twinData = profileData;
twinData.age++;
console.log(profileData === twinData);
console.log(profileData.age);
```

Predict and explain what the console output be when we run the code above runs.

{{</tab>}}

{{</tabs>}}
