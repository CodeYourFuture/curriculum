+++
title="Objectives"
description="Passing objectives from GitHub to Hugo"
menu=["shortcodes"]
+++

```go
<!--{{</*objectives*/>}}-->
- [ ] Objective 1
- [ ] Objective 2
- [ ] Objective 3
<!--{{</*/objectives*/>}}-->
```

{{< objectives >}}

- [ ] Objective 1
- [ ] Objective 2
- [ ] Objective 3

{{< /objectives >}}

If you want to add objectives from a GitHub issue or readme into your success criteria, mark up a task list and wrap it in the `objectives` shortcode. Comment out the shortcode to hide it on GitHub.

This will render the task list on GitHub and will be picked up, rendered, and _tracked_ as learning objectives by Hugo. This means:

1. readmes: any learning objectives on any readme added to a prep or dayplan will be added to the success criteria of that sprint
1. issues: any learning objectives on the entire backlog page will be added to the success criteria of the sprint
1. any issues added as single blocks will be added to the success criteria of the sprint, unless they have already been tracked on the backlog page
1. on any issue or readme block, learning objectives will be removed from the body and shown in the learning objectives details instead

([Tasks](./tasks) will be rendered but not tracked.)

> [!TIP]
> Fenced objectives will also work like this on Hugo, but on GitHub will be plain text.
