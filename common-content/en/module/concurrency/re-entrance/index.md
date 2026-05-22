+++
title = "Re-entrance"
time = 30
objectives = [
  "Define re-entrance.",
  "Explain how a re-entrant lock can avoid deadlock.",
  "Identify sources of deadlock when using non-re-entrant locks.",
]
[build]
  render = "never"
  list = "local"
  publishResources = false
+++

In some languages/libraries, locks are re-entrant. This means that if your thread already holds a particular lock, and tries to acquire it again, it will be allowed to do so.

In other languages/libraries, locks are not re-entrant. This means that if a thread tries to acquire a lock which is already acquired, it will block, no matter what thread already holds it.

### Go locks are not re-entrant

In Go, this code would cause a deadlock, because one thread would be trying to acquire a lock it already holds. Notice that `handleRequest` calls `recordResult` while already holding the lock that `recordResult` will also try to acquire.

```go
type server struct {
    mu sync.Mutex
    totalRequests int
    successfulRequests int
    failedRequests int
}

func (s *server) recordResult(isSuccess bool) {
    s.mu.Lock()
    defer s.mu.Unlock()
    if isSuccess {
        s.successfulRequests += 1
    } else {
        s.failedRequests += 1
    }
}

func (s *server) handleRequest() {
    s.mu.Lock()
    defer s.mu.Unlock()
    s.totalRequests += 1
    s.recordResult(true)
}
```

One pattern that's often used is to have some functions require a lock is held in order to call them - something like:

```go
type server struct {
    mu sync.Mutex
    totalRequests int
    successfulRequests int
    failedRequests int
}

// s.mu must be held to call this function.
// The compiler won't guarantee this is the case, but hopefully developers will see the name and the comment and do the right thing.
func (s *server) recordResult_locked(isSuccess bool) {
    if isSuccess {
        s.successfulRequests += 1
    } else {
        s.failedRequests += 1
    }
}

func (s *server) handleRequest() {
    s.mu.Lock()
    defer s.mu.Unlock()
    s.totalRequests += 1
    s.recordResult_locked(true)
}
```

### Java locks _are_ re-entrant

The equivalent Java code would _not_ deadlock, because its locks are re-entrant. When `handleRequest` calls `recordResult`, it will be allowed to go inside the `synchronized` block because the same thread already holds that lock.

```java
class Server {
  Object lock = new Object();

  public int totalRequests = 0;
  public int successfulRequests = 0;
  public int failedRequests = 0;

  void recordResult(boolean isSuccess) {
    synchronized(lock) {
      if (isSuccess) {
        successfulRequests++;
      } else {
        failedRequests++;
      }
    }
  }

  void handleRequest() {
    synchronized(lock) {
      totalRequests++;
      recordResult(true);
    }
  }
}
```

Java can still get deadlock, however, for instance if some code needs to acquire more than one lock, or needs to access the same lock from multiple threads.
