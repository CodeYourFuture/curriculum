+++
title = 'Overview'
description = 'A course overview generator'
layout = 'overview'
weight = 4
overview_menu="content"
+++

This page creates a sequenced overview of prep content, to give a sense of the structure and content of a course. To use it:

1. Create an overview page in /content as shown and make sure you have a `layout = 'overview'` frontmatter key and a `overview_menu` key.
2. Assign `theme` values to any prep view you wish to include in the overview
3. Any block assigned to the prep view will be included in the overview, unless it is marked `hide_from_overview=true`

## Example

```markdown
+++
title = 'Overview'
description = 'A course overview generator'
layout = 'overview'
overview_menu='theme'
+++
```
