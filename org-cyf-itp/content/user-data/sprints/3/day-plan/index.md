+++
title = 'day-plan'
layout = 'day-plan'
emoji= '🧑🏾‍🤝‍🧑🏾'
menu_level = ['sprint']
weight = 3
[[blocks]]
name="Energiser"
src="blocks/energiser"
[[blocks]]
name="Morning orientation"
src="blocks/morning-orientation"
time=15
[[blocks]]
name="Workshop"
src="blocks/workshop"
time="120"
    [[blocks.nested.blocks]]
      name="Touch Typing [PD]"
      src="https://github.com/CodeYourFuture/CYF-Workshops/blob/main/touch-typing"
      time=60
    [[blocks.nested.blocks]]
      name="Git CLI [Tech]"
      src="https://github.com/CodeYourFuture/CYF-Workshops/tree/main/git-cli"
      time=60
    [[blocks.nested.blocks]]
      name="Collective Job Hunting [PD]"
      src="https://github.com/CodeYourFuture/CYF-Workshops/tree/main/collective-job-hunting"
      time=30
[[blocks]]
name="lunch"
src="blocks/lunch"
[[blocks]]
name="Study Group"
src="blocks/study-group"
time="60"
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
time="90"
[[blocks]]
name="Retro"
src="blocks/retro"
+++