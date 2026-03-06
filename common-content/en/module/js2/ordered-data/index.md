+++
title = 'Ordered data'

time = 15
[objectives]
    1='Explain the limitations of arrays when storing data'
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

Let's imagine we're writing a program that involves information about a user's profile.
We could store some user's profile details in an **array**:

```js
const profileData = ["Franceso", "Leoni", 33, "Manchester"];
```

At the moment, we could visualise `profileData` in a table like this:

| index |    value     |
| :---: | :----------: |
|   0   | "Francesco"  |
|   1   |   "Leoni"    |
|   2   |      33      |
|   3   | "Manchester" |

Inside `profileData` we access items using an `index`. However, with an ordered list of items _we can't tell what each item in the list represents_. We only know the position of data in the array. We could access the item at index 3 to get `"Manchester"`: however, we don't know what `"Manchester"` tells us about the user. `"Manchester"` could be the city they currently live in, it could be their city of birth, a place where they studied in the past etc. We need to know the values but also what these values represent about the user.

We might think we can just remember (and maybe write in a comment) "index 0 is the person's first name", but this has problems. What if we need to introduce a new piece of data? We may need to change every piece of code that uses the array. What if some of the data is optional (e.g. a middle name)? It's also really hard for someone new to come read our code.

### Keys not indexes

However, instead of _ordering_ data with _indexes_, we can label data with **keys**.

|       key       |    value     |
| :-------------: | :----------: |
|    firstName    | "Francesco"  |
|    lastName     |   "Leoni"    |
|       age       |      33      |
| cityOfResidence | "Manchester" |

We can look up values in this table by the **key**. With data stored like this, we can see what values like ` "Manchester"` actually mean - in this case, it refers to a city of residence for the user.

In JavaScript, we can use an {{<tooltip title="object">}}An **object** is a collection of properties. Each property is a key-value pair{{</tooltip>}}to store data in a table-like way, where we can look up data using a **key**.

We can declare an object like this.

```js
const profileData = {
  firstName: "Franceso",
  lastName: "Leoni"
  age: 33,
  cityOfResidence: "Manchester",
};
```
