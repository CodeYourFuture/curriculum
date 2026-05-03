# Terminal skills

Developers frequently use the terminal to interact with their computer. It is a useful job skill to get comfortable doing this.

In this workshop you will experiment with a terminal while there are volunteers around who can help you.

Split into groups, one volunteer per group. Volunteers, please follow along on your own machine, and be ready to offer help, ask helpful questions, and unblock. (But please also keep your hands off the keyboards of your group. )

## Learning objectives

```objectives
- [ ] Explain why people use a terminal.
- [ ] Write and run a shell script.
- [ ] Add a shell script to $PATH and run it by invoking just its name.
- [ ] Find, modify, and re-run previously run shell commands from a terminal prompt.
- [ ] Navigate to the start or end of a single command at a prompt without using the left/right arrows.
- [ ] Navigate left and right in a single command by single words without using the left/right arrows..
- [ ] Fill in file names using tab completion in a terminal prompt.
- [ ] Expand file names using shell glob expansion with the `*` character.
```

## Why do we use the terminal?

### Collect reasons (2 minutes)

Set a timer for 2 minutes. Write down as many reasons people use the terminal as you can.

### Share reasons (3 minutes)

Popcorn around the group sharing reasons for using the terminal.

### Consider an example (2 minutes)

One reason developers use a terminal is to query files, or find out information. There are lots of existing tools that search, sort and change data.

Developers often write tools that other people can use in scripts or pipelines.

For instance, `git` exposes a lot of information that you can conveniently consume in a script.

We can find the names of people (or bots) who have contributed to a Git repo by running:

`git log | grep '^Author:' | awk -F'[<>]' '{print $2}' | grep -v 'users\.noreply\.github\.com' | sort | uniq`

Or sort contributors to a Git repo by number of contributions:

<details>
<summary>

`git log | grep '^Author:' | sed -e 's/^Author: //' -e 's/ <.*$//' | sort | uniq -c | sort -r -n`

</summary>

```console
curriculum % git log | grep '^Author:' | sed -e 's/^Author: //' -e 's/ <.*$//' | sort | uniq -c | sort -r -n
 790 Sally McGrath
 787 Dedekind561
 231 MitchLloyd
 176 Daniel Wagner-Hall
 151 KFK
  70 Alasdair Smith
  38 Lara Huzjan
  14 Barath Vignarajah
  11 Caroline (Frank) Scherf
  10 Barny Dathan
   8 omahs
   7 Zsolt Sz. Sztupák
   6 dependabot[bot]
   5 Sam Pennington
   4 Metin Barış
   4 Anna Aitchison
   3 karen
   3 Amy
   2 daslerr
   2 Rabia Avci
   2 Kyrylo Kovzel
   2 Jonathan Zheng
   2 Jay Mayer
   1 metinbaris
   1 karam ali
   1 Vlad Boisa
   1 Varuna
   1 Tony Beaumont
   1 Mohamad Badrawy
   1 Isar
   1 H. Nhi (Alex)
   1 FridIsar
   1 Fikret Ellek
   1 Della Bella
   1 David Christensen
   1 Chris
   1 CJ Yuan
   1 Berkeli Halmyradov
   1 Baz
   1 Azar Alampanah
```
</details>

These would be hard questions to answer without some kind of program or script. By combining re-usable tools, we can quickly answer them. (You'll learn more about combining tools next sprint!)

## Being effective with the terminal

This is a list of exercises for you to try on your own. You will probably get stuck or confused. Ask the people around you (either volunteers or trainees) when you're stuck.

Volunteers: Make sure people aren't stuck, and help them when they are.

### Shell scripts

Sometimes we want to re-use some series of commands, or share them with other people. To find our top Git contributors it'd be nicer to run `get-top-git-contributors`. That would be clearer and simpler than remembering and running all those commands each time.

A way of doing this is to write them in a script. A terminal is also called a shell, so these are called shell scripts.

The format of a shell script is to put one command per line. Often the very first line will be `#!/bin/bash`, to tell the computer what program should interpret the script.

There are three ways you can run a shell script:
1. As an argument to `bash`. If you run `bash /path/to/your/get-top-git-contributors`, your script will be run.
2. By making the script executable. You do this by running  `chmod a+x /path/to/your/get-top-git-contributors` once. After this, you can run your script by putting its path into your terminal. This means running `/path/to/your/get-top-git-contributors`, or `./get-top-git-contributors` if you're in the same directory as the script.
3. By making the script executable and putting it on your `$PATH`. Once you have done this, you can run it by name: `get-top-git-contributors`.

#### Make some shell scripts (20 minutes)

Make a shell script (it can do whatever you want - print something, look up git information, or something else completely!). Run it via all three of the ways described above. Run it from a few different working directories.

If you aren't sure what shell script to write, try to write a script which does all of the following:
* Outputs the current date and time (using the `date` command).
* Outputs the current working directory (using the `pwd` command).
* Outputs the current user's username (using the `whoami` command).
* Outputs a friendly message to the user, e.g. saying "I hope you have a good day" (using the `echo` command).

### Running previous commands

Often we want to run a command we ran in the past. Shells support this. Pressing the up arrow will bring the last command you ran. Keeping pressing it will cycle through.

Pressing Control+r and typing some text (like `git`) will search back for the last time you ran a command containing that text. Pressing Control+r again will go back to the command before that contained that text.

#### Practice running previous commands (5 minutes)

Run the following commands in a row:

```console
% git status
% echo "Hello"
% git rev-parse HEAD
% echo "I ran a command"
% echo "I ran another command"
% date
```

Find the last `git` command you ran with Control+r. Change the argument `HEAD` to the argument `main` and run it.

Practice using the up arrow, and Control+r to search for, edit, and run other previously run commands.

### Navigating within a single prompt

Often we have typed a command we're going to run, but we need to slightly change the command. Maybe we made a typo, or need to change an argument. 

Many terminals don't let us just click around to change the position of the cursor. We can use the left and right arrows to move around one character at a time.

#### Navigate around a prompt (5 minutes)

Shells also support moving the cursor one word at a time, or jumping all the way to the start or end of your line. Work out how to do this, practice it, and take notes to help you remember how.

(Note: This may be different on different operating systems!)

### Avoiding needing to type everything (5 minutes)

Shells support tab completion (pressing the tab key to fill in the names of files), and expansion (using special characters like `*`) to avoid you needing to type in the full names of files.

Use both of these techniques to run commands involving files without needing to type out all of their full names.

## Wrap up

Run through the learning objectives of this workshop. Make sure you have achieved them. If you're not sure about any of them, work on them in study group or in the week.
