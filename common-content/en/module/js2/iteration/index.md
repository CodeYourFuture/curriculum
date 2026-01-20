+++
title = 'Iteration'

time = 20
[objectives]
    1='Define iteration'
    2='Explain why iteration is relevant in a particular problem'
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

## What is Iteration?

Iteration is one of the most fundamental concepts in computer programming. It refers to the process of repeating a set of instructions or operations multiple times, which is essential for solving real-world problems efficiently.

### Iteration as a General Concept

Iteration exists across all major programming languages - whether you're writing JavaScript, Python, Java, C, or any other language. The core idea is the same: when you need to perform the same action on multiple items or repeat an operation until a condition is met, you use iteration.

Some common real-world examples of iteration include:

- Processing each item in a list or array
- Repeating a calculation until a specific condition is reached
- Navigating through database records one by one
- Validating multiple form inputs
- Building complex structures by repeating similar operations

Without iteration, we'd have to write repetitive code manually for each item we wanted to process - which would be impractical and error-prone.

## The Fundamental `for` Loop

In JavaScript, the most fundamental and widely-used loop construct is the `for` loop. This is the loop type you should master first when learning to iterate.

### Understanding the `for` Loop Syntax

The traditional `for` loop in JavaScript has four main parts:

```javascript
for (initialization; condition; increment) {
  // code to repeat
}
```

Let's break down what each part does:

1. **Initialization** (`initialization`): This runs once, before the loop starts. Typically, you initialize a counter variable here. Example: `let i = 0`
2. **Condition** (`condition`): This is checked before each iteration. If it's `true`, the loop continues; if it's `false`, the loop stops. Example: `i < 5`
3. **Increment** (`increment`): This runs after each iteration, usually updating the counter. Example: `i++`
4. **Loop Body**: The code inside the curly braces `{}` that you want to repeat.

### How the `for` Loop Works

Here's what happens step by step:

1. Initialize the counter variable (happens once)
2. Check the condition
3. If the condition is true, execute the code in the loop body
4. Execute the increment/update statement
5. Go back to step 2
6. Repeat until the condition becomes false

For example, if you write:

```javascript
for (let i = 0; i < 3; i++) {
  console.log(i);
}
```

This will print: `0`, `1`, `2` and then stop (because `3 < 3` is false).

### Using `for...of` for Arrays

When working with arrays (like in our example below), the `for...of` loop is often simpler and clearer:

```javascript
const numbers = [10, 20, 30];
for (const number of numbers) {
  console.log(number);
}
```

This automatically iterates through each element in the array without needing to manage a counter variable.

## Other Loop Types in JavaScript

While the `for` loop is the most fundamental, JavaScript provides several other ways to iterate. It's useful to know about these as you develop your skills:

### The `while` Loop

The `while` loop continues to execute as long as a condition is true:

```javascript
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
```

`while` loops are useful when you don't know in advance how many times you need to iterate (for example, when reading lines from a file until you reach the end).

### The `do...while` Loop

A `do...while` loop is similar to a `while` loop, but it always executes at least once, checking the condition at the end:

```javascript
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);
```

This is useful when you need to ensure the code runs at least once.

### The `for...in` Loop

The `for...in` loop iterates over the properties of an object (including inherited ones):

```javascript
const person = { name: 'Alice', age: 30, city: 'London' };
for (const key in person) {
  console.log(key + ': ' + person[key]);
}
```

**Note:** For arrays, use `for...of` instead of `for...in`, as `for...in` includes inherited properties.

### Array Methods like `forEach`, `map`, and `filter`

Modern JavaScript provides array methods that handle iteration for you:

```javascript
const numbers = [1, 2, 3, 4, 5];

// forEach - executes a function for each element
numbers.forEach(function(num) {
  console.log(num * 2);
});

// map - creates a new array with transformed elements
const doubled = numbers.map(num => num * 2);

// filter - creates a new array with only elements that pass a test
const evens = numbers.filter(num => num % 2 === 0);
```

These methods make your code more readable and are preferred in modern JavaScript development.

## Summary

Iteration is a universal programming concept that you'll use constantly. Start by mastering the `for` and `for...of` loops, as these are the most common and fundamental. As you progress, you'll learn when and how to use the other loop types and array methods, each suited to different situations and coding styles.


To solve the sub-goal, we have to repeatedly add each number in the array to the `total`, one at a time. In programming, the process of repeating something is called **iteration**.

In programming, we can **iterate** by using a {{<tooltip title="loop">}}A loop is a sequence of instructions that is continually repeated until some condition is reached.{{</tooltip>}}.

In particular, we can use a [`for...of` statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of) to sum the elements of the array.

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
