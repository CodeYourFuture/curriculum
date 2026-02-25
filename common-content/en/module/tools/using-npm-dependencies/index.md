+++
title = "Using dependencies from npm"
headless = true
time = 20
facilitation = false
objectives = [
    "Define a library",
]
+++

We've seen that we can use code that was built into NodeJS - we don't need to write everything ourselves.

We can also use code that other people have written, which isn't built into NodeJS. You've probably seen this before, e.g. using `jest` for testing.

This can be really useful - it means we can benefit from work others have already done, and focus on just solving the part of a problem which is unique to us. It's like making shell pipelines - instead of having to solve every problem from scratch, we can plug together different tools that other people have already made.

Let's expand the functionality of our program. Rather than always searching for words containing the letter e, let's allow the user to specify what character they're searching for.

This means we want to introduce a flag. And programs that accept flags, should also document themselves. One common convention is that if you run a program with the flag `--help`, it will tell you how to use it.

But writing all of this code to parse flags, to output information about the flags, and so on, is a lot of work.

So let's use a {{<tooltip title="library">}}A library is a collection of code that we can use, but which isn't part of our project.{{</tooltip>}} for this. We will use a library called `commander`.

{{<note type="Exercise">}}
Add `import { program } from "commander";` to the top of your e-word-counting program.

This line imports the `program` property from the object which is the `commander` library (using object destructuring).

Try running your program. What happens? What does the output mean?
{{</note>}}
