+++
title="Common Theme"
layout="slimdex"
menus=["syllabus"]
+++

To mount the common theme, you need to add the following to your `config.toml`:

```toml
[module]
  [[module.imports]]
    path = "github.com/CodeYourFuture/curriculum/common-theme"
```

And then set the theme in your `config.toml`:

```toml
theme = "common-theme"
```
