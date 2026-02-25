+++
title = "Practices to remember"
time = 30
[build]
  render = "never"
  list = "local"
  publishResources = false
objectives = [
    "Explain differences in approaching formatting of legacy vs greenfield projects.",
    "List what should be included in a PR description and why.",
    "Consider risk trade-offs when changing legacy code.",
]
+++

Some of our standard development practices are _even more important_ when working with legacy code. These are things you should already be doing, but you should remember.

### Formatting

We should be _consistent_ with our formatting. We may not have any control over what decisions were made in the past. When we're writing brand new code in a new code, we can choose whether we use two spaces or four. But when we jump into an existing codebase, we should use whatever style it already has. If we send a PR fixing a small bug, and it changes every line in the file, it's really hard to see what changed, and what stayed the same. If we have two people joining a codebase, and one is reformatting every file they touch to use two spaces, and the other is reformatting every file they touch to use two spaces, there are going to be lots of spurious changes, and lots of merge conflicts.\

To approach this, we may need to:
* Disable our auto code formatters
* Change the configuration of our auto code formatters (maybe by finding an existing configuration in the repo, or adding one)
* Reformat the whole repo with a consistent configuration in one commit, and then keep it formatted.

We should **never** include spurious reformatting changes in the same commit as real code changes.

### PR Descriptions

PR descriptions are even more important when working with Legacy Code. We probably had to do a lot of learning to work out how something works, what was wrong, and how to fix out. The person reviewing our change may not know the codebase very well either. The more detail we can write in our PR descriptions, the more information the next person has when they need to investigate something (and the easier it will be for our reviewer to review our change).

Make sure your PR description clearly describes what you learnt - how do things work, what was wrong, and how did you fix it?

### Appetite for risk

When we're working on brand new codebases, often we will make risky choices. Maybe we will use a new framework. Or a new language. Or decide to use a new serialisation format.

When working with legacy code, these choices often have more risk associated. There is lots of existing code - we may need to update lots of it, which means understanding it. And modifications often lead to bugs. Every time we rewrite some piece of code, there's a chance we change its behaviour in an important way. Maybe the old code handled `null` and the empty string differently, and the new code treats them the same.

When working with legacy code, we often make _conservative_ choices. We try to change the minimum we can to make the fix or feature we need.

Sometimes we can justify bigger changes, but doing so is a big decision we need to take seriously.
