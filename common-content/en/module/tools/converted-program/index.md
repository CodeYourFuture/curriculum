+++
title = "Putting it all together"
headless = true
time = 30
facilitation = false
emoji= "📖"
hide_from_overview = true
objectives = [
]
+++

Instead of calling `console.log`, in Python we call `print`.

```python
import argparse

parser = argparse.ArgumentParser(
    prog="count-containing-words",
    description="Counts words in a file that contain a particular character",
)

parser.add_argument("-c", "--char", help="The character to search for", default="-")
parser.add_argument("path", help="The file to search")

args = parser.parse_args()

with open(args.path, "r") as f:
    content = f.read()
words_containing_char = len(filter(lambda word: args.char in word, content.split(" ")))
print(words_containing_char)
```

This looks pretty similar to the JavaScript version. The essential shape is the same. But every line is a least a little bit different.

Some programming languages are a lot more different. But JavaScript and Python are, essentially, quite similar.
