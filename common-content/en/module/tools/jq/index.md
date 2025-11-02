+++
title = "jq"
time = 90
objectives = [
  "Use `jq` to retrieve information from a JSON file",
]
[build]
  list = "local"
  publishResources = false
  render = "never"
+++

All of the tools we've seen so far operate on lines, words, or characters.

Often these are the formats we have. And indeed, often we decide to have our programs output in these formats to make the output easy to process with tools.

But there are more complex formats it can be useful to process too. You have already used JSON in the course. It is a text format that allows us to represent arrays, objects, strings, numbers, and more.

`jq` is a tool for processing JSON without having to write a whole program. This can be really useful to quickly analyse some data.

{{<note type="Reading">}}
Read [Earthly's introduction to `jq`](https://earthly.dev/blog/jq-select/).
{{</note>}}

Practice using `jq` using the relevant backlog exercises.
