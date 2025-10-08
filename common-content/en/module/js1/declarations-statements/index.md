+++
title = 'Declarations and statements'

time = 10
[objectives]
    1='Define a declaration'
    2='Define a statement'
    3='Describe the difference between a declaration and a statement'
    4="Describe the difference between let and const"
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

A variable declaration is an example of a{{<tooltip title="declaration" type="definition">}}A _declaration_ is an instruction that binds an identifier to a value{{</tooltip>}}.
It has the _effect_ of creating a variable.

```js
let versionNumber = "2.0.0"; // declaration
versionNumber = "2.0.1"; // statement
```

The code above has one variable **declaration** and one **statement**.

1. The first line is a **declaration** - creating a variable `versionNumber` with a value of `"2.0.0"`
1. The second line is a **statement** - {{<tooltip title="reassignment">}}Reassignment means changing the value associated with an identifier.{{</tooltip>}} of the value of `versionNumber` to `"2.0.1"`

In this example, we've used the `let` keyword to declare a new variable.
The `let` keyword allows us to create new variables like the `const` keyword.

However, we can reassign the value of a variable that is declared with the `let` keyword.

If we'd used `const` to declare `versionNumber`, we wouldn't be allowed to reassign it a new value.

In JavaScript, we build up programs by combining declarations and statements.
