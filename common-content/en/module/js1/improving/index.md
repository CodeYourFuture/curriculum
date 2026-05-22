+++
title = 'Improving the code'

time = 30
[objectives]
1='Explain why refactoring is necessary in the production of software'
2='Suggest several appropriate ways to refactor a given piece of code'
3='Identify and fix a bug'
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

### Refactoring

Now the assertions pass: in other words, our function’s current output matches with the target output described in the assertions.

In addition to implementing functionality, we also need to continually improve the code quality.
Other developers will continue to read our code so it's vital our code is readable by other humans.

{{<note type="tip" title="Definition: refactoring">}}
The process of updating our code quality (without changing the implementation) is called **refactoring**.

{{</note>}}

Let's consider our working implementation so far:
Currently, we’re using the same expression twice: `Number(time.slice(0, 2))`. This means we’re calling the functions `Number` and `slice` twice.

Additionally, expressions embedded inside curly braces and parentheses can often be difficult to read. In this situation it makes sense to label the recurring expression so we can reuse it wherever we need to in our code.

Let’s create a variable called `hours` and assign to it our expression's result.

```js
function formatAs12HourClock(time) {
  const hours = Number(time.slice(0, 2));

  if (hours > 12) {
    return `${hours - 12}:00 pm`;
  }
  return `${time} am`;
}
```

Note that the function's behavior hasn't changed: it still returns the same outputs from the given inputs. We've just improved the implementation without changing the underlying behaviour.

### 🐛 Fixing bugs

Here is our current implementation of `formatAs12HourClock`:

```js
function formatAs12HourClock(time) {
  const hours = Number(time.slice(0, 2));

  if (hours > 12) {
    return `${hours - 12}:00 pm`;
  }
  return `${time} am`;
}
```

However, `formatAs12HourClock` currently has a {{<tooltip title="bug">}}Any unintended behaviour or effect from our software is called a **bug**.{{</tooltip>}}

{{<tabs name="bug fix">}}
===[[⚖️ Check the code]]===

```js
function formatAs12HourClock(time) {
  const hours = Number(time.slice(0, 2));

  if (hours > 12) {
    return `${hours - 12}:00 pm`;
  }
  return `${time} am`;
}
```

a) Write an assertion to check the output of `formatAs12HourClock` when it is called with an input `"17:42"`
b) Check the assertion output and try to explain what the bug is

===[[🔧 Fix]]===

Once you've established the bug in the code, try removing the bug by updating the implementation of `formatAs12HourClock`.

===[[⚖️ Re-run assertions]]===

Once you've changed the implementation to `formatAs12HourClock`, re-run **all** the assertions to check you've not broken any previous functionality.

{{</tabs>}}
