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

We use comparison operators to compare two expressions. We use the equality operator `==` to check if two values are the same.

### Boolean values

Some values are best represented as strings: any piece of text, a name, address, etc will most likely be stored using the string data type. The number data type can store numbers we use in calculations.

If we're comparing two things, there are only two different states: **true** or **false**. This leads us to the **boolean** datatype, which only has true or false values. Whenever we compare two values with a comparison operator, we end up with a boolean value: `true` or `false`. It's one or the other. It's boolean.

```js
// using the strict equality comparison expression

console.log(42 == 10 + 32);
// logs true

console.log(10 * 5 == 60);
// logs false
```

{{<note type="exercise" title="Exercise - Comparing Values">}}

Create a new file to work in and use `console.log` to print the values of these expressions. Try to predict the result before you run the code!

```js
// 1
"hello" == "hello"

// 2
"CYF" == "cyf"

// 3
const homeTown = "Newcastle"
homeTown == "Liverpool"

// 4
42 == "42"
```
{{</note>}}

### Strict Equality

Did anything surprise you about the outputs in that exercise? Number four probably looked strange - the two values have different types, so how can they be equal?

We were using **loose equality** in these examples. Loose equality compares the _value_ of two terms but not their _type_. This might work in our code but it also makes our code vulnerable to bugs.

To avoid this we will use **strict equality** instead. This checks both value _and_ type and will only evaluate as `true` if both are the same. The strict equality operator is `===`.

{{<note type="exercise" title="Exercise - Strictly Comparing Values">}}

Modify your code from the previous exercise to use the strict equality operator `===`. What do you see that is different in the outputs?

{{</note>}}

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