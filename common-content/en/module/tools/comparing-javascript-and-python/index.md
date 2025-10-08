+++
title = "Comparing JavaScript and Python"
headless = true
time = 40
facilitation = false
objectives = [
    "Identify and explain equivalences between JavaScript and Python",
    "Compare and contrast differences between JavaScript and Python",
    "Distinguish between essential and accidental complexity"
]
+++

JavaScript and Python have many things in common.

Most differences are "cosmetic". Here are some examples of cosmetic differences:
* Some functions and operators have different names. But often there are functions/operators which do exactly the same thing.
* JavaScript uses `{}` around blocks of code and we _choose_ if we indent code. Python uses `:` and indentation is required.
* In JavaScript we choose to name variables in `camelCase`, whereas in Python we choose to name variables in `snake_case`. In both langues we _could_ do either; this is called a {{<tooltip title="convention">}}A convention is something a group (maybe a team, or a company, or most users of a programming language) agree to do. It's not quite a rule - things _could_ work another way. But we agree one way we'll all do it anyway.<br /><br />e.g. in Python you could name one variable `firstName` and another `middle_name` and another `LASTname`, but if everyone agrees to use `first_name` and `middle_name` and `last_name` it makes it a bit easier for everyone to read because they know what to expect.{{</tooltip>}}.

Recall our "count containing words" JavaScript code. Now think about what it would look like in Python.

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

{{<tabs name="Exercise">}}
===[[Exercise]]===
Think about what we're doing in this code.

Try to list the high-level ideas. This means describing in English what we're achieving, using sentences like like "Reading a file".

We're not trying to think about the programming concepts we're doing here (we aren't talking about things like "Assigning a variable" or "An if statement"). Think about what a non-programmer would want to understand about our program.

===[[Answer]]===

You may have slightly different answers, but the programme is doing roughly the following things:

* Parsing command line flags - writing down what flags we expect to be passed, and reading values for them based on the actual command line.
* Validating the flags (i.e. checking that exactly one path was passed).
* Reading a file.
* Splitting the content of the file up into words.
* Counting how many of the words contained a particular character.
* Printing the count.

{{</tabs>}}

These are the meaningful things we needed to do. To solve the same problem with Python, we'd still do all of these things.

We did some other things in our code to make it work. For example, we imported some modules. To write this code in Python, we might need modules or we might not. Importing modules isn't one of our _goals_, it was just something we needed to do to help us.

We split up things we need to do into two categories: essential and accidental.

**Essential** means it is a core part of the problem. e.g. in order to count how many words are in a file, it is _essential_ that we read the file.

**Accidental** means it isn't what we _care_ about doing, but we may need to do it anyway. e.g. importing the `process` module isn't _essential_ to our problem, but we needed to do it anyway so we could report errors.

{{<note type="Think about real life">}}
Imagine we want to post a parcel, so we take the bus to the post office.

_Essential_ to our goal is getting the parcel to someone who will deliver it.

_Accidental_ to this, we took the bus. There may be ways we could achieve our essential goal without getting the bus. Maybe we could walk or cycle to the post office. Maybe we could arrange for someone from the post office to come to our home and collect the parcel.

The accidental things we did were important - they helped us get our essential goal done. But we shouldn't get too attached to the accidental things - maybe we will replace them later.
{{</note>}}


When we're thinking about how we use different languages, it's useful to think about what parts of our problem are _essential_ (we'll need to do them in any language), and which parts are _accidental_ (it's just something we had to do on the way to achieve our aim).

Whether we write the JavaScript `someArray.length` or the Python `len(some_array)` isn't a big difference. Both lines do the same thing, they just express it differently. 
