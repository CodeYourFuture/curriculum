+++
title = "Worked example: Duplicate Encoder"
time = 90
[build]
  render = "never"
  list = "local"
  publishResources = false
objectives = [
    "Analyse the time complexity of a function.",
    "Compare two algorithms for solving the same problem in terms of complexity.",
    "Identify that speed isn't the only factor in choosing the best code.",
]
+++

Let's consider this problem:

{{<note type="exercise">}}
Convert a string to a new string. The new string should:
* Replace each character which occurs exactly once in the original string with a `1` character.
* Replace each character which occurs more than once in the original string with a `*` character.

Ignore capitalization when determining if a character is a duplicate.

Examples
Input       | Output
------------|-------
`"din"`     | `"```"`
`"recede"`  | `"1*1*1*"`
`"Success"` | `"*1**1**"`
`"11*2"`    | `"**11"`
```
{{</note>}}

> [!WARNING]
>
> First, try solving this exercise yourself.

Here are three sample solutions we will compare:

```js {linenos=table}
function duplicateEncode(mixedCaseWord){
  const lowerCaseWord = mixedCaseWord.toLowerCase();
  let result = ""
  for (const char of lowerCaseWord) {
    if (lowerCaseWord.indexOf(char) === lowerCaseWord.lastIndexOf(char)) {
      result += "1";
    } else {
      result += "*";
    }
  }
  return result;
}
```

```js {linenos=table}
function duplicateEncode(word){
  const chars = word.split("");
  let result = ""
  for (const char of chars) {
    const charInCases = [char.toLowerCase(), char.toUpperCase()];
    if (chars.findIndex((c) => charInCases.includes(c)) === chars.findLastIndex((c) => charInCases.includes(c))) {
      result += "1";
    } else {
      result += "*";
    }
  }
  return result;
}
```

```js {linenos=table}
function duplicateEncode(word){
  const occurrences = {};
  for (const char of word) {
    const normalisedChar = char.toLowerCase();
    occurrences[normalisedChar] = (occurrences[normalisedChar] || 0) + 1;
  }
  let out = "";
  for (const char of word) {
    out += (occurrences[char.toLowerCase()] === 1 ? "1" : "*");
  }
  return out;
}
```

### Comparing the approaches

Approaches 1 and 2 are very similar. In terms of time and memory complexity, they are the same as each other. But the second uses less memory than the first. The first one keeps around an entire copy of `word` (converted to lower case) for the whole function. The second one only converts each character in `word` to lower case one at a time. It's important to remember that big-O complexity doesn't tell you how much time or memory an approach takes, only fast how they grow.

Approaches 2 and 3 are quite different. Let's analyse them each for time complexity:

#### Approach 2

* Approach 2 splits `word` into an array (line 2). If we say the size of the word is `n`, splitting a string of that length is `O(n)`.
* Line 4 has a `for`-loop over each character in the word. A `for`-loop on its own is `O(n)`.
* Line 5 calls `char.toLowerCase()` - this is an `O(1)` operation - changing the case of one character takes constant time. It also calls `char.toUpperCase()` - also an `O(1)` operation. Two `O(1)` operations are still `O(1)`.
* Line 6 calls `chars.findIndex` - this is an `O(n)` operation - it may have to look through the whole string, comparing every character to see if it's the one we're looking for. Because we have an `O(n)` operation (the `chars.findIndex` call) inside an `O(n)` operation (the for loop), this makes the function at least `O(n^2)`.
* Line 6 also calls `chars.lastIndexOf` - this is _also_ an `O(n)` operation for the same reason. But it doesn't change the complexity of our function - doing an `O(n)` operation _twice_ is still `O(n)` - we ignore constant factors. This is different from doing an `O(n)` operation inside a for loop (where do we do an `O(n)` operation _for each `n`_ - making it `O(n^2)`).
* Line 6 _also_ calls `charInCases.includes` - this is generally an `O(n)` operation, but because we know the array has a constant size (it always contains exactly two elements, regardless of the input size), in this instance it's an `O(1)` operation. It's the same as if we'd written `chars.findIndex((c) => c === lowerCaseChar || c === upperCaseChar)`. Remember, the `n` in `O(n)` refers to the input size, and here the input size is a constant - it doesn't depend on `n`.

Because the worst thing we've seen is `O(n^2)` (an `O(n)` operation inside a `for` loop), approach 2 takes `O(n^2)` time.

#### Approach 3

* Approach 3 has a `for`-loop over each character in the word (line 3). This is `O(n)`.
* Each operation inside the `for`-loop is `O(1)` (converting one character to lower case, looking up a value in an object, adding two numbers, inserting a value in an object). So this whole loop is `O(n)`.
* We have a second `for`-loop over each character in the word - `O(n)`.
* Each operation inside the `for`-loop is `O(1)` (converting one character to lower case, looking up a value in an object, a ternary operator, and appending one character to a string). So this whole loop is `O(n)`.

Because the worst thing we've seen is `O(n)` (even though there were two `O(n)` loops), approach 3 takes `O(n)` time.

This technique is called {{<tooltip text="precomputing" title="Precomputing">}}Precomputing is when we do some work in advance which we can use to avoid needing to do it later.<br /><br />Here we counted the occurrences of each character _before_ the loop (which was `O(n)`) rather than needing to search through the string for each character (which would've been `O(n^2)`).{{</tooltip>}}. We will learn more about it later.

### Which is better?

Approach 3 has a better time complexity than approach 2. As longer input is given to the function, approach 3 will be much faster than approach 2.

Speed is not the only concern, however!

Approach 3 uses more memory than approach 2 (though not in terms of memory complexity), because it stores a whole extra object.

Which approach do you think is easiest to read? Ease of reading is an important concern to consider in code.

If we know our function will only take small strings as input, the time and memory use of the functions probably doesn't matter much, and we should prefer the easiest code to read, maintain, and modify. We can still make small choices to speed things up (like choosing approach 2 over approach 1). But we should only make our code harder to read if we know that we'll have a problem if we don't.
