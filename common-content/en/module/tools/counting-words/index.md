+++
title = "Counting words containing a character"
headless = true
time = 15
facilitation = false
emoji= "📖"
hide_from_overview = true
objectives = [
]
+++

In JavaScript we wrote:

```js
content.split(" ").filter((word) => word.indexOf(char) > -1).length
```

What JavaScript calls arrays, Python calls lists. Arrays and lists are basically the same.

Googling for "Python filter list" suggests there are two things we can use - a `filter` function, or something called a "list comprehension". Some people prefer one, other people prefer the other.

Using filter (`lambda` is a keyword for making an anonymous function in Python):

```python
filter(lambda word: args.char in word, content.split(" "))
```

Using a list comprehension:

```python
[word for word in content.split(" ") if args.char in word]
```

Then we need to get the length of the produced list. Googling "python length of list" tells us we wrap our list in a call to `len()`, giving:

```python
len([word for word in content.split(" ") if args.char in word])
```

or

```python
len(filter(lambda word: args.char in word, content.split(" ")))
```

The list comprehension version of this works. The `filter` version gives an error. We can try to understand and fix the error, or just use the list comprehension version.
