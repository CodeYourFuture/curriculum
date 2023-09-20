+++
title = '❓🪢 Query strings'
headless = true
time = 10
facilitation = false
emoji= '🧩'
[objectives]
1='Identify the query string section of a url'
2='Identify query parameters within a query string'
3='Explain why an object is a more useful structure for storing query parameters than a string' 
+++

Let’s define a problem.

Websites have addresses called urls like this: "https://example.com/widgets". Urls often have {{<tooltip title="query strings">}}Query strings go at the end of a url and are used to specify more information about the content you get back from a request to a server{{</tooltip>}}too. Here is an example of a url with a query string on the end:

https://example.com/widgets?colour=blue&sort=newest

For the url above, the **query string** is `"colour=blue&sort=newest"`. Query strings consist of **query parameters**, separated by an ampersand character `&`. `colour=blue` is a query parameter: we say that `colour` is the key and `blue` is the value.

urls must always be strings. However, a string isn't a useful data type for accessing query parameters. Given a key like `colour`, accessing the value from a query string stored as a string is not straightforward. However, objects are ideal for looking up values with keys.

We're going to implement a function `parseQueryString` to extract the query parameters from a query string and store them in an object:

_Given_ a query string and a function `parseQueryString`,
_When_ we call `parseQueryString` with a query string,
_Then_ it should return an object with the key-value pairs

E.g.

```js
parseQueryString("colour=blue&sort=newest");
// should return { colour: "blue", sort: "newest" }`
```
