+++
title="Note"
description="A note with a title and a body"
menu=["shortcodes"]
+++

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

### Invoke

```go
{{</*note title="This is a note" type="tip"*/>}}
This is the body of the note.
{{</* /note */>}}
```

{{< note title="This is a note" type="tip">}}
This is the body of the note. This is probably the most used and oldest shortcode on the site. It was brought over from the old Docusaurus syllabus. Since 20 August 2024, we moved to use GitHub notes in a render hook as Hugo began supporting them. So this shortcode will probably be deprecated soon.
{{< /note >}}
