+++
title = 'Running scripts'

time = 20
[objectives]
    1='Execute a JavaScript file with Node'
    2='Use `console.log()` to print a value'
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

It's time to write our first lines of JavaScript! 

There are some tools available which will enable us to write code and instantly see the results. These are called **REPL**s - **R**ead, **E**valuate, **P**rint and  **L**oop. These are great for quickly checking something but not very practical for production uses.

Usually our programs will have many instructions which we want to keep and re-run instead of typing them out each time. So we save our instructions in files. We can run these files from the terminal.

We use the `node` command to run a JavaScript file in the terminal. A JavaScript file ends with the `.js` file extension.

Let’s suppose we have a file `hello_world.js`. We run the command `node hello_world.js`. This terminal command is an instruction to execute the program written inside `hello_world.js`. 


### Printing to the terminal

Our first program will print the text "Hello World!" in the terminal. First we need to create a file to work in.

Open a terminal. You can either do this using your Terminal app or in VSCode, it doesn't matter. Navigate to the `prep` directory you created in the last section and create a file called `hello_world.js`. 

{{<note type="tip" title="Tip: pwd">}}
Remember that you can use the `pwd` command to **p**rint **w**orking **d**irectory if you lose track of where you are in your file system.
{{</note>}}

```shell {title="Terminal"}
cd Module-Onboarding/prep   # Replace this with your file path if it's different
touch hello_world.js
```

Open your new file in VSCode.

JavaScript prints values to the terminal using a function called `console.log`.

{{<note type="definition" title="Definition: console.log">}}
**console** usually means _a text interface_ like a terminal. A **log** is a written record of something that happened.

So `console.log` will _record something that happens in our program_ and print it to a _text based interface_.

{{</note>}}

`console.log` prints the result of expressions while our program is executing. Usually we will interact with our programs using some sort of graphical interface like a web browser so we won't use this function often, but it is a very useful tool to help us solve problems in our code. It lets us check what values expressions evaluate to at _specific moments_ of our program execution.

Let's see how to use `console.log` . In your `hello_world.js` file write the name of the function `console.log`, a set of parentheses `()` and the message to be printed.

```js {title="hello_world.js"}
console.log("Hello World!");
```

{{<note type="note" title="Note: Semicolons">}}
Note that we have added a semicolon (`;`) at the end of the expression. Different programming languages handle semicolons in different ways: in some languages they are essential, in others including them will cause an error.

JavaScript code will run with or without a semicolon at the end of expressions but it's good practice to include them. They help to keep your code organised and are helpful for anyone reviewing your code. Plus it's good practice if you ever use a language like Java where they are required! 
{{</note>}}

Now switch to the terminal and run the file using `node`:

```sh {title="Terminal"}
node hello_world.js
```

{{<note type="tip" title="'Error: Cannot find module">}}
You may see an error message saying "cannot find module" when you run this command. That means Node can't find the file you have asked it to run. Use `pwd` to check you are in the right directory. If not, navigate to the correct place using `cd` and try again.
{{</note>}}

We should see the string `"Hello World!"` logged out in the terminal. Congratulations, you have written your first JavaScript program!


{{<note title="Exercise: Running JavaScript files" type="exercise">}}

Let's try again from the beginning

1. In your terminal, create a new file called `facts.js`.
2. Pick one of your fun facts from the Git sections in the first sprint.
3. Write the instruction to print your fact to the terminal.
4. Run the file using Node.

{{</note>}}
