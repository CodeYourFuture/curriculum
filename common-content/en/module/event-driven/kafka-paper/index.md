+++
title = "Kafka Paper"
time = 120
objectives = [
  "Describe how Kakfa stores data internally.",
  "Calculate how many partitions are needed to serve a given number of consumers on a topic.",
  "Contrast push-based and pull-based queueing systems.",
  "Describe what delivery ordering constraints are and aren't guaranteed by Kafka.",
  "Explain limitations of Kafka compared to systems with acknowledgements or two-phase commits.",
]
[build]
  render = "never"
  list = "local"
  publishResources = false
+++

Kafka is a commonly-used open-source distributed queue.

{{<note type="Reading">}}
Read about the core Kafka concepts in the [Kafka: a Distributed Messaging System for Log Processing paper](https://www.microsoft.com/en-us/research/wp-content/uploads/2017/09/Kafka.pdf).

Make sure you have achieved all of the learning objectives for this prep.
{{</note>}}
