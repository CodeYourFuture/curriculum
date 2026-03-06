+++
title = "Writing a NodeJS program"
headless = true
time = 60
facilitation = false
hide_from_overview = true
objectives = [
    "Write a zero-dependencies NodeJS program",
]
+++

Below we have a small NodeJS program. It is a bit like `wc`. It counts words in a file which contain the letter `e`.

Our program accepts one command line argument - the path of the file to read and count.

Our program's output to stdout is just the number of words which contain an e.

Our program uses the same language (JavaScript) as we've written before, but uses some different APIs.

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
const countOfWordsContainingEs = content
  .split(" ")
  .filter((word) => word.includes("e"))
  .length;
console.log(countOfWordsContainingEs);
```

Let's play computer with this program - line by line:

```js
import process from "node:process";
```

This `import` is loading some code from somewhere that isn't this file.

We've seen `import` before. Here, instead of importing from a file we've written, we're importing the `process` module which is built into NodeJS.

This is an example of the same language features (`import`) being used slightly differently (the `"node:"` is a special prefix to say "specially from node").

The `process` module is built into NodeJS for managing our {{<tooltip text="process" title="Process">}}The running instance of our program: the code, state, memory, and system resources.{{</tooltip>}}. We can use it to find out what arguments were passed to the process when it started, find out what user ran the process, exit the process, and more.

```js
import { promises as fs } from "node:fs";
```

We're importing another module.

The `fs` module is built into NodeJS for interacting with the filesystem.

This time, we're not importing the whole module. We are {{<tooltip text="destructuring" title="Destructuring">}}Destructuring is a form of variable assignment where we give variables values based on where we can find them structurally in another value. Examples:<br /><br />We can write `const [first, second] = [3, 1];` to assign `first = 3` and `second = 1`.<br /><br />We can write `const {name, age} = {name: "Amir", age: 34};` to assign `name = "Amir"` and `age = 34`.{{</tooltip>}}. The `node:fs` module exposes an object, and we are saying "import the `promises` property from the `fs` module, and bind it to the name `fs`".

It is like writing `import { promises } from "node:fs"; const fs = promises;`.

The `fs` module exposes two alternate APIs with functions with the same name (like `readFile`):
* The default `fs` module was written before `async`/`await` was added to JavaScript, and requires using callbacks, which can be annoying.
* `fs` has a submodule called `promises` which can be used with `async`/`await`, and is generally much more convenient.

We want to use the `promises` submodule, because it's much more convenient for us to use `async`/`await`. But if we just wrote `import { promises } from "node:fs";`, we'd be binding the submodule to the name `promises`, and everywhere we used it we'd need to write `promises.readFile`. This is less clear than `fs.readFile`, because `promises` is a very general name. So we rename `promises` to `fs`, and can use it like `fs.readFile`.

We are really doing this because we wish the `async`/`await` APIs were the default APIs exposed by the `fs` module, and this lets us pretend that they are in the rest of our code.

{{<note type="🧠 Think">}}
`fs` uses callbacks or promises because its operations are asynchronous.

Why would interacting with the filesystem (e.g. reading a file) be an asynchronous operation?

Explain on a Slack thread why you think this is. If you're not sure, ask about it on Slack.
{{</note>}}

```js
const argv = process.argv.slice(2);
```

We're getting the `argv` array from the `process` module, and slicing it. We can see in [the `process.argv` documentation](https://nodejs.org/api/process.html#processargv) that `process.argv[0]` will be the path to `node`, and `process.argv[1]` will be the path to this file. We don't care about those, so we'll skip them - as far as we're concerned the arguments start at index 2.

Again, `Array.slice` is exactly the same as we know from JavaScript, but `process.argv` is a new API we can use to get the array we need.

Play computer with the rest of the program - read each line, and explain what you think that line does. After you make your predictions, expand the explanations below and compare them to your predictions.

<details>
<summary>

```js
if (argv.length != 1) {
    console.error(`Expected exactly 1 argument (a path) to be passed but got ${argv.length}.`);
    process.exit(1);
}
```
</summary>
We always expect our program to be given exactly one argument. Here we check this using an `if` statement, just like we've seen before.

`console.error` writes a message to stderr (which is where error messages should go).

`process.exit` is a function which, when called, will stop our program running. Passing a non-zero number to it indicates that our program did not succeed. We can read more about it in the official NodeJS documentation for the `process` module.

</details>

<details>
<summary>

```js
const path = argv[0];
```
</summary>

Giving a useful name to our argument.
</details>

<details>
<summary>

```js
const content = await fs.readFile(path, "utf-8");
```
</summary>

Reading the file at the path passed as an argument. We're using the `fs` module here from `node`, but everything else is just JavaScript - declaring a variable, using `await` because `fs.promises.readFile` is an `async` function, calling a function.

You can read more about this in [the documentation for `fs.promises.readFile`](https://nodejs.org/api/fs.html#fspromisesreadfilepath-options).
</details>

<details>
<summary>

```js
const countOfWordsContainingEs = content
  .split(" ")
  .filter((word) => word.includes("e"))
  .length;
```
</summary>

Just some regular JavaScript. Taking a string, splitting it into an array, filtering the array, searching strings to see if they contain any e characters, and getting the length of an array.
</details>

<details>
<summary>

```js
console.log(countOfWordsContainingEs);
```
</summary>

`console.log` in a NodeJS environment logs to stdout, so this outputs our result to stdout.
</details>

{{<note type="Exercise">}}
Save the above program into a file. Run the file with `node`, and count how many words contain "e"s in a few different files.

If you run into problems, ask for help.
{{</note>}}
