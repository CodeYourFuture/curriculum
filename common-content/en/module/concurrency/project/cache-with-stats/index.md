+++
title = "Project: Cache with Stats"
time = 300
objectives = [
  "Implement thread-safe code.",
]
[build]
  render = "never"
  list = "local"
  publishResources = false
+++

You are going to implement a cache.

A cache is used to store some result (probably because it was in some way expensive to compute/fetch) so that it can be looked up more cheaply in the future.

Caches (like many problems) involves trade-offs. We are using some memory (by storing results) to save some other resource in the future (often compute time).

Note that caches can get _very_ sophisticated - we're going to write quite a simple one.

Often times, when we use a cache, we want to limit how much memory it will use. This means we need to sometimes delete things from the cache. There are different policies for cache eviction. The one we are going to pick is "least recently used" (or LRU).

Imagine we have a limit of 3 items in our cache, and we already have three items in it. If we try to add an additional item, first, we need to remove one. We need to sort the entries by when they were most recently added or accessed, and remove the oldest.

We also want to keep statistics about our cache. We want to be able to ask the following questions:
1. What's the hit rate of our cache? i.e. when we tried to look up a value, how many times was it in the cache vs missing?
2. How many entries were written to the cache and have never been read after being written (including for things which have been evicted)?
3. What is the average number of times a cache entry is read (just for things currently in the cache)?
4. How many reads and writes have been performed in the cache across all time (including for things which have been evicted)?

We want these statistics to be strongly consistent (e.g. if we only ever write to the cache and never read from it, the answers to 1 and 3 should be the same).

Note that this desire for strong consistency will shape our API. It means we probably want our statistics function to return a struct with all of the values, rather than individual methods to return each one, so that we can collect them all in one critical section.

Part of the interface for the cache should look like this:

{{<tabs>}}
===[[Go]]===
```go
func NewCache[K comparable, V any](entryLimit int) Cache[K, V] { ... }

// Put adds the value to the cache, and returns a boolean to indicate whether a value already existed in the cache for that key.
// If there was previously a value, it replaces that value with this one.
// Any Put counts as a refresh in terms of LRU tracking.
func (c *Cache[K, V]) Put(key K, value V) bool { ... }

// Get returns the value assocated with the passed key, and a boolean to indicate whether a value was known or not. If not, nil is returned as the value.
// Any Get counts as a refresh in terms of LRU tracking.
func (c *Cache[K, V]) Get(key K) (*V, bool) { ... }
```
===[[Java]]===
```java
import java.util.Optional;

public class Cache<K, V> {
  public Cache(int entryLimit) {}

  /** Adds the value to the cache, and returns a boolean to indicate whether a value already existed in the cache for that key.
   *
   * If there was previously a value, it replaces that value with this one.
   * Any Put counts as a refresh in terms of LRU tracking.
   */
  public boolean put(K key, V value) {}

  /**
   * Gets a value from the cache.
   *
   * If the value was present, returns an Optional.of that value.
   * If the value was not present, returns an Optional.empty.
   *
   * Any get counts as a refresh in terms of LRU tracking.
   */
  public Optional<V> get(K key) {}
}
````
{{</tabs>}}

Implement this cache and write tests that show it is safe for concurrent use. (Note that these tests are hard to _exhaustively_ write, but see what you can do).

> [!NOTE]
>
> There is tooling to help detect race conditions, for instance [Go's built in race dectector](https://go.dev/doc/articles/race_detector) and [Infer's RacerD for Java](https://fbinfer.com/docs/checker-racerd/). You may find these useful to help you find bugs.
