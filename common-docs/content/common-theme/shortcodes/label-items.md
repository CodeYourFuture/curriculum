+++
title="Label Items"
description="Create a label items task with feedback"
menu=["shortcodes"]
+++

This is a simple "check understanding" block that allows you to create a "label items" tasks with feedback, similar to the multiple choice block, but with a drag and drop interaction. Sorting and categorising tasks are a pedagogically sound strategy to boost retention and understanding.

### Invoke

```go
{{</*label-items heading="Drag the labels on to the items"
>}}
[LABEL=Label-1]Item here [LABEL=Label-2]Item here anything you like can be
multiple lines [LABEL=Label-1] Another item here
{{< /label-items */>}}
```

{{<label-items heading="Drag the labels on to the items">}}
[LABEL=Label-1]Item here [LABEL=Label-2]Item here anything you like can be
multiple lines [LABEL=Label-1] Another item here
{{< /label-items >}}
