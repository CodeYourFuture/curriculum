+++
title = '🧾 Evaluating expressions'
[build]
    render = false
    list = 'local'
    publishResources = false
time = 15
facilitation = false
emoji= '🗄️'
[objectives]
    1='Define the features of the Node REPL'
    2='Evaluate expressions using your mental model of JavaScript'
    3='Evaluate expressions using the Node REPL'
+++

{{<note type="tip" title="Recall">}}Computers work by storing and performing operations on data.{{</note>}}

Computer programs are built from many expressions. We must understand how expressions are evaluated to understand how computer programs are executed.

We can take an expression like `36 * 45` and ask what it evaluates to. If we know what the `*` operator represents (multiplication) and if we understand the arithmetic rules represented by the operation we can evaluate this expression ourselves.

Happily, computers can evaluate expressions for us.

**NodeJS** is an application that runs JavaScript programs. In other words, NodeJS can understand and execute programs written in JavaScript. One feature of Node is the **REPL**.

{{<note title="Definition: REPL" type="info">}}

REPL is a special type of program that stands for:

**Read** - Users enter some code that Node will **read**
**Evaluate** - Node will then **evaluate** this code
**Print** - Node will **print** the result to the terminal
**Loop** - Node will **loop** back to the beginning and prompt users to input some more code

With a REPL we can run pieces of code and look at what happens.

{{</note>}}

We input JavaScript instructions that are then executed by NodeJS. The REPL replies with, or prints out, the result of this execution.

{{<tabs name="REPL 1">}}
{{<tab name="REPL Activity Code">}}
Type each of the following expressions [into the REPL](#repl-1-1) one at a time and then press enter to check the result.

```bash
10 + 32
```

```bash
32 / 10
```

{{</tab>}}
{{<tab name="Step by Step">}}
{{<note title="Activity" type="activity">}}

In this activity, you'll check you're ready to use the Node REPL on your machine.

1. Open the terminal on your computer
2. Check you've got Node installed on your computer
3. Start the Node REPL in your terminal
4. [Enter the expressions](#repl-1-0) and evaluate them using the Node REPL

Note: If you don't know how to do any of the steps above, then try searching for an appropriate command online; searching for things when you're stuck is super important part of being a developer!

{{</note>}}
{{</tab>}}
{{<tab name="Explore REPL">}}
{{<note title="Activity" type="activity">}}

Create your own expressions and enter them into the Node REPL.

_Before_ hitting enter, predict what the REPL output will be. Write your prediction down and compare it to the outcome.

{{</note>}}
{{</tab>}}
{{</tabs>}}
