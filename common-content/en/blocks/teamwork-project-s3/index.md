+++
title="Teamwork Project Sprint 3"
time=60
[build]
render = "never"
list = "local"
publishResources = false
[objectives]
1="Identify features for a product"
2="Write user stories for a product"
3="Explain the importance of reading and understanding acceptance criteria"
+++

{{<tabs name="Teamwork Project Sprint 3" >}}

===[[👉🏽 PD Session]]===
⏱️ **Time:** 15 minutes

### Preparation

Post-its and a collaborative board.

### Introduction

When mapping a product, we go from the high to the lowest level to plan our delivery. The reason for that is so that the team and stakeholders all have the same knowledge of the strategy of the product and the main end goal.

However, we cannot deliver everything at once. And we also cannot plan every detail. We can prioritise the must-haves and then focus on them.

<style>
.workflow-banner {
  background-color: ;
  background-image: radial-gradient(#d9d9e3 1px, transparent 1px);
  background-size: 14px 14px;
  padding: 40px 0 30px;
  margin: 30px 0;
}

.workflow-text {
  font-size: 34px;
  font-weight: 500;
  color: #1f2a7a;
  text-align: left;
}

.workflow-underline {
  margin-top: 20px;
  height: 4px;
  background-color: #d13438;
  width: 50%;
}

@media (max-width: 768px) {
  .workflow-text {
    font-size: 22px;
  }
}
</style>

<div class="workflow-banner">
  <div class="workflow-text">
    Product &gt; Features &gt; User Stories &gt; Tasks
  </div>
  <div class="workflow-underline"></div>
</div>
This process is often called User Journey Mapping or Story Mapping. Because we cannot deliver everything at once, we must prioritize must-have features first.

===[[🧩 1) What questions should we ask to understand what we need to build?]]===

### What questions should we ask to understand what we need to build?

⏱️ **Time:** 15 minutes

🎯 Goal: To understand the requirements of building a library

Let’s assume we have been asked to build a library website that allows you to borrow books. 

Instructions

- Discuss **briefly** as a class **what questions we should ask** to understand better what we will build.  

- Write these questions on post-its and share them on the collaborative board.
- Focus is on the questions, not the answers!

===[[🧩 Exercise 2: What features should this website have?]]===
⏱️ **Time:** 10 minutes

🎯 Goal: Learn how to break down a broad product into specific features

Scenario: Assume we have answers to our product questions. Our goal is to build a website with a catalogue of books that can be borrowed online.

Instructions

In small groups, identify the main features you would expect on this website.

Examples: book search, shopping cart, user accounts.

One person from each group shares the group's thoughts with the class.

☕ **15 minute break**

===[[🧩 Exercise 3: User Stories]]===
⏱️ Time: 15 minutes

🎯 Goal: Break features into actionable, user-centric stories

Instructions

In small groups, pick one feature from your previous list.

Break it down into at least 2 user stories using the standard format:

“As a [user], I want to [action] so that [value].”

Example (Shopping Cart):

"As a library user, I want to remove items from my cart so that my final checkout is correct."

"As a library user, I want to pay with a credit card so my books can be delivered."

Group representatives volunteer to share their stories with the class.

===[[🧩 Exercise 4: Task Breakdown]]===
⏱️ **Time:** 15 minutes

🎯 Goal: Understand how to break a user story into technical tasks and map dependencies between them

### Instructions

1. In your groups, choose one user story from Exercise 3.
2. Identify the technical tasks needed to deliver that user story.
3. Map dependencies between your tasks:
   - How does Task A affect other tasks?
   - Does Task A need to be completed before Task B can start?
4. Size each task based on complexity — pick **one** sizing approach for this exercise:
   - **Story points** (relative effort, e.g. 1, 2, 3, 5, 8)
   - **Days** (rough time estimate, e.g. 0.5d, 1d, 2d)
   > Real teams use one or the other consistently. Story points are more common in agile teams as they reflect effort rather than time, but both are valid. Just don't mix them!
5. Discuss: When is the right time to assign tasks? What criteria should you follow?

### Example

**User story:** "As a library user, I want to search for books so that I can find what I need quickly."

| Task | Depends on | Size |
|---|---|---|
| Agree on frontend/backend API contract | — | 1 point |
| Build a search bar UI component | API contract | 3 points |
| Create a `/books/search` API endpoint | API contract | 3 points |
| Connect the search API to the database | API endpoint | 2 points |

===[[🎯 Wrap-up: How does this work on real teams?]]===
⏱️ **Time:** 15 minutes

🎯 Goal: Connect today's exercises to real engineering team practice

Talk with your volunteers about how this works day-to-day:

- How does your team manage user stories and task breakdowns? (Jira, Linear, Notion, etc.)
- Who writes user stories — product managers, engineers, or both?
- How do you handle dependencies between tasks in a sprint?
- What happens when a task turns out to be bigger than expected?

This is a chance to ask questions and hear real examples from people working in tech today.

{{< /tabs >}}
