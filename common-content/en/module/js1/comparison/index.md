+++
title = 'Comparing current and target output'

time = 40
[objectives]
    1='List the values of the boolean type'
    2='Evaluate an expression that uses a comparison operator'
    3='Explain the difference between strict and loose equality'
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

### Comparing values

We have learned how to store values in a program and how to access them again when we need them. At some point we will need to **compare** two values. Often our program will need to change its behaviour depending on that comparison. 

For example, think about what happens when you switch on your laptop. Before you do anything else you are asked to enter a password. Whatever you type is compared against a value stored on the computer and if the two match you can carry on using your computer. If they are different you won't be able to access files or use any programs.

We use comparison operators to compare two expressions. We use the equality operator `===` to check if two values are the same.

### Boolean values

Some values are best represented as strings: any piece of text, a name, address, etc will most likely be stored using the string data type. The number data type can store numbers we use in calculations.

If we're comparing two things, there are only two different states: **true** or **false**. This leads us to the **boolean** datatype, which only has true or false values. Whenever we compare two values with a comparison operator, we end up with a boolean value: `true` or `false`. It's one or the other. It's boolean.

```js
// using the equality comparison expression

console.log(42 === 10 + 32);
// logs true

console.log(10 * 5 === 60);
// logs false
```

{{<note type="exercise" title="Exercise - Comparing Values">}}

Create a new file to work in and use `console.log` to print the values of these expressions. Try to predict the result before you run the code!

```js
// 1
"hello" === "hello"

// 2
"CYF" === "cyf"

// 3
const homeTown = "Newcastle"
homeTown === "Liverpool"

// 4
42 === 42
```

<details>
<summary>Solution</summary>

- 1 - `true`
- 2 - `false` - remember that casing matters!
- 3 - `false`
- 4 - `true`

</details>

{{</note>}}

### Strict vs Loose Equality

There are two things we need to consider when checking equality: **value** and **type**. When using `===` both have to match for the expression to be `true`. We call this **strict equality**.

JavaScript has a second type of equality called **loose equality**, represented by `==`. This only compares values. Try evaluating the expression below:

```js
42 == "42"
```

This will evaluate to `true`, since the values match. It doesn't matter that one value is a number and the other is a string. 

In practice we will always use strict equality when comparing values. Loose equality may work but it makes our code vulnerable to bugs, which we don't want.

### Comparing Unequal Values

Often the condition we want to check isn't about equality. It can be useful to know if a value is greater or less than another. There are four conditions we can check:

- `value1` is **greater than** `value2`: `value1 > value2`
- `value1` is **greater than or equal to** `value2`: `value1 >= value2`
- `value1` is **less than** `value2`: `value1 < value2`
- `value1` is **less than or equal to** `value2`: `value1 <= value2`

These expressions all evaluate to `true` or `false`, just like the equality operators.

### Negation

We can also explicitly check that two values are **not** equal to each other. This might sound strange but it is an important part of comparing values which we will use often throughout this course. The `not` operator is the symbol `!` and it replaces the first `=` symbol in an equality operator. For example:

```js
// check if two strings are equal
"hello world" === "Hello World!"
// false

// check if two strings are not equal
"hello world" !== "Hello World!"
// true
```