+++
title = "sed"
headless = true
time = 30
facilitation = false
emoji= "💻"
[objectives]
    1="Remove numbers from the start of lines in a file using sed"
    2="Replace occurences of one string in a file with another using sed"
    3="Print the lines of a file which don't contain some string using sed"
+++

`sed` is a tool for replacing text in files with other text.

![Julia Evans' comic about sed](https://wizardzines.com/images/uploads/sed.png)

(Source, including text-only transcript: https://wizardzines.com/comics/sed/)

`sed` executes a list of commands on a file. The most common commands are to replace some text with some other text, or to show or hide or delete lines that meet some criteria.

Sed commands feature both a matcher (called an "address") specifying which lines to operate on, and an opeation (called a command) to perform on those lines.

Learn about it from its man page (and the backlog exercises).

Some sed commands you should understand and be able to write:
* `s/cat/dog/`
* `s/cat/dog/g`
* `s/\([0-9]\)/only \1/g`
* `/dog/d`
* `6d`
