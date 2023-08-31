+++
title = '[ ] Bracket notation'
headless = true
time = 30
facilitation = false
emoji= '🧩'
[objectives]
    1='Identify the query parameters in a url'
+++

We can mutate an object using `.` dot notation. However, if we look at the return value we get

![literal-key](literal-key.png)

We expect an object with `{ user: "mitch" }`
but instead we get `{ key: "mitch" }`

Let's take another look at our current implementation of `parseQueryString`

```js {linenos=table,hl_lines=["6"],linenostart=1}
function parseQueryString(queryString) {
  const queryParams = {};

  const [key, value] = queryString.split("="); // will hold ['fruit', 'banana']

  queryParams.key = value; // mutate the queryParams object

  return queryParams;
}
```

Inside `parseQueryString`, `key` is an **identifier**. An `identifier` is used to identify a value.
When `parseQueryString` is called with `"user=mitch"` then `key` will be assigned the value of "user". So we want to update the object with a property name that is the value of the `key` variable and not the string "key".
We can do this by using square bracket notation.

```js {linenos=table,hl_lines=["6"],linenostart=1}
function parseQueryString(queryString) {
  const queryParams = {};

  const [key, value] = queryString.split("="); // will hold ['fruit', 'banana']

  queryParams[key] = value; // will set the property name with the value of the key variable

  return queryParams;
}
```
