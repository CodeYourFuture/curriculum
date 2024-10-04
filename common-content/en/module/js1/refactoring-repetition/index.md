+++
title = '🧹 Refactoring repetition'

time = 30
facilitation = false
emoji= '🧹'
[objectives]
1='Refactor code to remove duplication'
2='Explain why duplicated code can cause problems'
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

Let's look at our current code, which passes all of the tests we've written:

```js {linenos=table,linenostart=1,hl_lines=["2-3"]}
function formatAs12HourClock(time) {
  if (Number(time.slice(0, 2)) > 12) {
    return `${Number(time.slice(0, 2)) - 12}:00 pm`;
  }
  return `${time} am`;
}

const currentOutput = formatAs12HourClock("08:00");
const targetOutput = "08:00 am";
console.assert(
  currentOutput === targetOutput,
  `current output: ${currentOutput}, target output: ${targetOutput}`
);

const currentOutput2 = formatAs12HourClock("23:00");
const targetOutput2 = "11:00 pm";
console.assert(
  currentOutput2 === targetOutput2,
  `current output: ${currentOutput2}, target output: ${targetOutput2}`
);
```

One thing that you may notice about the `formatAs12HourClock` function is we do exactly the same thing twice inside it.

There is identical code: `Number(time.slice(0, 2))` both in the condition of the `if` statement, and in the value we return.

There are a few reasons this isn't ideal.

One is that it's not very obvious what this value represents. You can read it and work it out, but that takes some time.

Another is that it's slower than it needs to be - we're doing the same thing twice, which is going to be slower than doing it once.

One of the most important reasons is that if we need to change the implementation, we need to change it twice. For instance, right now our code assumes the hours in a time are always two digits (like `05:00`). What if we wanted to support single-digit hours, like `5:00`? We would need to make the same change to both lines. It would be easy to change one line and forget the other, which would lead to a bug.

It's a good habit, after you've got a test passing, to look for ways you could make your code better. This doesn't mean changing _what_ it does - the code works. It means changing how it's written.

This is called refactoring.

{{<note type="tip" title="Definition: refactoring">}}
To refactor means to update our code _quality_ without changing the _implementation_.
{{</note>}}

We can refactor our code to remove this duplication by introducing a variable:

```js {linenos=table,linenostart=1,hl_lines=["2-4"]}
function formatAs12HourClock(time) {
  const hours = Number(time.slice(0, 2));
  if (hours > 12) {
    return `${hours - 12}:00 pm`;
  }
  return `${time} am`;
}

const currentOutput = formatAs12HourClock("08:00");
const targetOutput = "08:00 am";
console.assert(
  currentOutput === targetOutput,
  `current output: ${currentOutput}, target output: ${targetOutput}`
);

const currentOutput2 = formatAs12HourClock("23:00");
const targetOutput2 = "11:00 pm";
console.assert(
  currentOutput2 === targetOutput2,
  `current output: ${currentOutput2}, target output: ${targetOutput2}`
);
```

This code does exactly the same thing as the previous code. But it is better in a few ways:

1. We can now tell more easily what this expression represents. The variable conveys: it's the hours from the time.
2. We only compute the hours once, not twice, which will be a little bit faster.
3. If we need to change how we identify the hours (e.g. to support single-digit hours), we only need to update one bit of code. Both lines 3 and 4 will automatically use the same value, because they're referring to the same variable.

{{<note type="tip" title="tip">}}
Whenever you finish implementing a sub-goal, or a goal, read your code and look for ways to refactor it, to increase its quality.
{{</note>}}
