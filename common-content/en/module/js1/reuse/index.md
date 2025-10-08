+++
title = 'Reusing the function'

time = 30
[objectives]
    1='Evaluate a function expression'
    2='Call a function with an input in REPL'
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

Our goal is for `convertToPercentage` to be _reusable_ for any number. To check this goal, let's call `convertToPercentage` with different arguments and check the return value each time:

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

### 🌍 Global scope

At the moment, `decimalNumber` is in the {{<tooltip title="global scope">}} Variables declared in the global scope are available everywhere in your program. Variables declared in a { block scope } are only available within that block. Any block within your program can access variables that are defined within the global scope. {{</tooltip>}}. Any functions we declare can reference variables in the global scope. If a variable is in the global scope, we say that variable is a **global variable**.

### 🎮 Play computer

Play computer and step through the code to check why we get the output below:

```console
50%
50%
```

<iframe title="interactive widget" width="1200" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=const%20decimalNumber%20%3D%200.5%3B%0A%0Afunction%20convertToPercentage%28%29%20%7B%0A%20%20const%20percentage%20%3D%20%60%24%7BdecimalNumber%20*%20100%7D%25%60%3B%0A%20%20return%20percentage%3B%0A%7D%0A%0Aconst%20output1%20%3D%20convertToPercentage%280.5%29%3B%0Aconst%20output2%20%3D%20convertToPercentage%280.231%29%3B%0A%0Aconsole.log%28output1%29%3B%0Aconsole.log%28output2%29%3B&codeDivHeight=400&codeDivWidth=600&cumulative=false&curInstr=11&heapPrimitives=nevernest&origin=opt-frontend.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
