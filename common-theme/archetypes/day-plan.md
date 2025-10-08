+++
title = 'day-plan'
layout = 'day-plan'
menu_level = ['sprint']
weight = 3
noRegister=false
[[blocks]]
name="Energiser"
src="blocks/energiser"
[[blocks]]
name="PD Placeholder to be replaced with PD link"
src="blocks/pd-placeholder"
[[blocks]]
name="Morning break"
src="blocks/morning-break"
[[blocks]]
name="Placeholder Workshop"
src="https://github.com/CodeYourFuture/CYF-Workshops/tree/main/template"
time="60"
[[blocks]]
name="Lunch"
src="blocks/lunch"
[[blocks]]
name="Study Group"
src="blocks/study-group"
time="90"
[[blocks]]
name="Code Review"
src="https://github.com/CodeYourFuture/Module-Template/pulls"
time="0"
[[blocks]]
name="Afternoon break"
src="blocks/afternoon-break"
[[blocks]]
name="Study Group 2"
src="blocks/study-group"
time="60"
[[blocks]]
name="Retro"
src="blocks/retro"
+++

This example day plan is a template for you to use. It is a good idea to have a consistent structure for your day plans so that everyone knows _what_ to do _when_. The day plan will create a schedule from the time (in minutes) stored on each block using the `time-stamper` web component. You can override this time by adding a `time` parameter in the front matter as shown above.

This view doesn't expect any content in the `.Content` section; delete these instructions. If you want to add a description of the day, add it to a `.Description` parameter in the front matter.
