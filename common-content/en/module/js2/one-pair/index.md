+++
title = '❓ Single pair case'

time = 30
facilitation = false
emoji= '🧩'
[objectives]
    1='Suggest a way of splitting a string into an array'
    2='Destructure an array of length 2'
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

Let's consider another test case: when the query string contains a single key-value pair.
We can write a test:

```js
test("given a query string with one pair of query params, returns them in object form", function () {
  const input = "fruit=banana";
  const currentOutput = parseQueryString(input);
  const targetOutput = { fruit: "banana" };

  expect(currentOutput).toStrictEqual(targetOutput);
});
```

### 🧭 Strategy

We first need to separate out the `"fruit=banana"` string so we can access `"fruit"` and `"banana"` separately. We can do this by splitting up the string by the `=` character. We can split the string into an array consisting of `['fruit', 'banana']`. Then we can grab the array's contents and assign the elements meaningful names:

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

However, instead of accessing the array's elements like this, we can use [array destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) to create new variables and assign them values, based on values in an array.

```js
function parseQueryString(queryString) {
  const queryParams = {};

  const [key, value] = queryString.split("="); // key will hold 'fruit', value will hold 'banana
  queryParams.key = value;

  return queryParams;
}
```

{{<tabs>}}
{{<tab name="Check it">}}

🎮 **Play computer** with the implementation of `parseQueryString` above to see why it isn't working properly.

<iframe title="dot-notation-parse-query-string-example" width="1000" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=function%20parseQueryString%28queryString%29%20%7B%0A%0A%20%20const%20queryParams%20%3D%20%7B%7D%3B%0A%0A%20%20const%20%5Bkey,%20value%5D%20%3D%20queryString.split%28%22%3D%22%29%3B%0A%20%20queryParams.key%20%3D%20value%3B%0A%0A%20%20return%20queryParams%3B%0A%7D%0A%0Aconst%20queryParams%20%3D%20parseQueryString%28%22fruit%3Dbanana%22%29%3B%0Aconsole.log%28queryParams%29%3B&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>

{{</tab>}}

{{</tabs>}}
