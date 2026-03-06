+++
title = 'Day Plan'
description='Your CI/CD codebase is ready for features'
layout = 'day-plan'
menu_level = ['sprint']
weight = 3
[[blocks]]
name="Energiser"
src="energisers/telephone"
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
time=25
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
    name="Blockers"
    src="module/piscine/blockers"
  [[blocks.nested.blocks]]
    name="Pair Programming"
    src="module/piscine/pairing"
+++
