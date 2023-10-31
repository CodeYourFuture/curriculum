+++
title = '🗺️ map'
headless = true
time = 30
facilitation = false
emoji= '🧩'
[objectives]
    1='Describe how to use map'
    2='Describe why we use map instead of other iteration techniques'
+++

### Using `map`

For every item in the starting array we want to apply a function to all the elements in the array to create a new array.
Earlier, we used a `for...of` statement to apply the function `createShowCard` to each element in the array. However, we can also use `map` to do this.

`map` is a {{<tooltip title="higher order function">}} A **higher order function** is a function that takes another function as an argument or returns a new function.{{</tooltip>}}. In this case, it means we pass a function as an argument to `map`. Then `map` will use this function to create a new array. Let's consider an example with a list of numbers and a function `Math.round` that returns the rounded number. Our goal is to create a new array of rounded numbers from the starting array of numbers:

```js
function round(num) {
  return Math.round(num);
}

const items = [1.4, 5.6, 10.2, 30.9];
const roundedItems = [round(1.4), round(5.6), round(10.2), round(30.9)];
```

We can build an array like this using `map`

```js
function round(num) {
  return Math.round(num);
}

const items = [1.4, 5.6, 10.2, 30.9];
const roundedNums = items.map(Math.round);
```

{{<tabs name="Explore map">}}

{{<tab name="🎨 Array visualiser">}}

<iframe title="array-visualiser" width="768" height="432" src="https://array-visualizer.codeyourfuture.io/" frameborder="0" scrolling="no" allow="fullscreen; clipboard-read; clipboard-write" allowfullscreen></iframe>

Use the array visualiser to visualise what happens when `map` is used on the `arr`. Try changing the elements of `arr` and the function that is passed to `map`. Also answer the following questions in the visualiser:

- What does `map` do?
- What does `map` return?
- What parameters does the `map` method take?
- What parameters does the callback function take?

{{</tab>}}

{{<tab name="🎮 Play computer">}}

<iframe title="play-computer-arrays" width="1100" height="400" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=%0Aconst%20items%20%3D%20%5B'apple','orange','banana'%5D%3B%0Aconst%20roundedNums%20%3D%20items.map%28v%20%3D%3E%20v.toUpperCase%28%29%29%3B&codeDivHeight=500&codeDivWidth=500&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>

Play computer with the example to see what happens when the `map` is called.

{{</tab>}}

{{</tabs>}}
