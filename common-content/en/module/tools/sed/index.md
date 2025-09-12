+++
title = "sed"
time = 30
emoji = "💻"
objectives = [
  "Remove numbers from the start of lines in a file using `sed`.",
  "Replace occurrences of one string in a file with another using `sed`.",
  "Print the lines of a file which don't contain some string using `sed`.",
]
[build]
  list = "local"
  publishResources = false
  render = "never"
+++

`sed` is a tool for replacing text in files with other text.

![Julia Evans' comic about sed](https://wizardzines.com/images/uploads/sed.png)

(Source, including text-only transcript: https://wizardzines.com/comics/sed/)

`sed` executes a list of commands on a file. The most common commands are to replace some text with some other text, or to show or hide or delete lines that meet some criteria.

Sed commands feature both a matcher (called an "address") specifying which lines to operate on, and an operation (called a command) to perform on those lines.

{{<note type="Example">}}
`sed '1,3 s/cat/dog/' some-file`

Address: `1,3` - lines 1-3 of `some-file`\
Command: `s/cat/dog/` - replace the first occurrence of "cat" on each line with "dog"
{{</note>}}

If you don't specify an address, your command applies to the whole file:

{{<note type="Example">}}
`sed 's/cat/dog/' some-file`

Address: Not specified, so every line of `some-file`\
Command: `s/cat/dog/` - replace the first occurrence of "cat" on each line with "dog"
{{</note>}}

Learn about `sed` from its man page (and the backlog exercises).

Some sed commands you should understand and be able to write:
* `s/cat/dog/`
* `s/cat/dog/g`
* `s/\([0-9]\)/only \1/g`
* `/dog/d`
* `6d`

{{<multiple-choice
question="What does the command `sed -e 's#cat#dog#' animals` do?"
answers="Output the contents of the file animals, with all occurrences of 'cat' replaced with 'dog'. | Output the contents of the file animals, with the first occurrence of 'cat' on each line replaced with 'dog'. | Output the contents of the file animals, with the first occurrence of 'cat' in the file replaced with 'dog'."
feedback="Not quite - take a look at the flags passed to the s command. | Right! sed operates on lines, and without the g flag it just does one replacement. We can use any character (like #) between the sections of an s command, not just /. | Not quite, think about what unit sed operates on - characters/words/lines/files?"
correct="1"
>}}

{{<multiple-choice
question="What does the command `sed 's/\([0-9]\)/only \1/g' animal-counts` do?"
answers="Add the word 'only' before the characters '0', '-', or '9' in the file. | Add the word 'only' before all numbers in the file. | Replace all numbers in the file with the text 'only 1'."
feedback="Not quite - what does an - inside []s mean? | Right - we match all numbers, and re-insert it with a back-reference. | Not quite - what does the \ before the 1 mean?"
correct="1"
>}}

{{<note type="Exercise">}}
Write down answers to the following question:

If you want to output the lines of the file named `/tmp/animals` which _don't_ include any numbers, what command would you run?
{{</note>}}
