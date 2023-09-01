+++
title = '❓🪢 Query strings'
headless = true
time = 20
facilitation = false
emoji= '🧩'
[objectives]
    1='Identify the query string section of a url'
    2='Identify key-value pairs within a query string'
    3='Explain why an object is a more useful structure for storing query parameters'
+++

Let’s define a problem.

Websites have addresses called urls like this: "https://github.com/Dedekind561". Urls often have {{<tooltip title="query strings">}}Query strings go at the end of a url and are used to specify more information about the content you get back from a response{{</tooltip>}}too.

https://example.com/widgets?colour=blue&sort=newest

For the url above, the **query string** is `"colour=blue&sort=newest"`
In the string, each key-value pair is separated by a `&` (ampersand).
However, a string isn't a useful structure for the data. We cannot easily access the value from this string given a key.
However, objects are designed to store key-value pairs in this way.

We're going to implement a function `parseQueryString` defined as follows:

_Given_ a query string and a function `parseQueryString`,
_When_ we call `parseQueryString` with a query string,
_Then_ it should return an object with the key-value pairs

E.g.

```js
parseQueryString("colour=blue&sort=newest");
// returns { colour: "blue, sort: "newest" }`
```
