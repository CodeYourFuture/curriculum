+++
title="Tabs"
description="Puts anything into tabs"
menu=["shortcodes"]
+++

### Invoke

```go
{{</*tabs name="A human title" */>}}
===[[Your tab title here]]===
This is the body of the first tab.
===[[Next tab title]]===
This is the body of the second tab.
{{</* /tabs */>}}
```

{{< tabs name="A human title">}}
===[[Your tab title here]]===
This is the body of the first tab.
===[[Next tab title]]===
This is the body of the second tab.
{{< /tabs >}}

We updated the tabs shortcode to use ===[[title here]]=== to define the tabs instead of nested Hugo shortcodes. This is much simpler. The old syntax is deprecated. It is no longer possible to create a tab of one tabs. You must have at least two tabs. This is to discourage the inaccessible use of tabs for single items.

> [!TIP]
> If you have a single item, use a [note](./note) instead.
