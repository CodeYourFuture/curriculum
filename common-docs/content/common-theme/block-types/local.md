+++
title="Local"
description="Markdown content from the local or mounted filesystem"
emoji="📝"
menu=["blocktypes"]
[objectives]
    1='Use the Teach Tech Together guide to construct your objectives'
    2='Limit the objectives to 3-5 items'
    3='Write objectives you can measure'
+++

```toml
[[blocks]]
name="Local Markdown"
src="blocks/energiser"
```

Look in the /archetypes for examples of possible [front matter](https://gohugo.io/content-management/front-matter/) you can assign. Anything that exists in Hugo is available to you.

Theme-specific front matter params:

- `time` - `Number` the time in minutes the block should take
- `facilitation` - `Boolean` whether the block requires facilitation
- `emoji` - `String` an emoji to represent the block
- `objectives` - `Slice` a list of learning objectives for the block
- `activity` - `Slice` a list of activities for the block

Currently all local blocks are headless. This is so they don't create pages. In the future, we want to update the block settings to use a new [build cascade](https://gohugo.io/content-management/build-options/#example----headless-section) instead of headless=true, which will give curriculum users more flexibility in how they build views of blocks. If you have time to spare for this, please join the [planning board on GitHub.](https://github.com/CodeYourFuture/curriculum/projects?query=is%3Aopen)
