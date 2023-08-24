+++
title = '🧹 Improving the code'
headless = true
time = 30
facilitation = false
emoji= '🧩'
[objectives]
1='Explain why refactoring is necessary in the production of software'
2='Suggest several appropriate ways to refactor a given piece of code'
+++

### Refactoring

Now the assertions pass: in other words, our function’s current output matches with the target output described in the assertions. Now we can move on to the next step in our process: {{<tooltip title="refactoring">}}Refactoring is the process of improving the code quality without changing the underlying behaviour. We improve the code quality by making it easier for humans to read and understand.{{</tooltip>}}

We write code for computers to execute and humans to read. The best code is simple and clear.

Let's consider our working implementation so far:

#### Duplication

Currently, we’re using the same expression twice: `Number(time.slice(0, 2))`. This means we’re calling the functions `Number` and `slice` twice.

#### Labelling

Expressions embedded inside curly braces and parentheses can often be difficult to read. In this situation it makes sense to label the recurring expression so we can reuse it wherever we need to in our code.

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
{{<tab name="⚖️ Check the code">}}

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

{{</tab>}}

{{<tab name="🔧 Fix">}}

Once you've established the bug in the code, try removing the bug by updating the implementation of `formatAs12HourClock`.

{{</tab>}}

{{<tab name="⚖️ Re-run assertions">}}

Once you've changed the implementation to `formatAs12HourClock`, re-run **all** the assertions to check you've not broken any previous functionality.

{{</tab>}}

{{</tabs>}}
