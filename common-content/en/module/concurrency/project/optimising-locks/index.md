+++
title = "Optimising Locks"
time = 240
objectives = [
  "Evaluate trade-offs between using a mutex and a read-write mutex.",
  "Shard locks to reduce contention.",
  "Propose the trade-offs of loosening API guarantees.",
]
[build]
  render = "never"
  list = "local"
  publishResources = false
+++

By design, using locks limits how much we can do in parallel. Sometimes this slows things down too much!

After you have successfully written your cache, see if you can speed it up. Here are a few ideas you may want to research and experiment with (all of which are likely to depend on the usage pattern people have of your cache):

* Using an [`RWMutex`](https://pkg.go.dev/sync#RWMutex) (Go) or [`ReadWriteLock`](https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/locks/ReadWriteLock.html) (Java). When to use a `Mutex` vs an `RWMutex` is a trade-off! Make sure you can answer the question "When should I prefer an `RwMutex` and when should I prefer a `Mutex`?". Earlier we talked about why all memory operations aren't atomic. Think about the question "Why does `Mutex` exist at all if `RWMutex` exists?"
* How many locks do you have? If you just have one for the whole cache, that means that any operation on the cache may be blocked by another. Could you have more than one lock to isolate changes so you're less likely to be blocked by an unrelated operation? **Remember the importance of considering the critical section when thinking about this.**
* Are there some guarantees we can loosen to require less locking (or locking at less busy times)? As an example, when do you remove old entries? Could you remove them in batches, or in a background goroutine, to avoid doing extra work on the write path? Could copying data under a read lock and then manipulating a copy allow you to do less work under a write lock? What trade-offs and risks do different approaches introduce?
