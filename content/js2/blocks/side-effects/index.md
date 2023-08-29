+++
title = ' Side effects'
headless = true
time = 20
facilitation = false
emoji= '🧩'
[objectives]
    1='Define mutation'
+++

Currently `calculateMedian` mutates its input - the `list` of numbers.

This mutation is called a **side effect**.

A function has a side effect if it modifies something outside its local scope.

In this case, the **side effect** has unintended and undesirable consequneces. Both `calculateMean` and `calculateMedian` need access to the `list` variable, so we cannot mutate the input in this way.

### Testing no mutation

We can add an additional assertion to the tests for `calculateMedian` to check it isn't modifying the original input

```js
test("doesn't modify the input", () => {
  const list = [1, 2, 3];
  calculateMedian(list);

  expect(list).toEqual([1, 2, 3]);
});
```

In this test, we don't check the **return value** of `calculateMedian`. We assert that the input has the same contents as the original input. We can use the `toEqual` matcher to check the contents of the original input.
