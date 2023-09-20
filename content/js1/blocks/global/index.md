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

```js {linenos=table,hl_lines=["7-8"],linenostart=1}
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
