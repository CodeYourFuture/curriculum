+++
title = 'Map'
time = 2
emoji= '🗺️'
[build]
  render = false
  list = 'never'
  publishResources = false
+++

A map is an ordered slice of menus. It's to show a "map" view of the syllabus, broken down into grouped modules. As with everything in this design, the point is to clarify what happens and in what order.

It's just for the index page, and the front matter is a list of the menu names that should be included in the map, in the order they should appear.

```toml
map = ["menuName", "menuName"]
```
