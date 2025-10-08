+++
title = 'No parameters'

time = 10
hide_from_overview = true
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

Let's look at the case where the query string is an empty string.

In this case, we need to think of an output that makes sense.

We saw before that we can try to look up a property on an object which the object doesn't actually have - this will evaluate to `undefined`.

When we parse the empty query string, we want to return something where any time we ask it for the value of a key, we get back `undefined`.

An empty object behaves this way, so it makes sense to return an empty object.

Let's create a test to explore this idea. In your `prep` dir, `touch parse-query-string.js && touch parse-query-string.test.js`. Write the following test in the `parse-query-string.test.js` file.

```js
test("given a query string with no query parameters, returns an empty object", function () {
  const input = "";
  const currentOutput = parseQueryString(input);
  const targetOutput = {};

  expect(currentOutput).toEqual(targetOutput);
});
```

We can pass this test just by returning an empty object for now. We can define a function `parseQueryString` as follows:

```js
function parseQueryString() {
  return {};
}
```

We run our tests and see them pass. Great news.
