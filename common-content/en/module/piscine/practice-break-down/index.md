+++
title = "Practice breaking down a requirement"
time = 60
objectives = [
  "Break down a requirement into approachable tasks.",
  "Coordinate multiple team members in executing tasks in parallel.",
]
[build]
  render = "never"
  list = "local"
  publishResources = false
+++

In team projects, it's important that we break large tasks down into small tasks.

It's also important that we can coordinate across our team. This requires having shared understanding of who will do what, and how the work we do will interact.

Finally, it's important that we arrange tasks so your team isn't blocking yourselves, so you'll want to find ways of working on tasks in parallel.

We will practice this together on the two of the requirements of the project:

- Selecting a user must display the agenda for the relevant user (see manual testing below)
- Submitting the form adds a new topic to revise for the relevant user only

To complete these requirements we'd need to build most of the project! So we'll focus on simplified versions of these requirements:

- When the page loads, display one revision date for one topic from in User 1's stored agenda
- When clicking a button, store {{<tooltip title="hard-coded">}}Hard-coding refers to when developers directly write values or data into code, often replacing variables or user input with static values.{{</tooltip>}} data for User 1's agenda

To complete the full requirements, you can build on the tasks we decide on today.

{{<note type="exercise" title="Breaking down tasks">}}

1. Set a timer for {{<timer>}}5{{</timer>}}
2. Individually, write down all the tasks that would be needed to complete the simplified requirements above
3. After the timer is up, go around the group and discuss the tasks you came up with. One of the volunteers should write the tasks on a whiteboard
4. Volunteers, discuss any that you think might be missing or that might need breaking down further

{{</note>}}

Some of these tasks _block_ other tasks: one task must be completed before the other can start.

{{<note type="exercise" title="Identify blockers">}}

1. In groups of 2, discuss of the tasks on the whiteboard are blocking other tasks?
2. As a group, discuss which tasks are blockers.
3. Again as a group, discuss what actions you could take to avoid being blocked by these tasks?

{{</note>}}

{{/*
  TODO: The Piscine is meant to be pure evaluation with no teaching.
  Ideally ITP would provide this experience so we wouldn't need to teach it in the Piscine.
  But right now ITP doesn't teach these skills, so we fill that gap so we're not testing people on things they don't know.
*/}}
