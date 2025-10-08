+++
title="Local"
description="Markdown content from the local or mounted filesystem"
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
- `emoji` - `String` an emoji to represent the block
- `objectives` - `Slice` a list of learning objectives for the block
- `activity` - `Slice` a list of activities for the block
- `hide_from_overview` - `Boolean` whether the block should be hidden from the overview page

All local blocks are headless. This is so they don't create pages in sites that mount the module. Individual site owners control page creation explicitly in their [own /content dir](https://gohugo.io/content-management/organization/).

### Mandatory [build settings](https://gohugo.io/content-management/build-options)

```
[build]
  render = 'never'
  list = 'local'
  publishResources = false
```
