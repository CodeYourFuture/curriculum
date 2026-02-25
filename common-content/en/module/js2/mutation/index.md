+++
title = 'Mutation'

time = 25
[objectives]
    1='Define mutation'
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

Let's take another look at our earlier implementation of `calculateMedian`:

{{<tabs name="implementation">}}
===[[calculate median]]===

```js
function calculateMedian(list) {
  const middleIndex = Math.floor(list.length / 2);
  const median = list.splice(middleIndex, 1)[0];

  return median;
}
```

===[[calculating median and mean]]===

```js
const salaries = [10, 20, 30, 40, 60, 80, 80];

const median = calculateMedian(salaries);
// At this point, the array referenced by salaries has been mutated after calculateMedian(salaries), and a reference to the same array is given to calculateMean
const mean = calculateMean(salaries);

console.log(`The median salary is ${median}`);
console.log(`The mean salary is ${mean}`);
```

{{</tabs>}}

`calculateMedian` gets the middle value by calling `splice`. However, `splice` is a {{<tooltip title="mutating">}}For arrays, mutation means **_changing_** the contents of an array. This could mean changing a value at some index or removing an item altogether.{{</tooltip>}} array method.

When we call `splice` it does 2 things:

- removes the specified item from the list
- returns the removed item

`splice` modifies the array: however, `calculateMean` is also passed a reference to the same array too.

> In other words, `calculateMedian` modifies the same array that is passed to `calculateMean`.

### 🎮 Play computer

Play computer with the example above. Pay careful attention to what happens when `salaries` is passed to `calculateMedian`

<iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=function%20calculateMedian%28list%29%20%7B%0A%20%20const%20middleIndex%20%3D%20Math.floor%28list.length%20/%202%29%3B%0A%20%20const%20median%20%3D%20list.splice%28middleIndex,%201%29%5B0%5D%3B%0A%0A%20%20return%20median%3B%0A%7D%0A%0Aconst%20salaries%20%3D%20%5B10,%2020,%2030,%2040,%2060,%2080,%2080%5D%3B%0Aconst%20median%20%3D%20calculateMedian%28salaries%29%3B%0A%0Aconsole.log%28salaries,%20%22%3C---%20salaries%20input%20before%20we%20call%20calculateMean%22%29%3B&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
