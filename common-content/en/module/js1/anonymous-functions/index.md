+++
title = 'Anonymous functions'

time = 10
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

In our Jest test, we wrote a function differently:

```js
function() {
  expect(getOrdinalNumber(1)).toEqual("1st");
  expect(getOrdinalNumber(11)).toEqual("11th");
  expect(getOrdinalNumber(21)).toEqual("21st");
}
```

{{<note type="exercise" title="👀 Spot the difference">}}

Stop and identify the difference in syntax between these two function definitions.

{{</note>}}

We didn't give a name to the function in our Jest test.

This is ok, because we don't need it to have a name. We don't call the function by name. We passed the function as an {{<tooltip title="argument">}}Arguments are values given to a function which can be different every time we call the function.{{</tooltip>}} to the `test` function. The `test` function takes the function as a {{<tooltip title="parameter">}}A parameter is a named variable inside a function. The variable's value is given by the caller, when the function is called.{{</tooltip>}}. And function parameters get their own names in the {{<tooltip title="scope">}}Scope is where a variable can be accessed from. When we define function, its parameters are only available inside the function.{{</tooltip>}} of the function.

We can imagine the `test` function is defined like this:

```js
function test(name, testFunction) {
  // Call the passed test function
  testFunction();
}
```

Inside `test` our function is labelled with the name `testFunction`. It would be labelled this whatever we named it before. Even if we didn't label it ourselves at all, it is still labelled with the name `testFunction` inside `test`.

Because it doesn't matter what we named the function (because we never call it by name), we didn't give it a name.

Otherwise, these two functions act the same. The only difference between them is whether we created a variable name for the function in the scope where we defined it.
