+++
title = 'Iteration'

time = 20
[objectives]
    1='Define iteration'
    2='Explain why iteration is relevant in a particular problem'
    3='Understand the `for` and `for...of` loops in JavaScript'
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

## What is Iteration?

In programming, the process of repeating something is called **iteration**.

Iteration is one of the most fundamental concepts in computer programming. It refers to the process of repeating a set of instructions or operations multiple times.

### Iteration as a General Concept

Iteration exists across all major programming languages - whether you're writing JavaScript, Python, Java, or any other language. The core idea is the same: when you need to perform the same action on multiple items or repeat an operation until a condition is met, you use iteration.

Some common real-world examples of iteration include:

- Processing each item in a list or array
- Repeating a calculation until a specific condition is reached
- Navigating through database records one by one
- Validating multiple form inputs
- Building complex structures by repeating similar operations

Without iteration, we'd have to write repetitive code manually for each item we wanted to process - which could be impractical or produce more errors.

## The Fundamental `for` Loop

We can **iterate** by using a {{<tooltip title="loop">}}A loop is a sequence of instructions that is continually repeated until some condition is reached.{{</tooltip>}}.

In JavaScript, the most fundamental and widely-used loop construct is [the `for` loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for). This is a good loop to learn first.

### Understanding the `for` Loop Syntax

The `for` loop in JavaScript has four main parts:

```javascript
for (initialisation; condition; increment) {
  // loop body
}
```

Let's break down what each part does:

1. `initialisation`: This runs once, before the loop starts. Typically, you initialise a counter variable here. Example: `let i = 0`
2. `condition`: This is checked before each iteration. If it's `true`, the loop continues; if it's `false`, the loop stops. Example: `i < 5`
3. `increment`: This runs after each iteration, usually updating the counter. Example: `i++`
4. `loop body`: The code inside the curly braces `{}` that you want to repeat.

### How the `for` Loop Works

Here's what happens step by step:

1. `Initialise` the counter variable (happens once)
2. Check the `condition`
3. If the `condition` is true, execute the code in the loop body
4. Execute the `increment` statement
5. Go back to step 2
6. Repeat until the `condition` becomes false

For example, if you write:

```javascript
for (let i = 0; i < 3; i++) {
  console.log(i);
}
```

This will print: `0`, `1`, `2` and then stop (because `3 < 3` is false).

Here's the step by step:

1. Initialise the counter variable `i` with the value `0`
2. Check that `i` is less than `3`
3. If the condition is true, execute the console log
4. Increment `i` so it's value is now `2`
5. Go back to step 2
6. Repeat until `i` equals `3` (the condition, `3 < 3`, is false so loop stops)

### Using `for...of` for Arrays

When working with arrays (like in our example below), the `for...of` loop is often simpler and clearer:

```javascript
const numbers = [10, 20, 30];
for (const number of numbers) {
  console.log(number);
}
// will log 10, 20 and 30
```

This automatically iterates through each element in the array without needing to manage a counter variable.

### Summary

Iteration is a universal programming concept that you'll use constantly. Start by mastering the `for` and `for...of` loops, as these are the most common and fundamental. As you progress, you'll learn when and how to use the other loop types and array methods, each suited to different situations and coding styles.

## Applying iteration to CalculateMean

To solve the sub-goal, we have to repeatedly add each number in the array to the `total`, one at a time. We can use a [`for...of` statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of), as outlined above, to sum the elements of the array.

```js
function calculateMean(list) {
  let total = 0;
  for (const item of list) {
    total += item;
  }
}
```

### 🐛 Visualising iteration with debugger

{{<youtube>}}https://www.youtube.com/watch?v=YX5jAFJlEqM{{</youtube>}}
