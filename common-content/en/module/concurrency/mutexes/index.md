+++
title = "Mutexes"
time = 120
objectives = [
  "Solve a race condition with a mutex.",
  "Define a critical section.",
  "Identify the critical section in concurrent code.",
  "Explain the risks of mis-identifying the critical section, and releasing locks early.",
  "Choose between using mutexes and atomics."
]
[build]
  render = "never"
  list = "local"
  publishResources = false
+++

In our reading, we've seen locks (also called mutexes) used instead of an atomic to solve the same problem. Mutexes are more flexible - you choose when you lock and unlock them, but more complicated - you need to make sure you unlock them at the right place. They are also prone to deadlock: Blocking your programme from making progress because two threads are waiting on locks held by each other.

If you have multiple operations which need to appear as if they were atomic (i.e. you must prevent other threads from taking action between the operations), a mutex is often a good way to achieve this.

#### Critical Sections

When using a mutex, it's crucial to work out where the mutex needs to be acquired ("locked") and where it needs to be released ("unlocked").

In general, any time that some other thread changing something between operations would cause a problem, those operations need to be performed _under the same lock acquisition_.

Let's take an example of tracking some statistics. Imagine we have a counter for total number of requests, and counters for successful and failed requests. We may want the invariant to always hold: (successful requests + failed requests) = total requests.

This code would be buggy:

{{<tabs>}}
===[[Go]]===
```go
type customerStats struct {
	failedReqs  int
	successReqs int
}

var (
	lock            sync.Mutex
	statsByCustomer = make(map[string]*customerStats)
)

func updateCustomerStats(customerId string, ok bool) {
	// Does customer stats object exist in map?
	lock.Lock()
	_, exists := statsByCustomer[customerId]
	lock.Unlock()

	// Create stats obj if necessary
	if !exists {
		lock.Lock()
		statsByCustomer[customerId] = &customerStats{}
		lock.Unlock()
	}

	lock.Lock()
	if ok {
		statsByCustomer[customerId].successReqs++
	} else {
		statsByCustomer[customerId].failedReqs++
	}
	lock.Unlock()
}
```

===[[Java]]===

```java
import java.util.HashMap;

class AllCustomerStats {
  static final class IndividualCustomerStats {
    public int failedReqs = 0;
    public int successReqs = 0;
  }

  // Guards access to statsByCustomer.
  Object lock = new Object();

  // Guarded by lock.
  HashMap<String, IndividualCustomerStats> statsByCustomer = new HashMap<>();

  public void updateCustomerStats(String customerId, boolean success) {
    boolean alreadyExists;
    synchronized(lock) {
      alreadyExists = statsByCustomer.containsKey(customerId);
    }

    if (!alreadyExists) {
      synchronized(lock) {
        statsByCustomer.put(customerId, new IndividualCustomerStats());
      }
    }

    synchronized(lock) {
      if (success) {
        statsByCustomer.get(customerId).successReqs++;
      } else {
        statsByCustomer.get(customerId).failedReqs++;
      }
    }
  }
}
```
{{</tabs>}}

This is because we release the lock between two things we want to appear as atomic. In this code:

{{<tabs>}}
===[[Go]]===
```go
go func() {
    updateCustomerStats("gina", true)
}()

go func() {
    updateCustomerStats("gina", false)
}()
```
===[[Java]]===
```java
class Main {
  public static void main(String[] args) throws Exception {
    AllCustomerStats stats = new AllCustomerStats();
    ArrayList<Thread> threads = new ArrayList<>();

    threads.add(new Thread(() -> { stats.updateCustomerStats("gina", true); }));
    threads.add(new Thread(() -> { stats.updateCustomerStats("gina", false); }));

    for (Thread thread : threads) {
      thread.start();
    }
    for (Thread thread : threads) {
      thread.join();
    }

    AllCustomerStats.IndividualCustomerStats ginaStats = stats.statsByCustomer.get("gina");
    System.out.printf("Total requests: %d%n", ginaStats.failedReqs + ginaStats.successReqs);
  }
}
```
{{</tabs>}}

both threads may do the "exists" check, see there's no stats for that customer, and create a new empty stats object. Both will write the new stats object into the map, and one of them will overwrite the other, discarding the other thread's data.

Instead we need to hold the lock across all of the operations that need to appear as atomic:

{{<tabs>}}
===[[Go]]===
```go
    lock.Lock()
    // Does customer stats object exist in map?
    _, exists := statsByCustomer[customerId]

    // Create stats obj if necessary
    if !exists {
        statsByCustomer[customerId] = &customerStats{}
    }
    lock.Unlock()
```
===[[Java]]===
```java
    synchronized(lock) {
      boolean alreadyExists = statsByCustomer.containsKey(customerId);
      if (!alreadyExists) {
        statsByCustomer.put(customerId, new IndividualCustomerStats());
      }
    }
```
{{</tabs>}}

The `++` operation is _also_ a thread-safety risk as we've seen before. But it doesn't fall into the same critical section as the "check if exists, and maybe write to map" sequence. We could solve it using an atomic, a different lock, or the same lock. All of these are fine solutions to the `++` race condition. But it doesn't fall into the critical section, because it doesn't need to be guarded by the same lock acquisition.

This is particularly important to consider when code is spread across functions. This code has a similar bug as above:

{{<tabs>}}
===[[Go]]===
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
    s.totalRequests += 1
    s.mu.Unlock()
    s.recordResult(true)
}
```
===[[Java]]===
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
    }
    recordResult(true);
  }
}
```
{{</tabs>}}

In the above case, the number of total requests isn't modified under the same lock as the success/failed requests. This means if some other code computed a success rate by dividing the number of successful requests by the total number of requests, it may show <100% success when 100% of requests were successful!

> [!NOTE]
>
> In Java, this is also one of the reasons many people always used `synchronized(lock)` blocks, rather than adding the `synchronized` keyword to a method definition.
>
> In Java you can write:
>
> `synchronized void recordResult(booleanIsSuccess)` and `synchronized void handleRequest()` which automatically acquire the lock on `this` for the duration of the function. But often this leads to bugs because people may need to hold the same lock over multiple method calls, which this pattern doesn't allow.
