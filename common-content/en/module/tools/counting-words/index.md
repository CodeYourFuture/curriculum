+++
title = "Counting words containing a character"
headless = true
time = 45
facilitation = false
hide_from_overview = true
objectives = [
]
+++

In JavaScript we wrote:

```js
content
  .split(" ")
  .filter((word) => word.includes(char))
  .length
```

What JavaScript calls arrays, Python calls lists. Arrays and lists are basically the same.

Googling for "Python filter list" suggests there are two things we can use - a `filter` function, or something called a "list comprehension". Some people prefer one, other people prefer the other.

Let's try out both approaches. We can do this in a standalone program, rather than in the whole word-counting program. This gives us a lot more control, and makes it easier for us to experiment.

{{<note type="Exercise">}}
Create a new file, `filter.py`. Start it with:

```python
content = "this is a list of words"
char = "i"

filtered = TODO

print(filtered)
```

Now fill in the TODO. First, use a list comprehension. Run the file and make sure you get the expected output.

Next, replace your list comprehension with some code that calls the global function `filter`. (`filter` takes a function, and it may be useful to know that `lambda` is a keyword for making an anonymous function in Python, similar to arrow functions in JavaScript). Run the file and make sure you get the expected output.
{{</note>}}

Now that we've learnt how to do the filtering, we can apply what we've learnt to the program we're converting.
