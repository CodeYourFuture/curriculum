+++
title = '❓❓❓ Multiple parameters'
headless = true
time = 30
facilitation = false
emoji= '🧩'
[objectives]
    1='Describe how to update a strategy for a collection of items'
+++

We can now take on another test case: when there are multiple query parameters in the url string.

```js
test("given a query string with multiple key-value pairs, returns them in object form", function () {
  const input = "fruit=apple&city=london";
  const currentOutput = parseQueryString(input);
  const targetOutput = { fruit: "apple", from: "y" };

  expect(currentOutput).toEqual(targetOutput);
});
```

### 🧭 Strategy

Our strategy will consist of 2 sub-goals.

> 🎯 Sub-goal 1: split the query string into an array of key-value pairs
>
> 🎯 Sub-goal 2: iterate through the key-value pairs and update the query params object

Let's start with the first sub-goal.

> 🎯 Sub-goal 1: split the query string into an array of key-value pairs

We can take the "to=x&from=y" string and split it by the "&" character.

```js {linenos=table,hl_lines=[4] ,linenostart=1}
function parseQueryString(queryString) {
  // suppose queryString has a value of "to=x&from=y"
  const queryParams = {}; // 'to=x&from=y'
  const keyValuePairs = encodedParams.split("&"); // ['to=x', from=y']
}
```

> 🎯 Sub-goal 2: iterate through the key-value pairs and update the query params object

Now we can iterate through the key-value pairs and update the `queryParams` object each time.

```js {linenos=table,hl_lines=["6-9"] ,linenostart=1}
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
