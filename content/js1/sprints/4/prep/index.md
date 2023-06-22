+++
title = 'prep'
layout = 'prep'
emoji= '📝'
menu_level = ['sprint']
weight = 1
backlog= 'Module-JS1'
backlog_filter= 'Week 4'
+++

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

### Counting words 🧮

Let's consider a function called `countWords` that needs to work as follows:

- it takes one argument - a _string_ of words separated by spaces, e.g. `"hello world"`
- returns an _number_ that counts each word in the string

The points above form a specification of how the function `countWords` should behave - in other words, the specification is a description of how the function should work. Once we have a specification for how the function should work we can create many cases showing how we expect the function `countWords` to behave when it is called with certain inputs.

### Describing functionality

To implement a function like `countWords` we can try specifying simpler functionality and from there build up functionality. A simpler case is often one where the input is smaller or in some sense less complex. In the case of `countWords`, we could try counting multiple words at once - and this would work. However, we can often consider simpler test cases when we start working.

- Case 1 💼

```js
const input = "hello";
const result = countWords(input);
```

Check that `countWords` when called with input of “hello” should equal 1.
In example 1, input stores a string "hello" which we pass as an argument to `countWords`.
We then store the return value of `countWords` in a variable called result.
In this case, we expect the `result` to be 1.

### Using a test framework

Our aim now is to write a test to check that `countWords` works as we described in the specification above.

> 🔑 A test is any piece of code that checks a certain unit of code ( typically a function ) behaves in a particular way

To write test cases we can make use of libraries written by other programmers - otherwise, coding would be a very time-consuming endeavour indeed! We can download and install these libraries in our project so we can use them when we're building software. We call these libraries of code dependencies - libraries of code that we depend on when we're writing our code.

We use a popular JavaScript testing framework called Jest to write the test code. We'll examine the example below written using Jest, and then break down the different parts of the test code to understand how it all works. To use Jest, we need to install the library in our project to write our test.
The Jest documentation gives an example of how a test is written:

```js
test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});
```

Before we begin to understand how this syntax works we must first install the Jest package so we can use it in our project.

### Installing dependencies

Our project structure looks as follows:

Project

We’ll start by creating a test file.

We need to manage install and manage dependencies in the project. We’ll need to record our use of packages in the project. We can make use of a `package.json` file to track our project dependencies. We can create a package.json with the following command:

```zsh
npm init -y
```

npm is a tool used to download and install dependencies in a project. We can use `npm` to install Jest with the following command:

```zsh
npm install --save-dev jest
```

Ensure you're at the project's root ( where the `package.json` is ) before running this command.

Our project structure will now look as follows:

```raw
project
├── package.json
├── tests
|   └── countWords.test.js
└── node_modules
```

Once the installation is complete we should now have a directory called node_modules in our project. The node_modules directory contains all the code from the dependencies like Jest we installed in our project. You won't need to look inside the node_modules directory - you just need to know it contains the code for Jest and any other libraries we install in our project.

```raw
project
├── package.json
├── tests
|   └── countWords.test.js
└── node_modules
```

### 🧪 Setting up a test case

We want to set up a test case to check the following behaviour:

Let’s suppose we start with a project as follows: we have the following files in our project folder. We can create a file called count-words.js and in there write our first test. We can figure out how to write this test using the Jest documentation. We can start writing a test:

index.test.js

```js
test("one word string gives a count of 1", function () {});
```

The test function takes 2 arguments:
A test description - "will count the number of words for a single word string", which describes the behaviour we expect in this particular test

a `function () {}` in which we will write our test code.

### Creating assertions

Now that we have

index.test.js

```js
test("one word string gives a count of 1", function () {});
```

We need to write an assertion inside the body of `function () {}`

The assertion is the part of the test code that actually checks to see if something is true or not. In this example, we are claiming that the following is true:

We expect `countWords("hello")` to be `1`

An assertion in Jest looks like this:

```js
expect(countWords("hello")).toBe(1);
```

The function `toBe` is used to check that the return value of `countWords("hello")` and `1` are equal to each other. `toBe` is just one example of a function called a [matcher](https://jestjs.io/docs/using-matchers). We can use to compare values in Jest: we can consult the Jest documentation to find other functions depending on the situation.

So we can combine this with the test we wrote earlier, to get our first complete test case:

```js
test("one word string gives a count of 1", function () {
  expect(countWords("hello")).toBe(1);
});
```

### 👟 Running tests

We can try running the file index.test.js with node in the following way:
node index.test.js but we get a ReferenceError. This is because test isn’t defined anywhere in the file. So we need to run the file so we can reference the functions that make up the Jest API.

In the test script, we’re calling the test function from Jest but we’ve not imported the test function into the script. Normally we would expect to see a ReferenceError when we do this: however when we run the npm test script then Jest will ensure that `test` is available in memory when our tests run

When we execute the test script again, we get some feedback from Jest.

Finally, we'll need to run our tests. We can check the package.json for a section called "scripts", see below:

```json
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
}
```

This section is where we'll store some commands that we can use in our project. We'll need to update the `package.json` so that it reads as follows:

```json
"scripts": {
  "test": "jest",
}
```

When we run index.test.js with the test case then the console should display a passing test.

### Understanding test feedback

With our test file in the following form:

And our current project as follows:

We can now execute the tests. Using the command npm test.

We get the following feedback:

Jest has “captured” the underlying error in order and resurfaced it in the console. So we can see that the test that has result in an error and also why ths error occurred.

### Assertion errors

To fix the `ReferenceError` we can declare the function `countWords`.

Now when we run the test script again, we get different feedback:
This time the console logs show an `AssertionError`.

An `AssertionError` is a type of error that is thrown by the expect function when the assertion is false.  
So in this case, the return value of `countWords` is undefined and we expect it to equal 1.
We can continue re-running our tests to get feedback on our code.

Assertion Error diagram

### Passing `countWords`

To make the test pass we can start moving in the right direction by declaring the function `countWords`. We can update index.test.js so we’ve got the following:

index.test.js

This is feedback is telling us that we expected to get an output of 1 but `countWords` is actually returning undefined.

### 🕹️ Using an interface

We’ve encountered several functions like `console.log`, `Math.round` before. Now we’ve also encountered test and `expect` from the Jest library. In this project, we’ve not implemented any of the previously mentioned functions; we only care how to use these functions in our project.

In programming, we continually make use of APIs:
An API is an Application Programming Interface
An application is a program or piece of software designed to use serve some purpose.
Programming refers to the process of writing code or software.
In computing, an interface is a shared boundary across which two or more separate components of a computer system exchange information.

So an API is a boundary between the programmer and an application, enabling a programmer to use an application’s functionality without being concerned with the application’s underlying functionality. `console.log` is said to be part of the console API.

### Improving the tests

We can write tests in many different ways. Sometimes developers may write additional variables to label some of the values in the test code more clearly. We could re-write the test above in the following way:

```js
test("one word string gives a count of 1", function () {
  const input = "hello";
  const actualResult = `countWords`(input);
  const expectedResult = 1;
  expect(actualResult).toEqual(expectedResult);
});
```

In this example, we're declaring some variables that will store values that we compare later on in the test.

- We declare an input variable that stores a value that we will pass to the function we are testing - `countWords`.
- We declare an `actualResult` variable that stores the return value of our function `countWords`.
- We declare an `expectedResult` which stores what we expect the actualResult to be when our function behaves according to the test description.

ℹ️
It's important to note that the test here and the one above it are checking the same thing. The variables are just being used to make the test easier to understand for ourselves and other developers.
ℹ️

After making our first test pass, we can continue to write more test cases to check the function’s output with different inputs.

Consider an extract from the test file `countWords.test.js`

![Test case for countWords](./assets/test-case.png)

After the test has run, we will get some feedback from Jest depending on whether the test passed or failed.
If the test fails then we should expect to see something like this:

![Failing test case for countWords](./assets/test-fail-case.png)

If the test passes, then we should get some feedback that looks like this:

![Passing test case for countWords](./assets/test-pass-case.png)

Jest aims to give feedback that makes it simple to see why test has failed. It shows us several things:

- the line number for the failing test (line 7)
- shows us `expected` - which corresponds to our `expectedResult`
- shows us `received` - which corresponds to our `actualResult

Passing the test

We can see the test feedback is telling us that `received` is `undefined`. In other words, actualResult ( `countWords`'s return value) is `undefined`.

### Implementing further functionality
