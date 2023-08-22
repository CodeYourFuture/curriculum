+++
title = '🧱 Assembling the parts'
headless = true
time = 30
facilitation = false
emoji= '🧩'
[objectives]
1='Describe how to compute the mean of a set of data'
+++

Now suppose we have a program where we use the functions we implemented earlier:

```js
const salaries = [10, 20, 30, 40, 60, 80, 80];
const median = calculateMedian(salaries);
const mean = calculateMean(salaries);

console.log(`The median is ${median}`);
console.log(`The mean is ${mean}`);
```

{{<note type="activity">}}
Try execute the code above with node to check the output
{{</note>}}

## 🐛 Finding the bug

At the moment, we try and calculate the `median` and the `mean`. The `median` value is correct: however, the `mean` is _incorrect_.

If we add a log into the program we can try and identify the origin of the bug.

```js
const salaries = [10, 20, 30, 40, 60, 80, 80];
const median = calculateMedian(salaries);
console.log(salaries);
const mean = calculateMean(salaries);

console.log(`The median is ${median}`);
console.log(`The mean is ${mean}`);
```
