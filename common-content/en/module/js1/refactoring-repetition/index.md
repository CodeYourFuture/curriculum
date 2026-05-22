+++
title = 'Refactoring repetition'

time = 30
[objectives]
1='Refactor code to remove duplication'
2='Explain why duplicated code can cause problems'
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

Let's look at our code, which passes all of the tests we've written:

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

Inside the `formatAs12HourClock` function we do exactly the same thing twice.

{{<note type="activity" title="Exercise">}}
Identify the two bits of code inside `formatAs12HourClock` that do exactly the same thing.
{{</note>}}

There are a few reasons this isn't ideal.

1. It's not clear what this value represents. You can read it and work it out, but that takes some time.
2. Doing the same thing twice is slower than doing it once.
3. In the future if we need to change this code's implementation, we would need to change it **twice**.  
   Right now our code assumes the hours in a time are always two digits (like `05:00`). What if we wanted to support single-digit hours, like `5:00`? We would need to make the same change to both lines. It would be easy to change one line and forget the other, which would lead to a bug.

### Refactor

Once your code passes your test, look for ways you could make your code better. This doesn't mean changing _what_ it does - the code works. It means changing how it's written.

This is called {{<tooltip title="refactoring">}}To refactor means to update our code _quality_ without changing the _implementation_. Changing _how_ it does something, not changing _what_ it does.{{</tooltip>}}.

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

1. We can now tell more easily what this expression represents. The variable name conveys: it's the hours from the time.
2. We only compute the hours once, not twice, which will be a little bit faster.
3. If we need to change how we identify the hours (e.g. to support single-digit hours), we only need to update one bit of code. Both lines 3 and 4 will automatically use the same value, because they're referring to the same variable.

{{<note type="tip" title="Code Quality">}}
Whenever you finish implementing a sub-goal, or a goal, read your code and look for ways to refactor it.

This will make your code easier to continue working on.
{{</note>}}
