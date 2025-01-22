+++
title = "Comparing JavaScript and Python"
headless = true
time = 40
facilitation = false
emoji= "📖"
objectives = [
    "Identify and explain equivalences between JavaScript and Python",
    "Compare and contrast differences between JavaScript and Python",
    "Distinguish between essential and accidental complexity"
]
+++

JavaScript and Python have many things in common.

Most differences are "cosmetic". Here are some examples of cosmetic differnces:
* Some functions and operators have different names. But often there are functions/operators which do exactly the same thing.
* JavaScript uses `{}` around blocks of code and we optionally _choose_ to indent code, whereas Python uses `:` and _required_ indents.
* In JavaScript we choose to name variables in `camelCase`, whereas in Python we choose to name variables in `snake_case` (but in both langues we _could_ do either).

Let's take our "count containing words" JavaScript code from last week, and think about what it would look like in Python.

```js
import { program } from "commander";
import { promises as fs } from "node:fs";
import process from "node:process";

program
    .name("count-containing-words")
    .description("Counts words in a file that contain a particular character")
    .option("-c, --char <char>", "The character to search for", "-");

program.parse();

const argv = program.args;
if (argv.length != 1) {
    console.error(`Expected exactly 1 argument (a path) to be passed but got ${argv.length}.`);
    process.exit(1);
}
const path = argv[0];
const char = program.opts().char;

const content = await fs.readFile(path, "utf-8");
const wordsContainingChar = content.split(" ").filter((word) => word.indexOf(char) > -1).length;
console.log(wordsContainingChar);
```

Let's think about what we're doing in this code. We're:
* Parsing command line flags - writing down what flags we expect to be passed, and reading values for them based on the actual command line.
* Validating the flags (i.e. checking that exactly one path was passed).
* Reading a file.
* Splitting the content of the file up into words.
* Counting how many of the words contained a particular character.
* Printing the count.

These are the meaningful things we needed to do. If we wanted to solve the same problem with Python, we'd need to do all of these things.

There are also some other things we did in our code, which were important, but not the point of the code. An example is, we imported some modules. We may need to import modules to write this code in Python. Or we may not. Importing modules wasn't one of our _goals_, it was just something we needed to do to help us.

We split up things we need to do into two categories: essential and accidental.

**Essential** means it is a core part of the problem. e.g. in order to count how many words are in a file, it is _essential_ that we read the file.

**Accidental** means it isn't what we _care_ about doing, but we may need to do it anyway. e.g. importing the `process` module isn't _essential_ to our problem, but we needed to do it anyway so we could report errors.

When we're thinking about how we use different languages, it's useful to think about what parts of our problem are _essential_ (we'll need to do them in any language), and which parts are _accidental_ (it's just something we had to do on the way to achieve our aim).

Whether we write the JavaScript `someArray.length` or the Python `len(some_array)` isn't a big difference - both do the same thing, they just look a little a little different.
