+++
title = "Atomics"
time = 120
objectives = [
  "Define an atomic operation.",
  "Use an atomic operation to avoid a race condition when modifying an integer.",
  "Explain how an atomic operation avoids a read-modify-write race condition.",
  "Define the term 'memory barrier'/'fence' in the context of memory models.",
]
[build]
  render = "never"
  list = "local"
  publishResources = false
+++

The problem we've identified is that we may end up using a stale version of the `x` variable. After we look it up, it may change before we write back our new value.

Atomic operations allow us to avoid this situation.

"Atomic" means "as one unit which can't be broken down". An atomic operation can't be broken down into smaller operations.

{{<tabs>}}
===[[Go]]===

Go exposes atomic operations in [the sync/atomic package](https://pkg.go.dev/sync/atomic). [The `sync/atomic.Int32` type](https://pkg.go.dev/sync/atomic#Int32) exposes [an `Add` function](https://pkg.go.dev/sync/atomic#Int32.Add) which does the same as `+=` does to `int`, but looks a little different. Let's compare:

```go
var x int
x += 1
```

```go
var x atomic.Int32
newX := x.Add(1)
```

===[[Java]]===

Java exposes atomic operations in [the `java.util.concurrent.atomic` package](https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/atomic/package-summary.html). [The `AtomicInteger` type](https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/atomic/AtomicInteger.html) exposes [an `addAndGet` function](https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/atomic/AtomicInteger.html#addAndGet-int-) (as well as `getAndAdd`, `incrementAndGet`, and `getAndIncrement`, among others). `addAndGet` does the same as `+=` does to an `int`, but looks a little different. Let's compare:

```java
int x = 0;
x += 1;
```

```java
AtomicInteger x = new AtomicInteger(0);
x.addAndGet(1);
```
{{</tabs>}}

Both of these do the same thing. They start `x` with value `0`, they add one to it, and at the end `x` will have the value `1`.

The atomic version, though, does so as one operation. It's impossible for another thread to do something in the middle of the steps. The non-atomic version doesn't.

This means that if there are other threads involved, the atomic version will always store back to `x` exactly 1 more than its value at the time of execution. It also returns a value - the value that was stored back. It does this because if we're using atomics, we know there are probably other threads involved, so we _know_ we can't just read `x` and know what the result was - it may have been changed since we stored it.

Most atomic operations are implemented using [Compare And Swap ("CAS") operations](https://en.wikipedia.org/wiki/Compare-and-swap). In fact, a lot of other synchronisation primitives (e.g. Mutexes) are _also_ built on top of CAS operations.

{{<note type="Exercise">}}
Try to modify the buggy code above to use atomics. Make sure that if you run it a few times, you always end up with `1000`.
{{</note>}}

##### Memory barriers / fences

Under the covers, something involved in running our program (possibly your language's standard library, possibly something in the operating system, possibly even something in the CPU) is inserting something called [a memory barrier (also known as a fence)](https://en.wikipedia.org/wiki/Memory_barrier). This is an instruction to say "it's important that this operation is visible to other cores", which forces different cores to synchronise their views of a piece of memory before continuing.

This can be slow. Recall that we have these per-core caches because they're so much faster than sharing memory across cores. Every time we need to insert one of these memory barriers, we slow down our program. This is why memory access isn't all atomic by default. But it can be worth it.

#### When are atomics good/bad to use?

Atomics can be really useful when you need to operate on a single item of small data (e.g. a number). They are simple and easy to reason about. But they typically operate on one item in memory. If you need to operate on larger data (e.g. a string), multiple pieces of memory (e.g. two different numbers which must be changed together), or perform an operation not supported by atomics (e.g. multiplication), you probably can't use an atomic for that.

When using atomics, your threads are never blocked, and never need to wait for each other. Mutexes, on the other hand, block threads, which means that even though you may have started 100 threads to do work concurrently, only one will actually be doing anything (if they all need the same lock). This means that atomics can provide better throughput than other synchronisation primitives.
