+++
title = "Monitoring"
time = 420
objectives = [
  "Define meaningful user-facing metrics.",
  "Define useful metrics to help diagnose a root-cause of a user-facing issue.",
  "Instrument a producer and consumer to provide Prometheus metrics.",
  "Collect Prometheus metrics from a Kafka queue.",
  "Run Prometheus and Grafana.",
  "Scrape Prometheus metrics from services into Prometheus.",
]
[build]
  render = "never"
  list = "local"
  publishResources = false
+++

In software operations, we want to know what our software is doing and how it is performing.

One very useful technique is to have our program export metrics. Metrics are basically values that our program makes available (the industry standard is to export and scrape over HTTP).

Specialised programs, such as Prometheus, can then fetch metrics regularly from all the running instances of our program, store the history of these metrics, and do useful arithmetic on them (like computing rates, averages, and maximums). We can use this data to do troubleshooting and to alert if things go wrong.

{{<note type="Reading">}}
Read the [Overview of Prometheus](https://prometheus.io/docs/introduction/overview/) if you are not familiar with Prometheus.
{{</note>}}

There are guides to instrumenting applications for Prometheus which describe how to add metrics. For instance [in Go](https://prometheus.io/docs/guides/go-application/) and [in Java](https://www.baeldung.com/java-prometheus-client).

First, consider:

- What kinds of things may go wrong with our system? (it is useful to look at errors your code is handling, as inspiration)
- What would users' expectations be of this system?
- What metrics can we add that will tell us when the system is not working as intended?
- What metrics can we add that might help us to troubleshoot the system and understand how it is operating? Read back through the first three parts of this exercise to try and identify the properties of the system that we might want to know about.

Asking these questions should guide us in designing the metrics that our consumers and producer should export.
Think about what kinds of problems can happen both in the infrastructure - Kafka, your consumers and producers - and in the submitted jobs.

{{<note type="Exercise">}}
Add metrics to your programs. Verify that they work as expected using `curl` or your web browser.
{{</note>}}

#### Running the Prometheus JMX Exporter to get Kafka metrics

Kafka doesn't export Prometheus metrics natively. However, we can use the official
[Prometheus JMX exporter](https://github.com/prometheus/jmx_exporter) to expose its metrics.

> **Note:** Kafka is a Java program. We don't need to know much about Java programs in order to run them, but it's useful to know that Java programs run in a host process called a Java Virtual Machine (JVM). The JVM also allows for injecting extra code called Java agents, which can modify how a program is run.

The Prometheus JMX exporter can run as a Java agent (alongside a Java program such as Kafka) or else as a standalone HTTP server, which collects metrics from a JVM running elsewhere and re-exports them as Prometheus metrics. If you're using [conduktor/kafka-stack-docker-compose](https://github.com/conduktor/kafka-stack-docker-compose) as suggested then your image contains the `jmx_prometheus_javaagent` already.

You need to create a config file, named something like `kafka-jmx-config.yaml`. A config file that will collect all metrics is:

```
rules:
- pattern: ".*"
```

Now, update the Kafka service in your `docker-compose.yml`. Add a volume - for example:

```
    volumes:
      - ./kafka-jmx-config.yaml:/kafka-jmx-config.yaml
```

Finally, you need to add a new line in your `environment` section for your Kafka server in your `docker-compose.yml`:

```
KAFKA_OPTS: -javaagent:/usr/share/java/cp-base-new/jmx_prometheus_javaagent-0.14.0.jar=8999:/kafka-jmx-config.yaml
```

The version of the `jmx_prometheus_javaagent` jar might change in a later version of the `cp-kafka` image, so if you have any issues running the software, this would be the first thing to check. You can't just map a newer version of the agent as a volume as this is likely to cause runtime errors due to multiple version of the agent on the Java classpath.

Now you should be able to see JVM and Kafka metrics on [http://localhost:8999](http://localhost:8999). Check this using `curl` or your web browser.

#### Running Prometheus, Alertmanager, and Grafana

Next, we can add Prometheus, AlertManager, and Grafana, a common monitoring stack, to our `docker-compose` configuration. Here is an example configuration that we can adapt: https://dzlab.github.io/monitoring/2021/12/30/monitoring-stack-docker/. AlertManager is used for notifying operators of unexpected conditions, and Grafana is useful for building dashboards that allow us to troubleshoot and understand our system's operation.

> [!NOTE]
>
> If your computer is struggling to run such a complex `docker-compose` system in a performant fashion, you can cut down the number of Kafka topics and consumers that you are running to a minimum (just one producer and consumer/retry consumer pair are fine - don't run sets of these for multiple clusters if your computer is under too much load).

We'll need to set up a Prometheus configuration to scrape our producers and consumers. Prometheus [configuration](https://prometheus.io/docs/prometheus/latest/configuration/configuration/) is quite complex but we can adapt this [example configuration](https://github.com/prometheus/prometheus/blob/main/documentation/examples/prometheus.yml).

For example, to scrape your Kafka metrics, you can add ths to the Prometheus configuration:

```
scrape_configs:
  - job_name: "kafka"
    static_configs:
      - targets: ["kafka1:8999"]
```

Once you have adapted the sample Prometheus configuration to scrape metrics from your running producer and consumer(s) and from the JMX exporter that is exporting the Kafka metrics, you should check that Prometheus is correctly scraping all those metrics. If you haven't changed the default port, you can access Prometheus's status page at [http://localhost:9090/](http://localhost:9090/).

You can now try out some queries in the Prometheus UI.

For example, let's say that our consumers are exporting a metric `job_runtime` that describes how long it takes to run jobs. And let's say the metric is labelled with the name of the queue the consumer is reading from.

Because this metric is describing a population of observed latencies, the best metric type to use is a [histogram](https://prometheus.io/docs/practices/histograms/).

We can query this as follows:

```
histogram_quantile(0.9, sum by (queue, le)(rate(job_runtime[10m])))
```

This will give you the 90th percentile job runtime (i.e. the runtime where 90% of jobs complete this fast or faster) over the past 10 minutes (the `rate` function does this for histogram queries - it's a little counterintuitive).

For some more PromQL examples, see the [Prometheus Query Examples page](https://prometheus.io/docs/prometheus/latest/querying/examples/).
