+++
title = '➡️ Arrow functions'

time = 5
facilitation = false
emoji= '➡️'
[objectives]
    1='Write an arrow function'
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

As we write more code, we are going to write lots and lots of anonymous functions.

JavaScript added even shorter ways of writing an anonymous function. These four functions all do the same thing:

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
// We can also skip the keyword function.
// If we do this, we need an arrow between our parameters and the function body.
(decimalNumber) => {
  return `${decimalNumber * 100}%`;
}
```

```js
// If our function just returns a single value,
// without needing any other statements in our function,
// we can even skip the return keyword.
(decimalNumber) => `${decimalNumber * 100}%`;
```

This can be useful to make is quicker and easier to write functions. It also reduces the number of things we need to skip past when reading a function.

Applying all of these techniques, we can rewrite our Jest test with fewer words:

```js
test("works for any number ending in 1", () => {
  expect(getOrdinalNumber(1)).toBe("1st");
  expect(getOrdinalNumber(11)).toBe("11th");
  expect(getOrdinalNumber(21)).toBe("21st");
});
```

It doesn't matter whether you use arrow functions or use the `function` keyword - they work the same.
