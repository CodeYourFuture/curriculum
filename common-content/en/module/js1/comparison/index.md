+++
title = 'Comparing current and target output'

time = 40
[objectives]
    1='Evaluate an expression that uses a comparison operator'
    2='Explain when to use the === operator in a program'
    3='List the values of the boolean type'
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

{{<tabs name="current">}}
===[[Define current and target]]===
Let's start with a function declaration of `formatAs12HourClock`:

```js
function formatAs12HourClock() {}
```

Whenever we call `formatAs12HourClock` we expect it to return a particular value, which we call the 🎯 **target output**. For example, we expect `formatAs12HourClock("08:00")` to return `"08:00 am"`. `"08:00 am"` is the 🎯 **target output**.

However, the **current output** is what the function _actually_ returns right now.

👉🏼 [Work through the exercises](#current-1)
===[[Exercise 1]]===

Let's start with `formatAs12HourClock` defined like this:

```js
function formatAs12HourClock() {}
```

Suppose we now call the function like this:

```js
formatAs12HourClock("05:30");
```

{{<multiple-choice question="When calling formatAs12HourClock('05:30'), what is the 🎯 target output?" answers="`'05:30 am'` | `'05:30 AM'` | `'5:30 am'` | `'17:30'`" feedback="Correct! The target output should append 'am' to maintain the 12-hour clock format. | Not quite - based on the examples, we use lowercase 'am'. | No - we want to preserve the leading zero. | No - we want 12-hour format, not 24-hour format." correct="0" >}}

👉🏼 [Keep going](#current-2)
===[[Exercise 2]]===

Let's continue with `formatAs12HourClock` defined like this:

```js
function formatAs12HourClock() {}
```

Suppose we call the function like this:

```js
formatAs12HourClock("20:10");
```

{{% multiple-choice question="When calling formatAs12HourClock('05:30'), what is the current output?" answers="undefined | '05:30 am' | null | An error is thrown" feedback="Correct! Since the function is empty and has no return statement, it returns undefined by default. | Not quite - remember that the function is currently empty with no implementation. | No - an empty function returns undefined, not null. | No - an empty function executes successfully but returns undefined." correct="0" %}}

{{</tabs>}}

## 🧩 Comparing values

We have learned how to log values to the console. We can also **compare** two values. We check that a function produces some target output with a comparison.

We compare the current output of `formatAs12HourClock("08:00")` with the target output of `"08:00 am"` and ask: **are these two values the same?** We use a comparison operator to compare two expressions and check if they evaluate to the same value. We use the strict equality operator `===` to check if two values are the same.

### Left equals Right

```js
formatAs12HourClock("08:00") === "8:00 am";
```

`===` checks if the values on the left and right of the operator are the same. We can think of `formatAs12HourClock("08:00") === "8:00 am"` as the question: "Is the return value of `formatAs12HourClock("08:00")` equal to `"8:00 am"` ?" This leads to the question:

> What will the expression `formatAs12HourClock("08:00") === "8:00 am"` evaluate to?

## ✅ ❌ Boolean values

{{<tabs name="booleans">}}
===[[Define Boolean]]===

### Does 1 equal 0? Yes or No? True or False?

Some values are best represented as strings: any piece of text, a name, address, etc will most likely be stored using the string data type. The number data type can store numbers we use in calculations.

If we're comparing two things, there are only two different states: **true** or **false**. This leads us to the **boolean** datatype, which only has true or false values. Whenever we compare two values with a comparison operator, we end up with a boolean value: `true` or `false`. It's one or the other. It's boolean.

```js
// using the strict equality comparison expression

console.log(42 === 10 + 32);
// logs true

console.log(10 * 5 === 60);
// logs false
```

👉🏾 [Now work through the exercises](#booleans-1)
===[[Exercise 1]]===
Look at the code below and predict what each expression will evaluate to. Write your prediction down. Use the Node REPL to check your answers. Check out [some relevant documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality) if you've not seen a particular operator before.

```js {linenos=table,linenostart=1}
true === false;
5 == 2 + 4;
4 * 5 == "20";
3 * 2 === 6;
Math.min(3, 4, 5) === 4;
let mhairiName = "Mhairi";
typeof mhairiName === "string";
let mhairiAge = 28;
let isMhairiOldEnoughToDrive = true;
let kilometersMhairiDrivesToWork = 9.4;
```

👉🏿 [Keep Going](#booleans-2)
===[[Exercise 2]]===
Look at the code below and predict what each expression will evaluate to. Write your prediction down. Use the Node REPL to check your answers. Check out [some relevant documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality) if you've not seen a particular operator before

```js {linenos=table,linenostart=1}
"hello Mhairi" === `hello ${mhairiName}`;
"${mhairiName} is 28" === `Mhairi is ${mhairiAge}`;
isMhairiOldEnoughToDrive;
isMhairiOldEnoughToDrive === true;
mhairiAge >= 18;
29 <= mhairiAge;
Math.round(kilometersMhairiDrivesToWork) === 9;
```

👉🏿 [Keep Going](#booleans-3)
===[[Exercise 3]]===

### Checking misconceptions 🤔

Look at the code below and then predict what the expression will evaluate to. Be sure to explain your answer too. Use the Node Repl to check your answer. Does the REPL output make sense?

Try using the Node Repl to check your answer. Does the REPL output make sense?

```js {linenos=table,linenostart=1}
console.log(10 + 32) === 42;
```

{{</tabs>}}
