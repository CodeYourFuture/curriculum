+++
title = '🧱 Assembling the parts'
headless = true
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

{{<note type="activity" title="Run it">}}
Try running the code above and check the console output. What do you see?
{{</note>}}

### 🐛 Finding the bug

With the code above, the `median` value is correct: however, the `mean` is _incorrect_.

If we add a log into the program we can try and identify the origin of the bug.

```js
const salaries = [10, 20, 30, 40, 60, 80, 80];
console.log(salaries, "<--- salaries input before we call calculateMedian");
const median = calculateMedian(salaries);

console.log(salaries, "<--- salaries input before we call calculateMean");
const mean = calculateMean(salaries);

console.log(`The median salary is ${median}`);
console.log(`The mean salary is ${mean}`);
```

{{<note type="activity" title="Run it">}}
Try re-running the code above with the additional log. What does this
{{</note>}}
