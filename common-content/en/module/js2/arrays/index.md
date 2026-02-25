+++
title = 'Arrays'

time = 10
[objectives]
    1='Access items in an array using an index'
    2='Identify the benefits of using an array to store information'

[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

In JavaScript, we can store data inside an {{<tooltip title="array">}}An **array** is an ordered list of data{{</tooltip>}}

Instead of writing:

```js
const item0 = 4.6;
const item1 = 5.03;
const item2 = 7.99;
const item3 = 8.01;
```

We can declare an **array literal** as follows:

```js
const items = [4.6, 5.03, 7.99, 8.01];
```

Notice the identifier for the array is **items**. We chose to use the plural word `items` instead of the singular `item`, because arrays can store multiple pieces of information.

### ordered data

{{<note type="tip" title="Recall">}}

Zero-indexing means we start counting from 0

{{</note>}}
We've already encountered ordered data before. A string is an **ordered** collection of characters. Let's recall an example of a string:

```js
const volunteer = "Moussab";
```

The character `"M"` is at **index 0**, `"o"` is at **index 1**, and so on.

As with strings, arrays are also **zero-indexed** in a similar way:

```js
const items = [4.6, 5.03, 7.99, 8.01];
```

So we can refer to the {{<tooltip title="elements">}}An **element** is another name for an item inside an array.{{</tooltip>}} of the array by an **index**.

|  index  |  0  |  1   | 2    | 3    |
| :-----: | :-: | :--: | ---- | ---- |
| element | 4.6 | 5.03 | 7.99 | 8.01 |

In JavaScript, we can use square bracket notation to access specific elements in the array using an index.

```js
items[0]; // evaluates to 4.6
items[1]; // evaluates to 5.03
items[2]; // evaluates to 7.99
// etc
```
