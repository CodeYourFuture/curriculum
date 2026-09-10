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

In our tests we wrote the functions differently:

```js
function(){
  assert.equal(formatAs12HourClock("23:00"), "11:00 pm");
}
```
Note the difference between the two: we didn't give a name to the function in our test.

This is ok, because we don't need it to have a name. We don't call the function by name. We passed the function as an argument to the `test` function. When we execute the code Node will create its own label internally and use that when it needs to reference the function. 

We can imagine the `test` function is defined like this:

```js
function test(label, testFunction) {
  // Call the passed test function
  testFunction();
}
```

The internal label attached to the function by Node doesn't matter because the function will only ever be called by Node. We will never need to use it again outside of this test. 

Otherwise, these two functions act the same. The only difference between them is whether we created a variable name for the function in the scope where we defined it.
