+++
title = 'Taxonomy map'
time = 2
[build]
  render = 'never'
  list = 'local'
  publishResources = false
+++

A taxonomy map is an ordered slice of terms within a taxonomy. It's to show a "map" view of the syllabus, broken down into grouped modules, with extra per-module metadata attached to the term. As with everything in this design, the point is to clarify what happens and in what order.

It's just for the index page, and the front matter is a list of the menu names that should be included in the map, in the order they should appear.

```toml
taxonomy_to_map = "modules"
```
