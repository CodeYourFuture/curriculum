+++
title = '[ ] Access with variables'
headless = true
time = 20
facilitation = false
emoji= '🧩'
[objectives]
    1='Explain when square bracket notation may be necessary to access an object'
    2='Explain why a previous test breaks once the implementation changes'
+++

We can mutate an object using `.` dot notation. However, if we look at the return value in the previous implementation we get `{ key : "banana"}`.
Let's take another look at our current implementation of `parseQueryString`:

```js {linenos=table,hl_lines=["5"],linenostart=1}
function parseQueryString(queryString) {
  const queryParams = {};

  const [key, value] = queryString.split("="); // will hold ['fruit', 'banana']
  queryParams.key = value; // mutate the queryParams object

  return queryParams;
}
```

On line 4, we're declaring an **identifier** called `key`. When `parseQueryString` is called with `"fruit=banana"` then `key` will be assigned the value of `"fruit"`.

> We want to add a property name to the object that is the value of the `key` variable and not the string `"key"`.
> We can do this with square bracket notation:

```js {linenos=table,hl_lines=["5"],linenostart=1}
function parseQueryString(queryString) {
  const queryParams = {};

  const [key, value] = queryString.split("="); // will hold ['fruit', 'banana']
  queryParams[key] = value; // will set the property name with the value of the key variable

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
    const input = "fruit=banana";
    const currentOutput = parseQueryString(input);
    const targetOutput = { fruit: "banana" };

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

{{</tab>}}

{{</tabs>}}
