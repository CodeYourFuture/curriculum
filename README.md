# Common Curriculum Platform

[![DPG Badge](https://img.shields.io/badge/Verified-DPG-3333AB?logo=data:image/svg%2bxml;base64,PHN2ZyB3aWR0aD0iMzEiIGhlaWdodD0iMzMiIHZpZXdCb3g9IjAgMCAzMSAzMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE0LjIwMDggMjEuMzY3OEwxMC4xNzM2IDE4LjAxMjRMMTEuNTIxOSAxNi40MDAzTDEzLjk5MjggMTguNDU5TDE5LjYyNjkgMTIuMjExMUwyMS4xOTA5IDEzLjYxNkwxNC4yMDA4IDIxLjM2NzhaTTI0LjYyNDEgOS4zNTEyN0wyNC44MDcxIDMuMDcyOTdMMTguODgxIDUuMTg2NjJMMTUuMzMxNCAtMi4zMzA4MmUtMDVMMTEuNzgyMSA1LjE4NjYyTDUuODU2MDEgMy4wNzI5N0w2LjAzOTA2IDkuMzUxMjdMMCAxMS4xMTc3TDMuODQ1MjEgMTYuMDg5NUwwIDIxLjA2MTJMNi4wMzkwNiAyMi44Mjc3TDUuODU2MDEgMjkuMTA2TDExLjc4MjEgMjYuOTkyM0wxNS4zMzE0IDMyLjE3OUwxOC44ODEgMjYuOTkyM0wyNC44MDcxIDI5LjEwNkwyNC42MjQxIDIyLjgyNzdMMzAuNjYzMSAyMS4wNjEyTDI2LjgxNzYgMTYuMDg5NUwzMC42NjMxIDExLjExNzdMMjQuNjI0MSA5LjM1MTI3WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg==)](https://digitalpublicgoods.net/r/code-your-future)

> [!TIP]  
> Our curriculum in action: https://curriculum.codeyourfuture.io  
> Curriculum platform docs: https://common.codeyourfuture.io

## What is this?

This repo houses both our main curriculum content and our curriculum platform.

## About our curriculum

Code Your Future is a volunteer-led community of tech professionals, and we teach people to code for free. We consider ourselves to be professionals helping other professionals, so our instructional approach is not hierarchical, and we encourage our volunteers to test out new material early and often. Our main curriculum (the repo you're looking at now) threads a coherent line through all of this activity, so whatever worlds we explore, everyone can come back here to find out what to do next.

Our curriculum content is all open source, and our teaching style is [flipped classroom](https://teachingcommons.stanford.edu/teaching-guides/blended-and-hybrid-teaching-guide/frameworks-blended-and-hybrid-teaching/flipped). This means that anyone should be able to follow the curriculum content independently. We offer mentoring and support to help people work through it, but the content does not assume a teacher/mentor will be present for programme delivery.

Our Curriculum Team is responsible for the overall direction of the main curriculum. They decide the strategy and accept new tested content into the core. Find out more by learning [how to contribute](/CONTRIBUTING.md).

Our curriculum and our curriculum platform are tightly integrated with GitHub. We want our learners to know how to use Git and GitHub and how modern development practices work, so we do almost everything right on GitHub. Learners submit their work by creating a pull request to the project repo. They plan their work using GitHub Projects, and they track their progress on the issues. We code review via the GitHub PR interface, and we have some automation and unit testing on quizzes and exercises/problems.

The curriculum content is developed in the Hugo module [/common-content](/common-content). This content is all headless blocks. It doesn't create any pages on your site unless you call it somewhere.

## About the curriculum platform

Our self-developed curriculum platform is called Common. It is a white label multi-tenant platform for us and our code school friends to use to manage our curricula. It's built on top of [Hugo](https://gohugo.io/) and [Decap CMS](https://decapcms.org/).

The platform, layout, styles and components are all developed in the Hugo module [/common-theme](/common-theme).

Multi-language support is provided by [Hugo's i18n support](https://gohugo.io/content-management/multilingual/).

Common is tightly integrated with GitHub. Really the main content should always be project work in GitHub repositories, and any site generated with Common should be a viewer for that content.

Each org or team configures its own Hugo site that mounts the common theme and content modules, and then makes any customisations they need and deploys it wherever they want. You can use any repo to do this and your site can be as simple as a `hugo.toml` and a `content/_index.md`. We'd love for you to use Common, too!

## Examples

- https://curriculum.codeyourfuture.io/
- https://programming.codeyourfuture.io/
- https://curriculum.codeyourfuture.io/guides/
- https://workshops.codeyourfuture.io/
- https://piscine.codeyourfuture.io/
- https://sdc.codeyourfuture.io/
- https://curriculum.migracode.org/

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for information on how to contribute.
