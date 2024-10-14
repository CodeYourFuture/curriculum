+++
title = '🏷️ Anonymous functions'

time = 10
facilitation = false
emoji= '🏷️'
[objectives]
    1='Explain the difference between a named function and an anonymous function'
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

We have seen functions written like this:

```js
function convertToPercentage(decimalNumber) {
  return `${decimalNumber * 100}%`;
}
```

But in our Jest test, we wrote a function differently:

```js
function() {
  expect(getOrdinalNumber(1)).toBe("1st");
  expect(getOrdinalNumber(11)).toBe("11th");
  expect(getOrdinalNumber(21)).toBe("21st");
}
```

{{<note type="exercise" title="👀 Spot the difference">}}

Stop and identify the difference in syntax between these two function definitions.

{{</note>}}

We didn't give a name to the function in our Jest test.

This is ok, because we don't need it to have a name. We don't call the function by name. We passed the function as an argument to the `test` function. The `test` function takes the function as a parameter. And function parameters get their own names in the scope of the function.

We can imagine the `test` function is defined like this:

```js
function test(name, testFunction) {
  // Call the passed test function
  testFunction();
}
```

It doesn't matter what _we_ named our test function - inside the `test` function it has the name `testFunction`, so Jest can call it.

Because it doesn't matter what we named the function (because we never call it by name), we didn't give it a name.

Otherwise, these two functions act the same. The only difference between them is whether we created a variable name for the function in the scope where we defined it.
