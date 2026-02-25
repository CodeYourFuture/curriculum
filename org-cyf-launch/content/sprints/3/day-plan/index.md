+++
title = 'Day Plan'
description = 'Features features features'
layout = 'day-plan'
menu_level = ['sprint']
weight = 3
[[blocks]]
name="Energiser"
src="energisers/blockers"
[[blocks]]
name="Demo Time"
src="blocks/demo-time/"
[[blocks]]
name="Morning Break"
src="blocks/morning-break"
[[blocks]]
name="Retrospective"
src="blocks/retrospective"
[[blocks]]
name="Sprint Planning"
src="blocks/sprint-planning/"
[[blocks]]
name="Development Time"
src="blocks/development-time"
time=15
[[blocks]]
name="Lunch"
src="blocks/lunch"
[[blocks]]
name="Development Time"
src="blocks/development-time"
  [[blocks.nested.blocks]]
    name="Blockers"
    src="module/piscine/blockers"
  [[blocks.nested.blocks]]
    name="Pair Programming"
    src="module/piscine/pairing"
  [[blocks.nested.blocks]]
    name="Code Review"
    src="module/piscine/review"
+++
