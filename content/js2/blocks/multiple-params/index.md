+++
title = '❓❓❓ Multiple parameters'
headless = true
time = 30
facilitation = false
emoji= '🧩'
[objectives]
    1='Use the Teach Tech Together guide to construct your objectives'
+++

We can now take on another test case: when there are multiple query parameters in the url string.

```js
test("given a url with multiple key-value pairs, returns them in object object form", function () {
  const input = "fruit=apple&city=london";
  const currentOutput = parseQueryString(input);
  const targetOutput = { fruit: "apple", from: "y" };

  expect(currentOutput).toEqual(targetOutput);
});
```

### 🧭 Strategy

Our strategy will consist of 2 sub-goals.

1. Split "to=x&from=y" into an array of key-value pairs `[ "to=x", "from=y" ]` ( so we can iterate through it)
1. Iterate through each key-value pair and add it to the `queryParams` object

We can break this down using multiple calls to split and using array access.

### 🎯 Sub-goal 1

We can take the "to=x&from=y" string and split it by the "&" character.

```js {linenos=table,hl_lines=[5] ,linenostart=1}
function parseQueryString(queryString) {
  // suppose queryString has a value of "to=x&from=y"
  const queryParams = {}; // 'to=x&from=y'
  const keyValuePairs = encodedParams.split("&"); // ['to=x', from=y']
}
```

### 🎯 Sub-goal 3 -> Iteration and mutation

Now we can iterate through the key-value pairs and update the `queryParams` object each time.

```js {linenos=table,hl_lines=["6-8"] ,linenostart=1}
function parseQueryString(queryString) {
  // assume queryString has a value of 'to=x&from=y'
  const queryParams = {};
  const keyValuePairs = queryString.split("&"); // ['to=x', from=y']

  for (const pair of keyValuePairs) {
    const [key, value] = pair.split("=");
    queryParams[key] = value;
  }

  return queryParams;
}
```
