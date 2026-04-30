+++
title = 'Agenda'
description = 'The detailed agenda for a workshop'
layout = 'day-plan'
menu_level = ['module']
menu=["ITD workshops"]
weight = 3
noRegister=false
[[blocks]]
name="Energiser"
src="energisers/wemoji"
[[blocks]]
name="Time traveller"
src="energisers/time-traveller"
[[blocks]]
name="Sharing our blockers"
src="module/fundamentals/blockers"
time=10
[[blocks]]
name="Step by Step"
src="module/itd/mentor-led"
time="45"
    [[blocks.nested.blocks]]
    name="GenAI Cover Letters"
    src="module/itd/groups/genai-cover-letters"
    time=0
    [[blocks.nested.blocks]]
    name="Google Sheets"
    src="module/itd/groups/google-sheets"
    time=0
    [[blocks.nested.blocks]]
    name="Web Development"
    src="module/itd/groups/web-development"
    time=0
    [[blocks.nested.blocks]]
    name="English"
    src="module/itd/groups/english"
    time=0
    [[blocks.nested.blocks]]
    name="Newcomers"
    src="module/itd/groups/newcomers"
    time=0
[[blocks]]
name="Break"
src="blocks/break"
[[blocks]]
name="Mentor each other"
src="module/itd/peer-learning"
time="30"
   [[blocks.nested.blocks]]
    name="GenAI Cover Letters"
    src="module/itd/groups/genai-cover-letters"
    time=0
    [[blocks.nested.blocks]]
    name="Google Sheets"
    src="module/itd/groups/google-sheets"
    time=0
    [[blocks.nested.blocks]]
    name="Web Development"
    src="module/itd/groups/web-development"
    time=0 
[[blocks]]
name="Wrap up"
src="module/checkpoint/wrap"
time=15
+++
