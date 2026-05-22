+++
title = "Threads and Concurrency"
time = 5
objectives = [
  "Explain why we use concurrency.",
  "Explain why web applications are concurrent by default.",
  "Define a race condition.",
]
[build]
  render = "never"
  list = "local"
  publishResources = false
+++

Normally when we run a program, it runs one instruction at a time. It starts at the start of a `main` function and goes top-to-bottom (sometimes jumping into functions, and back out of them).

There are limits to how fast any one instruction can be run. Processors have stopped getting faster. Instead, we now add more processors to a computer. This allows a computer to do more than one thing at a time. But it's much harder to tell a computer in what order things need to happen, or what things must/mustn't happen at the same time.

Most practical projects, and almost all servers, use concurrency - running more than one thing at a time - to improve their performance. They start multiple threads which can independently perform work.

But this concurrency doesn't come for free. It's really easy to write incorrect concurrent code, and this often results in serious (and hard to debug!) bugs, or bottlenecks which fall back to single-threaded performance.

These kind of bugs are called {{<tooltip title="Race condition" text="race conditions">}}A race condition happens when two (or more) pieces of code are trying to handle the same data at the same time, and some parts happen in an invalid order.{{</tooltip>}}. Race conditions are often complicated to work with, for instance they may only exhibit when a computer is very busy (or very idle), on certain computers, on certain operating systems, or just when you get very unlucky. Using proper concurrency controls can prevent these bugs.
