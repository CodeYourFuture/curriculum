+++
title = 'day-plan'
layout = 'day-plan'
emoji= '🧑🏾‍🤝‍🧑🏾'
menu_level = ['sprint']
weight = 3
[[blocks]]
name="Energiser"
src="energisers/introduce-yourself"
[[blocks]]
name="Morning orientation"
src="blocks/morning-orientation"
time=15
[[blocks]]
name="Workshop"
src="blocks/workshop"
time="140"
  [[blocks.nested.blocks]]
    name="Stand-up [PD] (30 Mins)"
    src="https://github.com/CodeYourFuture/CYF-Workshops/tree/main/stand-up"
    time=0
  [[blocks.nested.blocks]]
    name="Git Day 1 [Tech] (60 Mins)"
    src="https://github.com/CodeYourFuture/CYF-Workshops/tree/main/git-day-1"
    time=0
  [[blocks.nested.blocks]]
    name="LLM Writing 1 [Tech] (60 Mins)"
    src="https://github.com/CodeYourFuture/CYF-Workshops/tree/main/llm-writing-1"
    time=0
[[blocks]]
name="lunch"
src="blocks/lunch"
[[blocks]]
name="Study Group"
src="blocks/study-group"
time="90"
[[blocks]]
name="Code Review"
src="https://github.com/CodeYourFuture/Module-User-Focused-Data/pulls"
time="0"
[[blocks]]
name="Afternoon break"
src="blocks/afternoon-break"
[[blocks]]
name="Study Group"
src="blocks/study-group"
time="75"
[[blocks]]
name="Retro"
src="blocks/retro"
+++