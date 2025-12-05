+++
title = "Distributed Tracing"
time = 120
objectives = [
  "Contrast distributed tracing and metrics.",
  "Explain how distributed tracing helps understand a request flow through several systems.",
]
[build]
  render = "never"
  list = "local"
  publishResources = false
+++

In the past we have added metrics to our programs and collected and aggregated those metrics using the Prometheus monitoring tool. Metrics are a widely-used methodology for understanding the behaviour of our systems at a statistical level: what percentage of requests are being completed successfully, what is the 90th percentile latency, what is our current cache hit rate or queue length. These kinds of queries are very useful for telling us whether our systems seem to be healthy overall or not, and, in some cases, may provide useful insights into problems or inefficiencies.

However, one thing that metrics are not normally very good for is understanding how user experience for a system may vary between different types of requests, why particular requests are outliers in terms of latency, and how a single user request flows through backend services - many complex web services may involve dozens of backend services or datastores. It may be possible to answer some of these questions using logs analysis. However, there is a better solution, designed just for this problem: distributed tracing.

Distributed tracing has two key concepts: traces and spans. A trace represents a whole request or transaction. Traces are uniquely identified by trace IDs. Traces are made up of a set of spans, each tagged with the trace ID of the trace it belongs to. Each span is a unit of work: a remote procedure call or web request to a specific service, a method execution, or perhaps the time that a message spends in a queue. Spans can have child spans. There are specific tools that are designed to collect and store distributed traces, and to perform useful queries against them.

One of the key aspects of distributed tracing is that when services call other services the trace ID is propagated to those calls (in HTTP-based systems this is done using a special HTTP [traceparent header](https://uptrace.dev/opentelemetry/opentelemetry-traceparent.html)) so that the overall trace may be assembled. This is necessary because each service in a complex chain of calls independently posts its spans to the distributed trace collector. The collector uses the trace ID to assemble the spans together, like a jigsaw puzzle, so that we can see a holistic view of an
entire operation.

[OpenTelemetry](https://opentelemetry.io/) (also known as OTel) is the main industry standard for distributed tracing. It governs the format of traces and spans, and how traces and spans are collected. It is worth spending some time exploring the [OTel documentation](https://opentelemetry.io/docs/), particularly the Concepts section. The [awesome-opentelemetry repo](https://github.com/magsther/awesome-opentelemetry) is another very comprehensive set of
resources.

Distributed tracing is a useful technique for understanding how complex systems are operating.
