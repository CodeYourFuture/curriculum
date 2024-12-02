+++
title = "Shell tools"
headless = true
time = 30
facilitation = false
emoji= "💻"
[objectives]
    1="Identify which of {cat, ls, wc, grep, sed, awk} will be useful to solve a given problem"
+++

## Shell tools

Through this course, we are going to write lots of programs.

But a lot of programs have already been written by other people. It's often quicker and easier to use an existing program than to write a new one.

We are going to learn about some commonly used programs. We will learn some common patterns that make them easier to learn them and to combine them.

We run these programs from a terminal. We can either call the programs directly from a terminal, or put instructions to call the programs in a script and run the script.

### Conventions

To describe running a program, we will use this syntax:

```console
% ls
file1   file2
```

Here we are saying: At a terminal prompt (signified by the `%`), run the command `ls`.\
Below the command is some expected or example output (`file1    file2`) you will see when you run it.

To call a program, we type its name and press enter, e.g. open a terminal and run:

```console
% ls
file1   file2
```

Most of the programs which take a file as an input take it as an argument to the command.\
We list arguments after the command name, separated with a space, e.g. we can pass `/tmp` as an argument to `ls`:

```console
% ls /tmp
some-temporary-file some-other-temporary file
```

#### Flags and arguments

Some programs take extra arguments. These may be optional or required. These generally start with a `-` or `--` then their name, and if they take a value, expect the value to come after the argument name.

```console
% grep -r -B 1 "hello" .
./comparison/index.md-```js {linenos=table,linenostart=1}
./comparison/index.md:"hello Mhairi" === `hello ${mhairiName}`;
--
./errors/index.md-```js
./errors/index.md:const result = console.log("hello world");
```

Here we passed the optional argument `-r` (which takes no value), and the optional argument `-B` (which we gave the value `1`). We call arguments that start with a `-` flags.

We could give flags in any order - `grep -B 1 -r "hello" .` works the same as `grep -r -B 1 "hello" .`.

`"hello"` and `.` are called positional arguments because they don't have a named flag before them. The program decides how to interpret them based on their position (order) in the command line, rather than a named flag coming before them. Their order matters.
