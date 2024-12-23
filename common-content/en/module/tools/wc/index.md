+++
title = "wc"
headless = true
time = 10
emoji= "💻"
[objectives]
    1="Count the bytes, words, and lines of a file with `wc`"
    2="Count just the words of a file with `wc`"
+++

`wc` is a tool for counting the bytes, words, or lines in a file.

It is named `wc` because it is used to find a **w**ord **c**ount.

Learn about `wc` from its man page (and the backlog exercises).

Some commonly used flags you should understand:
* `-c`
* `-l`
* `-w`

{{<multiple-choice
question="What does the command `wc -w /some/file` do?"
answers="Count the number of lines in the file /some/file | Count the number of bytes, words, and lines in the file /some/file. | Count the number of words in the file /some/file."
feedback="Not quite - check the meaning of -w. | Not quite - check the meaning of -w. | Right! -w means count words."
correct="2"
>}}


{{<note type="Exercise">}}
Write down answers to the following question:

If you want to get the number of lines in the file `/some/other/file`, what command would you run?
{{</note>}}
