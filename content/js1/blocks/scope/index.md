+++
title = '🔭 Scope'
headless = true
time = 20
facilitation = false
emoji= '❌'
[objectives]
1='Define scope'
+++

Given our implementation of `convertToPercentage`, someone asks if we can call the function and then access the `percentage` variable:

```js
function convertToPercentage() {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;
}

convertToPercentage(0.5);
console.log(percentage);
```

However if we run the code above, we get an error:

```console
ReferenceError: percentage is not defined
```

We get an error because of {{<tooltip title="scope">}}Scope is a region of our code where certain variables are accessible.{{</tooltip>}}. When `convertToPercentage` is declared we also define a **function scope** - the region of code enclosed inside the `{}` of `convertToPercentage`'s function body. Any variables declared inside the body of the function
