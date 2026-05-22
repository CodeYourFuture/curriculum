+++
title = "Multiple queues"
time = 180
objectives = [
  "Run multiple Kafka topics.",
  "Assign jobs to separate Kafka topics.",
]
[build]
  render = "never"
  list = "local"
  publishResources = false
+++

A new requirement: our distributed cron system needs to be able to schedule jobs to run in multiple clusters (e.g. one in Europe, one in America). Imagine that we want to support users who have data stored in specific locations and they want to make sure their cron jobs are running near their data.

Just like how we are simulating multiple computers with docker-compose, we don't really need to set up any cells for this - just write our program as though you had multiple sets of consumer workers.

You *don't* need to set up multiple Kafka clusters for this - this extension is just about having multiple sets of consumer jobs, which we notionally call clusters.

- Define a set of clusters in our program (two is fine, `cluster-a` and `cluster-b`)
- Each cluster should have its own Kafka topic
- Update the job format in the crontab file so that jobs must specify what cluster to run in (Note: This will diverge your crontab file format from the standard one - this is fine)
- Run separate consumers that are configured to read from each cluster-specific topic

Test that our new program and Kafka configuration works as expected.

{{<note type="Think">}}
Imagine in real life you had a deployed system that didn't need clusters specified, and then wanted to add the ability to choose clusters.

How would you do this sort of a migration in a running production environment, where you could not drop existing jobs?
{{</note>}}
