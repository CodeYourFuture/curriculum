+++
title = '🔁 iterating'
headless = true
time = 20
facilitation = false
emoji= '🧩'
[objectives]
    1='Define iteration'
    2='Explain why iteration is relevant in a particular problem'
+++

To solve the sub-goal, we have to repeatedly add each number in the array to the `total`, one at a time. In programming, the process of repeating something is called **iteration**.

In programming, we can **iterate** by using a {{<tooltip title="loop">}}A loop is a sequence of instructions that is continually repeated until some condition is reached.{{</tooltip>}}.

In particular, we can use a [`for...of` statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of) to sum the elements of the array.

```js
function calculateMean(list) {
  let total = 0;
  for (const item of list) {
    total += item;
  }
}
```

{{<tabs name="Playing computer">}}

{{<tab name="🕹️ Play computer">}}

**Play computer** with the code below and explore what happens the `for...of` loop is executed.

Pay close attention to what happens when we enter the `for...of` loop

<iframe title="for..of loop" width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=function%20calculateMean%28list%29%20%7B%0A%20%20let%20total%20%3D%200%3B%0A%20%20for%20%28const%20item%20of%20list%29%20%7B%0A%20%20%20%20total%20%2B%3D%20item%3B%0A%20%20%7D%0A%7D%0A%0AcalculateMean%28%5B10,20,30,40,50%5D%29%3B&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
{{</tab>}}

{{</tabs>}}
