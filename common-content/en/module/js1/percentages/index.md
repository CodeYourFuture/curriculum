+++
title = 'Percentages'

time = 30
[objectives]
    2='Construct simple expressions to represent a calculation'
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

Let's begin with this problem:

> Given a _decimal number_ I want to convert it into a _percentage format_.

For example, given the decimal number `0.5` we return the string `"50%"`. Given the decimal number `0.231` we return the string `"23.1%"`.

### Restating the problem

Our function must convert _any_ decimal to a percentage. We have used functions already. Here are some functions we've used:

```js {linenos=table,linenostart=1}
console.log("hello world"); // logs "hello world" to the console
Math.round(3.141); // evaluates to the whole number 3
```

All these expressions are _function calls_: we’re passing input (`"hello world"` or `3.141`) to the functions (`console.log` or `Math.round`) to use their functionality. `Math.round` and `console.log` are functions that the JavaScript language designers have written and stored inside the language, because everyone needs them all the time.

No such pre-built function converts any number to a percentage, so we must write our own. We're going to create a function called `convertToPercentage` with the following requirements:

_Given_ a number input

_When_ we call `convertToPercentage` with the number input

_Then_ we get back a string representing the percentage equivalent of that number.

Here are some examples:

```js {linenos=table,linenostart=1}
convertToPercentage(0.5); // should return "50%"
```

```js {linenos=table,linenostart=1}
convertToPercentage(0.231); // should return "23.1%"
```

### Useful expressions

It is often helpful to solve a problem in one specific instance before doing it for all cases.

We're not going to define our function yet. Instead we will work out what our function should do. Then we'll define a function which does the same thing.

In programming, we always try the simplest thing first. Let’s consider how to convert just one number to a percentage. Look at this variable declaration:

```js {linenos=table,linenostart=1}
const decimalNumber = 0.5;
```

We want to create an expression for the percentage using the value of `decimalNumber`. To convert to a percentage, we will multiply the number by 100 and then add a `"%"` sign on the end.

```js {linenos=table,linenostart=1}
const decimalNumber = 0.5;
const percentage = `${decimalNumber * 100}%`;
```

Recalling template literals, the expression in the curly braces will be evaluated first and then inserted into the string, giving us the percentage string.

{{<tabs name="Calculation with variables">}}

===[[Calculate area]]===

Now that we've solved the problem of converting a single decimal number to a percentage, let's practice solving other similar problems using expressions.

Create a new JavaScript file so that you can try running the code for yourself.

### Calculating the area and perimeter of a rectangle

In one of these new files, let's make two variables that describe the dimensions of a rectangle:

```js
const height = 10; // 10 is just an example of a value here - your code should still work if you change this to another value.
const width = 30; // Also just an example - your code should still work if this changes.
```

Using these variables, let's calculate the [area](https://www.bbc.co.uk/bitesize/topics/zjbg87h/articles/zwqt6fr) and [perimeter](https://www.bbc.co.uk/bitesize/topics/zvmxsbk/articles/zmrpxbk) of the rectangle.

We can calculate the area and perimeter by creating expressions that use the `height` and `width` variables we just created. Hint: read the links above if you don't know how to calculate area and perimeter of a rectangle.

Finally, we'll create two more variables: `area` and `perimeter` to store the result of the calculations.

```js
const area = FILL_ME_IN;
const perimeter = FILL_ME_IN;
```

Now, if we change the numbers assigned to `height` and `width`, are the `area` and `perimeter` values still correct? Try using `console.log` to print out the value of the variables and then run the script using Node to view the output.

===[[Convert pence]]===

Remember to create a new JavaScript file to run the code for yourself.

### Converting pence to pounds

Like the rectangle example, we'll start by creating a variable to store a [price in pence](http://teach.files.bbci.co.uk/skillswise/ma26mone-e3-f-money-pounds-and-pence.pdf):

```js
const price = 130; // Just an example value. Try changing this value to 0, 10, or 1521, and make sure you still get the right answer from your code.
```

Now, you should write an expression that calculates the price in pounds. The price in pounds should be shown with 2 decimal places and start with "£".

Try using `console.log` to print out the value of price in pounds and then run the script using Node to view the output.

{{</tabs>}}
