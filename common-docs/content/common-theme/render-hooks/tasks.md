+++
title="Tasks"
description="Assign learning objectives via render hook"
menu=["hooks"]
+++

This is a [codefence render hook](https://gohugo.io/render-hooks/code-blocks/) that allows you to assign inert learning objectives to a page. It's for pages or content sources _outside_ Hugo. You can mark up a tasks checklist on a GitHub readme, say, and then render it as a list of objectives on the page.

Tasks are an inert form of learning objectives. They will be rendered on Hugo and GitHub as task lists. They will be shown in the learning objectives section on a block. But they will _not_ be tracked as learning objectives and won't be passed to the success criteria of a sprint.

> [!TIP]
> You probably want [objectives](./objectives) instead.

### Invoke

{{<columns>}}

````
```tasks
- [ ] Use the objectives render hook
- [ ] Three backticks ```
- [ ] The word objectives
- [ ] A list of objectives in a checklist
```
````

<--->

````tasks
- [ ] Use the objectives render hook
- [ ] Three backticks ```
- [ ] The word objectives
- [ ] A list of objectives in a checklist
````

{{</columns>}}
