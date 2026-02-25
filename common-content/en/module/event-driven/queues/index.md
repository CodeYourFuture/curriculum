+++
title = "Queues"
time = 60
objectives = [
  "List advantages of using queues.",
  "List examples of systems where queues are helpful.",
  "Explain how a queue helps to avoid system overload.",
  "Explain how a queue can help reduce service provisioning and costs.",
  "Identify draw-backs to queue-based systems.",
]
[build]
  render = "never"
  list = "local"
  publishResources = false
+++

Queues are a frequently-seen component of large software systems that involve potentially heavyweight or long-running requests. A queue can act as a form of buffer, smoothing out spikes of load so that the system can deal with work when it has the resources to do so.

{{<note type="Reading">}}
Read about the [Queue-Based Load-Leveling Pattern](https://learn.microsoft.com/en-us/azure/architecture/patterns/queue-based-load-leveling).

Make sure you have achieved all of the learning objectives for this prep.
{{</note>}}

{{<
  multiple-choice
  question="How can results of tasks be communicated back to users in a queue-based system?"
  answers="Writing to stdout/stderr | Notifications such as by email | Displaying results in the user's browser"
  feedback="No - a user doesn't see the stdout/stderr of the process running the work. stdout/stderr can be useful for the queue operators to debug things, but generally aren't useful to end-users who submit tasks. | Yes - queues can send notifications about successes/failures/progress. | Ish. We can build systems that monitor the queue and display results. But in general, when we submit work to a queue, we don't have a server we can ask to show us progress."
  correct="1">}}