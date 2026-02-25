+++
title = 'Mutating'

time = 30
[objectives]
    1='Describe how to mutate an object property value'
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

Arrays are a type of object in JavaScript, they are still mutable data structures.

```js
profileData.firstName = "Sam";

console.log(profileData);
```

We can use the assignment operator to reassign the value that for a particular key.
