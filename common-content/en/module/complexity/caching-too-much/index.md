+++
title = "Caching too much"
time = 60
[build]
  render = "never"
  list = "local"
  publishResources = false
objectives = [
    "Explain why caches have eviction policies.",
    "Contrast cache eviction policies.",
    "Identify when caches are redundant.",
]
+++

We've seen that caching allows us to spend more memory to save time. We may want to limit how much memory we're spending to save time.

Some examples of when storing a value in a cache doesn't make sense:

### Values we won't use again

Imagine a user signs up for Purple Forest, we compute a home timeline for them and cache it on the server. But they never visit the website again. We're spending some memory keeping that user's home timeline cached for no reason.

In some cases, it makes sense to not cache some computation at all, if the results are unlikely to ever be used again.

In other cases, it makes sense to only cache _some_ values. Perhaps we can identify this up front, e.g.
* We could decide never to cache things on a user's first visit, but if they've come to our site twice we'll cache things for them.
* We could decide to only cache values for our top 1000 users, and give everyone else a slower experience.
* We could decide to only cache values that took us more than 10ms to compute - anything faster than that we can just re-compute again.

In other cases, we want to cache all values, but not remember them all forever. In caching, we call this {{<tooltip text="eviction" title="Cache Eviction">}}Eviction is deciding to remove something from a cache. Perhaps because it is stale, unlikely to be used again, or just because we want to limit how much memory we consume.{{</tooltip>}}.

{{<note type="Reading">}}
There are different strategies to decide what values we should evict and when.

Read about [different cache eviction policies](https://www.geeksforgeeks.org/cache-eviction-policies-system-design/).

Write down how you would decide which eviction policy to use when solving a problem. What's an example of a use-case where each eviction strategy makes the most sense?
{{</note>}}

### Another cache stores equivalent information

Consider this code:
```python
from functools import cache

@cache
def calculate_fibonacci(n: int):
    if n < 2:
        return 1
    return calculate_fibonacci(n - 1) + calculate_fibonacci(n - 2)

@cache
def calculate_fibonacci_plus_one(n: int):
     return calculate_fibonacci(n) + 1

for n in range(10):
    print(calculate_fibonacci_plus_one(n))
```

{{<tabs>}}
===[[Exercise]]===
How many cache entries will this code store?

===[[Answer]]===
Because both `calculate_fibonacci` and `calculate_fibonacci_plus_one` are cached, 20 cache entries will be stored. 10 for each function.
{{</tabs>}}

What would happen if we removed the `@cache` decorator on `calculate_fibonacci_plus_one`?

Our program would work exactly the same, and would have the same performance. All of the `calculate_fibonacci` calls would still be cached. We wouldn't be caching the ten `+ 1` operations in our calls to `calculate_fibonacci_plus_one`. But these are cheap. (Also, we never call `calculate_fibonacci_plus_one` with the same argument, so we're never getting cache hits from its cache anyway).

What would happen if instead we removed the `@cache` decorator on `calculate_fibnacci`?

Our program would get a _lot_ slower. If we called `calculate_fibonacci_plus_one` with the same argument several times, those calls would be faster, but the `fibonacci` bit would be slow for the first time. And every time we call `calculate_fibonacci_plus_one` with a different argument, it will re-do all of that `fibonacci` work again.

Having two `@cache` annotations may _feel_ useful, but in reality it's just spending twice as much memory for no real gain.

It's useful to think about _where_ a cache is useful, rather than just adding caches when things are slow.

> [!TIP]
>
> Before adding a cache, think:
> * Is this computation likely to be re-used?
> * Is there a better place to be adding a cache?
> * Are there any existing caches I should remove, if I add this one?
