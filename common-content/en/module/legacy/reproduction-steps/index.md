+++
title = "Reproduction Steps"
time = 5
[build]
  render = "never"
  list = "local"
  publishResources = false
objectives = [
]
+++

It's easier to fix a bug if you can reproduce it. Reproducing a bug allows you to see what's happening, inspect what assumptions are incorrect, and verify that you have actually fixed it when you think you have.

Bugs without reproduction steps are often harder to debug and fix that ones with reproduction steps. Ideally reproduction steps tell you _everything_ you need to do to reproduce the bug.

But it's important to remember: reproduction steps are just an example. Our goal in debugging isn't just to make the reproduction steps no longer show the bug. It's to understand what the underlying problem was, and prevent that.

If, for instance, the reproduction steps mention a problem on one particular page, but that problem will _also_ show up on other pages, it isn't enough to just fix the one page given in the reproduction steps. We need to think about what caused the problem, where else it may occur, and how we can prevent the _underlying_ problem, not just the example.
