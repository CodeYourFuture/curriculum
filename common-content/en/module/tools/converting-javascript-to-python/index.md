+++
title = "Converting JavaScript to Python"
headless = true
time = 40
facilitation = false
emoji= "📖"
objectives = [
    "Rewrite JavaScript code as Python"
]
+++

### Parsing command line flags

In JavaScript, we wrote this code:

```js
import { program } from "commander";

program
    .name("count-containing-words")
    .description("Counts words in a file that contain a particular character")
    .option("-c, --char <char>", "The character to search for", "-");

program.parse();

const argv = program.args;
const path = argv[0];
const char = program.opts().char;
```

Which of the following are _essential_ goals in this code, and which are _accidental_ goals?

The _essential_ goals here are to:
* Allow a user to pass a `-c` argument (defaulting to `-` if they don't).
* Allow a user to pass a path as a positional argument.
* Supply a nice `--help` implementation to help a user if they don't know how to use our tool.

We _accidentally_ did a lot of things to achieve these goals. We used a library called commander. We imported that library. We called some particular functions, and made some particular variables.

If we want to work out how to do this in Python, we should focus on the essential goals. We may want to search for things like "Parse command line flags Python" and "Default argument values Python" because they get to the essential problems we're trying to solve.

Searching Google for "Parse command line flags Python" brought us to [the Python argparse documentation](https://docs.python.org/3/library/argparse.html). The example code looks pretty similar to what we were doing in Python. We can probably write something like:

```python
import argparse

parser = argparse.ArgumentParser(
    prog="count-containing-words",
    description="Counts words in a file that contain a particular character",
)

parser.add_argument("-c", "--char", help="The character to search for", default="-")
parser.add_argument("path", help="The file to search")

args = parser.parse_args()
```

There are some differences here.
* With commander we were calling functions on a global `program`, whereas with argparse we construct a new `ArgumentParser` which we use.
* `add_argument` takes separate parameters for the short (`-c`) and long (`--char`) forms of the option - `commander` expected them in one string.
* The Python version uses a lot of named arguments (e.g. `add_argument(...)` took `help=`, `default=`), whereas the JavaScript version (`option(...)`) used a lot of positional ones.
* The Python version handles positional arguments itself as arguments with names (`path`), whereas the JavaScript version just gives us an array of positional arguments and leaves us to understand them.

### Validating command line flags

In our JavaScript code, we needed to check that there was exactly one positional argument.

We don't need to do this in our Python code. Because `argparse` treats positional arguments as arguments, it actually already errors if we pass no positional arguments, or more than one.

So we can tick this essential requirement off our list. Different languages or libraries do things differently, and that's ok!

> [!TIP]
> We don't need to convert every line.
>
> We're trying to convert _essential requirements_.
