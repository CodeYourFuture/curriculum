+++
title = 'backlog'
layout = 'backlog'
emoji= '🥞'
menu_level = ['sprint']
weight = 2
backlog= 'Module-Template'
backlog_filter= 'Week 1'
+++

This view lists all the issues for the current sprint. It is looking for a repo in your org named `Module-<module-name>` where it expects issues to live. You can edit this of course.

Organise your issues with labels, like 'Week 1' or 'Week 2' to filter them into the right sprint. Pass the label into the `backlog_filter` in the front matter to filter the issues.