+++
title = 'Accessing properties'

time = 15
[objectives]
    1='Access object property values with dot notation'
    2='Define the term "literal"'
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

We've already accessed object property values. `console` is an object:

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

Similarly we can use dot notation to access property values stored in objects we have defined:

```js
const profileData = {
  firstName: "Francesco",
  lastName: "Leoni",
  age: 33,
};
console.log(profileData.firstName); // logs "Francesco"
```

Objects also allow looking up property values using square brackets, similar to arrays. Instead of an index, we use a string of the key inside the square brackets:

```js
const profileData = {
  firstName: "Francesco",
  lastName: "Leoni",
  age: 33,
};
console.log(profileData["firstName"]); // logs "Francesco"
```

Using dot notation or square brackets both work the same way.

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

### Predict and explain 💬 🧠

```js
const profileData = {
  firstName: "Francesco",
  lastName: "Leoni",
  age: 33,
};
const twinData = profileData;
twinData.firstName = "Emilia";
console.log(profileData === twinData);
console.log(profileData.firstName);
```

Predict and explain what the console output be when we run the code above runs.

### Properties are optional

It's possible to add properties to an object that already exists. Objects don't always have the same properties.

{{<note type="exercise" name="Predict and explain 💬 🧠">}}

```js
const profileData = {
  firstName: "Francesco",
  lastName: "Leoni",
  age: 33,
};
console.log(profileData.cityOfResidence);

profileData.cityOfResidence = "Manchester";

console.log(profileData.cityOfResidence);
```

Predict and explain what the console output will be when the code above runs.

{{</note>}}

### Object literals vs objects

What's the difference between an object, and an object literal?

An object is the thing we're making, which maps keys to values.

An object literal is how we can write one out specifying all of its key-value pairs in one statement.

These two blocks of code construct equivalent objects:

```js
const object1 = {
  firstName: "Francesco",
  lastName: "Leoni",
};

const object2 = {};
object2.firstName = "Francesco";
object2.lastName = "Leoni";
```

`object1` is all constructed in one object literal.
`object2` starts off with an empty object literal, and then adds some properties to it.

Note: This same terminology is used for other types:

`"abc"` is a string literal, `"a" + "b" + "c"` makes the same string, but by concatenating three string literals together.
