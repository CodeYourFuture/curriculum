+++
title = "Pre-computing"
[build]
  render = 'never'
  list = 'local'
  publishResources = false
time = 30
emoji= "🔮"
[objectives]
    1="Identify a pre-computation which will improve the complexity of an algorithm"
+++

> Pre-computation means doing some work upfront to make future work faster.

### 💪🏾 Doing Work Ahead of Time

So far we have thought about saving the results of computations to access them again more quickly. But if we can predict what computations we will need, we can do them _before_ we need them and access them instantly. 

We _invest_ time now to _save_ time later. This could be a complete answer, an index of answers, or some intermediate computation that makes finding our final result faster. 

### 🗃️ 🔍 Example: Sort Before Search

Often, the work we pre-compute is sorting data to make searching operations faster. 

Searching for a username in an unsorted list of one million users requires checking each one. On average this is half a million comparisons with O(N) complexity. 

But what if we sorted our list? Now, searching for a specific username in the sorted list can use [binary search](logic/sprints/1/prep/#bisection). Binary search repeatedly halves the search space, taking only about twenty comparisons for a million items (O(log N) complexity).

If we need to search the list many times, the time spent sorting once is easily paid back by the much faster searches later. This is useful when we have data that is read frequently but updated less often.


Pre-computing always involves **trade-offs**: you invest time and memory upfront to gain speed later. 