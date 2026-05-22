+++
title = "Alerting"
time = 180
objectives = [
  "Identify and graph metrics to indicate specific problems.",
  "Create an alert triggered by a specific problem.",
]
[build]
  render = "never"
  list = "local"
  publishResources = false
+++

Write an [AlertManager configuration](https://prometheus.io/docs/alerting/latest/alertmanager/) and set up at least one alert.

For instance:

- We could alert on the age of jobs being unqueued - if this rises too high (more than a few seconds) then users' jobs aren't being executed in a timely fashion. We should use a percentile for this calculation.
  - Note that this may need us to add extra code/data to our system, to be able to produce these metrics.
- We could also alert on failure to queue jobs, and failure to read from the queue.
- We expect to see fetch requests against all of our topics. If we don't, it may mean that our consumers are not running, or are otherwise broken. We could set up alerts on the `kafka_server_BrokerTopicMetrics_Count{name="TotalFetchRequestsPerSec"}` metric to check this.

For critical alerts in a production environment we would usually use PagerDuty or a similar tool, but for our purposes the easiest way to configure an alert is to use email.
This article describes how to send [Alertmanager email using GMail](https://www.robustperception.io/sending-email-with-the-alertmanager-via-gmail/) as an email server.

> [!WARNING]
>
> If you do this, be careful not to check your `GMAIL_AUTH_TOKEN` into GitHub - we should never check ANY token into source control. Instead, we can check in a template file and use a tool such as [heredoc](https://tldp.org/LDP/abs/html/here-docs.html) to substitute the value of an environment variable (our token) into the final generated Alertmanager configuration (and include this step in a build script/Makefile).
>
> It is also advisable a throwaway GMail account for this purpose, for additional security - just in case.

We can also build a Grafana dashboard to display our Prometheus metrics. The [Grafana Fundamentals](https://grafana.com/tutorials/grafana-fundamentals/) tutorial will walk you through how to do this (although we will need to use our own application and not their sample application).

{{<note type="Exercise">}}
Simulate several potential problems that could happen when running this system. Make sure you can identify the problems on your Grafana dashboard.

Examples of problems to simulate and identify:
* Kafka crashes and doesn't start again
* One kind of job always fails
* There are too many jobs and we can't get to them all in a timely manner.
* One kind of job fails whenever it runs in a particular topic (but succeeds in the other topics)
* One kind of job takes a really long time to run and means other jobs don't start in a timely manner.
* No consumers are pulling jobs out of a particular topic.
* A producer is producing jobs which the consumers can't understand (e.g. they have missing JSON fields).

Prepare a demo where you can show how your Grafana dashboard can help you diagnose and debug these problems.
{{</note>}}

{{<note type="Exercise">}}
Create at least one alert to notify you by email of a problem with your cron system.
{{</note>}}
