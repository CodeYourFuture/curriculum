+++
title = '⚖️ Comparing current and target output'

time = 20
facilitation = false
emoji= '🧩'
[objectives]
    1='Evaluate an expression that uses a comparison operator'
    2='Explain when to use the === operator in a program'
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

{{<tabs name="current">}}
{{<tab name="Define current and target">}}
Let's start with a function declaration of `formatAs12HourClock`:

```js {linenos=table,linenostart=1}
function formatAs12HourClock() {}
```

Whenever we call `formatAs12HourClock` we expect it to return a particular value, which we call the 🎯 **target output**. For example, we expect `formatAs12HourClock("08:00")` to return `"08:00 am"`. `"08:00 am"` is the 🎯 **target output**.

However, the **current output** is what the function _actually_ returns right now.

👉🏼 [Work through the exercises](#current-1)

{{</tab>}}
{{<tab name="Exercise 1">}}

Let's start with `formatAs12HourClock` defined like this:

```js {linenos=table,linenostart=1}
function formatAs12HourClock() {}
```

Suppose we now call the function like this:

```js
formatAs12HourClock("05:30");
```

For the call above, what is the

a) the current output?
b) the 🎯 target output?

👉🏼 [Keep going](#current-2)

{{</tab>}}
{{<tab name="Exercise 2">}}

Let's continue with `formatAs12HourClock` defined like this:

```js {linenos=table,linenostart=1}
function formatAs12HourClock() {}
```

Suppose we call the function like this:

```js
formatAs12HourClock("20:10");
```

For the call above, what is the

a) the current output?
b) the 🎯 target output?

{{</tab>}}
{{</tabs>}}

## 🧩 Comparing values

We have learned how to log values to the console. We can also **compare** two values. We check that a function produces some target output with a comparison.

We compare the current output of `formatAs12HourClock("08:00")` with the target output of `"08:00 am"` and ask: **are these two values the same?**. We use a comparison operator to compare two expressions and check if they evaluate to the same value. We use the strict equality operator `===` to check if two values are the same.

### Left equals Right

```js
formatAs12HourClock("08:00") === "8:00 am";
```

`===` checks if the values on the left and right of the operator are the same. We can think of `formatAs12HourClock("08:00") === "8:00 am"` as the question: "Is the return value of `formatAs12HourClock("08:00")` equal to `"8:00 am"` ?" This leads to the question:

> What will the expression `formatAs12HourClock("08:00") === "8:00 am"` evaluate to?

## ✅ ❌ Boolean values

{{<tabs name="booleans">}}
{{<tab name="Define Boolean">}}

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
{{</tab>}}

{{<tab name="Exercise 1">}}
Look at the code below and then try predicting how the computer will interpret each line. Remember to think about each line and work out if it is a declaration or a statement.
You may want to use the Node REPL to help you check your answers.

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
let isMhairOldEnoughToDrive = true;
let kilometersMhairiDrivesToWork = 9.4;
```

👉🏿 [Keep Going](#booleans-2)

{{</tab>}}
{{<tab name="Exercise 2">}}
Look at the code below and predict what each expression will evaluate to. Write your prediction down. Use the Node REPL to check your answers. Check out [some relevant documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality) if you've not seen a particular operator before

```js {linenos=table,linenostart=1}
"hello Mhairi" === `hello ${mhairiName}`;
"${mhairiName} is 28" === `Mhairi is ${mhairiAge}`;
isMhairOldEnoughToDrive;
isMhairOldEnoughToDrive === true;
mhairiAge >= 18;
29 <= mhairiAge;
Math.round(kilometersMhairiDrivesToWork) === 9;
```

👉🏿 [Keep Going](#booleans-3)
{{</tab>}}

{{<tab name="Exercise 3">}}

### Checking misconceptions 🤔

Look at the code below and then predict what the expression will evaluate to. Be sure to explain your answer too. Use the Node Repl to check your answer. Does the REPL output make sense?

Try using the Node Repl to check your answer. Does the REPL output make sense?

```js {linenos=table,linenostart=1}
console.log(10 + 32) === 42;
```

{{</tab>}}
{{</tabs>}}
