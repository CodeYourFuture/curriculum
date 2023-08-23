+++
title = '📏 Limitations of ordered lists'
headless = true
time = 30
facilitation = false
emoji= '🧩'
[objectives]
    1='Use the Teach Tech Together guide to construct your objectives'
    2='Limit the objectives to 3-5 items'
    3='Write objectives you can measure'
+++

We can store items in an array as follows:

```js
const profileData = ["mitch", "lloyd", 32];
```

We can access items at a particular index, like items[0].

However, with an ordered list of items we need more information about the items themselves. We only know the position of the items - we can’t tell what the actual item represents.

Instead, we can create a JavaScript object. We can use the object literal syntax to declare a new object. This time we use key-value pairs. We write it as follows:

```js
const profileData = {
  firstName: "mitch",
  lastName: "lloyd",
  age: 32,
};
```
