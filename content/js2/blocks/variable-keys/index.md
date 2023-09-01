+++
title = '[ ] Variable property names'
headless = true
time = 20
facilitation = false
emoji= '🧩'
[objectives]
    1='Explain when square bracket notation may be necessary to access an object'
+++

We can mutate an object using `.` dot notation. However, if we look at the return value we get `{ key : "mitch"}`.
Let's take another look at our current implementation of `parseQueryString`

```js {linenos=table,hl_lines=["5"],linenostart=1}
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

```js {linenos=table,hl_lines=["5"],linenostart=1}
function parseQueryString(queryString) {
  const queryParams = {};

  const [key, value] = queryString.split("="); // will hold ['fruit', 'banana']
  queryParams[key] = value; // will set the property name with the value of the key variable

  return queryParams;
}
```
