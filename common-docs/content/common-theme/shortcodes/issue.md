+++
title="Issue"
description="Embed an issue"
menu=["shortcodes"]
+++

This simply calls the existing issue partial. Any existing partial can be invoked as a shortcode by creating a file in the `layouts/shortcodes` directory with the same name as the partial and calling the partial inside the shortcode file.

### Invoke

```html
{{</*issue name="Example issue"
src="https://github.com/CodeYourFuture/Module-Template/issues/7" /*/>}}
```

{{<issue name="Example issue" src="https://github.com/CodeYourFuture/Module-Template/issues/7" >}}
