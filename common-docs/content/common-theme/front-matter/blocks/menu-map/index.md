+++
title = 'Menu map'
time = 2
[build]
  render = 'never'
  list = 'local'
  publishResources = false
+++

A menu map is an ordered slice of menus. It's to show a "map" view of the syllabus, broken down into grouped modules. As with everything in this design, the point is to clarify what happens and in what order.

It's just for the index page, and the front matter is a list of the menu names that should be included in the map, in the order they should appear.

If you want to attach metadata to each menu item (e.g. to add a description), you probably want a Taxonomy map.

```toml
menus_to_map = ["menuName", "menuName"]
```
