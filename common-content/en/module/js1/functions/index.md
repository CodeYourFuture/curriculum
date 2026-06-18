+++
title = 'Functions'

time = 20
[objectives]
    1='Explain the purpose of a function in programming'
    2='Evaluate a function expression'
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

When we are writing programs we often find ourselves needing to do the same thing over and over again. Think back to our password checker from the previous sprint: there are lots of places where you need to enter a password!

We could re-write the code to check a password every time we needed to use it but that wouldn't be very efficient. It would take a long time to write and there's a chance we could make a mistake and introduce a bug. It would be much easier if we could write the code once and reuse it anywhere it was needed.

This applies to any repeated process. Let's look at how we can round a decimal to the nearest whole number.

###  Reusing instructions

There is no operator for rounding a number in JavaScript, but we will want to round numbers **again and again**. We can use a **function** to do this. A function is a reusable set of instructions.

`Math.round` is a function. Because a function is a _reusable_ set of instructions, `Math.round` rounds any number.

Functions usually take **inputs** and then **apply their set of instructions to the inputs** to produce an **output**.

{{<note type="exercise" title="Exercise: Using a function">}}
Create a new file to work in and add the following line:

```js
console.log(Math.round);
```

Take a look at the output in the console: 

```console
[Function: round]
```

This is telling us that `Math.round` is a function.

{{</note>}}


### Calling a function

For our function to work, we need Node to read the instructions and **execute** them. Execution simply means the computer will run the code with the instructions in it. Update your code to add some extra information.

```js
console.log(Math.round(10.3));
```

Notice the `(` and `)` brackets after the name of the function and a number inside the brackets. These brackets mean we are **calling** the function. The number inside the brackets is the **input** we're passing to the function.

{{<note title="Definition: Calling a function" type="definition">}}

**Calling a function** means telling the computer to read the function's instructions and carry them out. When calling a function we can also pass inputs to the function.

{{</note>}}

`Math.round(10.3)` is a call expression; read this as:

"apply the set of instructions for `Math.round` to the number `10.3`."

If we type `Math.round(10.3)` then we get the result `10`. So we say that `Math.round(10.3)` _returns_ `10`.

A **call expression** is an **expression** which **evaluates** to the value returned by the function when it is called. So the expression `Math.round(10.3)` evaluates to the value `10`.

If we assign that expression to a variable, or use it in a string, we'll get the value `10`. We can use this value just like any other that we store in a variable.

{{<note type="exercise" title="Exercise: Calling functions">}}
1. Update your code from earlier to store the result of calling `Math.round(10.3)` in a variable and print the variable using `console.log`
2. Create a second variable to store the result of `Math.round(4.2)` and print the sum of the two values.

<details>
  <summary>Example solution:</summary>

  ```js {{title="Part 1"}}
  roundedNumber = Math.round(10.3);

  console.log(roundedNumber);
  ```

  ```js {{title="Part 2"}}
  firstRoundedNumber = Math.round(10.3);
  secondRoundedNumber = Math.round(4.2);

  console.log(firstRoundedNumber + secondRoundedNumber);
  ```
</details>
{{</note>}}
