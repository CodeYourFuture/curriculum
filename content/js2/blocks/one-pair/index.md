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
  const input = "fruit=banana";
  const currentOutput = parseQueryString(input);
  const targetOutput = { fruit: "banana" };

  expect(currentOutput).toStrictEqual(targetOutput);
});
```

### 🧭 Strategy

We first need to separate out the `"fruit=banana"` string so we can access `"fruit"` and `"banana"` separately. We can do this by splitting up the string by the `=` character.

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

Now finally, we need to put them into the `queryParams` object.

```js {linenos=table,hl_lines=["5"],linenostart=1}
function parseQueryString(queryString) {
  // suppose queryString has a value of "fruit=banana" when it is called
  const queryParams = {};

  const [key, value] = queryString.split("="); // key will hold 'fruit', value will hold 'banana'
  queryParams.key = value;

  return queryParams;
}
```

On line 7, we're mutating the object `queryParams` by adding a key "key" and a value.
However, we want the key to be the value that the `key` variable holds.

{{<tabs>}}
{{<tab name="Check it">}}

🎮 **Play computer** with the implementation of `parseQueryString` above to see why it isn't working properly.

<iframe title="dot-notation-parse-query-string-example" width="1000" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=function%20parseQueryString%28queryString%29%20%7B%0A%0A%20%20const%20queryParams%20%3D%20%7B%7D%3B%0A%0A%20%20const%20%5Bkey,%20value%5D%20%3D%20queryString.split%28%22%3D%22%29%3B%0A%20%20queryParams.key%20%3D%20value%3B%0A%0A%20%20return%20queryParams%3B%0A%7D%0A%0Aconst%20queryParams%20%3D%20parseQueryString%28%22fruit%3Dbanana%22%29%3B%0Aconsole.log%28queryParams%29%3B&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>

{{</tab>}}

{{</tabs>}}

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
