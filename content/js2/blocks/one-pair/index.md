+++
title = '❓ Urls with one pair'
headless = true
time = 30
facilitation = false
emoji= '🧩'
[objectives]
    1='Describe how to implement a function from a test case'
+++

Let's consider another test case: make the function work for a url with a single key-value pair.
Let's start by writing a test:

```js
test("given a url with one pair of query params, returns them in object form", function () {
  const input = "user=mitch";
  const currentOutput = parseQueryString(input);
  const targetOutput = { user: "mitch" };

  expect(currentOutput).toEqual(targetOutput);
});
```

### 🧭 Strategy

We first need to separate out the ` "user=mitch"` so we can access "user" and "mitch" separately. We can do this with split( `=`), which break the string apart.

We can split the string into an array consisting of `['fruit', 'banana']`

Then we can grab the array's contents and assign the elements meaningful names.

```js
const keyValuePair = encodedParams.split("=");
const key = keyValuePair[0]; // key will hold 'fruit'
const value = keyValuePair[1]; // value will hold 'banana'
```

Instead of accessing the arrays elements like this, we can make use of array destructuring to access the elements.

```js
const keyValuePair = encodedParams.split("=");
const [key, value] = keyValuePair; // key will hold 'fruit', value will hold 'banana'
```

Now finally, we need to put them into an object.

We could define an empty object `queryParameters`

```js {linenos=table,hl_lines=["6"],linenostart=1}
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

{{<tabs>}}

{{<tab name="Tests">}}
We're now getting 2 failing tests.
{{</tab>}}

{{</tabs>}}
