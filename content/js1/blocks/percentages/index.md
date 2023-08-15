+++
title = '🧩 Percentages'
headless = true
time = 5
facilitation = false
emoji= '🗄️'
[objectives]
    1='Define a parameter'
    2='Construct simple expressions to represent a calculation'
+++

Let's start off by defining a problem.

> Given a _decimal number_ I want to convert it into a _percentage format_.

For example, given the decimal number `0.5` we should get the string `"50%"`.
And given the decimal number `0.231` we should get the string `"23.1%"` and so forth.

## Restating the problem

We want to implement some functionality to convert _any_ given number into a percentage.
Previously, we saw how to perform a given task using some functions. Here are some examples:

```js {linenos=table,linenostart=1}
console.log("hello world"); // logs "hello world" to the console
Math.round(3.141); // evaluates to 3
```

All these expressions are _function calls_: we’re passing input (`"hello world"` or `3.141`) to the functions (`console.log` or `Math.round`) to use their functionality. In the case of `Math.round` and `console.log` these functions have been created and made available to use whenever we start running a program with NodeJS.

However, no such pre-built function allows us to convert any number to a percentage. So we're going to create a function called `convertToPercentage` with the following requirements:

- takes any number input
- converts it to a string in percentage form, and returns that string.

```js {linenos=table,linenostart=1}
convertToPercentage(0.5); // should return "50%"
```

```js {linenos=table,linenostart=1}
convertToPercentage(0.231); // should return "23.1%"
```

## Useful expressions

It is often helpful to solve a problem in one specific instance before doing it for all cases.

In programming, we always try the simplest thing first. Let’s consider how to convert just one number in to a percentage.
Let’s consider the variable declaration below:

```js {linenos=table,linenostart=1}
const decimalNumber = 0.5;
```

We want to create an expression for the percentage using the value of `num`.
To convert to a percentage, we can multiply the number by 100 and then add a `"%"` sign on the end.

So we can write:

```js {linenos=table,linenostart=1}
const decimalNumber = 0.5;
const percentage = `${num * 100}%`;
```

Recalling template literals, the expression in the curly braces will be evaluated first and then inserted into the string, giving us the percentage string.

{{<note type="exercise" title="Exercise 1.1">}}

The following variables represent the dimensions of a rectangle:

```js
const height = ; // could have a value like 10
const width = ; // could have a value like 30
```

Create variables `area` and `perimeter` for the area and perimeter of the rectangle, by creating expressions from the `height` and `width` variables.

```js
const area = FILL_ME_IN;
const perimeter = FILL_ME_IN;
```

Try putting in different numeric values of `height` and `width` to check the `area` and `perimeter` values are still correct.

{{</note>}}

{{<note type="exercise" title="Exercise 1.2">}}

The following variable represents the cost of something in pence:

```js
const price = ; // could have a value like 130
```

Write an expression for the price in pounds. The price in pounds should start with a "£" symbol.
The price should be to 2 decimal places.

{{</note>}}
