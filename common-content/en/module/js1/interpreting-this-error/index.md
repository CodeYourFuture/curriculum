+++
title = 'Interpreting this error'

time = 20
[objectives]
1='Interpret an error message'
2='Break down an error message and look up unfamiliar parts'
3='Rephrase an error message'

[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

We saw this error - let's try to understand it:

```
TypeError: Assignment to constant variable.
```

### Knowing what we changed

It can be useful to remember when our code last worked, and what we changed since then.

{{<note type="tip" title="Tip: Commit history">}}
Source control can help here.

If you commit your code every time you make something work, you can use git to easily see what changed since your last commit.
{{</note>}}

Everything worked until we made the refactor in the last section. The error appeared when we made the changes. The problem is that we made changes in a few places.

{{<note type="tip" title="Tip: Check things often">}}

Run your code very often.

If we changed one thing since our code last worked, we know what change is the problem. If we have written 100 lines of code since we last saw it work, we have 100 possible problems.

{{</note>}}

### Interpreting the error message

The error message tries to tell us useful information:

```
TypeError: Assignment to constant variable.
```

When we get an error, we should make sure we understand all of the words in the error message. If we don't, we should look them up or ask someone.

{{<note type="exercise" title="Exercise">}}

For each word in this error message, write down what it means.

If you don't know a word, look it up.

Make sure you _understand_ each word. Make sure you could explain the word to someone _without reading the answer to them_.

{{</note>}}

<details>

<summary>
Expand for example definitions - only expand this after you have written yours down. Compare your answers with these.
</summary>

- **TypeError** - If we Google "JavaScript SyntaxError", [MDN tells us](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError) this is "an error when an operation could not be performed". It goes on to say they can be thrown when "attempting to modify a value that cannot be changed". We may be trying to modify something when we aren't allowed to do so.
- **Assignment** - If we Google "JavaScript Identifier", the first hit from [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Assignment) talks about "assigning a value to a variable or property". That's exactly what we're trying to do on line 11.
- **to** is a standard English word with no special meaning.
- **constant** - If we Google "JavaScript constant", [MDN tells us](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const) that "the value of a constant can't be changed through reassignment using the assignment operator". It also references the `const` keyword which we use earlier in the program.
- **variable** - We learnt about this already in this course - a **variable** is used to store a piece of data in a program.

Reading that back, we can rephrase this error message:

We tried to modify something which we weren't allowed to modify. We tried to assign a new value to the `response` variable on line 11, but because it was declared using the `const` keyword its value can't be changed.

{{<note type="tip" title="Tip: Googling technical terms">}}
In every example here we have included "JavaScript" in our Google search. We need to be specific, other languages may not describe errors in the same way.
{{</note>}}

</details>
