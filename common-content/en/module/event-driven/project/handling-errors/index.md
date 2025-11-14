+++
title = "Handling Errors"
time = 300
objectives = [
  "Explain what command line jobs are and aren't desirable to automatically retry.",
  "Explain the risks of enqueueing retries on the same topic as first attempts.",
  "Avoid overloading queues by adding delays between retries.",
  "Define and describe a Dead Letter Queue.",
  "Retry failed jobs on a separate Kafka topic.",
]
[build]
  render = "never"
  list = "local"
  publishResources = false
+++

What happens if there is a problem running a job? For some kinds of jobs, maybe the right thing is retry it. For some, it isn't. It probably depends on what the job was doing.

{{<note type="Exercise">}}
Think about what jobs should probably be retried and what jobs shouldn't.

What are the common characteristics of each?
{{</note>}}

This should be a configurable property of our cron jobs: update our program to add a maximum number of attempts to the job configurations and message format.

However: we don't want to risk retry jobs displacing first-time runs of other jobs. This is why some queue-based systems use separate queues for retries.

{{<note type="Reading">}}
Read about [using separate queues for retries](https://www.uber.com/en-IE/blog/reliable-reprocessing/).
{{</note>}}

We can create a second set of topics for jobs that fail the first time and need to be retried (we need one retry topic for each cluster). If a job fails, the consumer should write the job to the corresponding retry topic for the cluster (and decrement the remaining allowed attempts in the job definition).

{{<note type="Exercise">}}
Run some instances of your consumer program that read from your retry queues (we can make this a command-line option in your consumer).

Define a job that fails and observe your retry consumers retrying and eventually discarding it.

Define a job that randomly fails some percent of the time, and observe your retry consumers retrying and eventually completing it.
{{</note>}}
