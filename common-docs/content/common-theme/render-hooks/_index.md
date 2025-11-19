+++
title="Render Hooks"
layout="slimdex"
description="Render hooks override existing markdown rendering in Hugo"
menu=["theme"]
+++

https://gohugo.io/render-hooks/introduction/

For our purposes, the useful feature is that you can hook into codefences with an arbitrary string, and then use that string to render custom HTML. After the three ticks, you can add any string and Hugo will invoke a partial with that name stored in layouts/render-hooks.
