+++
title = "Installing dependencies with npm"
headless = true
time = 60
facilitation = false
objectives = [
    "Use a dependency in a NodeJS program",
]
+++

To use a library, we need to fetch the code we're going to use. When using NodeJS, we use a tool called `npm` for this.

First we need a `package.json` file - this a file that `npm` will read to understand your project. This is the same as the `package.json` file you've seen when using `npm` in the past.

Make this `package.json` file in the same directory as your e-word-counting program:

```json
{
    "type": "module"
}
```

The `package.json` contains a JSON object with information about your project. For now, we're just telling `npm` that our project is a module - this means we are allowed to use `import` in our program.

From a terminal which is `cd`'d to the same directory as your `package.json` file, run `npm install commander`.

This command does two things:
1. Look in your `package.json` file - notice that now has a `dependencies` section listing `commander`. This means that if someone else downloads your program, they know they need to install `commander` to use it.
2. There's now a `node_modules` directory alongside your `package.json`. Inside that is a directory named `commander` which contains the code for the `commander` library. This means `node` now knows how to find the code when you try to import it.

{{<note type="Exercise">}}
Try running your program again.

What has changed since the last time you tried to run it (and it didn't work)?

What has changed since the last time you successfully ran it?
{{</note>}}

Now that we have `commander` installed, let's try using it in our program:

```js
import { program } from "commander";
import { promises as fs } from "node:fs";
import process from "node:process";

program
    .name("count-containing-words")
    .description("Counts words in a file that contain a particular character")
    .option("-c, --char <char>", "The character to search for", "e")
    .argument("<path>", "The file path to process");

program.parse();

const argv = program.args;
if (argv.length != 1) {
    console.error(`Expected exactly 1 argument (a path) to be passed but got ${argv.length}.`);
    process.exit(1);
}
const path = argv[0];
const char = program.opts().char;

const content = await fs.readFile(path, "utf-8");
const countOfWordsContainingChar = content
  .split(" ")
  .filter((word) => word.includes(char))
  .length;
console.log(countOfWordsContainingChar);
```

{{<note type="Exercise">}}
Try running this program with the `--help` flag.

What do you see? Where do you think this behaviour and text came from?

We didn't have to write all the code for this functionality - `commander` did most of it for us.
{{</note>}}

{{<note type="Exercise">}}
Try running the program with different values of the `-c` flag. Try also specifying some other flags, like `--count`.

Make sure you understand how it's behaving, and why.
{{</note>}}

Let's run through what we changed:

```js
program
    .name("count-containing-words")
    .description("Counts words in a file that contain a particular character")
    .option("-c, --char <char>", "The character to search for", "e")
    .argument("<path>", "The file path to process");
```

We told `commander` information about our program. We gave it a name, a description, and told it that it should allow a user to pass a flag name `-c` (or equivalently `--char`), and use a default value of `-` for that flag if it's not specified, and also told it that it should allow a user to pass the path to process as an argument.

```js
program.parse();
```

We asked `commander` to interpret the command line arguments our program was given, based on what options we wanted to allow. If it sees something it doesn't understand, it will error.

```js
const argv = program.args;
```

Instead of asking NodeJS's process module for all of the program's arguments, we're asking `commander` to tell us "after you understood and removed all the flags, what arguments were left?"

Then our `if` check about the number of arguments is exactly the same as before.

```js
const char = program.opts().char;
```

We are getting the `char` flag that `commander` interpreted and storing it in a variable.

```js
const countOfWordsContainingChar = content
  .split(" ")
  .filter((word) => word.includes(char))
  .length;
console.log(countOfWordsContainingChar);
```

We have renamed our `countOfWordsContainingEs` variable to `countOfWordsContainingChar` because we're no longer always looking for hyphens, and changed the `includes` call to look for the value of the `char` variable instead of always an `e`.

We only needed to make a few small changes to get all of this new functionality:
* Support for accepting a new command line flag.
* `--help` support explaining how to use the program.
* Detection for if someone passes flags that aren't known, and warning them about this (and even suggesting what they maybe meant).

We could have written all of this code ourselves. But using a library meant we could focus on what's unique about our problem, rather than spending time implementing flag parsing.

This is a very common task in software development in the real world, joining together libraries (written by other people) to create some new unique solution.

> [!NOTE]
>
> We also could have used [the builtin `util.parseArgs` function from NodeJS](https://nodejs.org/api/util.html#utilparseargsconfig) for most of this functionality, but it doesn't support `--help` like `commander` does.
