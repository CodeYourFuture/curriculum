+++
title = "Memory Models"
time = 5
objectives = [
  "Suggest orders of magnitude for the speed of different read operations.",
]
[build]
  render = "never"
  list = "local"
  publishResources = false
+++

As you will have learnt in Chapter 7 of [How Computers Really Work](https://www.howcomputersreallywork.com/), some memory is cheap but slow, and other memory is fast but expensive. CPU manufacturers add fast per-core caches in front of cheap system-wide memory. This causes problems when multiple cores try to share the same item in memory. Each core's cache may get its own copy of that memory, and if one core changes the contents of that data, the other core won't see that change.

You can see estimated speeds of different memory (and other) read operations in ["Latency Numbers Every Programmer Should Know"](https://gist.github.com/jboner/2841832). Read this and make sure you undersatnd it. This suggests that reading from shared main memory is 100-1000x slower than reading from a per-core L1 cache.

Through this track, we will will introduce different ways we can handle this problem.
