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
