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
src="module/launch/demo-time/"
[[blocks]]
name="Morning Break"
src="blocks/morning-break"
[[blocks]]
name="Retrospective"
src="module/launch/retrospective"
[[blocks]]
name="Sprint Planning"
src="module/launch/sprint-planning/"
[[blocks]]
name="Development Time"
src="module/launch/development-time"
time=30
[[blocks]]
name="Lunch"
src="blocks/lunch"
[[blocks]]
name="Development Time"
src="module/launch/development-time"
  [[blocks.nested.blocks]]
    name="Pomodoro"
    src="module/checkpoint/pomodoro"
  [[blocks.nested.blocks]]
    name="Pair Programming"
    src="module/checkpoint/pairing"
  [[blocks.nested.blocks]]
    name="Blockers"
    src="module/checkpoint/blockers"
+++
