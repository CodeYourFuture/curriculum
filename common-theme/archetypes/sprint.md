+++
title = 'Sprint {{ replace .Name "-" " " | title }}'
layout = 'sprint'
menu_level = ['module']
weight = 2
+++

This is an index to organise the views for a sprint block. If you want to remove this sprint from the menu, remove the `menu_level` parameter from the front matter. We don't use Hugo menus as Hugo doesn't like having duplicate items, but we want all our modules and sprints to have consistent, repeated (predictable) names. 