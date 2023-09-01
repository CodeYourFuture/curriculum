+++
title = '❓❓❓ Multiple parameters'
headless = true
time = 30
facilitation = false
emoji= '🧩'
[objectives]
    1='Describe how to extend a strategy for one item to multiple items'
+++

We can now take on another test case: when there are multiple query parameters in the url string.
In the case where the query string has multiple parameters, then each key-value pair is separated by a `&` (ampersand)
symbol

```js
test("given a query string with multiple key-value pairs, returns them in object form", function () {
  const input = "sort=lowest&colour=yellow";
  const currentOutput = parseQueryString(input);
  const targetOutput = { sort: "lowest", colour: "yellow" };

  expect(currentOutput).toStrictEqual(targetOutput);
});
```

### 🧭 Strategy

We've already worked out how to update the query params object given a single key-value pair in the query string.
So our strategy will be to break the query string part into an array of key-value pairs👍

> 💡 Key insight: If we can do it for **one pair**, we can try doing it for a **list of pairs** too.

Our strategy will consist of breaking the query string into an array and then iterating through it to update the query object on each iteration.

Let's start with the first sub-goal.

#### 🎯 Sub-goal 1: split the query string into an array of key-value pairs

Query strings with muliple key-value pairs use `&` as a separator. E.g. `sort=lowest&colour=yellow`. We want to break `sort=lowest&colour=yellow` into `["sort=yellow", "colour=yellow"]`. We can achieve this by calling `split` with the `"&"` separator.

```js {linenos=table,hl_lines=[4] ,linenostart=1}
function parseQueryString(queryString) {
  // suppose queryString has a value of "sort=lowest&colour=yellow"
  const queryParams = {};
  const keyValuePairs = queryString.split("&"); // keyValuePairs will point to [ "sort=yellow", "colour=yellow"]
}
```

#### 🎯 Sub-goal 2: iterate through the key-value pairs and update the query params object

Once we've got an array we can iterate through the key-value pairs and update the `queryParams` object each time.

```js {linenos=table,hl_lines=["6-9"] ,linenostart=1}
function parseQueryString(queryString) {
  // assume queryString has a value of "sort=lowest&colour=yellow"
  const queryParams = {};
  const keyValuePairs = queryString.split("&"); // keyValuePairs will point to [ "sort=yellow", "colour=yellow"]

  for (const pair of keyValuePairs) {
    const [key, value] = pair.split("=");
    queryParams[key] = value;
  }

  return queryParams;
}
```

{{<tabs>}}
{{<tab name="🎮 Play computer">}}

**Play computer** with the implementation of `parseQueryString` above and pay attention to how the `queryParams` object is updated.

<iframe title="parse-query-solution" width="1200" height="600" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=function%20parseQueryString%28queryString%29%20%7B%0A%0A%20%20const%20queryParams%20%3D%20%7B%7D%3B%0A%20%20const%20keyValuePairs%20%3D%20queryString.split%28%22%26%22%29%3B%20%0A%20%20for%20%28const%20pair%20of%20keyValuePairs%29%20%7B%0A%20%20%20%20const%20%5Bkey,%20value%5D%20%3D%20pair.split%28%22%3D%22%29%3B%0A%20%20%20%20queryParams%5Bkey%5D%20%3D%20value%3B%0A%20%20%7D%0A%0A%20%20return%20queryParams%3B%0A%7D%0A%0AparseQueryString%28%22sort%3Dlowest%26colour%3Dyellow%22%29%3B&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=20&heapPrimitives=nevernest&origin=opt-frontend.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
{{</tab>}}

{{</tabs>}}
