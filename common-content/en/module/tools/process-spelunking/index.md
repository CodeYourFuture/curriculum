+++
title = "Workshop: Process Spelunking"
time = 90
emoji= "📖"
objectives = [
    "Find the PID of a process, using `ps`.",
    "Define a file descriptor.",
    "List a process's open file descriptors, using `lsof`.",
    "Define a system call.",
    "List the system calls performed by a process, using `strace`",
    "Interpret the output of `strace`.",
    "Interpret return values of syscalls by referencing `man 2`.",
]
[build]
  list = "local"
  publishResources = false
  render = "never"
+++

# Workshop: Process Spelunking

This workshop will teach you about how the programs you write, interact with files.
And in the process, we'll learn more about the kernel, and how it helps your programs do things.

## Preparation

### Linux

In order to participate in this workshop, you will need a linux computer.
If you're in a CYF class, there are laptops you can borrow for this workshop - your volunteers should know how to access them.

Otherwise, I recommend using an ubuntu VM in AWS (free tier instance), or alternatively a VM inside virtual box.

> [!WARNING]
>
> Docker linux will not work properly for this workshop.
> Don't use it.
> (If you don't know what docker is, you're probably grand.)

<!--
  Should we warn against WoL-subsystem (linux emulator on windows) too?
  -->

For people who run linux on their own laptop, I still recommend an AWS instance,
so you won't get distracted by all the other programs running under your user account.

### Preparing Your Linux

On the linux computer, make sure the following packages are installed:
- `python3`
- `lsof`
- `strace`

> [!TIP]
>
> On ubuntu, you can run `sudo apt install python3 lsof strace` to get these programs installed.

<!--
  Beyond this point, `sudo` isn't required, but I see no reason to deny it.
  Everything (except for the package installation) can be done as a normal user.
  -->



### Linux Skills

I recommend you learn how to use the `less` program.

Confirm that if you run `man ps`, you get shown a man-page.
(It's a lot of text, you can exit it with `q`.)

Make sure that you can:
- create a new text file on the linux machine,
- open 2 shells at the same time on the linux machine (we will use 1 to run a small python program, and another to look at the program while it's running).



## Programs, Processes, and the Kernel
<!-- XXX
  Maybe remove the kitchen/kernel from this section?
  It's not used much beyond telling that kernels think of processes by a number...
  Instead of saying that the kernel needs this to be a number,
  we can say the computer needs this to be a number instead.
  -->

<!--
  Am comparing a program, process, and kernel, to an analogy of cooking.
  The analogy is not perfect, but I hope it works sufficiently well to get people an idea.
  Truth is, kernels are super nebulous to explain, and we kind of don't want to dive in deeply.
  -->

You know how a recipe is a series of instructions on how to create a nice meal, and when you do those instructions, it's called cooking?
The same is true for programming: the code you write is called a program.
And when you run this program, we call that a process.

When cooking, you use your kitchen, which has knives to cut vegetables, a stove to boil things, an oven to bake things, etc.
The kitchen is really important to make a meal, but it can't do any of the cooking on its own.

The same happens in programming: your process will use a kernel to do things like reading files, talk on the network, and write things on the console.
The kernel is really important to run a process, but it can't do any of the program on its own.

|                                  | when cooking  | when programming |
|----------------------------------|---------------|------------------|
| The instructions are called      | recipe        | program          |
| Executing those instructions     | cooking       | running          |
| Who/What does those instructions | a cook        | a process        |
| What you use to do this          | a kitchen     | a kernel         |

The kernel makes facilities available, to see what a process is doing.
In this workshop, we'll use those facilities to look into what's going on inside the process.



### Processes

In order to start doing anything, we first need to learn how to find a process.

{{<note title="Preparation">}}
Create a file `exercise_1.py` with this code.
```
input("Press enter to stop the program...")
```
On your first terminal, run the program: `python3 exercise_1.py`
The program should wait for you to press enter.
We won't press enter yet, instead we'll keep it waiting.
{{</note>}}

<!--
  I'm teaching the BSD invocation of ps.
  Yes, it's older, and doesn't have friendly dashes.
  But it works also on BSDs and apple 'puters.
  Also, it's the syntax I'm used to.
  -->

We'll use the `ps` command.
`ps` is short for *Process Status*.
<!--
  The linux man-page doesn't tell you this.
  -->

{{<tabs>}}
===[[Exercise]]===
On your second terminal, type `ps aux`.
(There are no dashes.)

Can you find your process?

===[[Answer]]===
The `ps aux` command should show you something like this:
```
ariane@ubuntu2204:~$ ps aux
USER         PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND
root           1  0.0  0.2 166428 11948 ?        Ss   Jan24   0:30 /lib/systemd/systemd --syste
root           2  0.0  0.0      0     0 ?        S    Jan24   0:00 [kthreadd]
ariane     62597  0.0  0.1 170608  5156 ?        S    Feb22   0:00 (sd-pam)
ariane     62702  0.0  0.1  17316  8008 ?        R    Feb22   0:00 sshd: ariane@pts/0
ariane     62705  0.0  0.1   8972  5812 pts/0    Ss   Feb22   0:00 -bash
root       62789  0.0  0.2  16924 10760 ?        Ss   Feb22   0:00 sshd: ariane [priv]
ariane     62848  0.0  0.2  17316  8016 ?        S    Feb22   0:00 sshd: ariane@pts/1
ariane     62849  0.0  0.1   9000  5944 pts/1    Ss   Feb22   0:00 -bash
root       63213  0.0  0.0   6896  3108 ?        Ss   Feb22   0:00 /usr/sbin/cron -f -P
ariane     66392  0.0  0.2  17328  8784 pts/1    S+   20:17   0:00 python3 exercise_1.py
ariane     66393  0.0  0.0  10072  1604 pts/0    R+   20:17   0:00 ps aux
```
(You'll see a lot more than I'm showing here.)
<!--
  I left out many from this output, so it wouldn't be so long.
  I hope that won't confuse our students.
  If I didn't do that, the output would be 123 lines, most of them kernel threads.
  -->

In the example output, you can see the program on the second-to-last line:
```
ariane     66392  0.0  0.2  17328  8784 pts/1    S+   20:17   0:00 python3 exercise_1.py
```

You can also see that the first column shows the username.
So now you know my name. :)
{{</tabs>}}

In the `ps` output, you can see multiple columns.
The one we're interested in, is the *PID* column.
*PID* is short for *Process Identifier*.
(*ID* is short for Identifier.)

It turns out, working with text is a lot of work for computers.
They much prefer working with numbers.
And that's why the kernel doesn't think about a process as a name, but as a number: the *PID*.

By default, `ps` (without any options) will only show (some of) our own processes, that have a
{{<tooltip text="TTY" title="TTY">}}
*TTY* is short for *TeleTYpe*, it's a kind of really old type-writer that used a phone line, so that what you type appears in some far-away place.
{{</tooltip>}}.
A *TTY* is used whenever you log in, and is the console used by programs.
If you've ever heard of `standard in` or `standard out`, those are usually writing to a *TTY*, which is used by a person.

The *STAT* and *TIME* columns tell us what a process is doing, and how much time it has used.
We won't care about them today.

{{<tabs>}}
===[[Exercise]]===
There are many more processes, but many don't have a *TTY*.  
Can you figure out what the *TTY* of the `cron` process is?

===[[Answer]]===
The `cron` program is on a line similar like this:
```
USER         PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND
root       63213  0.0  0.0   6896  3108 ?        Ss   Feb22   0:00 /usr/sbin/cron -f -P
```

You can see its *TTY* column is `?`.
This means the process doesn't have a *TTY*, and doesn't directly interact with a human.
Many system services, and also programs which only interact with a person using graphics, won't have a *TTY*.
{{</tabs>}}

> [!TIP]
>
> Personally, I usually type `ps aux | grep exercise_1` when I want to find the *PID* of the exercise.
> So if you only want to remember one thing, remember this. :)

If you want to learn more, you can use `man ps` to read the documentation.
It'll also have examples, and explain what the `a`, `u`, and `x` mean.

{{<note title="Clean up">}}
Now that you know how to find a *Process Identifier*, we no longer need the program that we started on the first terminal.
You can hit "enter" to get it to stop.
{{</note>}}

### What You've Learned

You've learned how you can use `ps` to find the *PID* of a process. \
You've learned the difference between a program and a process.



## Files

Processes can open files.

Just as with processes, the computer doesn't like using words to refer to the open file.
Instead, it uses an *File Descriptor* (usually shortened to *FD*).
A *file descriptor* is a number.

### Running lsof

We can see which files a process has open, and we do this by using `lsof`.
`lsof` stands for `List Open Files`.

<!--
  I've omitted the `sudo lsof | grep /var/log/syslog` style of finding which process has a particular file open.
  It's very useful, but I think explaining this distracts from the goal (learning how processes and kernel interact).
  It's also not super easy to explain, without explaining `sudo`, and thus users, permissions, and oh my...
  -->

{{<note title="Preparation">}}
Create a new file: `exercise_2_file.txt`.
It's fine to leave it empty.

Create a file `exercise_2.py` with this code.
```python
file_object = open("exercise_2_file.txt", "r")
input("Press enter to stop the program...")
file_object.close()
```
On your first terminal, run the program: `python3 exercise_2.py`
The program should wait for you to press enter.
Just like before, we won't press enter yet, instead we'll keep it waiting.
{{</note>}}

{{<tabs>}}
===[[Exercise]]===
Use what you learned in the previous exercise, to find the *PID* of this program.

Now run `lsof -p 1234` (replace 1234 with the *PID* of the program).
The `-p` flag tells `lsof` that we're only interested in the files opened by that process; without that option `lsof` will show everything that it can show.

Can you find the FD of the `exercise_2_file.txt` file?

===[[Answer]]===
If I run `lsof` on the program, I see this.
You should see something similar.
```
ariane@ubuntu2204:~$ lsof -p 65262
COMMAND   PID   USER   FD   TYPE DEVICE SIZE/OFF    NODE NAME
python3 65262 ariane  cwd    DIR  253,0     4096  262145 /home/ariane/programming
python3 65262 ariane  rtd    DIR  253,0     4096       2 /
python3 65262 ariane  txt    REG  253,0  5937800 3670306 /usr/bin/python3.10
python3 65262 ariane  mem    REG  253,0    27002 3691433 /usr/lib/x86_64-linux-gnu/gconv/gconv-modules.cache
python3 65262 ariane  mem    REG  253,0  3048928 3684223 /usr/lib/locale/locale-archive
python3 65262 ariane  mem    REG  253,0  2220400 3691022 /usr/lib/x86_64-linux-gnu/libc.so.6
python3 65262 ariane  mem    REG  253,0   108936 3681429 /usr/lib/x86_64-linux-gnu/libz.so.1.2.11
python3 65262 ariane  mem    REG  253,0   194872 3704849 /usr/lib/x86_64-linux-gnu/libexpat.so.1.8.7
python3 65262 ariane  mem    REG  253,0   940560 3691027 /usr/lib/x86_64-linux-gnu/libm.so.6
python3 65262 ariane  mem    REG  253,0   240936 3691016 /usr/lib/x86_64-linux-gnu/ld-linux-x86-64.so.2
python3 65262 ariane    0u   CHR  136,1      0t0       4 /dev/pts/1
python3 65262 ariane    1u   CHR  136,1      0t0       4 /dev/pts/1
python3 65262 ariane    2u   CHR  136,1      0t0       4 /dev/pts/1
python3 65262 ariane    3r   REG  253,0        0  262147 /home/ariane/programming/exercise_2_file.txt
```

I can see the file mentioned on the last line:
```
python3 65262 ariane    3r   REG  253,0        0  262147 /home/ariane/programming/exercise_2_file.txt
```
The *FD* column says `3r`.
This means the file is on *FD* 3.
(The `r` suffix, means it is opened for reading.)

Note that the file `exercise_2.py` does not appear in the list because, by the time lsof is executed, Python has already read its contents into memory and no longer holds an open file descriptor.
{{</tabs>}}

### Standard Input, Output, and Error

Despite our program only opening the `exercise_2_file.txt` file, it has more files open.
There are three other *file descriptors* in use: `0`, `1`, and `2`.

| File descriptor | How we call it             | What it's for                                                                       |
|-----------------|----------------------------|-------------------------------------------------------------------------------------|
| 0               | `stdin` (standard input)   | Things you type, show up in your program on this *file descriptor*.                 |
| 1               | `stdout` (standard output) | Your program can write output on this *file descriptor*.                            |
| 2               | `stderr` (standard error)  | If things go wrong in your program, you can write errors to this *file descriptor*. |

The *standard input* is used by our tiny program, to wait for the "enter" key.
And the message `Press enter to stop the program...` is written to standard output.

These *file descriptors* (0, 1, and 2) always exist, they're created at the start of the program.
This is also why the first opened file ends up on *file descriptor* `3`: it's the first available number that can be used.

### Reg, Chr, Dir?

The `TYPE` column tells us what kind of file is opened.
`REG` means something that is a regular file.
Because we created a regular file for our program, we can see that `exercise_2_file.txt` is opened as a `REG` file.

All other types are special kinds of files.
In particular, `DIR` means directory.
(Yes, you can open directories. The directory mentioned under *FD* `cwd`, is the Current Working Directory, where you program is running.)

And `CHR` means character special device.
These are usually things like the console.
Which is why you see *standard input*, *standard output*, and *standard error* having those types of file open.

There are many many more types, but you won't see those quite as often.
You can read them all in the `lsof` man-page: `man lsof`.
(Most of them I don't know, and have never seen in the wild.)

<!--
  XXX `lsof -d 3` will show all processes and their `3` file descriptor.
  This can be turned into an exercise to show that each process has their own scoped file descriptors.
  -->

{{<note title="Clean up">}}
Now that you know how to find a *File Descriptor*, we no longer need the program that we started on the first terminal.
You can hit "enter" to get it to stop.
{{</note>}}

### What You've Learned

Processes can open files. \
Processes use *file descriptors* to refer to the files. \
We can inspect which files are opened by a process, using the `lsof` command.



## System Calls

So far, we've seen files getting opened.
And we've seen we can use `lsof` to see those files being opened.

The reason `lsof` can see it, is because the process asks the kernel.
The kernel was asked for a file, thus it knows the file is opened, and can tell you about it.

This "asking the kernel" is done by use of *system calls*.

### Running strace

We can look at *system calls* while they happen.
`strace` is short for *system call trace*.

{{<note title="Preparation">}}
Create a new file `exercise_3_file.txt`.
This time, we want to put something in it.
You can write what you like, but if you're short on inspiration, write this:
```
Agnes, who is a cat, is sleeping on the sofa.
```

Create a file `exercise_3.py` with this code.
```python
file_object = open("exercise_3_file.txt", "r")
```
This time, the program doesn't wait for you to press enter.
You can test if you've set everything up correctly, by running `python3 exercise_3.py` (it should not produce any output).
After that, if you run `echo $?`, you should get `0`, indicating the program ran without errors.
{{</note>}}

{{<tabs>}}
===[[Exercise]]===
Run `strace -o strace.output python3 exercise_3.py`.
`strace` will write each and every *system call* that the process makes to the `strace.output` file.

Look at the `strace.output` file.
Each line it shows, is a *system call*.
There are a lot.
The process does a lot of talking to the kernel.

Can you see where `exercise_3_file.txt` is opened?
===[[Answer]]===
You should see something like:
```
read(3, "file_object = open(\"exercise_3_f"..., 4096) = 47
lseek(3, 0, SEEK_SET)                   = 0
read(3, "file_object = open(\"exercise_3_f"..., 4096) = 47
read(3, "", 4096)                       = 0
close(3)                                = 0
openat(AT_FDCWD, "exercise_3_file.txt", O_RDONLY|O_CLOEXEC) = 3
newfstatat(3, "", {st_mode=S_IFREG|0664, st_size=46, ...}, AT_EMPTY_PATH) = 0
ioctl(3, TCGETS, 0x7ffefb757ae0)        = -1 ENOTTY (Inappropriate ioctl for device)
lseek(3, 0, SEEK_CUR)                   = 0
ioctl(3, TCGETS, 0x7ffefb757930)        = -1 ENOTTY (Inappropriate ioctl for device)
rt_sigaction(SIGINT, {sa_handler=SIG_DFL, sa_mask=[], sa_flags=SA_RESTORER|SA_ONSTACK, sa_restorer=0x7f1f2f25a520}, {sa_handler=0x55dda8389f00, sa_mask=[], sa_flags=SA_RESTORER|SA_ONSTACK, sa_restorer=0x7f1f2f25a520}, 8) = 0
close(3)                                = 0
munmap(0x7f1f2ec9f000, 151552)          = 0
exit_group(0)                           = ?
+++ exited with 0 +++
```
(There's a whole lot before this, but I left that out.)

If you look closely, you can find the name of the file, and it being opened, here:
```
openat(AT_FDCWD, "exercise_3_file.txt", O_RDONLY|O_CLOEXEC) = 3
```
{{</tabs>}}

The `openat` *system call* opens a file.

From looking at the *system calls* that the process makes, we can try to figure out what it's doing.
We call this tracing.

{{<tabs>}}
===[[Exercise]]===
Change the file `exercise_3.py` with this code:
```python
file_object = open("exercise_3_file.txt", "r")
input("Press enter to stop the program...")
```

On your first terminal, type `strace -o strace.output python3 exercise_3.py`
On your second terminal, use `lsof` (from earlier) to find the *file descriptor* for `exercise_3_file.txt`.
Next, find the `openat` system call where `exercise_3_file.txt` is opened.

Can you tell where `strace` tells you what the file descriptor is?

===[[Answer]]===
I expect you'll see the same numbers as me.

I can see `lsof` telling me that the *file descriptor* is 3.

And the *trace* shows:
```
openat(AT_FDCWD, "exercise_3_file.txt", O_RDONLY|O_CLOEXEC) = 3
```

That last `= 3` is the *file descriptor*.

{{</tabs>}}

You can look up the `openat` system call in the man pages: `man 2 openat`
and if you look at the *RETURN VALUE* section, you can see that the return value of `openat`
is the file descriptor:
```
RETURN VALUE
       open(), openat(), and creat() return the new file descriptor (a nonnegative integer),
       or -1 if an error occurred (in which case, errno is set appropriately).
```
The return value of a system call will always be after the equals sign (`=`) in the trace output.

<!--
  I think getting the students used to specifying the section of the man pages
  when looking up system calls is important.
  Because the `write` program exists, and `man` will prioritize that over the `write` system call.
  -->

> [!TIP]
>
> All system calls are documented in *man pages*.
> The man pages system is divided into sections.
> Section *2* contains all system calls.
>
> If you don't tell `man` which section to look in, it'll make a guess.
> The guess is often right, so you can omit the *2* in many cases.

Let's make this a little more useful.

At the preparation step, we made sure the file had something in it.
That's because we're going to read it.

And then write it to the output.
And this time, we're going to do that without "Press enter to stop the program".

<!--
  XXX I'm thinking of making this print line numbers in front of each line.
  That way, I can point out that while we can see the effects of the process
  (opening the file, writing to stdout),
  we can't see what the process does inside.
  We can only guess.
  -->

{{<tabs>}}
===[[Exercise]]===
Change the file `exercise_3.py` with this code:
```python
file_object = open("exercise_3_file.txt", "r")
lines = file_object.readlines()
for line in lines:
    print(line, end="")
file_object.close()
```

Can you find all the system calls used to read this file?
And can you find all the system calls used to write the text to standard out?

===[[Answer]]===
To read the file, three *system calls* are used.

First, the `openat` *system call*:
```
openat(AT_FDCWD, "exercise_3_file.txt", O_RDONLY|O_CLOEXEC) = 3
```

Next the `read` *system calls*:
```
read(3, "Agnes, who is a cat, is sleeping"..., 8192) = 46
read(3, "", 8192)                       = 0
```
The `3` refers to the same file descriptor again.
And we can see the text we placed in our file.
(If you put a different text in, you'll see that different text here.)

There is also a `close` *system call*:
```
close(3)                                = 0
```

And to write the text, the `write` *system call* is used:
```
write(1, "Agnes, who is a cat, is sleeping"..., 46) = 46
```
We can see the `1`, which is the *file descriptor* to which it is written.
(In the `lsof` part, we can have seen that this is *standard output*.)

{{</tabs>}}

<!--
  XXX This chapter needs more love.
  I've written out the exercises that I want, but I want to teach them to look at the man-page
  to get an idea of what the system call does.
  (Because guessing based on the name only gets one so far.)
  -->

### What You've Learned

You've learned that the process and the kernel speak with each other using *system calls*. \
You can *trace* those *system calls* using `strace`.

You've also seen how a file is opened, and read, by asking the kernel to do that for us, using *system calls*.
