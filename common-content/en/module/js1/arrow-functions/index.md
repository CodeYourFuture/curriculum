+++
title = 'Arrow functions'

time = 5
[objectives]
    1='Write an arrow function'
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

As we write more code, we are going to write lots and lots of {{<tooltip title="anonymous functions">}}An anonymous function is a function which is not bound to a name in the scope where it is defined.{{</tooltip>}}.

JavaScript has even shorter ways of writing an anonymous function. These four functions all do the same thing:

```js
function convertToPercentage(decimalNumber) {
  return `${decimalNumber * 100}%`;
}
```

```js
// We can skip the name of the function if we don't need it to have a name.
function (decimalNumber) {
  return `${decimalNumber * 100}%`;
}
```

```js
// We can also skip the keyword 'function'.
// If we do this, we need an arrow between our parameters and the function body.
(decimalNumber) => {
  return `${decimalNumber * 100}%`;
};
```

```js
// If our function just returns a single value,
// without needing any other statements in our function,
// we can even skip the return keyword.
(decimalNumber) => `${decimalNumber * 100}%`;
```

This can make it easier and quicker to write functions. It also reduces the number of things we need to read in a function.

Applying all of these techniques, we can rewrite our Jest test with fewer words:

```js
test("works for any number ending in 1", () => {
  expect(getOrdinalNumber(1)).toEqual("1st");
  expect(getOrdinalNumber(11)).toEqual("11th");
  expect(getOrdinalNumber(21)).toEqual("21st");
});
```

It doesn't matter whether you use arrow functions or use the `function` keyword - they work the same.

Not all arrow functions are anonymous - you can assign them to a variable too:

```js
const convertToPercentage = (decimalNumber) => `${decimalNumber * 100}%`;
```

Anonymous vs named refers to whether the function is bound to a name, not whether it was defined with the `function` keyword or an `=>`.
