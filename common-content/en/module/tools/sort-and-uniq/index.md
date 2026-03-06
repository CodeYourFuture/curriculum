+++
title = "sort and uniq"
time = 20
objectives = [
  "Count the occurrences of different lines within a file using `sort` and `uniq`.",
]
[build]
  list = "local"
  publishResources = false
  render = "never"
+++

`sort` sorts its input. `uniq` deduplicates adjacent matching lines.

![Julia Evans' comic about sort and uniq](https://wizardzines.com/images/uploads/sort-uniq.png)

(Source, including text-only transcript: https://wizardzines.com/comics/sort-uniq/)

Learn about `sort` and `uniq` from their man pages (and the backlog exercises).

Often we pipe to `sort | uniq` not just `uniq` so that duplicate lines will be next to each other before they're passed to `uniq`.

For the following quizzes, consider the following input file:
```console
% cat input.txt
pigs 10
chickens 2
pigs 10
goats 3
hamsters 300
```

{{<multiple-choice
   delimiter="~"
   question="What command would output the lines of the file sorted alphabetically?"
   answers="`sort input.txt` ~ `sort -u input.txt` ~ `sort input.txt | uniq`"
   feedback="Right - sort sorts the file. ~ Not quite - what does `-u` do? ~ Not quite - what does piping to uniq do?"
   correct="0" >}}

{{<multiple-choice
   delimiter="~"
   question="What command would output the lines of the file sorted by the number after the first space, starting with hamsters 300?"
   answers="`sort -k1 input.txt` ~ `sort -k2 input.txt` ~ `sort -k2 -r -n input.txt` ~ `sort -k2 -n input.txt`"
   feedback="Not quite - check what `-k1` does. ~ Not quite - look at the difference between alphabetical sorting and numerical sorting. ~ Right! We need to select the right field, sort numerically, and reverse the order to go biggest to smallest. ~ Close, but what order will things be sorted?"
   correct="2" >}}

{{<multiple-choice
   delimiter="~"
   question="What would the command `awk '{print $1}' input.txt | sort | uniq -c | sort -rn` output?"
   answers="The names of each animal, sorted by which has the biggest number in their line. ~ A list of each unique animal in the file, sorted by which is on the most lines. ~ A list of each animal, sorted alphabetically, adding together the numbers that came after them if there were duplicates."
   feedback="Not quite - look at the order the commands are being run in the pipeline. ~ Right! We take just the animal names, then sort them so that uniq will work, then ask uniq to count how many of each it saw, and then sort by how many uniq counted. ~ Not quite - look at the order the commands and running in the pipeline."
   correct="1" >}}
