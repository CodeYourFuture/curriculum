+++
title = "Writing a NodeJS program"
headless = true
time = 60
facilitation = false
emoji= "🛠️"
hide_from_overview = true
objectives = [
    "Write a zero-dependencies NodeJS program",
]
+++

Below we have a small NodeJS program. It is a bit like `wc`. It counts words in a file. Specifically, it counts words which contain a hyphen (`-`) character.

It accepts one command line argument - the path of the file to read and count.

Its output to stdout is just the number of words which contain a hyphen.

It uses the same language (JavaScript) as we've written before, but uses some different APIs.

```js
import process from "node:process";
import { promises as fs } from "node:fs";

const argv = process.argv.slice(2);
if (argv.length != 1) {
    console.error(`Expected exactly 1 argument (a path) to be passed but got ${argv.length}.`);
    process.exit(1);
}
const path = argv[0];

const content = await fs.readFile(path, "utf-8");
const wordsContainingHyphens = content.split(" ").filter((word) => word.indexOf("-") > -1).length;
console.log(wordsContainingHyphens);
```

Let's play computer with this program - line by line:

```js
import process from "node:process";
```

This is loading some code from somewhere that isn't this file.

We've seen `import` before. Here, instead of importing from a file we've written, we're importing the `process` module which is built into NodeJS.

This is an example of the same language features (`import`) being used slightly differently (the `"node:"` is a special prefix to say "specially from node").

The `process` module is built into NodeJS for managing our process. It can be used to do things like find out what arguments were passed to the process when it started, find out what user ran the process, exit the process, and more.

```js
import { promises as fs } from "node:fs";
```

We're importing another module.

The `fs` module is built into NodeJS for interacting with the filesystem.

This time, we're not importing the whole module. We are destructuring. The `node:fs` module exposes an object, and we are saying "import the `promises` property from the `fs` module, and bind it to the name `fs`".

It's the equivalent to us writing `import { promises } from "node:fs"; const fs = promises;`.

We are doing this because many of the things in the `fs` module don't support `async`/`await`, but `fs` has a sub-module called `promises` where everything supports `async`/`await`. Because we want to use `async`/`await`, we will use that. But having to write `fs.promises.readFile` is a bit annoying, so instead we import `fs.promises` as if it was just named `fs`.

```js
const argv = process.argv.slice(2);
```

We're getting the `argv` array from the `process` module, and slicing it. We can see in [the `process.argv` documentation](https://nodejs.org/api/process.html#processargv) that `process.argv[0]` will be the path to `node`, and `process.argv[1]` will be the path to this file. We don't care about those, so we'll skip them - as far as we're concerned the arguments start at index 2.

Again, `Array.slice` is exactly the same as we know from JavaScript, but `process.argv` is a new API we can use to get the array we need.

```js
if (argv.length != 1) {
    console.error(`Expected exactly 1 argument (a path) to be passed but got ${argv.length}.`);
    process.exit(1);
}
```

We always expect our program to be given exactly one argument. Here we check this using an `if` statement, just like we've seen before.

`console.error` writes a message to stderr (which is where error messages should go).

`process.exit` is a function which, when called, will stop our program running. Passing a non-zero number to it indicates that our program did not succeed.

```js
const path = argv[0];
```

Giving a useful name to our argument.

```js
const content = await fs.readFile(path, "utf-8");
```

Reading the file at the path passed as an argument. We're using the `fs` module here from `node`, but everything else is just JavaScript - declaring a variable, using `await` because `fs.promises.readFile` is an `async` function, calling a function.

```js
const wordsContainingHyphens = content.split(" ").filter((word) => word.indexOf("-") > -1).length;
```

Just some regular JavaScript. Taking a string, splitting it into an array, filtering the array, searching strings to see if they contain characters, and getting the length of an array.

```js
console.log(wordsContainingHyphens);
```

`console.log` in a NodeJS environment logs to stdout, so this outputs our result to stdout.

{{<note type="Exercise">}}
Save the above program into a file. Run the file with `node`, and count how many words contain hyphens in a few different files.

If you run into problems, ask for help.
{{</note>}}