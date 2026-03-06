+++
title = "Deadlock"
time = 30
objectives = [
  "Define deadlock.",
  "Identify causes of deadlock in code.",
]
[build]
  render = "never"
  list = "local"
  publishResources = false
+++

A deadlock occurs when two or more threads are blocked forever, each waiting for each other.

One way this can happen is if two threads need to acquire two locks, but they acquire them in different orders. For instance:

{{<tabs>}}
===[[Go]]===
```go
package main

import (
	"fmt"
	"sync"
	"time"
)

func main() {
	var mu1 sync.Mutex
	var mu2 sync.Mutex

	var wg sync.WaitGroup
	wg.Add(2)

	go func() {
		mu1.Lock()
		defer mu1.Unlock()

		time.Sleep(time.Second)

		mu2.Lock()
		defer mu2.Unlock()

		fmt.Println("Goroutine 1 succeeded")
		wg.Done()
	}()

	go func() {
		mu2.Lock()
		defer mu2.Unlock()

		time.Sleep(time.Second)

		mu1.Lock()
		defer mu1.Unlock()

		fmt.Println("Goroutine 2 succeeded")
		wg.Done()
	}()

	wg.Wait()
}
```
===[[Java]]===
```java
import java.util.ArrayList;

class Main {
  public static void main(String[] args) throws Exception {
    Object lock1 = new Object();
    Object lock2 = new Object();

    ArrayList<Thread> threads = new ArrayList<>();

    threads.add(new Thread(() -> {
      synchronized(lock1) {
        try { Thread.sleep(1000); } catch (InterruptedException e) {}
        synchronized(lock2) {
          System.out.println("Thread 1 succeeded");
        }
      }
    }));

    threads.add(new Thread(() -> {
      synchronized(lock2) {
        try { Thread.sleep(1000); } catch (InterruptedException e) {}
        synchronized(lock1) {
          System.out.println("Thread 2 succeeded");
        }
      }
    }));

    for (Thread thread : threads) {
      thread.start();
    }
    for (Thread thread : threads) {
      thread.join();
    }
  }
}
```
{{</tabs>}}

Whichever thread acquired one lock first, it's going to wait for the other lock, which the other thread has already acquired.

These examples are artificial, but they illustrate what can happen in real life.
