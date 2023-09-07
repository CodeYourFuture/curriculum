+++
title = '⚠️ Side effects'
headless = true
time = 20
facilitation = false
emoji= '🧩'
[objectives]
    1='Define a side effect'
    2='Describe how side effects lead to buggy code'
+++

Currently `calculateMedian` mutates its input - the `list` of numbers. This mutation is called a {{<tooltip title="side effect">}} A function has a side effect if it modifies something outside its local scope{{</tooltip>}}.

In this case, the **side effect** has unintended consequences. We have introduced a {{<tooltip title="bug">}}Any unintended behaviour or effect from our software is called a **bug**.{{</tooltip>}} which makes `calculateMean` return the wrong value. Both `calculateMean` and `calculateMedian` need access to the original `salaries` array. Therefore, we should take make sure we don't mutate the array unless we really mean to.

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
