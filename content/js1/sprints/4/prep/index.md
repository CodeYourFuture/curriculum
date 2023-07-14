+++
title = 'prep'
layout = 'prep'
emoji= '📝'
menu_level = ['sprint']
weight = 1
backlog= 'Module-JS1'
backlog_filter= 'Week 4'
+++

## Pre-requisites

## Learning objectives

- Execute a test script
- Isolate a test case in a test suite
- Differentiate between running code with `node` command and with an `npm` script, such as `npm test`
- Interpret documentation to determine how part of an 3rd API behaves
- Define the term _API_
- Identify the unit under test in a given test case
- Outline the effect of running `npm test`
- Define _dependency_
- Explain why we use interfaces in programming
- List the benefits of using a 3rd party software library when programming
- Explain the purpose of each syntactic element of a test case implemented in Jest
- Implement a test case to describe the behaviour of a function
- Outline the effects of running an installation command, e.g. `npm install`
- Describe what `toBe` checks in the Jest library
- Suggest potential Jest matchers to check a specified behaviour for a function
- Predict and justify the test output for a given function and test case
- Determine the line an error occurred from some test output
- State the current return value of a function and the target output from some test output
- Explain the process involved in looking up how to write tests for someone using a language other than JavaScript
- Express an acceptance criterion as a test case

## Notes

### 🧮 Ordinal numbers

Let's imagine you're working in a 10 storey office building - so there are 10 different levels.
We need a way to describe each level of the building.

We start on the **ground floor** of the building - level with the ground.

We can use an **ordinal number** to describe the level we're on in the building.
Up from the ground floor, we are then on the **1st floor** (fir**st** floor)
Up from the **1st floor**, we are on the **2nd floor** (seco**nd** floor)

To form the ordinal number we take a number and add the correct suffix:

> number + suffix -> ordinal number
> e.g.
> 1 + 'st' -> '1st'
> 2 + 'nd' -> '2nd'

The suffix comes from the word used to describe each number.

Here is a list of the first 10 ordinal numbers.

| number | ordinal number |
| ------ | -------------- |
| 1      | 1**st**        |
| 2      | 2**nd**        |
| 3      | 3**rd**        |
| 4      | 4**th**        |
| 5      | 5**th**        |
| 6      | 6**th**        |
| 7      | 7**th**        |
| 8      | 8**th**        |
| 9      | 9**th**        |
| 10     | 10**th**       |

{{<note type="exercise" title="Exercise">}}

Using the information from above, try to answer the following questions:

a) What will the ordinal number be for 21?
b) What will the ordinal number be for 40?
c) What will the ordinal number be for 49?
d) What will the ordinal number be for 13?

{{</note>}}

Let's consider a function called `getOrdinalNumber` that needs to work as follows:

- it takes one argument - a whole number, like 1, 2, 3, etc
- returns a _string_ that represents the ordinal number

E.g.

```js
getOrdinalNumber(1); // returns "1st";
getOrdinalNumber(2); // returns "2nd";
getOrdinalNumber(6); // returns "6th";
```

The requirements above form a specification of how the function `getOrdinalNumber` should behave - in other words, the specification is a description of how the function should work. Once we have a specification for how the function should work we can create many cases showing how we expect the function `getOrdinalNumber` to behave when it is called with certain inputs.

### Describing functionality

To implement a function like `getOrdinalNumber` we can try specifying a single case:

- Case 1 💼

```js
const input = 1;
const currentOutput = getOrdinalNumber(input);
const targetOutput = "1st";
```

Check that `getOrdinalNumber` when called with input of 1 has the target output of "1st".

### Using a test framework

Our aim is to check that `getOrdinalNumber` works as we described in the specification above.

We need to check our code behaves according to the specification.
So we can write **tests** to check our code is behaving in a particular way.

> 🔑 A test is any piece of code that runs an assertion on the code we're testing

In addition, we want our tests to:

- be easy to write
- be easy to read
- to give clear feedback on how our function is behaving
- to give clear feedback on what the target output is
- easily write multiple test cases

We can use a **test framework** to help us build test cases like this.

{{<note type="definition">}}
A test framework is a set of tools we can use to build tests efficiently.
{{</note>}}

We can summarise the thought process as a brief dialogue:

> "We need to implement a function"
>
> "Cool, how are you going to check it works?"
>
> "We can use tests to check that the function gives the target output as described in the specification"
>
> "No problem, how are you going to write a lot of tests efficiently?"
>
> "We can make use of a testing framework - this will help us to write test cases quickly. And it will ensure that the tests give us fast, reliable feedback."

### 🎒 Starting a project

Let's imagine we've started a brand new project in a directory called `week-4-example`.

To start, we need a `package.json` file in our project.

> A `package.json` is used to store useful information about our current project, like the name, description etc.

We can create a `package.json` file and add the following to it:

```json
{
  "name": "week-4-test-example"
}
```

Anyone using this project can now check the `package.json` to get the name of the project.
We can also add a description:

```json
{
  "name": "week-4-test-example",
  "description": "An example application showing how to write tests using the jest framework"
}
```

We can continue adding more information about our project as the project grows.
For now we can double check the file structure in our project:

```bash
$ ls
package.json
```

### 📦 Using packages

When writing software, we need to continually make use of **packages** written by other developers.

A **package** is a set of programs which are grouped together to provide some functionality.

Different programming languages give developers different ways of accessing packages for use in their code.

In JavaScript, we can use **npm**.

> **npm** is a collection of packages that can be downloaded and used to help developers write applications.

Our first step will be to figure out how to install the Jest package on our machine.

### 🃏 Installing Jest

We can find out more about the Jest framework from the [documentation online](https://jestjs.io/docs/getting-started).

![jest-install](jest-install.png)

In the **Getting started** section of the documentation, Jest gives us the following command:

```bash
npm install --save-dev jest
```

- `npm` is an online database of packages, like Jest, that we can fetch and install on to our machines. It also provides us with
- in the terminal, we can use the `npm` command to install packages on the

`install` - download a package on to our machine.

- `--save-dev` - this indicates that Jest is a package we only use when our application is being developed.

- `jest` - this is the name of the package we want to install on our machine

So overall we can think of this command as saying:
_"Please go to the npm database, find the Jest package and install it on my local machine"_

To make use of Jest's API in our tests, we need to **install** the Jest software so we can run it on our machine.
In this context, **install** means downloading an application so we can use it in our own software.

We can breakdown the different parts of the command below, to see how it works in more detail:

Let's execute this command in the same directory as the `package.json`.
To double check this we can run `pwd`:

```bash
$ pwd
/Users/mitchlloyd/cyf/week-4-example
```

`pwd` is telling us we're in the `week-4-example` directory.

We need to double check the `package.json` is also there too.

```bash
$ ls
package.json
```

Now we can execute the command

```bash
npm install --save-dev jest
```

Our project structure will now look as follows:

```raw
project
├── package.json
└── node_modules
```

We also have a directory called `node_modules` in our project too. The `node_modules` directory contains all the code from the dependencies like Jest we installed in our project. You won't need to look inside the node_modules directory - you just need to know it contains the code for Jest and any other libraries we install in our project.

Let's double check the `package.json`:

```json
{
  "name": "week-4-test-example",
  "description": "An example application showing how to write tests using the jest framework",
  "devDependencies": {
    "jest": "^29.5.0"
  }
}
```

We've now got some additional information inside the `package.json`:

```json
"devDependencies" : "^29.5.0"
```

A **dependency** is a package that your project depends upon. Now that we're using Jest in our project, we **depend** on the Jest package. In particular, a **devDependency** is a **developer dependency** - a **dependency** we use for developing and testing our application.

### 🕹️ Application Programming Interface

With Jest installed, we need to figure out how to use the Jest framework to write tests.
Jest provides an **API** to enable us to write tests.

API stands for

- **Application**
- **Programming**
- **Interface**.

We've encountered the word **interface** already.

But we can break down each word in this acronym to understand it altogether.

- An **application** is a program or piece of software designed to serve some purpose.
- **Programming** refers to the process of writing code or software.
- An 🕹️**interface** is a shared boundary across which two or more systems.

{{<note type="Definition" title="Definition">}}

An **API** is a boundary between a programmer and an application, enabling a programmer to use an application’s functionality without being concerned with how the application was built.

{{</note >}}

We’ve encountered several functions like `console.log`, `Math.round` already.
`console.log` and `Math.round` are parts of an **API**.

We can use the Jest documentation to figure out how to write tests with the Jest API.

### 🖌️ First test case

> 🎯 Goal: Write the a test for the case below, using Jest:

- Case 1 💼

```js
const input = 1;
const currentOutput = getOrdinalNumber(input);
const targetOutput = "1st";
```

To work out how to write a test using Jest, we can check out the documentation.

Let’s suppose we start with a project as follows: we have the following files in our project folder. We can create a file called `get-ordinal-number.js` and in there write our first test. We can figure out how to write this test using the Jest documentation. We can start writing a test:

get-ordinal-number.test.js

```js
test("converts 1 to an ordinal number", function () {});
```

Let's break down this syntax.
The `test` function is part of the Jest API: it is an interface we use to perform a particular task. In this case, we're using `test` to create a test case.
Let's break down the arguments we're passing to `test`:

- 1st argument: `"converts 1 to an ordinal number"`, which describes the behaviour we're testing for
- 2nd argument: `function () {}`, we will write some assertions in this `function () {}` to check the behaviour

### Creating assertions

Now that we have

index.test.js

```js
test("converts 1 to an ordinal number", function () {});
```

We need to write an **assertion** inside the body of `function () {}`

The assertion is the part of the test code that actually checks to see if something is true or not.
In this example, we want to check that the following is true:

We expect `getOrdinalNumber(1)` to be `"1st"`

An assertion in Jest looks like this:

```js
expect(getOrdinalNumber(1)).toBe("1st");
```

The function `toBe` is used to check that the current output of `getOrdinalNumber(1)` and the target output of `"1st"` are equal to each other.
`toBe` is just one example of a function called a [matcher](https://jestjs.io/docs/using-matchers).
A matcher is a function we use to compare values in Jest.

So we can combine this with the test we wrote earlier, to get our first complete test case:

```js
test("converts 1 to an ordinal number", function () {
  expect(getOrdinalNumber(1)).toBe("1st");
});
```

### 👟 Running tests

We can try running the file index.test.js with node in the following way:

```bash
node index.test.js
```

but we get a `ReferenceError`.

This is because `test` isn’t defined anywhere in the file.
So we need to execute this file so that the Jest API is available in our file.

In the documentation, we're told to add the following to our `package.json`:

```json {linenos=table,hl_lines=["4-6"],linenostart=1}
{
  "name": "week-4-test-example",
  "description": "An example application showing how to write tests using the jest framework",
  "scripts": {
    "test": "jest"
  },
  "devDependencies": {
    "jest": "^29.5.0"
  }
}
```

In the test script, we’re calling the `test` function from Jest but we’ve not imported the test function into the script. Normally we would expect to see a ReferenceError when we do this: however when we run the npm test script then Jest will ensure that `test` is available in memory when our tests run

When we execute the test script again, we get some feedback from Jest.

Finally, we'll need to run our tests. We can check the package.json for a section called "scripts", see below:

This section is where we'll store some commands that we can use in our project. We'll need to update the `package.json` so that it reads as follows:

```json
"scripts": {
  "test": "jest",
}
```

Now we can run the command `npm test`.

When we run index.test.js with the test case then the console should display a passing test.

### Understanding test feedback

After running some tests, we should get feedback indicating whether or not the test has passed.
We currently have a project structure like this:

```raw
project
├── package.json
|_ get-ordinal-number.test.js
└── node_modules
```

And `get-ordinal-number.test.js`
looks like this

```js
test("converts 1 to an ordinal number", function () {
  expect(getOrdinalNumber(1)).toBe("1st");
});
```

{{<note type="exercise" title="exercise">}}
Predict what the test feedback will say when the test above is executed.
{{</note>}}

### 🚢 Defining the function

At the moment, our test feedback gives the following:

![test-reference-error](test-reference-error.png)

The test code is throwing a **ReferenceError**.
So we need to define the function `getOrdinalNumber` and make it available to the test file.

We can define a file called `get-ordinal-number.js`:

get-ordinal-number.js

```js
function getOrdinalNumber() {}
```

{{<note type="exercise">}}
Create your own file with the function defined above and then check the test output. What do you notice?
{{</note>}}

At the moment, the test output still tells us that there is a `ReferenceError`, telling us that `getOrdinalNumber` is not defined.
To make `getOrdinalNumber` available to the test file, we need to **export** it.

We can define `getOrdinalNumber` in our test file.

```js
function getOrdinalNumber() {}

test("converts 1 to an ordinal number", function () {
  expect(getOrdinalNumber(1)).toBe("1st");
});
```

Now we can run the tests again and we get the following:

### Assertion errors

We now get the following feedback:

![test-feedback-fail](test-feedback-fail.png)

Jest tells us 3 main things:

1. The test case that failed
2. The targetOutput and the currentOutput
3. The line number the test failed on.

Jest defines **Expected** and **Received** in the test feedback:

- Received: `undefined`
- Expected: "1st"

{{<note type="exercise">}}

How do Received and Expected match up with the targetOutput and expectedOutput ?
What line number did the test case fail on?

{{</note>}}

### Passing `getOrdinalNumber`

We can now make the test pass by implementing functionality for the first test case.
We could write the following:

get-ordinal-number.test.js

```js
function getOrdinalNumber() {
  return "1st";
}

test("converts 1 to an ordinal number", function () {
  expect(getOrdinalNumber(1)).toBe("1st");
});
```

### Improving the tests

We can now go further and add more assertions based on the table we saw describing `getOrdinalNumber` at the start:

get-ordinal-number.test.js

```js
test("converts 1-10 to an ordinal number", function () {
  expect(getOrdinalNumber(1)).toBe("1st");
  expect(getOrdinalNumber(2)).toBe("2nd");
  expect(getOrdinalNumber(3)).toBe("3rd");
  expect(getOrdinalNumber(4)).toBe("4th");
  expect(getOrdinalNumber(5)).toBe("5th");
});
```

{{<note type="exercise">}}

What do you think the test output will be when the test runs? Remember to think in terms of targetOutput and currentOutput.
How can you approach implementing the logic for this function each time?
Can we add any more assertions to this test case?
{{</note>}}

### Implementing further functionality

We may now have an implementation of `getOrdinalNumber` that looks like this:

```js
function getOrdinalNumber(num) {
  if (num === 1) {
    return "1st";
  }
  if (num === 2) {
    return "2nd";
  }
  if (num === 3) {
    return "3rd";
  }
  return `${num}th`;
}
```

However, we can get ordinal numbers for numbers beyond 10.

{{<note type="exercise">}}

What are the ordinal numbers for
a) 21
b) 51
c) 61

Suggest a possible test case used to define the behaviour above.

{{</note>}}

###  🧭 Future strategies

We could write another test case to isolate these cases like this:

```js {linenos=table,hl_lines=["22-26"],linenostart=1}
function getOrdinalNumber(num) {
  if (num === 1) {
    return "1st";
  }
  if (num === 2) {
    return "2nd";
  }
  if (num === 3) {
    return "3rd";
  }
  return `${num}th`;
}

test("converts 1-10 to an ordinal number", function () {
  expect(getOrdinalNumber(1)).toBe("1st");
  expect(getOrdinalNumber(2)).toBe("2nd");
  expect(getOrdinalNumber(3)).toBe("3rd");
  expect(getOrdinalNumber(4)).toBe("4th");
  expect(getOrdinalNumber(5)).toBe("5th");
});

test("numbers ending in 1 have st on the end", function () {
  expect(getOrdinalNumber(21)).toBe("21st");
  expect(getOrdinalNumber(31)).toBe("31st");
  expect(getOrdinalNumber(61)).toBe("61st");
});
```

{{<note type="exercise" title="exercise">}}

Predict what the feedback will be for the test case "handles exceptional cases 11-13"? Does it pass or fail, if so why?

Before coding, outline a strategy for handling the second test case.

Think carefully about how you can update `getOrdinalNumber` so it works in both cases.

{{</note>}}
