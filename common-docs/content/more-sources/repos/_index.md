+++
title="Repos"
description="This platform is tightly integrated with GitHub"
layout="slimdex"
+++

This platform is tightly integrated with GitHub. Really the _main_ content should always be project work in GitHub repositories, and this site should be a viewer for that content.

You can pull a readme from any repository, or any subdir in any repo. We also set coursework assignments as issues in a relevant repo. Learners submit their work by creating a pull request to the project repo.

They plan their work on GitHub projects, and track their progress on the issues. We code review via the GitHub PR interface, and we have some automation and unit testing on quizzes and exercises/problems.

We always need to teach all our learners how to use Git and GitHub and modern development practices, so we do almost everything right on GitHub. Our volunteers are all on GitHub already and can throw together a repo in minutes, so this is a desire line design: we go to where the community is already.

### Integrations

#### Blocks

- [readme block](common-theme/block-types/readme/)
- [pullreqs block](common-theme/block-types/pullreqs/)
- [issues block](common-theme/block-types/issues/)

#### Pages

- [Backlog](common-theme/pages/backlog/)
- [Product](common-theme/pages/product/)

### Tracking

It's super easy to track progress using this setup. We have a bunch of janky, casually-written, spreadsheets tracking our own enrolled learners' activity on GitHub. In the future, we want an optional tracker module that can be mounted into the site to track progress. If you want to build this, please come and talk to us. We will help you and love you forever.
