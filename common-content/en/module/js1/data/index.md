+++
title = 'Classifying data'

time = 15
emoji= '🗄️'
[objectives]
    1='Define data type, expression, and operator'
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

We’re going to focus on the JavaScript programming language.

A programming language organises data with rules so we understand what we can and cannot do with it. Languages split data up into different categories called {{<tooltip title="data types">}}
A **data type** is a grouping of data with some particular properties{{</tooltip>}}. In JavaScript, we have five data types. We will look first at numbers and strings.

#### Number data type

`10` is an example of the number data type.
`3.14` is also part of the number data type; both integers (whole numbers) and non-integers are types of number.

`-15` is also part of the number data type. Positive and negative numbers, as well as `0`, are all types of number.

#### String data type

A string is a sequence of characters demarcated by quotes.

```js
"Code Your Future";
```

### 🧮 Creating expressions

Think of the numbers `10` and `32`. We could ask questions about these numbers, like: _What is the **sum** of 10 and 32?_

Another way to say this is _what do 10 and 32 add up to?_ In English we can say this in many ways, but in JavaScript we can say this using numbers and an operator. Just like in mathematics, “the sum of 10 and 32” can be written as `10 + 32`:

```js
10 + 32;
```

In JavaScript, `+` is an {{<tooltip title="operator">}} An **operator** represents an operation, or act. {{</tooltip>}}. It's a symbol. In this example, `+` represents the operation “make the sum of the numbers”. It symbolises addition.

The combination of symbols `10 + 32` is an {{<tooltip title="expression">}}An **expression** is a value or any valid combination of values and symbols that results in a single value.{{</tooltip>}} We say that expressions **evaluate** to a single value. So we say that `10 + 32` **evaluates** to the value `42`.

`10` is also an expression. It **evaluates** to the value `10`.

`"Migracode Barcelona"` and `"Migracode " + "Barcelona"` are also both expressions - both evaluate to the value `"Migracode Barcelona"`.
