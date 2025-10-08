+++
title="Objectives"
description="Assign learning objectives via render hook"
menu=["hooks"]
+++

This is a [codefence render hook](https://gohugo.io/render-hooks/code-blocks/) that allows you to assign learning objectives to a page. This is kind of rad honestly. It's for pages or content sources _outside_ Hugo. You can mark up an objectives checklist on a GitHub readme, say, and then render it as a list of objectives on the page. It will then also be piped through to success checklists for any sprint that the page is part of.

### Invoke

{{<columns>}}

````
```objectives
- [ ] Use the objectives render hook
- [ ] Three backticks ```
- [ ] The word objectives
- [ ] A list of objectives in a checklist
```
````

<--->

````objectives
- [ ] Use the objectives render hook
- [ ] Three backticks ```
- [ ] The word objectives
- [ ] A list of objectives in a checklist
````

{{</columns>}}
