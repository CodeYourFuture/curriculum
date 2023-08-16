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

Now the assertions pass: in other words, our function’s current output matches with the target output described in the assertions.

In addition to implementing functionality, we also need to continually improve the code quality.
Other developers will continue to read our code so it's vital our code is readable by other humans.

{{<note definition="Definition: refactoring">}}
The process of updating our code quality (without changing the implementation) is called **refactoring**
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
