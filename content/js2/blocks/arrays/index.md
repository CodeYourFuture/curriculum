+++
title = '📜 grouping data'
headless = true
time = 10
facilitation = false
emoji= '🧩'
[objectives]
    1='Use the Teach Tech Together guide to construct your objectives'
    2='Limit the objectives to 3-5 items'
    3='Write objectives you can measure'
+++

In JavaScript, we can store data inside an **array**.

{{<note title="Definition: array">}}
An **array** is an ordered collection of data.
{{</note>}}

Instead of writing:

```js
const item0 = 4.6;
const item1 = 5.03;
const item2 = 7.99;
const item4 = 8.01;
```

We can declare an **array literal** as follows:

```js
const items = [4.6, 5.03, 7.99, 8.01];
```

Notice the identifier for the array is **items**. The word `items` is plurable and used to convey the fact that the array stores multiple values of the number data type.

## ordered data

{{<note type="tip" title="Recall">}}

Zero-indexing means we start counting from 0

{{</note>}}

>

We've already encountered ordered data before.

A string is a primitive data-type: however it is also an **ordered** collection of characters.

The string

```js
const volunteer = `"Moussab"`;
```

The characters in `"Moussab"` are ordered.

As with strings, arrays are also **ordered** collections of data.

We index items in an array in a similar way:

```js
const items = [4.6, 5.03, 7.99, 8.01];
```

So we can refer to the **elements** of the array by an **index**.

|   index   |  0  |  1   | 2    | 3    |
| :-------: | :-: | :--: | ---- | ---- |
| character | 4.6 | 5.03 | 7.99 | 8.01 |

In JavaScript, we can use square bracket notation to access specific characters in the string using the index.

```js
items[0]; // evaluates to 4.6
items[1]; // evaluates to 5.03
items[2]; // evaluates to 7.99
// etc
```
