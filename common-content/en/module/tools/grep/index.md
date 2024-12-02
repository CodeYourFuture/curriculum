+++
title = "grep"
headless = true
time = 30
facilitation = false
emoji= "💻"
[objectives]
    1="Identify the lines in a file which contain a string using grep"
    2="Identify which files contain a string using grep"
+++

`grep` is a tool for searching files for text.

![Julia Evans' comic about cat](https://wizardzines.com/images/uploads/grep.png)

(Source, including text-only transcript: https://wizardzines.com/comics/grep/)

`grep` is designed to search using regular expressions, which are patterns that describe text.

For instance, the regular expression `^[0-9]*$` searches for a line which has only numbers in it. The `^` means "from the start of the line", the `$` means "until the end of the line", the `[0-9]` expresses the characters we're looking for, and the `*` means "0 or more of the characters". `^[0-9]` searches for a line which starts with a number (but doesn't care about what comes after).

You can learn more about Regular Expressions at [RegexOne](https://regexone.com/). Many engineers just know the basic concepts, and Google for help when they need something more complicated, and this is fine.

Learn about it from its man page (and the backlog exercises).

Some commonly used flags you should understand:
* `-c`
* `-F`
* `-r`
* `-v`
* `-l`
* `-o`
* `-A`, `-B`, `-C`
