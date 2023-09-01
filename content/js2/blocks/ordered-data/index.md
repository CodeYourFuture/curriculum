+++
title = '📏 Limitations of ordered lists'
headless = true
time = 20
facilitation = false
emoji= '🧩'
[objectives]
    1='Explain why arrays cannot be used to model some data sets'
+++

Let's imagine we're writing a program that involves information about a user's profile.
We could start by storing some user's details in an array:

```js
const profileData = ["mitch", "lloyd", 32];
```

We can access data in the array at a particular index, like `profileData[0]`.

However, the array might need to contain more information.

```js
const profileData = ["mitch", "lloyd", 32, 30, 1990];
```

However, with an ordered list of items we can't tell what each item in the list represents - we only know its position. We could access item at index position 3 to get `30`: however, we don't know what `30` represents of the user. `30` could be the age, it could be their
number of friends, their number of logins etc.

Normally, if we were to store information about a user, we would make use of a **table**.
One column in the table gives us information about what the data is.
The other column gives us information about the actual data.

We say the column on the left represents the **key**. The **key** is a label for a piece of data.
We say the column on the right represents the **values**. The **value** is the actual piece of data.

In JavaScript, we can use objects to hold data in a similar way.
We can declare an object in the following way:

```js
const profileData = {
  firstName: "mitch",
  lastName: "lloyd",
  age: 32,
};
```

Let's break down the syntax here.

- `const`
  this is a keyword for declaring the variable

- `profileData`
  this is the identifier used to refer to the object

- `=`
  assignment operator

- `{ firstName: "mitch", lastName: "lloyd", age: 32 }`
  this is called an object literal. We write it by opening curly brace `{` and a closing curly brace `}`.
