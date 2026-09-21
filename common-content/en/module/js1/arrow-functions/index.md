+++
title = 'Arrow functions'

time = 20
[objectives]
    1='Write an arrow function'
    2="Call a function which has been stored in a variable"
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

As we progress through this course we will find lots of situations where we can use anonymous functions. In this section we'll see how we can make them even shorter by removing the `function` keyword and in some cases reducing everything to a single line.

### Types of functions

We have already seen lots of examples of **named functions**. These are functions defined like we did in the previous module.

```js
function convertToPercentage(decimalNumber) {
  return `${decimalNumber * 100}%`;
}
```

In the last section we introduced the concept of **anonymous functions** where we don't need to assign a name to the function.

```js
function (decimalNumber) {
  return `${decimalNumber * 100}%`;
}
```

The `function` keyword isn't the only way for us to define a function. In modern versions of JavaScript we can leave it out, but we still need a way of linking the list of parameters to the function body. We use an arrow symbol (`=>`) to do so and this is why we call anonymous functions defined this way **arrow functions**.

```js
(decimalNumber) => {
  return `${decimalNumber * 100}%`;
};
```

When using arrow functions we can go a step further and omit the braces and `return` keyword too. This is called an **implicit return** but it can only be used when the function body contains a single expression. 

```js
(decimalNumber) => `${decimalNumber * 100}%`;
```

This can make it easier and quicker to write functions. It also reduces the number of things we need to read in a function.

{{<note type="exercise" title="Exercise: Using arrow functions">}}
Rewrite your tests in `timeConverter.test.js` to use arrow functions.

<details>
<summary>Solution:</summary>

```js {title="timeConverter.test.js"}
test("correctly convert time after 12:00", () => assert.equal(formatAs12HourClock("23:00"), "11:00 pm"));

test("can correctly convert morning time", () => assert.equal(formatAs12HourClock("08:00"),"08:00 am"));

test("can correctly convert midnight", () => assert.equal(formatAs12HourClock("00:00"),"12:00 am"));
```

We can use the implicit return syntax here because the `assert.equal()` call is the only expression in the function body.

</details>

{{</note>}}

### Assigning functions to a variable

Our anonymous functions don't need to stay anonymous - we can assign them to a variable if we need to. When we want to call the function we can do so using the variable name, just like we would if it was a named function.

Create a new file to try this in.

```js {title="modifyingNumbers.js"}
const doubleNumber = function(number){
    return number *2;
}

const halfNumber = (number) => number / 2;

console.log("doubled number:", doubleNumber(2));
console.log("halved number:", halfNumber(2));
```

Running the file prints:

```console
doubled number: 4
halved number: 1
```
