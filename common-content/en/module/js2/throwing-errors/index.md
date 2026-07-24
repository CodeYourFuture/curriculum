+++
title = 'Throwing errors'

time = 20
[objectives]
    1='Explain what happens when an error is thrown'
    2='Throw an error when a function cannot do its job'
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

By now, `calculateMedian` should handle lists of both odd and even length. Here's one way to do that, which we'll build on for the rest of this page:

```js
function calculateMedian(list) {
  const middleIndex = Math.floor(list.length / 2);
  if (list.length % 2 === 0) {
    // Even length: average the two middle values
    return (list[middleIndex - 1] + list[middleIndex]) / 2;
  }
  // Odd length: there's a single middle value
  return list[middleIndex];
}
```

But what should it do with input like this?

```js
calculateMedian([]);
calculateMedian("banana");
calculateMedian("apple");
calculateMedian(["ten", "twenty", "thirty"]);
```

There is no median of an empty list. A string isn't a list of numbers at all. And a list of strings isn't a list of numbers either, even though it _is_ a list. But our implementation doesn't know any of that. It will happily return `NaN` for the empty array, `NaN` again for `"banana"`, a plausible-looking `"p"` for `"apple"`, and `"twenty"` for the list of strings, a value that looks entirely plausible, so nobody would even think to question it. The results aren't just wrong, they're unpredictable: the same kind of bad input produces a different kind of bad output depending on exactly what you pass in.

This is a problem. The {{<tooltip title="caller">}}The caller of a function is the code that calls it, not a person. If `main` calls `calculateMedian(list)`, then `main` is the caller.{{</tooltip>}} of `calculateMedian` gets back a value that _looks_ like an answer, and carries on using it. The program doesn't fail here, where the mistake happened. It fails later, somewhere else, when that nonsense value gets used. Bugs like this are hard to track down because the error trace points far away from the real cause.

When a function cannot do its job, it shouldn't guess. It should fail immediately and loudly, at the point where the problem is. We call this {{<tooltip title="failing fast">}}Failing fast means stopping as soon as we know something is wrong, instead of carrying on with bad data and failing later somewhere confusing.{{</tooltip>}}.

What about calling it with no argument at all?

```js
calculateMedian();
```

This time our implementation does crash, straight away:

```console
TypeError: Cannot read properties of undefined (reading 'length')
```

Here, at least, we get an error message. But it comes from the JavaScript engine, not from us, and it doesn't explain what's wrong: it doesn't mention `calculateMedian`, or say that a list was expected. Whoever hits this has to read our code to work out what actually went wrong. If we check for a missing argument ourselves, we can throw a message that says exactly that, straight away.

### Using `throw`

In Structuring Data, you interpreted error traces when JavaScript threw a `SyntaxError` at you. We can also {{<tooltip title="throw">}}Throwing an error stops normal execution immediately. The error travels up through the calling functions until something handles it. If nothing handles it, the program crashes and prints the error trace.{{</tooltip>}} errors from our own code, using the `throw` keyword:

```js
function calculateMedian(list) {
  // Checking for a non-array (including no argument at all)
  if (!Array.isArray(list)) {
    throw new Error("calculateMedian requires an array of numbers");
  }
  // Checking for an empty array
  if (list.length === 0) {
    throw new Error("calculateMedian requires a non-empty array");
  }
  // Checking for non-number items in the array
  for (const item of list) {
    if (typeof item !== "number") {
      throw new Error("calculateMedian requires an array of numbers");
    }
  }
  const middleIndex = Math.floor(list.length / 2);
  if (list.length % 2 === 0) {
    return (list[middleIndex - 1] + list[middleIndex]) / 2;
  }
  return list[middleIndex];
}
```

[`Array.isArray`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray) checks whether a value is an array. We also check every element is a number, using `typeof`. If the input isn't an array, is empty, or contains anything that isn't a number, we `throw` a new [`Error`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) with a message explaining what went wrong.

Save this in a file and try calling `calculateMedian([])`. The program stops and prints an error trace, just like the ones you interpreted before, except this time the message is one we wrote ourselves:

```console
Error: calculateMedian requires a non-empty array
    at calculateMedian (/Users/cyf/prep/median.js:8:11)
```

Now the error points at the exact place the problem was detected, with a message saying what the problem is. That's much more useful to whoever calls our function than a mysterious `NaN`.

### Testing that a function throws

We can assert that a function throws using the [`toThrow`](https://jestjs.io/docs/expect#tothrowerror) matcher:

```js
test("throws an error when given an empty list", () => {
  expect(() => calculateMedian([])).toThrow(
    new Error("calculateMedian requires a non-empty array")
  );
});

test("throws an error when given something that isn't an array", () => {
  expect(() => calculateMedian("banana")).toThrow(
    new Error("calculateMedian requires an array of numbers")
  );
});

test("throws an error when given an array with a non-number", () => {
  expect(() => calculateMedian(["ten", "twenty", "thirty"])).toThrow(
    new Error("calculateMedian requires an array of numbers")
  );
});

test("throws an error when given no argument", () => {
  expect(() => calculateMedian()).toThrow(
    new Error("calculateMedian requires an array of numbers")
  );
});
```

Note that we wrap the call in a function. When we call a function with arguments, those arguments get evaluated before the function is called. If we called `expect(calculateMedian([])).toThrow()` directly, the error would be thrown before `expect` was called, and so before `expect` could check anything.
