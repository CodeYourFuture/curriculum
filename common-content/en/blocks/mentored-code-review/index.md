+++
title="Mentored code review"
time = 20
[objectives]
    1="Explain what a code reviewer is looking for in a PR."
    2="Describe elements of the GitHub code review interface."
    3="List ways someone writing code can make it easier to review."
[build]
  render = "never"
  list = "local"
  publishResources = false

+++

Our learners get feedback on their work through code review.
At work, colleagues review each others code to understand code, look for problems, and both share and learn better ways of doing things.

At {{<our-name>}} every learner should get code review on their work every week.

{{<note type="activity" title="Live Code Review">}}

Pair up a volunteer with one or more learners.

- The volunteer will review a pull request, and talk out loud about what they're looking for and doing.
- The learner(s) will ask questions as they do.

{{</note>}}

<details>

<summary>Hints and tips</summary>

1. How did you understand what the goal of the PR is? Reading the title and description, looking at the coursework exercises, etc.
2. The uses of the different tabs in a PR: Conversation, Commits, Files changed.
3. What made a PR easy or hard to review:
   1. Where unrelated files/lines changed?
   2. Was code consistently formatted? Did indentation help or hurt understanding?
4. How did you review the code? Did you read top-to-bottom? Did you jump around into and out-of functions? Did you look at tests? Did you clone the code locally and try running it?
</details>
