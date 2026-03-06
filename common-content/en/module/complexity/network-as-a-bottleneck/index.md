+++
title = "Network as a bottleneck"
time = 15
[build]
  render = 'never'
  list = 'local'
  publishResources = false
[objectives]
    1="Explain limitations of needing to make network calls (e.g. from a backend to a database)"
+++

We first thought about latency when we learned about `fetch`, remember:

> 💡 Network latency is travel time.

Network calls are **slow**. Even the shortest round trip on a local area network takes around 500 microseconds (µs) or 500,000 nanoseconds (ns). This is _thousands_ of times slower than accessing RAM (~100 ns) and several times slower than a fast local SSD (~16-150 µs).

The further data must travel, the longer it takes. This is why we try to store data close to where we need it. A round trip between continents, like the US and Europe, can easily take 150 milliseconds (ms) or 150,000,000 ns. This is orders of magnitude slower than any local operation.

Thinking back to the strategies we mooted in [Expensive Operations](#expensive-operations), there are two main network related costs:

### 🦥 Fetching Too Much Data

In design one and three, we just get everything and sort it out in the browser. This sends too much data over the network! Every single byte of data we request extends the time we have to wait. Once we have all this data, we have to waste yet more time and energy sorting through items we knew we could never need or use. 

### 🦥 Making Too Many Requests

In the second design, we make network calls inside a loop. Each network call in the loop adds latency. If we follow 50 people, we wait for the network 50+ times! Another way to say this is that this is an "N+1 API problem".

### 🤑 Too much, too often

Both looping network calls and fetching/processing huge amounts of data are examples of overusing a limited resource. They make the user wait.

> Remember: after just three seconds of waiting, half of all your users have given up and left.

But there's a further problem with making too many requests or asking for too much data. Let's think again about our "N+1" problem. 
