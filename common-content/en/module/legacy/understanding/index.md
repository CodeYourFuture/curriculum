+++
title = "Understanding Legacy Code"
time = 5
[build]
  render = 'never'
  list = 'local'
  publishResources = false
[objectives]
    1="Define legacy code and its characteristics"
    2="List common challenges when working with legacy code"
+++

> Legacy code is any code you inherit

## What Makes Code "Legacy"?

Legacy code isn't necessarily bad or even that old. It's code that:

1. **You didn't write** - It lacks your mental model and intentions.
1. **Powers important systems** - It can't simply be deleted or replaced.
1. **Contains institutional knowledge** - Sometime undocumented! Decisions were often made for good reasons which we may not remember any more, and changing those decisions may be risky.

The Purple Forest application is now your legacy code. Someone else designed and built it, and you need to maintain and extend it.

## Working with Purple Forest

Purple Forest has:

- **Established architecture** - It follows defined patterns
- **Functional system** - It mostly works, even if you don't understand how
- **Multiple components** - Changes might have unexpected side effects
- **Documented design** - But the documentation might be incomplete or out of date

So how do you approach understanding and working with this legacy codebase?
