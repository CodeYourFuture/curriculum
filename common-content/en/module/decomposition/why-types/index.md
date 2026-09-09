+++
title = "Why we use types"
time = 30
objectives = [
  "Explain how type annotations help understand a function's expectations.",
  "Explain how type annotations help prevent bugs.",
]

[build]
  list = "local"
  publishResources = false
  render = "never"
+++


In real life, as well as programming, there are some impossible operations. Can you divide seven by yellow? Can you set fire to a sound? These don't make sense. The same is true in programming.

We are going to look at some functions which you can find in the file `SDC-Tools/sprint-5` directory.

{{<note type="exercise">}}
**Task 1**

Have a look now at `01-predict.py`.

Take a moment to make predictions about what function calls will and will not work.

Then try running the file and see what happens.
{{</note>}}

In that file, is `half("22")` hoping to return 11 (because the string should be converted to a number)? Or return 2 (because it's the first half of the string)? Or error, because it doesn't make sense?

What if we tried to run `half("hello")`? Try to give part of a word, or error because it can'tbe split evenly in half? Does this input even make sense?
What if we did `double("hello")` instead? What do you expect it to return?

How about `second(22)`? Should it treat 22 like a stringified version of the decimal representation of the number 22 and return 2? If so - `22` is the same as `0x16`. Should `second(0x16)` convert `0x16` to decimal before returning the second character? Or should it remember that the original number was input as hexadecimal and return `6`?

## Intent

The _intent_ of these functions is probably that `half` and `double` are expected to operate on numbers, and `second` is expected to operate on strings (and/or maybe lists). We don't know for sure what the author intended just by looking at the function names.

But Python lets us write all of these things. Some of them, like `half("hello")` will error when they run, maybe breaking our program. Others, like `double("22")` will succeed but in surprising ways which may cause our program to give more subtly incorrect results later on.

In such a simple program as in `01-predict.py`, it's easy for us to run the program manually and see the errors (if we add enough logging). But as programs get bigger, these things get harder to spot, especially if there are branches and code only executes sometimes.

{{<note type="exercise">}}
**Task 2**

Have a look now at `02-playcomputer.py`.

Read through this file and predict what it does.

Leave a comment if you spot any errors.

{{</note>}}

How many errors did you find in your testing? There is one big bug here which doesn't always show. `response.body` is a _stream_ not a _string_. So if a user ever tries to fetch a URL which returns a non-200 status code, our program will crash:

```console
% node fetch.js
What URL should we fetch?
> http://www.google.com/beepboop
file:///Users/dwh/tmp/jsplay/fetch.js:12
    if (response.body.toLowerCase().includes("permission")) {
                      ^

TypeError: response.body.toLowerCase is not a function
    at file:///Users/dwh/tmp/jsplay/fetch.js:12:23
    at process.processTicksAndRejections (node:internal/process/task_queues:105:5)

Node.js v22.11.0
```

How easy was it to spot this bug in your testing?

The code in this file was wrong. It could never have been correct. After a `fetch`, `response.body.toLowerCase()` _never_ makes sense. Ideally we shouldn't have needed to wait until running the code, and using that exact input, to find this out.

## Types

This is where types come in.

Imagine if we could analyse our code and find out "You're calling `double` with a string, but `double` expects a number, you have a bug". Or that "You're calling `response.body.toLowerCase()` but `response.body` is a `ReadableStream` which doesn't have a method `toLowerCase`, you have a bug".

We wouldn't need to keep executing our program with lots of different inputs every time we change it. The type analysis could tell us "You have a bug here, you should fix it". Without having to run the program, and without having to think about different possible inputs.


## Limits of type checking

Types can be really useful for detecting bugs. But there are limits to what kind of bugs type checking can detect.

{{<note type="exercise">}}
**Task 3**:

Look at file `03-fix.py`.

Read the code and see if you can find any bugs.

Write down what the bug is, and how would you fix it?

Are there multiple ways you could fix it?
{{</note>}}

Type checking can't catch this type of bug - as long as you give it a number as input, it gives you a number as output. All of the types are correct. Not all bugs are type errors. But checking for type errors can get rid of a lot of them.


