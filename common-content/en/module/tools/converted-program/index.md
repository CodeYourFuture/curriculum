+++
title = "Putting it all together"
headless = true
time = 30
facilitation = false
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

parser.add_argument("-c", "--char", help="The character to search for", default="e")
parser.add_argument("path", help="The file to search")

args = parser.parse_args()

with open(args.path, "r") as f:
    content = f.read()
count_of_words_containing_char = len([word for word in content.split(" ") if args.char in word])
print(count_of_words_containing_char)
```

This looks similar to the JavaScript version. The shape is the same, but every line is a little bit different.

Some programming languages are very different, as different as Mandarin and English. But JavaScript and Python are, essentially, quite similar, like Spanish and Portuguese.
