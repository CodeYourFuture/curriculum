+++
title = 'Day Plan'
description="Last day to work together in person"
layout = 'day-plan'
menu_level = ['sprint']
weight = 3
[[blocks]]
name="Energiser"
src="energisers/wemoji"
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
time=30
[[blocks]]
name="Lunch"
src="blocks/lunch"
[[blocks]]
name="Development Time"
src="blocks/development-time"
  [[blocks.nested.blocks]]
    name="Pomodoro"
    src="module/piscine/pomodoro"
  [[blocks.nested.blocks]]
    name="Pair Programming"
    src="module/piscine/pairing"
  [[blocks.nested.blocks]]
    name="Blockers"
    src="module/piscine/blockers"
+++
