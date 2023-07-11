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

We can use **ordinal number** to describe the level we're on in the building.
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

{{<note type="exercise">}}

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

The points above form a specification of how the function `countWords` should behave - in other words, the specification is a description of how the function should work. Once we have a specification for how the function should work we can create many cases showing how we expect the function `countWords` to behave when it is called with certain inputs.

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

> 🔑 A test is any piece of code that checks a certain unit of code ( typically a function ) behaves in a particular way

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
**npm** is an online database of packages that can be downloaded and used to help developers write applications.
Our first step will be to figure out how to install the Jest package on our machine.

### 🃏 Installing Jest

We can find out more about the Jest framework from the documentation online.
We can head to the documentation and find out how to get set up there.

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
"Please go to the npm database, find the Jest package and install it on my local machine"

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

We also have a directory called `node_modules` in our project too. The `node_modules` directory contains all the code from the dependencies like Jest we installed in our project. You won't need to look inside the node_modules directory - you just need to know it contains the code for Jest and any other libraries we install in our project.

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

So an API is a boundary between a programmer and an application, enabling a programmer to use an application’s functionality without being concerned with how the application was built.

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

index.test.js

```js
test("converts 1 to an ordinal number", function () {});
```

The test function takes 2 arguments:
A test description - `"converts 1 to an ordinal number"`, which describes the behaviour we're testing for and

a `function () {}` in which we will write our test code.

### Creating assertions

Now that we have

index.test.js

```js
test("converts 1 to an ordinal number", function () {});
```

We need to write an assertion inside the body of `function () {}`

The assertion is the part of the test code that actually checks to see if something is true or not. In this example, we are claiming that the following is true:

We expect `getOrdinalNumber(1)` to be `"1st"`

An assertion in Jest looks like this:

```js
expect(getOrdinalNumber(1)).toBe("1st");
```

The function `toBe` is used to check that the current output of `getOrdinalNumber(1)` and the target output of `"1st"` are equal to each other.
`toBe` is just one example of a function called a [matcher](https://jestjs.io/docs/using-matchers). A matcher is a function we use to compare values in Jest.

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
So we need to execute this file so that the `test` function is available in our file.

In the documentation, we're told to add the following to our package.json:

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

When we run index.test.js with the test case then the console should display a passing test.

### Understanding test feedback

### Assertion errors

### Passing `getOrdinalNumber`

### Improving the tests

### Implementing further functionality
