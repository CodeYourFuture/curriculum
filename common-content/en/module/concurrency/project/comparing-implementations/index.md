+++
title = "Comparing Implementations"
time = 180
objectives = [
  "Identify trade-offs in different code implementing the same interface.",
  "Evaluate the expense of operations in code.",
  "Identify sources of lock contention in code.",
]
[build]
  render = "never"
  list = "local"
  publishResources = false
+++

It's important to be able to read code, and to consider the trade-offs when reading and writing code.

When you've implemented the cache projects, have a read of [the sample solutions](https://github.com/CodeYourFuture/immersive-go-course/pull/181) (note: these are currently only available in Go). There are four different implementations. With your own implementation, that's at least five. Each is valid and works. Each has different trade-offs and is better suited for different constraints or use-cases.

Try to answer at least the following questions:
* What are the differences between each implementation? For example:
  * How much work needs to be done to evict an entry? (What's the big-O of evicting an entry?)
  * How much contention is there for locks when putting in the cache?
  * How much contention is there for locks when reading from the cache?
* For each implementation, what use-cases is this implementation well-suited to? What use-cases would this implementation be particularly _bad_ at? When would one of the other solutions be better? Some things to generally think about when considering trade-offs:
  * What is the: average memory consumption, peak memory consumption, average-case latency, worst-case latency, consistency of latency, for each implementation?
  * Think about usage patterns: which is better if callers are mostly reading? Mostly writing? _Always_ reading? Alternating between reads and writes? Other usage patterns?
  * What guarantees can we offer with some implementations but not others? e.g. If we need to never use more than 10 MB of RAM, which implementations can guarantee that?
