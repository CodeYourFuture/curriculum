+++
title="Our Name"
description="A shortcode to variabalise the name of the organisation"
menu=["shortcodes"]
+++

It's sometimes rhetorically useful to say things like <cite>here at CodeYourFuture, we come to class with questions</cite>. This shortcode allows you to variabalise the name of the organisation, so you can say things like <cite>here at {{< our-name >}}, we come to class with questions</cite>. The org name is set in `hugo.toml` under `our_name`.

### Invoke

```go
{{</*our-name */>}}
```

{{< our-name >}}
