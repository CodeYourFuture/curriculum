+++
title = "Shell tools"
time = 30
objectives = [
  "Identify which of {`cat`, `ls`, `wc`, `grep`, `sed`, `awk`} will be useful to solve a given problem.",
]
[build]
  list = "local"
  publishResources = false
  render = "never"
+++

Through this course, we are going to write lots of programs.

But a lot of programs have already been written by other people. It's often quicker and easier to use an existing program than to write a new one.

Many programs that were written for Unix (the predecessor of Linux) are still used today. Why are these programs still useful today? In part because of the [Unix philosophy](https://en.wikipedia.org/wiki/Unix_philosophy), the way these programs were written: simple, modular and flexible.

- **Simple**: Each tool solves a specific problem, making it easier to understand and learn.
- **Modular**: We can reuse tools in different ways by combining them.
- **Flexible**: Pipelines let us build solutions quickly without coding from scratch.

We are going to learn about some commonly used programs. We will learn common patterns that make them easier to learn and combine.

We run these programs from a terminal. We can either call the programs directly from a terminal, or write the instructions to call the programs in a script and run the script.

### Key Concepts

**Pipelines**: We can connect programs together so the output of one becomes the input of another using the `|` (pipe) symbol.

For example, to find lines containing "error" in all .log files and show how many unique files have them:

```console
% grep -l "error" *.log | wc -l
3
```

Here, `grep -l "error" *.log` finds all .log files containing "error" and outputs just the filenames, then `wc -l` counts the lines (filenames) to give us the total count.

**PATH**: The system searches for programs in directories listed in the PATH environment variable. When you type a command, the shell looks for the program in these directories.

**Important**: The current directory (`.`) is not in PATH by default for security reasons. To run a program in the current directory, you must use `./program-name` instead of just `program-name`.

**Finding programs**: Use `which <program-name>` to see where a program is located.

### Conventions

To describe running a program, we will use this syntax:

```console
% ls
file1   file2
```

Here we are saying: At a terminal prompt (signified by the `%`), run the command `ls`.\
Below the command is the output (`file1    file2`) you should expect to see after you run the command. Sometimes this is the exact output you should expect. Sometimes _example_ outputs are given: these could vary according to your filesystem, username, or other variables.

To call a program, we type its name and press enter. Open a terminal and run:

```console
% ls
file1   file2
```

Most programs that take a file as input accept it as an argument to the command.\
We list arguments after the command name, separated with a space. For example, we can pass `/tmp` as an argument to `ls`:

```console
% ls /tmp
some-temporary-file some-other-temporary file
```

#### Flags and Arguments

Some programs take extra arguments. These may be optional or required. Extra arguments generally start with a `-` or `--` followed by their name. If these extra arguments take a value, expect the value to come _after_ the name.

```console
% grep -r -B 1 "hello" .
./comparison/index.md-```js {linenos=table,linenostart=1}
./comparison/index.md:"hello Mhairi" === `hello ${mhairiName}`;
--
./errors/index.md-```js
./errors/index.md:const result = console.log("hello world");
```

Here we passed the optional argument `-r` and the optional argument `-B`. `-r` takes no value. We gave `-B` the value 1.

We call arguments that start with a `-` or `--` **flags**. We could give flags in any order - `grep -B 1 -r "hello" .` works the same as `grep -r -B 1 "hello" .`.

Flags that start with a `-` (not `--`) can also be combined together. `grep -rc "Hello" .` works the same as `grep -r -c "Hello" .`. If you are looking up a flag you don't know, like `-rc`, remember it may actually be two flags (`-r` and `-c`). You can also specify a value for the _last_ flag in a combined list: `grep -rcB 1 "hello" .`.

`"hello"` and `.` are called **positional arguments** because they don't have a named flag before them. The program decides how to interpret them based on their position (order) in the command line, rather than a named flag coming before them. Their order matters.
