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
SyntaxError: Identifier 'currentOutput' has already been declared
```

### Knowing what we changed

It can be useful to remember when our code last worked, and what we changed since then.

{{<note type="tip">}}
Source control can help here.

If you commit your code every time you make something work, you can use git to easily see what changed since your last commit.
{{</note>}}

When we just had the first 10 lines of code here, everything worked. When we added the rest, we got this error:

```js {linenos=table,linenostart=1,hl_lines=["12-17"]}
function formatAs12HourClock(time) {
  return `${time} am`;
}

const currentOutput = formatAs12HourClock("08:00");
const targetOutput = "08:00 am";
console.assert(
  currentOutput === targetOutput,
  `current output: ${currentOutput}, target output: ${targetOutput}`
);

const currentOutput = formatAs12HourClock("23:00");
const targetOutput = "11:00 pm";
console.assert(
  currentOutput === targetOutput,
  `current output: ${currentOutput}, target output: ${targetOutput}`
);
```

{{<note type="tip" title="Tip">}}

Run your code very often.

If we changed one thing since our code last worked, we know what change is the problem. If we have written 100 lines of code since we last saw it work, we have 100 possible problems.

{{</note>}}

### Interpreting the error message

The error message tries to tell us useful information:

```
SyntaxError: Identifier 'currentOutput' has already been declared
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

- **SyntaxError** - If we Google "JavaScript SyntaxError", [MDN tells us](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError) this is "an error when trying to interpret syntactically invalid code". So - we wrote some code which isn't allowed.
- **Identifier** - If we Google "JavaScript Identifier", [MDN tells us](https://developer.mozilla.org/en-US/docs/Glossary/Identifier): this is "a sequence of characters in the code that identifies a variable, function, or property". On line 12, the identifier is the variable name: `currentOutput`.
- **currentOutput** - This is the variable name we used in our code. This is the **identifier** that the error is about.
- **has**, **already**, and **been** are all standard English words with no special meaning.
- **declared** - We learnt about this already in this course - a **declaration** is where we make a new name (e.g. a new variable) in JavaScript.

Reading that back, we can rephrase this error message:

We wrote some code which isn't allowed. We tried to declare a new variable named `currentOutput`. But we had already declared something named `currentOutput`.

</details>
