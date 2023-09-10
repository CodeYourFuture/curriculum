+++
title = '🏤 References'
headless = true
time = 20
facilitation = false
emoji= '🧩'
[objectives]
    1='Define reference'
    2='Describe some effects of variables being assigned the same array reference'
    3='Identify when 2 variables will share the same array reference'
+++

Arrays are stored by {{<tooltip title="reference">}}
A reference points to a location in memory.
{{</tooltip>}}

Consider the following example,

```js
const list = [10, 20, 30];
const copy = list;
copy.push(60, 70);

console.log(list);
console.log(copy);
```

Let's break down what is happening in this program.

{{<tabs name="">}}

{{<tab name="🎮 Playing computer">}}

Play computer with the code above to step through the code and find out what happens when the code is executed.

<iframe title="playing-computer-reference "width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=const%20list%20%3D%20%5B10,%2020,%2030%5D%3B%0Aconst%20copy%20%3D%20list%3B%0Acopy.push%2860,%2070%29%3B%0A%0Aconsole.log%28list%29%3B%0Aconsole.log%28copy%29%3B&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>

{{</tab>}}

{{<tab name="📜 Explanation">}}

![point-to-array](point-to-array.png)

- We make an array `[10, 20, 30]` and store it somewhere in memory.
- `list` is assigned a **reference** to `[10, 20, 30]`
- `copy` is assigned a **reference** pointing at the same memory as `list`

At this stage in the program, `list` and `copy` point to the same location in memory.

- `push` function mutates (changes) the array that `copy` points to.
- prints out `list`: `[10, 20, 30, 60, 70]`
- prints out `copy`: `[10, 20, 30, 60, 70]`

So as `copy` and `list` point to the same array.
If we mutate `list` then we're mutating the same list that `copy` points to.

So the console output is the same.

{{</tab>}}

{{<tab name=" 🧠  Explain">}}

```js {linenos=table,hl_lines=["4"],linenostart=1}
const salaries = [10, 20, 30, 40, 60, 80, 80];
const median = calculateMedian(salaries);

console.log(salaries, "<--- salaries input before we call calculateMean");
const mean = calculateMean(salaries);

console.log(`The median salary is ${median}`);
console.log(`The mean salary is ${mean}`);
```

In the example above, `salaries` is assigned a reference on the first line.
Explain why `calculateMedian` and `calculateMean` both get access to the same array.

{{</tab>}}

{{</tabs>}}

### Shared reference

We can also check these variables share the same reference.

```js
const list = [10, 20, 30];
const copy = list;

console.log(list === copy); // evaluates to true
```

If we're comparing 2 array variables with `===`, then it will evaluate to `true` only if they have the **same reference**. `===` is comparing the references to the arrays, not the arrays themselves.
