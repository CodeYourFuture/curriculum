+++
title = 'Blocks'
time = 5
hide_from_overview=false
[build]
  render = 'never'
  list = 'local'
  publishResources = false
+++

```toml
[[blocks]]
name="Block name"
src="path/to/block"
```

See the [blocks documentation](/common-theme/block-types) for more information.

In front matter you can also nest blocks, like this:

```toml
[[blocks]]
name="Block name"
src="path/to/block"
  [[blocks.nested.blocks]]
  name="Nested block name"
  src="path/to/nested/block"
```

You might want to do this to provide a list of options on a reusable block like a "do a workshop" block, where you can choose from a list of workshops to run.
