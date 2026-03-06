+++
title = "awk"
time = 20
objectives = [
  "Filter a space-separated file and extract a positional field using `awk`.",
  "Sum the numbers in a column of a space-separated file using `awk`.",
  "Explain what `NF` and `$NF` mean in awk.",
]

[build]
  list = "local"
  publishResources = false
  render = "never"
+++

`awk` is a tiny programming language for manipulating columns of data.

![Julia Evans' comic about awk](https://wizardzines.com/images/uploads/awk.png)

(Source, including text-only transcript: https://wizardzines.com/comics/awk/)

Learn about `awk` from its man page (and the backlog exercises).

Some awk programs you should understand and be able to write:
* `{print $2}`
* `/Ibrahim/ {print $NF}`
* `{sum += $2} END {print sum}`

{{<multiple-choice
question="What does the command `awk '{print $2}' some-file` do?"
answers="For each line in the file, split the line into fields every time there's a space, and print the second field. | For each line in the file, split the line into fields every time there's a comma, and print the second field. | For the first line in a file, split the line into fields every time there's a space, and print the second field."
feedback="Right - awk runs per-line, and the default field separator is spaces. | Not quite - look at the default value if the -F flag. | Not quite - check what conditions apply to actions."
correct="0"
>}}

{{<multiple-choice
question="What does the command `awk '/Ibrahim/ {print $2}' some-file` do?"
answers="The same as the previous question, but it prints Ibrahim before each line. | The same as the previous question, but only for lines that contain the text Ibrahim. | The same as the previous question, but it removes the text Ibrahim from any printed lines."
feedback="Not quite - check what conditions are. | Right, the condition filters which lines the command applies to. | Not quite - check the difference between conditions and actions."
correct="1"
>}}

{{<note type="Exercise">}}
Write down answers to the following questions:

1. What does `NF` in an `awk` program mean? What does `$NF` mean?
2. Imagine you have a file named `scores` where each line contains a name, then a space, then a numeric score. If you want to use `awk` to output the biggest score, what command would you run?
{{</note>}}
