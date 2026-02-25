+++
title = 'Parsing multiple parameters'

time = 30
[objectives]
    1='Describe how to extend a strategy for one item to multiple items'
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

Let's consider the case when there are multiple query parameters in the query string.

{{<note type="tip" title="Recall">}}
In the case when the query string has multiple query parameters, then each key-value pair is separated by an ampersand character `&`.
{{</note>}}

Write this test in the `parse-query-string.test.js` file.

```js
test("given a query string with multiple key-value pairs, returns them in object form", function () {
  const input = "sort=lowest&colour=yellow";
  const currentOutput = parseQueryString(input);
  const targetOutput = { sort: "lowest", colour: "yellow" };

  expect(currentOutput).toEqual(targetOutput);
});
```

### 🧭 Strategy

We've already worked out how to update the query params object given a **single key-value pair** in the query string.

To work out our strategy, let's consider what we already know how to do. We already know how to take a key-value pair as a string, and add it to our object.

> 💡 Key insight: If we can do it for **one pair**, we can try doing it for a **list of pairs** too.

So we're missing a step - breaking up the string of multiple key-value pairs into an array where each element is a single key-value pair. If we do this, then we can iterate over the array, and do what we already know how to do on each key-value pair.

Our strategy will be to break the query string apart into an array of key-value pairs. Once we've got an array we can try iterating through it and storing each key value pair inside the `queryParams` object.

Let's start with the first sub-goal.

#### 🎯 Sub-goal 1: split the query string into an array of key-value pairs

Query strings with multiple key-value pairs use `&` as a separator e.g. `sort=lowest&colour=yellow`. We want to split `sort=lowest&colour=yellow` into `["sort=lowest", "colour=yellow"]`. We can achieve this by calling `split` with the `"&"` separator.

```js {linenos=table,hl_lines=[4] ,linenostart=1}
function parseQueryString(queryString) {
  // suppose queryString has a value of "sort=lowest&colour=yellow"
  const queryParams = {};
  const keyValuePairs = queryString.split("&"); // keyValuePairs will point to ["sort=lowest", "colour=yellow"]
}
```

#### 🎯 Sub-goal 2: add each key-value pair in the array to the query params object

Once we've got an array we can iterate through the key-value pairs and update the `queryParams` object each time (like we did when we just had one key-value pair).

```js {linenos=table,hl_lines=["6-9"] ,linenostart=1}
function parseQueryString(queryString) {
  // assume queryString has a value of "sort=lowest&colour=yellow"
  const queryParams = {};
  const keyValuePairs = queryString.split("&"); // keyValuePairs will point to ["sort=lowest", "colour=yellow"]

  for (const pair of keyValuePairs) {
    const [key, value] = pair.split("=");
    queryParams[key] = value;
  }

  return queryParams;
}
```

### 🎮 Play computer

**Play computer** with the implementation of `parseQueryString` above and pay attention to how the `queryParams` object is updated.

<iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=function%20parseQueryString%28queryString%29%20%7B%0A%0A%20%20const%20queryParams%20%3D%20%7B%7D%3B%20%0A%20%20const%20keyValuePairs%20%3D%20queryString.split%28%22%26%22%29%3B%20%0A%20%20for%20%28const%20pair%20of%20keyValuePairs%29%20%7B%0A%20%20%20%20const%20%5Bkey,%20value%5D%20%3D%20pair.split%28%22%3D%22%29%3B%0A%20%20%20%20queryParams%5Bkey%5D%20%3D%20value%3B%0A%20%20%7D%0A%0A%20%20return%20queryParams%3B%0A%7D%0A%0AparseQueryString%28%22sort%3Dlowest%26colour%3Dyellow%22%29%3B&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>

Now that we've worked out how to solve this problem in the case of multiple query parameters, let's integrate that solution into our previous implementation, to make sure it works for all cases.

We can keep our `if (queryString.length === 0) {` check from before. We still need it because `split` on an empty string still returns an empty string. If we don't have this special case, we'll try to parse the empty string, probably incorrectly.

We don't need to do anything special for the one-value case, as an array containing one element gets iterated the same as an array of multiple elements:

```js
function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }
  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    const [key, value] = pair.split("=");
    queryParams[key] = value;
  }

  return queryParams;
}
```

When we're solving problems involving several values, often we need slightly differently handling for the cases when there are 0, 1, or more than 1 values. In our example here, we need to treat 0 values specially (if the query string is empty, we return early), but we can handle 1 and more than 1 the same way.

When you're breaking down problems, think to yourself: What are special cases we may need to handle differently?
