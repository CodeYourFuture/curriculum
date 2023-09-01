+++
title = '❓ Single pair case'
headless = true
time = 30
facilitation = false
emoji= '🧩'
[objectives]
    1='Explain why when we have to use square bracket notation to update an object'
    2='Destructure an array of length 2'
+++

Let's consider another test case: make the function work for a url with a single key-value pair.
We can write a test:

```js
test("given a query string with one pair of query params, returns them in object form", function () {
  const input = "user=mitch";
  const currentOutput = parseQueryString(input);
  const targetOutput = { user: "mitch" };

  expect(currentOutput).toStrictEqual(targetOutput);
});
```

### 🧭 Strategy

We first need to separate out the ` "user=mitch"` so we can access "user" and "mitch" separately. We can do this with split( `=`), which break the string apart.

We can split the string into an array consisting of `['fruit', 'banana']`

Then we can grab the array's contents and assign the elements meaningful names.

```js
function parseQueryString(queryString) {
  const queryParams = {};

  const keyValuePair = queryString.split("=");
  const key = keyValuePair[0]; // key will hold 'fruit'
  const value = keyValuePair[1]; // value will hold 'banana'
  queryParams.key = value;

  return queryParams;
}
```

However, instead of accessing the array's elements like this, we can use array destructuring to access the elements.

```js
function parseQueryString(queryString) {
  const queryParams = {};

  const [key, value] = queryString.split("="); // key will hold 'fruit', value will hold 'banana
  queryParams.key = value;

  return queryParams;
}
```

Now finally, we need to put them into an object.

We could define an empty object `queryParameters`

```js {linenos=table,hl_lines=["5"],linenostart=1}
function parseQueryString(queryString) {
  const queryParams = {};

  const [key, value] = queryString.split("="); // key will hold 'fruit', value will hold 'banana'
  queryParams.key = value;

  return queryParams;
}
```

One line 7, we're mutating the object `queryParams` by adding a key "key" and a value.
However, we want the key to be the value that the `key` variable holds.

So we must use square brackets to mutate the object with the correct key value pair.

```js {linenos=table,hl_lines=["5"],linenostart=1}
function parseQueryString(queryString) {
  const queryParams = {};

  const [key, value] = queryString.split("="); // key will hold 'fruit', value will hold 'banana'
  queryParams[key] = value;

  return queryParams;
}
```

{{<tabs>}}

{{<tab name="Tests">}}
We've currently got the following test suite:

```js
describe("parseQueryString()", () => {
  test("given a queryString with no query parameters, returns an empty object", function () {
    const input = "";
    const currentOutput = parseQueryString(input);
    const targetOutput = {};

    expect(currentOutput).toStrictEqual(targetOutput);
  });
  test("given a queryString with one pair of query params, returns them in object form", function () {
    const input = "user=mitch";
    const currentOutput = parseQueryString(input);
    const targetOutput = { user: "mitch" };

    expect(currentOutput).toStrictEqual(targetOutput);
  });
});
```

{{</tab>}}

{{<tab name="Feedback">}}
We've currently got the following test suite:

![parse-query-test-feedback](parse-query-test-feedback.png)

{{</tab>}}

{{<tab name="🧠 Explain">}}
We've got a situation where the first test case (for an empty string) is no longer working.
Explain why this test case is no longer passing for the first test case. **Playing computer** will help you to explain why!
![parse-query-test-feedback](parse-query-test-feedback.png)

{{</tab>}}

{{</tabs>}}
