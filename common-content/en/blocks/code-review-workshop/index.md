+++
title = 'Code Review Workshop'
time = 75
[tasks]
    1='Identify the key things to look for when reviewing a pull request'
    2='Apply a structured checklist to review a PR'
    3='Leave constructive, specific comments that help the author'
    4='Recognise common issues in AI-generated code'
[objectives]
    1='Review a PR using a structured checklist'
    2='Give specific, constructive feedback in comments'
    3='Identify at least 2 common issues in AI-generated code'
[build]
  render = 'never'
  list = 'local'
  publishResources = false
+++

This workshop follows on from the [Code Review Basics](../reviewing/code-review-basics) guide. Make sure you've read that guide before starting this workshop.

## Setup

Before the session, make sure you have:
- A GitHub account
- Access to the practice repository (your trainer will share the link)
- The PR guide already read (~60 min)

## What this workshop is about

Code review is a conversation, not a judgement. In this workshop you will practice reviewing code by looking at real pull requests, leaving actual comments, and thinking out loud about what you're looking for and why.

This workshop has three parts:
1. **Live demo** -- watch a volunteer review a PR and think out loud
2. **Exercise 1** -- review a messy PR and leave comments
3. **Exercise 2** -- review a clean PR and compare
4. **Group debrief** -- share what you found hardest

---

## Part 1: Live Demo (15 minutes)

Your trainer will demonstrate how to review a PR. Watch carefully and note:

- What does the reviewer look at first?
- How do they decide if the PR is worth merging?
- What questions do they ask before approving?
- How do they leave helpful comments?

Don't worry about getting it perfect -- the point is to see how a reviewer thinks, not to copy a formula.

---

## Part 2: Review a Messy PR (30 minutes)

{{<note type="exercise" title="Exercise: Review the messy PR (20 minutes)">}}

Your trainer will share a link to a PR with problems. This PR has issues -- it might be missing tests, have a confusing description, contain bugs, or not do what the issue asks.

Using the checklist below, review the PR and leave comments. Don't just say "this is wrong" -- explain *why* it's wrong and *what* could be improved.

**Review checklist:**

- **Description:** Does it explain the *why*, not just the *what*?
- **Scope:** Is it doing one thing, or lots of unrelated things?
- **Commits:** Are they small and logical? Or one big commit with everything?
- **Tests:** Are there tests? Do they test the right thing?
- **Logic:** Can you spot any bugs or edge cases that would break it?
- **Clarity:** Is the code easy to follow? Are variable names clear?
- **AI code check:** If this was AI-generated, what would you watch out for?

{{</note>}}

{{<note type="activity" title="Compare notes (10 minutes)">}}

Pair up with another trainee and compare:
- What issues did you both spot?
- Did you spot different things?
- What was hardest to identify?

{{</note>}}

---

## Part 3: Review a Clean PR (25 minutes)

{{<note type="exercise" title="Exercise: Review the clean PR (15 minutes)">}}

Now look at a PR that follows good practice. Leave comments -- yes, even good PRs can have things to discuss. No PR is perfect.

Use the same checklist. What's different about this one? What makes it easier or harder to review?

{{</note>}}

---

## Part 4: Group Debrief (10 minutes)

As a group, discuss:

1. What's the single hardest thing about reviewing code?
2. How is reviewing AI-generated code different from human-written code?
3. What's one thing you'll do differently after this session?

---

## Key Takeaways

- Code review is a conversation, not a gatekeeping exercise
- Use a checklist to stay structured -- don't just skim
- Good comments explain *why* something is a problem, not just *what* the problem is
- AI-generated code often looks correct but has subtle bugs or missing edge cases -- read it critically
- Practice makes this faster and easier -- review PRs regularly, even when not required
