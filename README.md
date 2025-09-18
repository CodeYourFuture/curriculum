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

Our Global Syllabus Team is responsible for the overall direction of the main curriculum. They decide the strategy and accept new tested content into the core. Find out more by learning [how to contribute](/CONTRIBUTING.md).

Our curriculum and our curriculum platform are tightly integrated with GitHub. We want our learners to know how to use Git and GitHub and how modern development practices work, so we do almost everything right on GitHub. Learners submit their work by creating a pull request to the project repo. They plan their work using GitHub Projects, and they track their progress on the issues. We code review via the GitHub PR interface, and we have some automation and unit testing on quizzes and exercises/problems.

The curriculum content is developed in the Hugo module [/common-content](/common-content). This content is all headless blocks. It doesn't create any pages on your site unless you call it somewhere.

## About the curriculum platform

Our self-developed curriculum platform is called Common. It is a white label multi-tenant platform for us and our code school friends to use to manage our curricula. It's built on top of [Hugo](https://gohugo.io/) and [Netlify CMS](https://www.netlifycms.org/).

The platform, layout, styles and components are all developed in the Hugo module [/common-theme](/common-theme).

Multi-language support is provided by [Hugo's i18n support](https://gohugo.io/content-management/multilingual/).

Common is tightly integrated with GitHub. Really the main content should always be project work in GitHub repositories, and any site generated with Common should be a viewer for that content.

Each org or team configures its own Hugo site that mounts the common theme and content modules, and then makes any customisations they need and deploys it wherever they want. You can use any repo to do this and your site can be as simple as a `hugo.toml` and a `content/_index.md`. We'd love for you to use Common, too!

## Examples

- https://curriculum.codeyourfuture.io/
- https://projects.codeyourfuture.io/
- https://workshops.codeyourfuture.io/
- https://programming.codeyourfuture.io/
- https://curriculum.codeyourfuture.io/guides/
- https://launch.codeyourfuture.io/
- https://piscine.codeyourfuture.io/
- https://sdc.codeyourfuture.io/
- https://curriculum.migracode.org/

## Developing a site

To develop a specific site, `cd` into the relevant sub-directory and follow the instructions in the `README.md` file.

## To build a new site

1. In the root of this repo, or in your own repo, run:

```bash
hugo new site org-{your-org-name}
cd org-{your-org-name}
```

2. Initialise your new site as a hugo module, as only modules can import modules:

```zsh
hugo mod init github.com/{your-org}/{your-repo}/{your-module}
```

Then add the common theme and content modules as hugo modules to hugo.toml:

```toml
[module]
  [[module.imports]]
    path = "github.com/CodeYourFuture/curriculum/common-theme"
  [[module.imports]]
    path = "github.com/CodeYourFuture/curriculum/common-content"
    [[module.imports.mounts]]
      source = "en"
      target = "content"
```

Look at the [org-cyf](/org-cyf/) and [org-cyf-tracks](/org-cyf-tracks/) examples for more details and options.

To customise the CSS, make a dir `assets/custom-theme` and throw any SCSS in there. It will be compiled and added last.

To add site logo/s, make a dir and add svgs to `assets/custom-images/site-logo/`. They will be added to the site header.

Add your content to `content/` and customise the site config in `config.toml`. Please contribute any improvements you make back to the common theme and content modules.

For each module you import, add a `replace` directive to your `go.mod` file - if you forget to do this, you won't get live updates to your site when shared content changes. CI will remind you if you forget.

## To locally develop your site

Check [org-cyf/README.md](/org-cyf/README.md) on how to set up your local environment. Once that is done you can `cd` into the site you wish to develop, and run `npm run start:dev` to get a live preview.

## Shortcodes

### `next-class-day-plan`

The `next-class-day-plan` shortcode pulls sprint pages from the existing `syllabus`/`module` menu hierarchy.

Example:

```
{{< next-class-day-plan >}}
```
