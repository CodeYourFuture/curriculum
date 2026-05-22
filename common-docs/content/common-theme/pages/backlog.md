+++
title = 'Backlog'
description = 'A backlog block displays issues from a linked repo.'
layout = 'backlog'
menu_level = ['sprint']
weight = 2
backlog= 'Module-Template'
backlog_filter='📅 Week 1'
+++

This view lists issues. It pulls these issues from Github using [Hugo GetRemote](https://gohugo.io/functions/resources/getremote/). It is looking for a repo in your org named `Module-<module-name>` where it expects issues to live. You can edit this of course.

It combines the repo name with the org api url set in `hugo.toml` to fetch the issues at that endpoint. That repo is the source of truth. This view just mirrors whatever is in there.

Organise your issues with labels, like 'Week 1' or 'Week 2' to filter them into the right section or sprint. Pass the label into the `backlog_filter` in the front matter to filter the issues.

The issues typically link to coursework stored in the `Module-<module-name>` repo, but they don't have to.
