+++
title="Note"
description="Github style notes"
menu=["hooks"]
+++

This is a [blockquote render hook](https://gohugo.io/render-hooks/blockquotes/#alerts) to render [Github style notes](https://github.blog/changelog/2023-12-14-new-markdown-extension-alerts-provide-distinctive-styling-for-significant-content/). If you mark up a note on GitHub, it will also render in Common.

It actually doesn't produce a blockquote when you invoke it because that is shonky semantics. It produces a section.

The markdown operation of normal blockquotes is unhindered and unchanged.

{{<columns>}}

### Invoke

```
> [!NOTE]
> Highlights information that users should take into account, even when skimming.

> [!TIP]
> Optional information to help a user be more successful.

> [!IMPORTANT]
> Crucial information necessary for users to succeed.

> [!WARNING]
> Critical content demanding immediate user attention due to potential risks.

> [!CAUTION]
> Negative potential consequences of an action.
```

<--->

> [!NOTE]  
> Highlights information that users should take into account, even when skimming.

> [!TIP]
> Optional information to help a user be more successful.

> [!IMPORTANT]  
> Crucial information necessary for users to succeed.

> [!WARNING]  
> Critical content demanding immediate user attention due to potential risks.

> [!CAUTION]
> Negative potential consequences of an action.

{{</columns>}}
