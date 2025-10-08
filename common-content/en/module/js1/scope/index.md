+++
title = 'Scope'

time = 20
[objectives]
1='Define scope'
2='Explain what happens when a variable is referenced out of scope'
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

The function `convertToPercentage` will only be useful if we can access the `percentage` string that it creates. Otherwise, we won't be able to use the result of `convertToPercentage` in other parts of our code. We can try accessing the `percentage` variable outside the function body like this:

```js {linenos=table,hl_lines=["8"],linenostart=1}
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

We get an error because of {{<tooltip title="scope">}}Scope means where variables are and what you can access. {{</tooltip>}}. When we define `convertToPercentage` we also define a **local scope** - the region of code enclosed inside `convertToPercentage`'s function body. This region is `convertToPercentage`'s **local scope**. This means any variables we declare inside `convertToPercentage`'s **local scope** can only be accessed within this region. If we attempt to reference a variable outside the scope where it was declared, then get a `ReferenceError`.
