+++
title = "Computing Cache"
time = 300
objectives = [
  "Avoid concurrency problems with message passing instead of locking.",
]
[build]
  render = "never"
  list = "local"
  publishResources = false
+++

Some caches take control over the computation of values from keys. e.g. they may have an interface like:

{{<tabs>}}
===[[Go]]===
```go
func NewCache[K comparable, V any](entryLimit int, creator func(K) V) Cache[K, V] { ... }

func (c *Cache[K, V]) Get(key K) V { ... }
```
===[[Java]]===
```java
import java.util.function.Function;

public class Cache<K, V> {
  public Cache(int entryLimit, Function<K, V> creator) {}

  public V get(K key) {}
}
```
{{</tabs>}}

Where there is no explicit `Put` function, but if you `Get` a missing element the cache will compute it for you, write it into the cache, and return the stored value.

This interface has some interesting differences in terms of concurrency. Some things to consider:
1. How long may `creator` take to run? If a while, we probably don't want to hold a lock during the entire call.
2. We probably don't want to run `creator` more than once for any particular key. How can we avoid this?

Try implementing this. Note: You don't need to use exactly this interface, just the idea that `Get` may `Put` as a side-effect. Hint: Channels/MPSC queues may be useful!
