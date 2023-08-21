+++
title = '⚖️ Comparing current and target output'
headless = true
time = 30
facilitation = false
emoji= '🧩'
[objectives]
    1='Evaluate an expression that uses a comparison operator'
    2='Explain when to use the === operator in a program'
+++

Let's start with a function declaration of `formatAs12HourClock` like this:

```js {linenos=table,linenostart=1}
function formatAs12HourClock() {}
```

Whenever we call `formatAs12HourClock` we expect it to return a particular value, which we call the 🎯 **target output**.

For example, we expect `formatAs12HourClock("08:00")` to return `"08:00 am"`.
In this case, `"08:00 am"` is the 🎯 **target output**.

However, the **current output** is what the function actually returns given its current implementation.

{{<tabs name="current vs target output">}}
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

i) the current output?
ii) the 🎯 target output?

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

i) the current output?
ii) the 🎯 target output?

{{</tab>}}
{{</tabs>}}

{{<note type="exercise" title="Generally convert pence to pounds">}}

###

This variable stores a [price in pence](http://teach.files.bbci.co.uk/skillswise/ma26mone-e3-f-money-pounds-and-pence.pdf):
Write an expression for the price in pounds. The price in pounds should be shown with 2 decimal places and start with "£".

```js
const price = ; // could have a value like 130
```

{{</note>}}

Previously we learned how to log values to the console, but we can also **compare** two values.
Comparisons are essential whenever we want to check that a function produces some target output.

We can compare the current output of `formatAs12HourClock("08:00")` with the target output of `"08:00 am"` and ask: **are these 2 values the same?**.
We can use a comparison operator to compare 2 expressions and check if they evaluate to the same value. In particular, we can use the strict equality operator `===`, a comparison operator used to check if two values are the same.

We can write an expression as follows:

```js
formatAs12HourClock("08:00") === "8:00 am";
```

In the code above, `===` will check the values on the left and the right of the operator to see if they’re the same.

We can think of `formatAs12HourClock("08:00") === "8:00 am"`

as being like the question:

Is the return value of `formatAs12HourClock("08:00")` equal to `"8:00 am"` ?

This leads to the question:

> What will the expression `formatAs12HourClock("08:00") === "8:00 am"` evaluate to?

## ✅ ❌ Boolean values

Some values are best represented as strings: any piece of text, a name, address, etc will most likely be stored using the string data type.
Similarly, we can use the number data type to store any numerical data where we'll need to use standard numerical operations like addition, multiplication etc.

However, if we're comparing values or expressions, we have one of 2 different states: **true** or **false**.
This leads us to the **boolean** datatype, which only has true or false values.
Whenever we compare 2 values with a comparison operator, we end up with a boolean value: `true` or `false`.

For example:

```js
// comparison expression
42 === 10 + 32;
// evaluates to true

10 * 5 === 60;
// evaluates to false
```

{{<tabs name="booleans">}}

{{<tab name="Exercise 1">}}

Look at the code below and then try predicting what each expression will evaluate to. You may want to use the Node REPL to help you check your answers. Check out some relevant documentation if you've not seen a particular operator before.

```js {linenos=table,linenostart=1}
true === false;
5 == 2 + 4;
4 * 5 == "20";
3 * 2 === 6;
Math.min(3, 4, 5) === 4;
let mhairiName = "Mhairi";
let mhairiAge = 28;
let isMhairOldEnoughToDrive = true;
let kilometersMhairiDrivesToWork = 9.4;
"hello Mhairi" === `hello ${mhairiName}`;
"${mhairiName} is 28" === `Mhairi is ${mhairiAge}`;
isMhairOldEnoughToDrive;
isMhairOldEnoughToDrive === true;
mhairiAge >= 18;
29 <= mhairiAge;
Math.round(kilometersMhairiDrivesToWork) === 9;
```

{{</tab>}}

{{<tab name="Exercise 2">}}
{{</tab>}}

{{<tab name="Exercise 3">}}

Trickier 🧩

Look at the code below and then try predicting what the expression will evaluate to. Be sure to explain your answer too. Try using the Node Repl to check your answer. Does the REPL output make sense?

```js {linenos=table,linenostart=1}
console.log(10 + 32) === 42;
```

{{</tab>}}
{{</tabs>}}
