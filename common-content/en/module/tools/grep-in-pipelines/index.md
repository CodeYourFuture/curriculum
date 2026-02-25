+++
title = "grep in pipelines"
time = 20
objectives = [
  "List the files in a directory which contain an upper-case letter in their name with `ls` and `grep`.",
  "Count the number of files in a directory which contain an upper-case letter in their name with `ls`, `grep`, and `wc`.",
  "Explain why we don't need to pass `-1` to `ls` when piping its output.",
]
[build]
  list = "local"
  publishResources = false
  render = "never"
+++

We've already used grep to search for text in files using regular expressions.

We can also pipe other commands' output to `grep` to search the output the same way.

For example, we can write:

```console
% ls -1
report-draft
report-version-1
report-version-1.1
report-version-2
report-final
report-final-2
% ls -1 | grep -v '[0-9]'
report-draft
report-final
```

The original `ls -1` command showed us all the files in the current directory.

By piping this to `grep -v '[0-9]'` we can filter this output down to just the files whose names don't contain numbers.

`grep` operates on lines, and `ls -1` outputs one file per line, so `grep` tests each file one at a time.

### `ls` vs `ls -1`

In our terminal, when we run `ls -1`, we get one file output per line. But if we run `ls` in our terminal, we get the files on one line, separated by spaces.

We know that `grep` operates on individual lines, so it may seem like `ls | grep` would have a problem - `ls` prints more than one file per line.

But `ls` behaves specially. It detects whether it's outputting to a terminal, or a pipe, and acts differently:
* If it's outputting to a pipe, it outputs one file per line.
* If it's outputting to a terminal, it tries to be useful and take up less space. But if you pass `-1` it will _force_ `ls` to output one file per line.

So we can write `ls | grep -v '[0-9]'` - we don't need to pass `-1` to `ls`.

It's good to know that sometimes programs behave differently when outputting to a terminal or a pipeline.
