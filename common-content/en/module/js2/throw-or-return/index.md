+++
title = 'Throw or return?'

time = 10
[objectives]
    1='Decide whether a function should throw an error or return a value'
    2='Identify where in a program an error should be handled'
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

We now have two ways for a function to respond when it meets a problem: return a value, or throw an error. How do we choose?

### Expected situations: use a return value

If a situation is a normal part of using the function, handle it with ordinary code. Searching an array for a value that isn't there is not an error; that's why [`indexOf`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf) returns `-1` rather than throwing. The caller expects both outcomes and can check with an `if`.

### Broken expectations: throw

If the function _cannot do what its name promises_, throw. `calculateMedian("apple")` can't calculate any median; returning a made-up value would hide a bug in the caller's code. Throwing makes the problem loud and points at where it was detected.

A useful question to ask: **is this situation something the caller should have prevented?** Passing a string to `calculateMedian` is a bug in the calling code, so throw. A user typing their name into a date field is not a bug, it's expected human behaviour, so handle it with normal conditional logic.

### Where should errors be caught?

_Throwing_ tells us the function can't do its job. _Catching_ is about something different: who can do something useful with that information?

Only catch an error where you can do something useful with it: skip one bad record and continue, use a default value instead, or show the user a helpful message. If the code you're in can't do any of those things, don't catch the error there. Let it travel up to a caller who can. If nobody can do anything useful with the error, it's better for the program to crash with a clear error trace, because that shows exactly what needs to be fixed.

### 🧰 Decide for yourself

For each scenario, decide what the code should do before you check the answer. Some of these are judgement calls, so what matters most is your reasoning: is this situation expected or a broken expectation, and who can do something useful about it?

{{<multiple-choice
  question="The function formatAs12HourClock is called with '25:00'. There is no such time. What should formatAs12HourClock do?"
  answers="Throw an error | Return '25:00 am' | Return undefined"
  feedback="Right. The function cannot format a time that does not exist: the caller should have prevented this, so failing fast points at the real bug. | This looks like an answer, so the caller carries on displaying a nonsense time to users. | Returning undefined is quieter than throwing but just as unhelpful: the caller gets a strange value with no explanation of what went wrong."
  correct="0"
>}}

{{<multiple-choice
  question="A user types 'eleven' into a form field asking how many tickets they want. What should the program do?"
  answers="Check the input and show the user a helpful message | Throw an error | Nothing, the input is fine"
  feedback="Right. Users typing unexpected things is normal human behaviour, not a bug, so handle it with ordinary conditional logic. | A person mistyping is an expected situation, not a broken expectation in our code. Throwing turns normal use into a crash. | 'eleven' is not a number, so the program cannot book eleven tickets without dealing with it somehow."
  correct="0"
>}}

{{<multiple-choice
  question="A program producing a summary of 100 data files finds that one file is corrupted. What should the summary loop do?"
  answers="Catch the error, report the bad file, and continue | Let the whole program crash | Silently skip the file"
  feedback="Right. The loop can do something useful with the error: skip the bad file, tell the user about it, and still summarise the other 99. | Crashing throws away 99 files of good work when the loop could recover and report the problem instead. | This swallows the error: the summary is quietly missing a file and nobody knows to fix it."
  correct="0"
>}}

{{<multiple-choice
  question="divide(a, b) is called with b equal to 0. What should divide do?"
  answers="Throw an error | Return 0 | Return Infinity because that is what JavaScript does"
  feedback="Right. divide cannot do what its name promises with a zero divisor, and a zero here usually means a bug in the calling code. Some teams make a different, documented choice, but it must be a deliberate one. | Zero is a made-up answer that hides the caller's bug and will be used as if it were real. | JavaScript's own operator does evaluate to Infinity, but for our function that quietly passes a strange value along instead of surfacing the problem where it happened."
  correct="0"
>}}
