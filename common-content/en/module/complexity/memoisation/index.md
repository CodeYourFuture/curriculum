+++
title = "Memoisation"
time = 90
[build]
  render = 'never'
  list = 'local'
  publishResources = false
[objectives]
    1="Define memoisation"
+++

Caching isn't limited to your browser. 

We can save time by caching the results of operations (answers) at every level in our system: in the database, at the endpoint, in the browser, and even inside our functions. 

### 📋 Caching During Execution

Imagine any computation that we do repeatedly on the way to a final result. We could do it once, cache the answer in memory, and reuse it. This is especially helpful in functions that use {{<tooltip title="recursion">}}A [recursive function](https://developer.mozilla.org/en-US/docs/Glossary/Recursion) calls itself, typically until some break condition is met.{{</tooltip>}}

### 🪆 Problems and subproblems

We have seen that software engineering is mostly breaking down large problems into smaller problems that are easier to solve. [Dynamic programming](https://www.wscubetech.com/resources/dsa/dynamic-programming) is a rigorous application of this idea. 

In Chapter 8 of How Computers Really Work, you wrote a program in Assembly to calculate the {{<tooltip title="factorial">}}A factorial is the product of all the whole numbers between 1 and n.{{</tooltip>}} of a number. Consider this way of calculating factorials.

```python
def factorial(n):
    return n * factorial(n-1) if n else 1
```

We recursively execute the function until n reduces to 1. If you calculate `factorial(5)`, it calculates `factorial(4)`, which calculates `factorial(3)`, and so on. If you later calculate `factorial(6)`, it will re-calculate `factorial(5)` and all its subproblems again!

```python
@cache
def factorial(n):
    return n * factorial(n-1) if n else 1
```

In Python, [functools](https://docs.python.org/3/library/functools.html) provides a function cache. The `@cache` decorator automatically stores the result of `factorial(n)` for each value of n it computes. If the function is called again with the same value, `@cache` returns the stored result without rerunning the code. 

We don't _need_ a decorator to apply this idea. We can create a temporary cache, index, or memo inside any function ourselves.  Memoisation is an implementation of the strategy of saving time by spending space. 

{{<note type="activity">}}
Complete at least three of the problems in the [Codewars collection: Problems and subproblems](https://www.codewars.com/collections/cyf-interview-prep-problems-and-sub-problems).

Use these references to help you:
1. [Progamiz Dynamic Programming](https://www.programiz.com/dsa/dynamic-programming)
1. [WSCube Tech Dynamic Programming](https://www.wscubetech.com/resources/dsa/dynamic-programming)
1. [FreeCodeCamp Dynamic Programming](https://www.youtube.com/watch?v=oBt53YbR9Kk)

{{</note>}}
