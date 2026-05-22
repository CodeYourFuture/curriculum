+++
title = 'Generalising further'

time = 20
[objectives]
    1='Extend an implementation based on more assertions'
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

In English, ordinal numbers mostly follow the same pattern.

> Numbers ending in 1 will generally have an ordinal number ending in "st".

Here are some examples of this pattern,

1st, 11**th**, 21st, 31st, 41st,...

All the numbers ending in 1 will continue to end in `"st"`, with the exception of 11.
11 is slightly different and ends with a `"th"`.

We can now update our test case to check that `getOrdinalNumber` works for lots of different numbers ending in 1.

`get-ordinal-number.test.js`:

```js {linenos=table,hl_lines=["5-9"],linenostart=1}
function getOrdinalNumber() {
  return "1st";
}

test("works for any number ending in 1", function () {
  expect(getOrdinalNumber(1)).toEqual("1st");
  expect(getOrdinalNumber(11)).toEqual("11th");
  expect(getOrdinalNumber(21)).toEqual("21st");
});
```

We've also updated the test description because we're adding more assertions and checking slightly different functionality.

{{<note type="exercise" title="🔧 Implement">}}

Try implementing `getOrdinalNumber` so it passes the test case above.

{{</note>}}
