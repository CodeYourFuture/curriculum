+++
title = 'Testing frameworks'

time = 15
[objectives]
    1='Explain why we need to use testing frameworks'
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

To help us think about the requirements of `getOrdinalNumber`, let's consider one case:

### 💼 Case 1

```js
const input = 1;
const currentOutput = getOrdinalNumber(input);
const targetOutput = "1st";
```

Case 1 states that when `getOrdinalNumber` is called with an input of 1, it has a target output of "1st". Our first step is to check that `getOrdinalNumber` works as we have stated.

We have used `console.assert` to write assertions to write tests for our code before. `console.assert` is a useful building block, but it is limited. Now we will write tests using a {{<tooltip title="test framework">}} A **test framework** is a set of tools we can use to build tests efficiently.{{</tooltip>}} to check our code is behaving in a particular way.

> 🔑 A test is any piece of code that runs an **assertion** on the code we're testing

#### We want our tests to:

- be easy to write
- be easy to read
- give clear feedback on what the current output is
- give clear feedback on what the target output is
- allows us to easily write multiple test cases

A test framework will help us build test cases like this.

{{<note type="discussion" title="🧑🏽🧑🏿 Dialogue">}}
We can use a short dialogue to think about _why_ we want to use a testing framework:

🧑🏽 **Büşra**
: Ali, looks like I need to implement a function.

🧑🏿 **Ali**
: Cool. How are you going to check it works?

🧑🏽 **Büşra**
: I'm going to use tests to check that the function gives the target output as described in the specification

🧑🏿 **Ali**
: Seems wise. How are you going to write a lot of tests efficiently?

🧑🏽 **Büşra**
: I'm going to use a testing framework to write test cases quickly. The framework will make sure that the tests give fast, reliable feedback.
{{</note>}}
