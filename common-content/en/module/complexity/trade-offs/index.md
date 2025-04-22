+++
title = "Trade-offs"
[build]
  render = 'never'
  list = 'local'
  publishResources = false
time = 15
emoji= "⚖️"
[objectives]
    1="Give examples of trading off memory for CPU"
    2="Give examples of choosing where work is done in system design"
    3="Optimise a system design to minimise the cost of operations"
+++

In software engineering, we constantly make trade-offs. We choose one approach over another, gaining some benefits while accepting some downsides. In this module we have examined many problems that involve balancing resources like memory, CPU time, network bandwidth, and even developer time.

### Space vs time

We saw caching trades the limited resource of memory space for the limited resource of computation time. But caching introduces the problem of stale data, and it can make it harder to reason about our application. We saw that we can store much more data and query it much quicker on a database, but also that it's slower to access that data over a network. 

In each optimisation we have examined, there is a trade off.

### Where Should Work Be Done?

Understanding these trade-offs allows us to optimise a system. This doesn't always mean "make it the absolute fastest". It means making conscious choices to best meet the goals, which might include:

- Minimising user waiting time (latency)
- Reducing server hosting costs (CPU, memory, bandwidth usage)
- Improving developer comprehension (simpler code, patterns)
- Increasing reliability (avoiding database flooding like the N+1 problem)

