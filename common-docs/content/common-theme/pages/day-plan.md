+++
title = 'Day plan'
description = 'A scheduled plan of activities for a class day with times and breaks.'
layout = 'day-plan'
noRegister=true
menu_level = ['sprint']
weight = 3
[[blocks]]
name="Energiser"
src="common-content/blocks/energiser"
[[blocks]]
name="Placeholder Workshop"
src="https://github.com/CodeYourFuture/CYF-Workshops/tree/main/template"
time="120"
[[blocks]]
name="Lunch"
src="common-content/blocks/lunch"
[[blocks]]
name="Study Group 2"
src="common-content/blocks/study-group"
time="90"
[[blocks]]
name="Code Review"
src="https://github.com/CodeYourFuture/Module-Template/pulls"
time="0"
[[blocks]]
name="Afternoon break"
src="common-content/blocks/afternoon-break"
[[blocks]]
name="Study Group 2"
src="common-content/blocks/study-group"
time="60"
[[blocks]]
name="Retro"
src="common-content/blocks/retro"
+++

This view builds an agenda for class days. We built this because we used to spend a _lot_ of time making spreadsheets every single week and class days could get chaotic and disruptive to learning. Now everyone knows _what_ to do _when_. Learners can plan things like prayers or medication. Volunteers can see when they're needed. Everyone can see when they can take a break.

The day plan will create a schedule from the time (in minutes) stored on each block using the `time-stamper` web component. You can override this time on your day plan by adding a `time` parameter as shown in the front matter.

This view doesn't expect any content in the `.Content` section, but it exists in case you need to put a temporary notice up that everyone will see. It's for temporary content only. If you just want to add a description of the day, add it to a `.Description` parameter in the front matter.

We also now can find out who is in class with a simple register. By default, a register will show at the top of the agenda. This register is an auto-detected Netlify form. If you don't want this, add `noRegister=true` to the front matter, as this example does.
