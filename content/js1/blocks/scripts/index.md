+++
title = '📁 Running scripts'
headless = true
time = 10
facilitation = false
emoji= '🗄️'
[objectives]
    1='Execute a JavaScript file with Node'
+++

So far we’ve seen how expressions can be evaluated using the Node REPL. The Node REPL is useful for evaluating expressions quickly.

But usually, our programs have many instructions, and we want to keep and re-run them instead of typing them out each time. So we save our instructions in files. Node can also execute instructions written in a file.

We use the `node` command to run a JavaScript file in the terminal. A JavaScript file ends with `.js` - this is the "file extension".

Let’s suppose we have a file `age.js`. We run the command `node age.js`. This terminal command is an instruction to execute the program written inside `age.js`. Our program has five lines.
So the computer will read and execute the program one line at a time:

```js
const yearOfBirth = 1990; // declaration
const currentYear = 2023; // declaration

currentYear++; // statement
`I am ${currentYear - yearOfBirth} years old`; // statement
```

{{<note title="Activity" type="activity">}}

### Check you can run a file with Node:

1. In your terminal, create a new file called `example.js`.
2. Try writing a few lines in the file.
3. Get Node to run this file. (Don't use the REPL now - you should run a command to execute the whole file.)

{{</note>}}

Once the computer executes these statements, the execution of the program is complete. But we’re left with a problem. With the REPL, the user inputs an expression statement or declaration. Then the computer reads and executes the line and then immediately prints feedback to the terminal.

But with a file, the computer will execute each line sequentially until completion _without_ printing the values of each expression it evaluates.

So this new problem can be expressed as a question:

> ❓ Problem
>
> "How can we check what the values evaluated to in our program during execution?"
