+++
title = "ls"
time = 15
objectives = [
  "List the files (and directories) in a directory with `ls`.",
]
[build]
  list = "local"
  publishResources = false
  render = "never"
+++

`ls` is a tool for listing the files in a directory.

It is named `ls` because it is used to **l**i**s**t files.

Learn about `ls` from its man page (and the backlog exercises).

Some commonly used flags you should understand:
* `-R`
* `-l`
* `-t` and `-r`
* `-a`
* `-1`
* `-h`

{{<multiple-choice
question="What does the command `ls -lt` do?"
answers="List all of the files in a directory, including permissions, sorted most-recently-modified first. | List all of the files in a directory, including hidden files, sorted most-recently-modified last. | List all of the files in a directory, including permissions, sorted most-recently-modified last."
feedback="Right! -l includes metadata, and -t sorts by modification time (mtime). | Not quite - check the meaning of -l. | Not quite - check the meaning of -t."
correct="0"
>}}

{{<note type="Exercise">}}
Write down answer to the following question:

If you want to list the files in the directory `/tmp`, one file per line, what command would you run?
{{</note>}}
