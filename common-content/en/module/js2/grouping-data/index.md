+++
title = 'Grouping data'

time = 15
[objectives]
    1='Explain why using multiple variable declarations for related data is problematic'
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

In programming, we often have **related** pieces of data.

Let's consider a list of prices in a bill:

> 4.6, 5.03, 7.99, 8.01

### limitations of many variables

We can store this list of prices in a JavaScript program by declaring multiple variables:

```js
const price0 = 4.6;
const price1 = 5.03;
const price2 = 7.99;
const price3 = 8.01;
```

Each identifier is the word `price` with a numerical suffix to indicate its position in the list. However, this is _undoubtedly_ the wrong approach.

- If the number of items in the bill is huge, we must keep declaring new variables.
- If the number of items changes, we must reassign the values of variables so they're in the correct order, and change any place we're using the variables to know about the new one.
- If we do multiple things to all of the values (say we have one loop adding them, and one loop printing them), we will need to change all of the places any time we add new values.

Instead we have to group the data together using a {{<tooltip title="data structure">}}A **data structure** is a collection of data. It may have functions that can be applied to access or manipulate the data.{{</tooltip>}}
