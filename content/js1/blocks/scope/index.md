+++
title = '🔭 Scope'
headless = true
time = 20
facilitation = false
emoji= '❌'
[objectives]
1='Define scope'
2='Explain what happens when a variable is referenced out of scope'
+++

The function `convertToPercentage` will only be useful if we can access the `percentage` string that it creates. Otherwise, we won't be able to use the result of `convertToPercentage` in other parts of our code. We can try accessing the `percentage` variable outside the function body like this:

```js
const decimalNumber = 0.5;

function convertToPercentage() {
  const percentage = `${decimalNumber * 100}%`;
}

convertToPercentage(0.5);
console.log(percentage);
```

However if we run the code above, we get an error:

```console
ReferenceError: percentage is not defined
```

We get an error because of {{<tooltip title="scope">}}Scope refers to the rules that determine where we can refer to variables.{{</tooltip>}}. When we define `convertToPercentage` we also define a **local scope** - the region of code enclosed inside the `{}` of `convertToPercentage`'s function body. Any variables that we define inside the body of `convertToPercentage` are inside `convertToPercentage`'s **local scope**. Any variables we declare inside `convertToPercentage`'s **local scope** can only be accessed within this scope.
