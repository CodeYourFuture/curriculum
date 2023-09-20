+++
title = '🌍 Global scope'
headless = true
time = 20
facilitation = false
emoji= '🗄️'
[objectives]
    1='Define a function in programming'
    2='Evaluate a function expression'
    3='Call a function with an input in REPL'
+++

### Checking with different inputs

Now we have a function declaration, we can check if our function works for any number. Call `convertToPercentage` with different arguments and check the return value each time.

```js {linenos=table,hl_lines=["8-9"],linenostart=1}
const decimalNumber = 0.5;

function convertToPercentage() {
  const percentage = `${decimalNumber * 100}%`;
  return percentage;
}

const output1 = convertToPercentage(0.5);
const output2 = convertToPercentage(0.231);

console.log(output1);
console.log(output2);
```

When we execute this code we _want_ to log the target output for each input: `0.5` and `0.231`:

```
50%
23.1%
```

However, _given the function's current implementation_, we get the following logs:

```
50%
50%
```

{{<tabs name="activities">}}

{{<tab name="🎮 Play computer">}}

Play computer and step through the code to check why we get the output below:

```console
50%
50%
```

<iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=const%20decimalNumber%20%3D%200.5%3B%0A%0Afunction%20convertToPercentage%28%29%20%7B%0A%20%20const%20percentage%20%3D%20%60%24%7BdecimalNumber%20*%20100%7D%25%60%3B%0A%20%20return%20percentage%3B%0A%7D%0A%0Aconst%20output1%20%3D%20convertToPercentage%280.5%29%3B%0Aconst%20output2%20%3D%20convertToPercentage%280.231%29%3B%0A%0Aconsole.log%28output1%29%3B%0Aconsole.log%28output2%29%3B&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=11&heapPrimitives=nevernest&origin=opt-frontend.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>

{{</tab>}}

{{</tabs>}}
