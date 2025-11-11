+++
title = 'Success'
description="Composes learning objectives into checklists"
layout = 'success'
menu_level = ['sprint']
weight = 4
+++

This view compiles learning objectives from the day plan and prep view into a checkbox list to help trainees check in on their progress. It's for everyone to see to understand what the learning objectives are for the sprint and what success means for this block of time.

You can initiate a module level success view as well and write in some overall outcomes or success criteria.

[Learning objectives](https://teachtogether.tech/en/#s:process-objectives) are mandatory. We assign them to a block in the front matter of any block. You can also mark up learning objectives on external Github READMEs using the `objectives` render hook and they will show up here too. 💅

We might want to extend this to pull them from issues as well, but we haven't done that yet and there aren't any in our issues yet so 🤷‍♂️.

## This layout in other contexts

### Sprint view

Within a sprint block, this view is used to show the learning objectives for the sprint and will build itself automatically. This is the default expected behaviour.

### Module view

It is also used in the module index to show the _overall_ success criteria for the module. In this case, you will need to write your objectives in the front matter of that page. This is because we found that all the compiled objectives from all the sprints was too much to comprehend and not really helpful. So the automagic is turned off for this context.

### Project view

You can assign projects to sprints and get a little encapsulated success view for that project inside that dir. This is useful for things like a final project or a group project that spans multiple sprints.
