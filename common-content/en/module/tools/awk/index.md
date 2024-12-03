+++
title = "awk"
headless = true
time = 20
facilitation = false
emoji= "💻"
[objectives]
    1="Filter a space-separated file and extract a positional field using awk"
    2="Sum the numbers in a column of a space-separated file using awk"
    3="Explain what NF and $NF mean in awk"
+++

`awk` is a tiny programming language for manipulating columns of data.

![Julia Evans' comic about awk](https://wizardzines.com/images/uploads/awk.png)

(Source, including text-only transcript: https://wizardzines.com/comics/awk/)

Learn about `awk` from its man page (and the backlog exercises).

Some awk programs you should understand and be able to write:
* `{print $2}`
* `/Ibrahim/ {print $NF}`
* `{sum += $2} END {print sum}`

{{<note type="Exercise">}}
Write down answers to the following questions:

1. What does the command `awk '/Ibrahim/ {print $2}' scores` do?
2. What does `NF` in an `awk` program mean? What does `$NF` mean?
3. Imagine you have a file named `scores` where each line contains a name, then a space, then a numeric score. If you want to use `awk` to output the biggest score, what command would you run?
{{</note>}}
