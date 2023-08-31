+++
title = '❓🪢 Query strings'
headless = true
time = 30
facilitation = false
emoji= '🧩'
[objectives]
    1='Identify the query parameters in a url'
+++

Let’s define a problem.

Websites have addresses called urls like this: "https://github.com/Dedekind561"

urls also make use of **query strings**:

"https://github.com/Dedekind561?tab=overview"

Query strings go at the end of a url and are used to search for more specific content from a particular website.
Given a query string, we'd like to access what the value of a query parameter is given a key.
For example, given the url `http://some-api.com?artist=beyonce` we'd like to ask what the value is associated with the key "artist". Accessing strings like this is tricky: it would be much easier if they key-value pairs where stored in an object.
For example, for a string like `"http://some-api.com?artist=beyonce"` we could use an object `{ artist: "beyonce" }`.

We're going to implement a function `parseQueryString` that takes a query string as an argument and
returns an object with the key-value pairs from query string.
