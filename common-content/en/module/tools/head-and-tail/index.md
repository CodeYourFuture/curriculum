+++
title = "head and tail"
time = 20
objectives = [
  "Output the first 5 lines of a file using `head`.",
  "Output the last 5 lines of a file using `tail`.",
  "Output the five lines starting 10 lines into a file using `head` and `tail`.",
]
[build]
  list = "local"
  publishResources = false
  render = "never"
+++

`head` outputs lines (or bytes) from the start of a file. `tail` outputs lines (or bytes) from the end of a fail.

![Julia Evans' comic about head and tail](https://wizardzines.com/images/uploads/head-tail.png)

(Source, including text-only transcript: https://wizardzines.com/comics/head-tail/)

```mermaid
flowchart LR
   Initial[1 This is the first line
2 And more
3
4 Yet more
5 It keeps going
6 This file has 9 lines
7 This is line 7
8 And they all lived
9 happily ever after] --head -n5--> Head[1 This is the first line
2 And more
3
4 Yet more
5 It keeps going] --tail -n2--> Tail[4 Yet more
5 It keeps going]

style Initial text-align:left
style Head text-align:left
style Tail text-align:left
```

Learn about `head` and `tail` from their man pages (and the backlog exercises).

Imagine we have an input file which has 100 lines.

{{<multiple-choice
   delimiter="~"
   question="What would the command `head -n 8 input` output?"
   answers="The first 8 bytes of the file ~ The last 8 lines of the file. ~ The first 8 lines of the file."
   feedback="Not quite - are you confusing -n and -c? ~ Not quite - are you confusing head and tail? ~ Right! -n takes a number of lines to output, and head goes from the start of the file."
   correct="2" >}}

{{<multiple-choice
   delimiter="~"
   question="What command/pipeline could we write to skip the first three lines of the file, and then output the next 2 lines?"
   answers="`head -n3 input | tail -n2` ~ `tail -n+4 | head -n2` ~ `tail -n+3 | head -n2`"
   feedback="No - remember each stage in a pipeline applies to the output of the previous stage, not the original file. ~ Right - tail skips the first few lines, then head takes just a few from the top of that output. ~ Not quite - how many lines does this skip?"
   correct="1" >}}
