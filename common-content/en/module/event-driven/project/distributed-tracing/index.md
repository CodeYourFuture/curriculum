+++
title = "Distributed Tracing in Kafka"
time = 300
objectives = [
  "Instrument a producer and consumer with OTel.",
  "Interpret a trace in Honeycomb across producer and consumer.",
  "Identify outliers in Honeycomb.",
]
[build]
  render = "never"
  list = "local"
  publishResources = false
+++

We know that metrics can help give us aggregate information about all actions, and distributed tracing can help us better understand the flow of particular requests through systems.

A single cron job invocation is a like a user request. It gets originated in one system (the producer), then flows through Kafka, and may run on one consumer (if it succeeds the first time), or more than one consumer (if it fails and needs to be retried).

We can use distributed tracing to trace individual cron job invocations.

{{<note type="Exercise">}}
Add span publishing to your producer and consumers.

To end up assembled in the same trace, all of the services will need to know to use the same trace ID. You may need to modify your job data format to enable this.

Run your system, publishing to Honeycomb, and inspect the traces in Honeycomb. Identify:
1. How long jobs spend waiting in Kafka between the producer and consumer. What was the longest time a job waited there? What was the shortest time?
2. What was the largest number of retries any job took?
3. How many jobs always failed all retries?
4. Which jobs fail the most or the least?
{{</note>}}
