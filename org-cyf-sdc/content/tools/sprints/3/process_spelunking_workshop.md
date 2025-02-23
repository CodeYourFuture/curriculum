# Workshop: XXX

This workshop will teach you about how the programs you write, interact with files.
And in the process, we'll learn more about the kernel, and how it helps your programs do things.



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

The kernel makes facilities available, to see what a program is doing.
In this workshop, we'll use those facilities to look into what's going on inside the process.



### Processes

In order to start doing anything, we first need to learn how to find a process.

Some preparation:  
Create a file `exercise_1.py` with this code.
```
input("Press enter to stop the program...")
```
On your first terminal, run the program: `python3 exercise_1.py`
The program should wait for you to press enter.
We won't press enter yet, instead we'll keep it waiting.

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

On your second terminal, type `ps a`.
(There are no dashes.)
<!--
  On BSD, you can just use `ps`. But on linux, that selects only processes on the current terminal.
  Since we're using a second terminal, that wouldn't show out python process.
  Unix is messy like that. :P
  -->
<details>
<summary>Can you find your program?</summary>

The `ps a` command should show you something like this:
```
ariane@ubuntu2204:~$ ps a
    PID TTY      STAT   TIME COMMAND
    664 tty1     Ss+    0:00 /sbin/agetty -o -p -- \u --noclear tty1 linux
  62705 pts/0    Ss     0:00 -bash
  62849 pts/1    Ss     0:00 -bash
  63235 ttyS0    Ss+    0:00 /sbin/agetty -o -p -- \u --keep-baud 115200,57600,38400,9600 ttyS0
  64981 pts/1    S+     0:00 python3 exercise_1.py
  64983 pts/0    R+     0:00 ps a
```

In the example output, you can see the program on the second-to-last line:
```
  64981 pts/1    S+     0:00 python3 exercise_1.py
```

</details>

In the `ps` output, you can see multiple columns.
The one we're interested in, is the *PID* column.
*PID* is short for *Process Identifier*.
(*ID* is short for Identifier.)

It turns out, working with text is a lot of work for computers.
And they much prefer working with numbers.
And that's why the kernel doesn't think about a process as a name, but as a number: the *PID*.

By default, `ps` (without any options) will only show our own processes, that have a *TTY*.
(*TTY* is short for *TeleTYpe*, it's a kind of really old type-writer that used a phone line, so you can type and the typed information appears in some far-away place.)
A *TTY* is used whenever you log in, and is the console used by programs.
If you've ever heard of `standard in` or `standard out`, those are usually writing to a *TTY*, which is used by a person.

The *STAT* and *TIME* columns tell us what a process is doing, and how much time it has used.
We won't care about them today.

----

There are much more processes, but many don't have a *TTY*.
We can tell `ps` we want to see them anyway, by using the `x` option: `ps ax`.
Can you figure out what the *PID* of the `cron` program is?

If you look at the `cron` program in `ps`, you can see its *TTY* column is `?`.
This means the process doesn't have a *TTY*, and doesn't directly interact with a human.
Many system services, and also programs which only interact with a person using graphics, won't have a *TTY*.

----

Most of the processes shown by `ps ax` aren't run on your user account.
We can tell `ps` to show us the user, by turning on the "user" view.
We do this with the `u` option.

Try it: `ps u`
Do you see the username?

<details>
<summary>Mine looks like this.</summary>

```
ariane@ubuntu2204:~$ ps u
USER         PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND
ariane     62705  0.0  0.1   8972  5812 pts/0    Ss   Feb22   0:00 -bash
ariane     62849  0.0  0.1   9000  5944 pts/1    Ss+  Feb22   0:00 -bash
ariane     65081  0.0  0.0  10072  1560 pts/0    R+   15:21   0:00 ps u
```
Now you know my name. :)

</summary>

----

We can combine the options.
For example, `ps aux` shows all processes (even if they don't have a *TTY*), and will use the "user" view to show them.
Try it. :)

Personally, I usually just type `ps aux | grep exercise_1` when I want to find the *PID* of the exercise.
And I never use the options separately.
So if you only want to remember one thing, remember this. :)

If you want to learn more, you can use `man ps` to read the documentation.
It'll also have examples.

----

Now that you know how to find a *Process Identifier*, we no longer need the program that we started on the first terminal.
You can hit "enter" to get it to stop.

### What You've Learned

You've learned how you can use `ps` to find the *PID* of a process.
You've learned the difference between a program and a process.



## 
