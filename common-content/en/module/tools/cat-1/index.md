+++
title = "cat"
time = 10
objectives = [
  "Show the contents of a file with `cat`",
]
[build]
  list = "local"
  publishResources = false
  render = "never"
+++

`cat` is a tool for getting the contents of files.

If you have a file at the path `/tmp/about-me.txt`, you can output its contents to the terminal by running:

```console
% cat /tmp/about-me.txt
My name is Serina.

I live in Glasgow, and I like the theatre.
```
