+++
title = '🕥 12 vs 24 hour clock'
headless = true
time = 30
facilitation = false
emoji= '🧩'
[objectives]
 1='Identify a pattern between a set of inputs and outputs produced by a given function'
+++

A typical time can be written in one of 2 ways: 24 hour clock or 12 hour clock.

In 12 hour clock time the hours reset after midday, so an hour after midday is written as 1 pm. The pm means "in the afternoon".

For 24 hour clocks, the hours continue counting up after midday.  
So in 24 hour clock, 1 hour after midday would be 13:00 and so on.
We can write a short table summarising some of the times and how they are converted from 24 hour to 12 hour:

| Time in 24 hour clock | Time in 12 hour clock |
| --------------------- | --------------------- |
| 09:00                 | 09:00 am              |
| 10:00                 | 10:00 am              |
| 11:30                 | 11:30 am              |
| 12:00                 | 12:00 **pm**          |
| 13:43                 | 1:43 **pm**           |
| 14:00                 | 2:00 **pm**           |

Often we use the notation "HH:MM" for a time to denote the fact that the first 2 digits represent hours and then the digits after the ":" represent the minutes.

## 🧩 Stating the problem

Let's pose a problem: given any time in 24 hour clock, we want to format it as a 12 hour clock time.

To achieve this goal, we're going to implement a function `formatAs12HourClock`.

> `formatAs12HourClock` is a function that should take any string representing a time in 24 hour clock
> and return a string of the same time represented in 12 hour clock.
>
> Examples:  
>  `formatAs12HourClock("09:00")` should return `"09:00 am"`  
>  `formatAs12HourClock("14:19")` should return `"2:19 pm"`
> etc...
