+++
title = '🚪 Property access'
headless = true
time = 10
facilitation = false
emoji= '🧩'
[objectives]
    1='Access object property values with dot notation'
+++

You've already accessed object property values. `console` is an object:

```console
Welcome to Node.js v16.19.1.
Type ".help" for more information.
> console
Object [console] {
  log: [Function: log],
  warn: [Function: warn],
  dir: [Function: dir],
  time: [Function: time],
  timeEnd: [Function: timeEnd],
  .
  .
  .
}
```

We use dot notation to access the property value associated with a key.
When we write `console.log` - think of this as saying:

> "access the _value_ associated with _key_ of `"log"`, inside the `console` object"

Similarly we can use dot notation to access property values stored in object literals:

```js
const profileData = {
  firstName: "Francesco",
  lastName: "Leoni",
  age: 33,
};
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
