+++
title = 'Overview: theme, hide_from_overview'
time = 2
[build]
  render = 'never'
    list = 'local'
  publishResources = false
+++

## Overview

```toml
theme="Asynchronous programming"
```

On prep pages, this is used to build an overview page. It's a list of themes that will be included in the overview. We might change this to a Hugo taxonomy at some point.

```toml
hide_from_overview=true
```

On blocks. Any block assigned to a theme will be included in the overview, unless it is marked `hide_from_overview=true`.
