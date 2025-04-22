+++
title = "Memoisation"
[build]
  render = 'never'
  list = 'local'
  publishResources = false
time = 15
emoji= "📝"
[objectives]
    1="Define memoisation"
+++

Caching isn't limited to your browser. 

We can save time by caching the results of operations (answers) at every level in our system: in the database, at the endpoint, in the browser, and even inside our functions. 

### Caching During Execution

Imagine any computation that we do repeatedly on the way to a final result. We could do it once, cache the answer in memory, and reuse it. This is especially helpful in functions that use {{<tooltip title="recursion">}}A [recursive function](https://developer.mozilla.org/en-US/docs/Glossary/Recursion) calls itself, typically until some break condition is met.{{</tooltip>}}

### Problems and subproblems

We have seen that software engineering is mostly breaking down large problems into smaller problems that are easier to solve. [Dynamic programming](https://www.wscubetech.com/resources/dsa/dynamic-programming) is a rigorous application of this idea. We won't cover this topic in depth here.

TODO brief fibonacci activity here

This is an implementation of the strategy of saving time by spending space. 