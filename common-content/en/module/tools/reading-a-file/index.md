+++
title = "Reading a file"
headless = true
time = 10
facilitation = false
hide_from_overview = true
objectives = [
]
+++

In JavaScript we wrote:

```js
import { promises as fs } from "node:fs";

const content = await fs.readFile(path, "utf-8");
```

If we search Google for "Read file Python", we get an example which suggests we can write something like:

```python
with open(args.path, "r") as f:
    content = f.read()
```

Comparing these shows some interesting differences, particularly around {{<tooltip text="scope" title="Scope">}}Scope is where a variable can be accessed from.{{</tooltip>}}.

### Scope

In Python, we made our `content` variable in an indented block.

In JavaScript this wouldn't have worked - in JavaScript when we declare a variable with `const` it only exists in the scope where it was defined.

In Python, the `content` variable can be used for the rest of the function it's declared in. We call this {{<tooltip title="hoisting">}}Hoisting is where a variable is considered to exist at a broader scope than where it was declared.{{</tooltip>}}.

### `with` blocks

In Python, there's this `with` construct. Instead of writing `f = open(args.path, "r")` we wrote `with open(args.path, "r") as f:`.

This has two interesting effects:

One is that the variable we're declaring (`f`) doesn't get hoisted - it only exists within the `with` block.

The other is that at the end of the `with` block, the file is closed. Not only does `f` stop existing at the end of the block, but some code also gets run to clean up the resources `f` was using.
