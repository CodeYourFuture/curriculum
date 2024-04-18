+++
title = 'Backlog'
headless = true
time = 20
facilitation = false
vocabulary=["Blockers"]
emoji= '🧩'
[objectives]
1='Define the backlog'
2='Explain how to use the sprint backlog'
+++

In software development, we break down complex projects into smaller, manageable parts, which we work on for a week or two. These periods are called "sprints."

A sprint backlog is like a to-do list. It lists what the team has decided to work on this sprint. It's chosen from a larger list, usually called the "product backlog," which holds the entire project to-do list.

The backlog is a set of work designed to build understanding further from the concepts introduced in the course prep. For your course, the mandatory work has been scheduled already. You will add any other tickets you want to work on to your backlog and schedule them according to your own goals and capacity. Use your planning board to do this.

You will find the backlog in the **Backlog** view on every sprint.

Copy the tickets you are working on to your own backlog. Organise your tickets on your board and move them to the right column as you work through them. It's a flowchart:

```mermaid
flowchart LR
    Backlog --> Ready
    Ready --> in_progress
    in_progress[In Progress] --> in_review
    in_review[In Review] --> Done
```
