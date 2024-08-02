+++
title = '🧱 Assembling the parts'
[build]
    render = false
    list = 'local'
    publishResources = false
time = 10
facilitation = false
emoji= '🧩'
[objectives]
1='Identify a bug when a function gives an unexpected output'
+++

Now suppose we have a program where we use the functions we implemented earlier:

```js
const salaries = [10, 20, 30, 40, 60, 80, 80];
const median = calculateMedian(salaries);
const mean = calculateMean(salaries);

console.log(`The median salary is ${median}`);
console.log(`The mean salary is ${mean}`);
```

{{<tabs>}}

{{<tab name="🧠 💬 Predict and explain">}}

Predict and explain what will get printed to the console when the code above runs.

Then run the code above on your local machine to check your prediction. Does your initial explanation now make sense?

_(Note: you'll have to declare the functions somewhere too)_

{{</tab >}}

{{</tabs>}}

### 🐛 Finding the bug

In the code above, the `median` value is correct: however, the `mean` is _incorrect_.

We can add a log to the program to identify the origin of the bug.

```js {linenos=table,hl_lines=["4"],linenostart=1}
const salaries = [10, 20, 30, 40, 60, 80, 80];
const median = calculateMedian(salaries);

console.log(salaries, "<--- salaries input before we call calculateMean");
const mean = calculateMean(salaries);

console.log(`The median salary is ${median}`);
console.log(`The mean salary is ${mean}`);
```

{{<note type="activity" title="Run it">}}
Try re-running the code above with the additional log. What does this tell you?
{{</note>}}

To understand why this bug occurs, we need to explore more concepts.
