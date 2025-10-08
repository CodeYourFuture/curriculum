+++
title = 'Agenda'
description = 'The detailed agenda for a workshop'
layout = 'day-plan'
menu_level = ['module']
menu=["workshops", "syllabus"]
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
src="blocks/mentor-led"
time="45"
    [[blocks.nested.blocks]]
    name="GenAI Cover Letters"
    src="blocks/groups/genai-cover-letters"
    time=0
    [[blocks.nested.blocks]]
    name="Google Sheets"
    src="blocks/groups/google-sheets"
    time=0
    [[blocks.nested.blocks]]
    name="Web Development"
    src="blocks/groups/web-development"
    time=0
    [[blocks.nested.blocks]]
    name="English"
    src="blocks/groups/english"
    time=0
    [[blocks.nested.blocks]]
    name="Newcomers"
    src="blocks/groups/newcomers"
    time=0
[[blocks]]
name="Break"
src="blocks/break"
[[blocks]]
name="Mentor each other"
src="blocks/peer-learning"
time="30"
   [[blocks.nested.blocks]]
    name="GenAI Cover Letters"
    src="blocks/groups/genai-cover-letters"
    time=0
    [[blocks.nested.blocks]]
    name="Google Sheets"
    src="blocks/groups/google-sheets"
    time=0
    [[blocks.nested.blocks]]
    name="Web Development"
    src="blocks/groups/web-development"
    time=0 
[[blocks]]
name="Wrap up"
src="module/piscine/wrap"
time=15
+++
