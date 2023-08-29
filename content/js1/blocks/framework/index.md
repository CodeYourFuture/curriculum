+++
title = '🖼️ Testing frameworks'
headless = true
time = 20
facilitation = false
emoji= '🧩'
[objectives]
    1='Use the Teach Tech Together guide to construct your objectives'
+++

To implement a function like `getOrdinalNumber` we can try specifying a single case:

- Case 1 💼

```js
const input = 1;
const currentOutput = getOrdinalNumber(input);
const targetOutput = "1st";
```

Case 1 states that when `getOrdinalNumber` is called with an input of 1, it has a target output of "1st".

Our aim is to check that `getOrdinalNumber` works as we described in the case above.

We can write **tests** to check our code is behaving in a particular way.

> 🔑 A test is any piece of code that runs an **assertion** on the code we're testing

In addition, we want our tests to:

- be easy to write
- be easy to read
- to give clear feedback on what the current output is
- to give clear feedback on what the target output is
- easily write multiple test cases

We can use a {{<tooltip title="test framework">}} A **test framework** is a set of tools we can use to build tests efficiently.{{</tooltip>}} to help us build test cases like this.

We can use a short dialogue to think about _why_ we want to use a testing framework:

> "We need to implement a function"
>
> "Cool, how are you going to check it works?"
>
> "We can use tests to check that the function gives the target output as described in the specification"
>
> "No problem, how are you going to write a lot of tests efficiently?"
>
> "We can make use of a testing framework - this will help us to write test cases quickly. And it will ensure that the tests give us fast, reliable feedback."
