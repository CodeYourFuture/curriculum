+++
title = "Fear and logic"
time = 60
emoji= "🗿"
[objectives]
    1="Sketch the flow of a request through existing code"
    2="Identify key components and their relationships"
    3="Map the architecture of an unfamiliar application"
+++

Do you remember your first day at {{<our-name>}}? You couldn't find the building, maybe, and you had no idea how the day would go. What on earth is a day plan, or a backlog, you thought to yourself. Perhaps you got frustrated: _why_ are all my changes from last week in my new PR? **How**?! It was incomprehensible. But you learned! You asked questions, you read the guides, and you built a mental map of the system.

You might have found your first code reviews challenging too. You worked on a project for days, _just_ got it all working, and now someone is telling you to change it. Changing code you don't understand very well is risky.

Feeling a bit hesitant is fine. In fact, some caution is healthy. If code is working and it's doing something important for the business, we don't want to break it. But we also don't want to be _so_ fearful that we can't fix it or write new features. We must balance caution with curiosity. We will approach legacy code with a structured, logical plan.

{{<columns>}}

```mermaid
---
config:
  look: handDrawn
---
graph TD
    Fear -->|What if I break it?| Paralysis
    Paralysis -->|I'll just work around it| Avoidance
    Avoidance -->|Let's rewrite from scratch| Rewrite
    Rewrite -->|What should it do?| Fear

```

<--->

```mermaid
---
config:
  look: handDrawn
---
graph TD
 Logic -->|What should it do?| Hypothesise
    Hypothesise -->|What does it actually do?|Test
    Test -->|Small, careful changes| Modify --->|Cycle of progress|Logic

```

{{</columns>}}

A good rule here is [Chesterton's Fence](https://www.youtube.com/watch?v=qPGbl2gxGqI{). This says that before we change something, we must [explain why](https://thoughtbot.com/blog/chestertons-fence) it's like that in the first place.
