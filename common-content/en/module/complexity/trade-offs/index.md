+++
title = "Trade-offs"
time = 30
[build]
  render = 'never'
  list = 'local'
  publishResources = false
[objectives]
    1="Give examples of trading off memory for CPU"
    2="Give examples of choosing where work is done in system design"
    3="Optimise a system design to minimise the cost of operations"
+++

In software engineering, we constantly make trade-offs. We choose one approach over another, gaining some benefits while accepting some downsides. In this module we have examined many problems that involve balancing resources like memory, CPU time, network bandwidth, and even developer time.

### 🫱🏻‍🫲🏽 Space vs Time

We saw caching trades the limited resource of memory space for the limited resource of computation time. But caching introduces the problem of stale data, and it can make it harder to reason about our application. We saw that we can store much more data and query it much quicker on a database, but also that it's slower to access that data over a network. 

In each optimisation we have examined, there is a trade off.

### 🗺️ Where Should Work Be Done?

Understanding these trade-offs allows us to optimise a system. This doesn't always mean "make it the absolute fastest". It means making conscious choices to best meet the goals, which might include:

- Minimising user waiting time (latency)
- Reducing server hosting costs (CPU, memory, bandwidth usage)
- Improving developer comprehension (simpler code, patterns)
- Increasing reliability (avoiding database flooding like the N+1 problem)

### Choosing between trade-offs

One of the tricky things with trade-offs is there often isn't a single clear best answer. Often reasonable people will have different thoughts.

We've come across many examples of trade-offs in this course. For example:
* In the Tools module we considered trade-offs between using existing command line tools vs writing our own.
* In the Tools module we considered the trade-offs of different programming languages (e.g. using compiled vs interpreted languages, using statically typed vs dynamic languages, etc).
* In the Logic module we considered the trade-offs between using lots of rats in parallel (perhaps getting an answer quickly) vs using fewer rats sequentially (perhaps using fewer rats).
* In the Decomposition module we considered the trade-offs between accepting the limitations of a simpler frontend-only system vs making a more complex system with more capabilities by including a backend.
* In the Decomposition module we considered the trade-offs between short-polling, long-polling, or using websockets.
* In the Decomposition module we considered the trade-offs between giving a new number of likes as a difference ("+1 like") or an absolute value ("now 10 likes").
* In the Decomposition module we considered the trade-offs between different continuation callback styles.
* And lots more!

Some of these trade-offs have clear decision frameworks (do we want a fast answer, or to minimise how many rats we kill?). Others depend a lot more on context.

{{<note type="exercise">}}
Think about the trade-offs mentioned above. When would you choose each option? How would you decide between them? What context would help?
{{</note>}}

It's important to consider context, and be open to different opinions. This is one of the strengths of working in diverse teams. Perhaps someone in your team has experienced a problem you haven't, and weighs the down-sides of some trade-off differently than you do. If you just work on your own, your system may be worse for not considering those down-sides. If you just work with people who have the same experience as you do, you may not notice risks that others know. By working together, we benefit from all of our shared experience.
