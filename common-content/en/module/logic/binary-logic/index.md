+++
title = "Boolean Logic"
time = 45
[build]
  render = 'never'
  list = 'local'
  publishResources = false
[objectives]
    1="Define binary logic and its role in computing"
    2="Express logical statements as truth tables"
+++

> Boolean logic uses only **true** or **false** to reason about the world.

In the real world, we use logic to make decisions all the time. For example: if it's raining and you don't have an umbrella, you will get wet. This can be represented as a truth table:

{{<columns>}}

| Is Raining | Has Umbrella | Is Wet |
| ---------- | ------------ | ------ |
| F          | F            | F      |
| F          | T            | F      |
| T          | F            | T      |
| T          | T            | F      |

Truth tables show all possible combinations and all possible outcomes.
<--->

> _Given_ A is true (1)  
> _And_ B is true (1)  
> _Then_ A AND B is true (1)

{{</columns>}}

In computers, we use binary logic to derive conclusions from data. Each bit can represent a logical state: {{<tooltip title="true">}}Represented as 1 in binary{{</tooltip>}} or {{<tooltip title="false">}}Represented as 0 in binary{{</tooltip>}}.

| Raining | Umbrella | Wet |
| ------- | -------- | --- |
| 0       | 0        | 0   |
| 0       | 1        | 0   |
| 1       | 0        | 1   |
| 1       | 1        | 0   |

This is fundamental to how computers work. Every operation a computer performs, from simple addition to complex decision-making, ultimately comes down to chains of basic logical operations on 1s and 0s.

Try building some truth tables yourself in your notebook. Here are some examples to get you started:

- "You can get a loyalty reward if you have the app AND have made 10 purchases"
- "The alarm will sound if the door is open OR motion is detected, UNLESS the system is disabled"
- "Trainees pass the course if they complete coursework AND attend class AND complete their steps"
