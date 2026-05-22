+++
title = 'Side effects'

time = 20
[objectives]
    1='Define a side effect'
    2='Describe how side effects lead to buggy code'
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

Currently `calculateMedian` mutates its input - the array of numbers. This mutation is called a {{<tooltip title="side effect">}} A function has a side effect if it does something which can be observed from outside of the function (aside from returning a value). Removing an element from an array is a side effect. Logging something to the console is also a side effect.{{</tooltip>}}.

In this case, the **side effect** has unintended consequences. We have introduced a {{<tooltip title="bug">}}Any unintended behaviour or effect from our software is called a **bug**.{{</tooltip>}} which makes `calculateMean` return the wrong value. Both `calculateMean` and `calculateMedian` need access to the original `salaries` array. Therefore, we should take make sure we don't mutate the array unless we really mean to.

### Testing no mutation

We can add an additional assertion to the tests for `calculateMedian` to check it isn't modifying the original input:

```js
test("doesn't modify the input", () => {
  const list = [1, 2, 3];
  calculateMedian(list);

  expect(list).toEqual([1, 2, 3]); // Note that the toEqual matcher checks the values inside arrays when comparing them - it doesn't use `===` on the arrays, we know that would always evaluate to false.
});
```

In this test, we don't check the **return value** of `calculateMedian`. We assert that the input has the same contents as the original input. We can use the `toEqual` matcher to check the contents of the array referenced by the variable `list`.

{{<note title="🔧 Fix it">}}

Recall the current buggy implementation of `calculateMedian`:

```js
function calculateMedian(list) {
  const middleIndex = Math.floor(list.length / 2);
  const median = list.splice(middleIndex, 1)[0];

  return median;
}
```

We've established that we shouldn't use `splice` to retrieve the median from the input array.
Fix the implementation of `calculateMedian` above so it no longer calls `splice` (which mutates the input), and instead gives the right answer _without_ mutating the input.

{{</note>}}
