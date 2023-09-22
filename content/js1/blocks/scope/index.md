+++
title = '🔭 Scope'
headless = true
time = 20
facilitation = false
emoji= '❌'
[objectives]
1='Define scope'
+++

The function `convertToPercentage` will only be useful if we can access the `percentage` string that it creates. Otherwise, we won't be able to use the result of `convertToPercentage` in other parts of our code. We can play computer to check that the `percentage` variable is being created. Somebody suggests trying to log the `percentage` variable outside

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

We get an error because of {{<tooltip title="scope">}}Scope is a region of our code where certain variables are accessible.{{</tooltip>}}. When `convertToPercentage` is declared we also define a **function scope** - the region of code enclosed inside the `{}` of `convertToPercentage`'s function body. Any variables declared inside the body of the function
