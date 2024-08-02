+++
title = 'Prep'
description = 'Lays out the prep / textbook view for a sprint'
layout = 'prep'
emoji= '🧑🏾‍💻'
menu_level = ['sprint']
weight = 1
[[blocks]]
name="Local"
src="common-content/blocks/energiser"
[[blocks]]
name="Readme"
src="https://github.com/CodeYourFuture/Module-Template/"
[[blocks]]
name="Youtube video or playlist"
src="https://www.youtube.com/watch?v=P1ww1IXRfTA"
[[blocks]]
name="Slide - an image with caption"
caption="With caption please!"
src="https://github.com/MaggieAppleton/maggieappleton.com-V2/blob/main/public/images/posts/programming-pictures/PicturesProgramming-26_vnlzye-1100.jpg"
[[blocks]]
name="Pullreqs, list"
src="https://github.com/CodeYourFuture/Module-JS1/pulls"
+++

## Block composition

As with all views, compose the page with blocks in the front matter. Some examples are given here. The blocks can be any of the types available in the common-docs theme. If you need a new block type, please raise an issue in the curriculum repo. It's pretty simple to make them to be honest, so if it's a good idea and needed we will probably get it done.

### Prep views are the textbooks of the course

Each block is shown as a solo view and the learner can step through in a structured learning path. We use a [flipped classroom method](https://teachingcommons.stanford.edu/teaching-guides/blended-and-hybrid-teaching-guide/frameworks-blended-and-hybrid-teaching/flipped) to maximise the time in class for questions and practical exercises.

Right and left arrow will page through the blocks, as will swipe and button click. The learner can also click on the block name to jump to a specific block, and you can link directly to any block with hash links.

We probably have a maximum time of around 3 hours for a prep view, and then we typically move learners into projects on their backlog.

## This layout in other contexts

### Sprint view

This is the default view.

### Module view

You can also, and we strongly recommend, add a prep view to an entire module, and put all the setup work in there. Anything that needs to happen before the entire module can begin should go there, including stuff like application forms, agreements, account signups, and so on.
