+++
title = "Shell tools"
headless = true
time = 30
emoji= "💻"
[objectives]
    1="Identify which of {`cat`, `ls`, `wc`, `grep`, `sed`, `awk`} will be useful to solve a given problem"
+++

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
Below the command is the output (`file1    file2`) you should expect to see after you run the command. Sometimes this is the exact output you should expect. Sometimes _example_ outputs are given: these could vary according to your filesystem, username, or other variables.

To call a program, we type its name and press enter.  Open a terminal and run:

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

Some programs take extra arguments. These may be optional or required. Extra arguments generally start with a `-` or `--` then their name.  If these extra arguments take a value, expect the value to come _after_ the name.

```console
% grep -r -B 1 "hello" .
./comparison/index.md-```js {linenos=table,linenostart=1}
./comparison/index.md:"hello Mhairi" === `hello ${mhairiName}`;
--
./errors/index.md-```js
./errors/index.md:const result = console.log("hello world");
```

Here we passed the optional argument `-r` and the optional argument `-B`. `-r` takes no value. We gave `-B` the value 1. 

We call arguments that start with a `-` or `--` flags. We could give flags in any order - `grep -B 1 -r "hello" .` works the same as `grep -r -B 1 "hello" .`.

Flags that start with a `-` not a `--` can also be squashed together. `grep -rc "Hello" .` works the same as `grep -r -c "Hello" .`. If you are looking up a flag you don't know, like `-rc`, remember it may actaully be two flags (`-r` and `-c`). You can also specify a value for the _last_ flag in a squashed together list: `grep -rcB 1 "hello" .`.

`"hello"` and `.` are called positional arguments because they don't have a named flag before them. The program decides how to interpret them based on their position (order) in the command line, rather than a named flag coming before them. Their order matters.
