+++
title = "man pages"
headless = true
time = 45
[objectives]
    1="Open a man page for a tool"
    2="Close a man page for a tool"
    3="Interpret sample command lines in man pages"
    4="Learn from a man page about the flags a tool supports"
+++

man pages are manuals that help us understand tools. Many (but not all) tools on your computer have a man page.

{{<note type="Reading">}}

Read [this introduction to man pages](https://itsfoss.com/linux-man-page-guide/).

{{</note>}}

Key take-aways:

* Open a man page for a tool by running `man tool-name` (e.g. `man cat`).
* Quit a man page by pressing `q` (for `q`uit).
* Scroll around a man page by using the up and down arrows.
* The **synopsis** section has a sample command line. Optional arguments are in `[]`s. Arguments you can repeat more than once have a `...` after them. All of the possible single-letter flags are smooshed together into one.
* The **description** section lists all of the possible flags and arguments in detail.
* Man pages tend to contain _lots_ of information. You probably don't want to read them top-to-bottom. Read the introduction, but then be searching with specific questions in mind like "How do I reverse the output" or "What does the `-r` flag do?".

{{<note type="Exercise">}}

Look at the man page for the `cat` tool.

Questions to answer:

1. If you want to include line numbers in the output, what flag would you pass?
2. What does the `-b` flag do?
3. What does `cat` do if you pass more than one filename as positional arguments?

{{</note>}}
