+++
title="YouTube"
description="Embed a YouTube video"
menu=["shortcodes"]
+++

This simply calls the existing youtube partial. Any existing partial can be invoked as a shortcode by creating a file in the `layouts/shortcodes` directory with the same name as the partial and calling the partial inside the shortcode file.

### Invoke

```html
{{</*youtube*/>}}https://www.youtube.com/watch?v=QBfhPkBW9Pk{{</*/youtube*/>}}
```

{{< youtube >}}https://www.youtube.com/watch?v=QBfhPkBW9Pk{{< /youtube >}}
