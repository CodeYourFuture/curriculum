+++
title = "grep"
time = 30
objectives = [
  "Identify the lines in a file which contain a string using `grep`",
  "Identify which files contain a string using `grep`",
]
[build]
  list = "local"
  publishResources = false
  render = "never"
+++

`grep` is a tool for searching files for text.

![Julia Evans' comic about cat](https://wizardzines.com/images/uploads/grep.png)

(Source, including text-only transcript: https://wizardzines.com/comics/grep/)

`grep` is designed to search using regular expressions, which are patterns that describe text.

For instance, the regular expression `^[0-9]*$` searches for a line which has only numbers in it. The `^` means "from the start of the line", the `$` means "until the end of the line", the `[0-9]` expresses the characters we're looking for, and the `*` means "0 or more of the characters". `^[0-9]` searches for a line which starts with a number (but doesn't care about what comes after).

You can learn more about Regular Expressions at [RegexOne](https://regexone.com/). Many engineers just know the basic concepts, and Google for help when they need something more complicated, and this is fine.

Learn about `grep` from its man page (and the backlog exercises).

Some commonly used flags you should understand:
* `-c`
* `-F`
* `-r`
* `-v`
* `-l`
* `-o`
* `-A`, `-B`, `-C`

{{<multiple-choice
question="What does the command `grep -ril \"langurs\" /animals/primates` do?"
answers="List the files under /animals/primates which contain the word langurs, only in lower case. | List the files under /animals/primates which contain the word langurs, in any case, ignoring binary files like images. | List the files under /animals/primates which contain the word langurs, in any case."
feedback="Not quite - check the meaning of -i. | Not quite - if we wanted to ignore binary files we'd need to pass -I (capital i) as well | Right! -r means all files under the directory, -i means case insensitive, and -l means just list the file names."
correct="2"
>}}

{{<note type="Exercise">}}
Write down answer to the following question:

If you want to find all of the lines in a file which end with a number, what command would you run?
{{</note>}}
