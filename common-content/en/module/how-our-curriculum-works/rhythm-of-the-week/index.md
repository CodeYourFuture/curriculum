+++
title="Rhythm of the week"
emoji='🥁'
time=10
[objectives]
    1="Identify when we prep during a typical sprint week"
    2="Identify when we work on the backlog during a typical sprint week"
    3="Identify when the in-person session takes place on a typical sprint week"
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

Self-coordinating as a community poses challenges. One challenge is working out not just _what_ to do but _when_ to do it. This gets harder when we are working on different schedules. To make things even harder, we use a flipped classroom model: very different from a regular school.

To solve this problem, we use the **rhythm of the week**.

```mermaid
gantt
   title Rhythm of the week!
   dateFormat  YYYY-MM-DD
   tickInterval 1day
   weekday tuesday
   axisFormat %A

   section Trainees
   Prep     :2024-01-09, 2d
   In-person session   :2024-01-13, 1d
   Backlog :2024-01-11, 5d
   Demo :2024-01-12, 1d
```

This rhythm supports trainees to plan their work during the week while still allowing flexibility in people's different schedules. In a typical sprint week, **Tuesday is the starting point** with in-person sessions on **Saturdays serving as the mid-point in the week**. We use Sundays and Mondays to reflect on our learning and finish off any backlog tasks.
