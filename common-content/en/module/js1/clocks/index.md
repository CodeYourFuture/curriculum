+++
title = '12 vs 24 hour clock'

time = 10
hide_from_overview = true
[objectives]
 1='Identify a pattern between a set of inputs and outputs produced by a given function'
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

We usually write [the time](https://www.bbc.co.uk/bitesize/topics/zkfycdm/articles/z44mqfr) in one of two ways: the analogue 12 hour clock or the digital 24 hour clock. The 12 hour clock counts up to 12: it resets at midday. The 24 hour clock counts up to 24: it resets at midnight.

{{<tooltip title="Conversion from 24 hour to 12 hour">}}

| 2️⃣4️⃣ hour time | 🕛 12 hour time |
| -------------- | --------------- |
| 09:00          | 09:00 am        |
| 10:00          | 10:00 am        |
| 11:30          | 11:30 am        |
| 12:00          | 12:00 **pm**    |
| 13:43          | 1:43 **pm**     |
| 14:00          | 2:00 **pm**     |

{{</tooltip>}}

We use the notation "HH:MM". HH is our stand-in for the hours value. MM is our stand-in for the minutes value.

## 🧩 Stating the problem

Let's pose a problem: given any time in 24 hour clock, we want to format it as a 12 hour clock time. To achieve this goal, we're going to implement a function `formatAs12HourClock`.

_Given_ a time in 24 hour clock  
_When_ we call `formatAs12HourClock`  
_Then_ we get back a string representing the same time in 12 hour clock.

### 🧪 Our tests:

I expect `formatAs12HourClock("09:00")` to be `"09:00 am"`  
I expect `formatAs12HourClock("14:19")` to be `"2:19 pm"`
