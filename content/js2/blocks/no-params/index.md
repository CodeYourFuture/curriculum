+++
title = '❓ No parameters'
headless = true
time = 20
facilitation = false
emoji= '🧩'
[objectives]
    1='Explain why toBe cannot be used to compare the contents of two objects'
+++

Let's look at the case where the query string is an empty string.

In this case, we need to think of an output that makes sense.

We saw before that we can try to look up a property on an object which the object doesn't actually have - this will evaluate to `undefined`.

What we want in the case that the query string is an empty string, is something where any time we ask it for the value of a query parameter's key, we get back undefined.

An empty object behaves this way, so it makes sense to return an empty object.

We can write a test case as follows:

```js
test("given a query string with no query parameters, returns an empty object", function () {
  const input = "";
  const currentOutput = parseQueryString(input);
  const targetOutput = {};

  expect(currentOutput).toBe(targetOutput);
});
```

We can pass this test just by returning an empty object for now. We can define a function `parseQueryString` as follows:

```js
function parseQueryString() {
  return {};
}
```

However, after re-running the tests, we get the following feedback:
![to-be-check-error](to-be-check-error.png)

### Checking objects

We saw earlier that objects, like arrays, are reference types. That means that comparing two objects with `===` will only evalute to `true` if they are references to the same objects in memory. Two objects which happen to have the same properties, but are not in the same location in memory, will compare `false` using `===`.

In our test, `parseQueryString` returns a reference to an empty object. So `currentOutput` is assigned this reference. But `targetOutput` is assigned a reference to a **different object**.

If we perform the check with the `toBe` matcher we get a message back from Jest:

```console
If it should pass with deep equality, replace "toBe" with "toStrictEqual"
```

In other words, `toBe` checks whether the two objects are **references** to the same object in memory.

As `currentOutput`and `targetOutput` point to different objects - this can never be true. However, we can use a different matcher that compares the **contents** of the two objects. We can use [`toStrictEqual`](https://jestjs.io/docs/expect#tostrictequalvalue) to check that both objects have exactly the same contents:

```js
expect(currentOutput).toStrictEqual(targetOutput);
```