+++
title="Common Content"
description="Shared content and how that all works"
menu=["content", "syllabus"]
layout="slimdex"
[[cascade]]
  [cascade.build]
    list = 'always'
    publishResources = true
    render = 'always'
+++

This is a Hugo module called common-content. It's filled with [headless](https://gohugo.io/content-management/build-options/) content blocks. You can mount it into your site by adding it to your site's config.toml file:

```toml
  [[module.imports]]
    path = "github.com/CodeYourFuture/curriculum/common-content"
    [[module.imports.mounts]]
      source = "en"
      target = "content"
```

All the content blocks are now available in your own site's content directory. You can use anything here to compose curriculum modules. This will work even if you don't use the Common theme.
