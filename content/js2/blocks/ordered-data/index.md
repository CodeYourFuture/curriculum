+++
title = '📏 Ordered data'
headless = true
time = 15
facilitation = false
emoji= '🧩'
[objectives]
    1='Explain why arrays cannot be used to model some data sets'
    2='Identify the syntactic features of an object literal declaration'
+++

Let's imagine we're writing a program that involves information about a user's profile.
We could store some user's profile details in an **array**:

```js
const profileData = ["Franceso", "Leoni", 33];
```

We can access data in the array at a particular index, like `profileData[0]`, to the get the element `"Franceso"`.

However, the array might need to contain more information.

```js
const profileData = ["Franceso", "Leoni", 33, "Manchester", ""];
```

At the moment, we could visualise `profileData` in a table like this:

| index |    value    |
| :---: | :---------: |
|   0   | "Francesco" |
|   1   |   "Leoni"   |
|   2   |     33      |
|       |             |

Inside `profileData` we access items using the `index`. However, with an ordered list of items _we can't tell what each item in the list represents_. We only know the position of data in the array. We could access item at index position 3 to get `30`: however, we don't know what `30` tells us about the user. `30` could be their age, it could be their number of friends, their number of logins etc.
We need to know the values but also what these pieces of data represent for the user.

### Tables

However, if we can store data as a **table**. One column in the table gives us information about what the data is.
The other column contains the data itself

|    key    |    value    |
| :-------: | :---------: |
| firstName | "Francesco" |
| lastName  |   "Leoni"   |
|    age    |     33      |
|           |             |

The items in the left column are called **keys**. A **key** is a label for a piece of data.
The items in the right column are called **values**. A **value** is a label for a piece of data itself.
Each row consisting of a key and a value is called a **property**.

In JavaScript, we can use an {{<tooltip title="object">}}An **object** is a collection of properties. Each property is a key-value pair{{</tooltip>}}to hold data in a table-like way, where we can look up data using a `key`.
We can declare an object in the following way:

```js
const profileData = {
  firstName: "Franceso",
  lastName: "Leoni",
  age: 33,
};
```
