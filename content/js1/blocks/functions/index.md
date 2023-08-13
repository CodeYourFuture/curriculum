+++
title = '🪄 Functions'
headless = true
time = 20
facilitation = false
emoji= '🗄️'
[objectives]
    1='Define a function in programming'
    2='Evaluate a function expression'
    3='Call a function with an input in REPL'
+++

Now, instead of adding or multiplying numbers, we’ll consider `10.3`.

> 🤔 "What is the nearest whole number to `10.3`?"

The process of finding the nearest whole number to a decimal number is called **rounding**. So we could rephrase our question as:

> 🤔 "What does the number `10.3` **round** to?”

## ♻️ Reusing instructions

There is no arithmetical operator for rounding the number `10.3` in JavaScript. But we will want to round numbers **again and again**. We should use a {{<tooltip title="function">}}A **function** is a reusable set of instructions.{{</tooltip>}}.

`Math.round` is an example of a function. Remember, a function is a reusable set of instructions: `Math.round` contains instructions for rounding any number.

Functions usually take **inputs** and then **apply their set of instructions to the inputs** to produce an **output**.

{{<tabs name="Functions in REPL">}}
{{<tab name="Try it yourself">}}

1. Write `Math.round` in the Node REPL
1. Hit enter to evaluate our expression

The REPL output `[Function: round]` is telling us `Math.round` is a function.

{{</tab>}}

{{<tab name="Watch and follow along">}}
![rounding](rounding.gif "[Function: round] indicates that Math.round is a function")
{{</tab>}}
{{</tabs>}}

## 📲 Calling a function

For a function to work, we need to get Node to read the instructions and execute them. Execution means the computer reads and follows instructions. So we can write the following in the REPL:

![round-img](math.round-number-10.3.png)

Notice now we have `(` and `)` brackets after the name of the function and a number inside the brackets. The brackets mean that we are calling the function. The number inside the brackets is the **input** we're passing to the function. Try it yourself.

{{<note title="Calling a function" type="note">}}

**Calling a function** means telling the computer to read the function's instructions and carry out its instructions. When calling a function we can also pass inputs to the function.

{{</note>}}

`Math.round(10.3)` is a call expression; you can read this as:

"apply the set of instructions for `Math.round` to the number `10.3`."

If we type `Math.round(10.3)` then we get the result 10.
So we say that `Math.round(10.3)` returns 10.

A **call expression** is an **expression** which **evaluates** to the value returned by the function when it is called. So the expression `Math.round(10.3)` evaluates to the value `10`.

If we assign that expression to a variable, or use it in a string, we'll get the value `10`. So we can write:

```js
const roundedValue = Math.round(10.3);
```

or we can write:

```js
const roundedValueInAString = `10.3 rounds to ${Math.round(10.3)}`;
```

Both of these instructions **evaluate** the call expression `Math.round(10.3)` to the returned value `10` as soon as the call expression appears. The variable `roundedValue` will have a numeric value `10` (just like if we'd written `const roundedValue = 10;`), and the variable `roundedValueInAString` will have a string value `"10.3 rounds to 10"`.
