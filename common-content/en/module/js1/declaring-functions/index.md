+++
title = 'Declaring functions'

time = 20
[objectives]
    1='Label and describe the syntactic features of a function declaration'
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

{{<note type="tip" title="Recall">}}
Functions are reusable blocks of code.
{{</note>}}

To create a function, we can use a function declaration. A function declaration looks like this:

```js {linenos=table,linenostart=1}
function convertToPercentage() {}
```

The `function` declaration consists of the following syntactic elements:

- `function` keyword, begins the function declaration
- `convertToPercentage` - names the function
- `()` - any input to the function will go between these round braces (our function above doesn't take any input (yet), but it still needs the `()`s)
- `{}` - the body of the function is written inside the curly braces (our function above doesn't do anything yet, but it still needs the `{}`s)

We can create a function declaration by wrapping up the `percentage` variable and the expression for the percentage inside the function.

```js {linenos=table,linenostart=1 }
const decimalNumber = 0.5;

function convertToPercentage() {
  const percentage = `${decimalNumber * 100}%`;
}
```

At the moment `decimalNumber` is not wrapped up inside the body of the function. In the following sections, we will explore what happens when this is the case.
