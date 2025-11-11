+++
title = 'Accessing strings'

time = 20
[objectives]
 1='Define zero-indexing'
 2= 'Given a short program, determine the return value of a call to slice on a string before execution'
 3='Describe how to convert a string into a number in JavaScript'
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

Given a `time` string we need to access the _first 2 characters_ of the string which represent the hours.

Strings are **zero-indexed**.
**Index** means **position**, so **zero-indexed** means we start counting character positions from `0` onwards.

Here are the positions/indexes for `"23:00"`

|   index   |   0   |   1   | 2     | 3     | 4     |
| :-------: | :---: | :---: | ----- | ----- | ----- |
| character | `"2"` | `"3"` | `":"` | `"0"` | `"0"` |

In JavaScript, we can use square bracket notation to access specific characters in the string using the index.

```js
time[0]; // evaluates to "2"
time[1]; // evaluates to "3"
time[2]; // evaluates to ":"
// etc
```

Square bracket access will only give a single character. We must use another method to extract _multiple_ characters from the given string.

## ✂️ Extracting a slice

To extract 1 or more characters from a string, we can use a function called {{<tooltip title="slice ">}}[`slice`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice) is a function that can take 2 arguments: a start index and an end index. `slice` will return a section of the string from the start index up to but not including the end index.{{</tooltip>}}

```js
time; // holds the value "23:00"
```

```js
time.slice(0, 2); // will access the characters below
```

|   index   |   0   |   1   |
| :-------: | :---: | :---: |
| character | `"2"` | `"3"` |

So `time.slice(0,2)` will evaluate to `"23"` when the `time` is `"23:00"`.

Finally we must convert `"23"` to the number `23`, otherwise we can't compare this value properly.

{{<note type="exercise">}}

Think about the numbers 100 and 23. Which one is bigger?

Write code which compares the strings `"100"` and `"23"` and tells you which one is bigger.

Does this match your expectation? If not, what do you think is happening?

{{</note>}}

JavaScript uses different ways to [compare values](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness) depending on their types. If you compare two strings (which may contain numbers), it will do something different than if you compare two numbers.

We can use the `Number` function to convert the string into a number.

{{<note type="exercise">}}

Work out how you can convert the strings "100" and "23" to numbers.

Write code which compares the numbers `100` and `23` and tells you which one is bigger.

{{</note>}}
