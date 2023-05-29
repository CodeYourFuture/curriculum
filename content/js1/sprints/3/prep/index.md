+++
title = 'prep'
layout = 'prep'
emoji= '📝'
menu_level = ['sprint']
weight = 1
backlog= 'Module-JS1'
backlog_filter= 'Week 3'
+++


## Prerequistes



## Learning objectives


- Write an assertion for a function that implements a solution to a given problem
- Given an assertion and a function declaration, identify and explain whether the assertion will pass or fail
- Explain when to use the `===` operator in a program
- Construct a flow diagram that describes how to produce an output from a given input
- Explain when it is necessary to use a conditional statement
- Identify the syntactic features of an `if` statement
- Describe the difference between `console.log` and `console.assert`
- Evaluate an expression that uses a comparison operator
- Describe how to convert a string into a number in JavaScript
- Implement a piece of functionality specified in an assertion
- Define _block scope_
- Define _zero-indexing_
- Given a short program, determine the return value of a call to `slice` before execution
- Given a problem, suggest potential sub-goals required to reach a solution
- Determine the output of a program that uses a conditional statement
- Analyse a conditional statement to determine whether or not the statement will be executed
- Predict and explain how conditional statements involving `else`, `else if` and `while` will be executed
- Explain why _refactoring_ is necessary in the production of software
- Propose a strategy for solving a problem
- Write an assertion to check for some behaviour of a given function
- Identify a pattern between a set of inputs and outputs produced by a given function
- Propose alternative implementations to a problem 
- Suggest several appropriate ways to refactor a given piece of code


## Notes

### 12 vs 24 hour clock 🕥

A typical time can be written in one of 2 ways: 24 hour clock or 12 hour clock.

In 12 hour clock time the hours reset after midday, so an hour after midday is written as 1 pm. The pm means "in the afternoon".

For 24 hour clock, the hours continue counting up after midday.  
So in 24 hour clock, 1 hour after midday would be 13:00 and so on.
We can write a short table summarising some of the times and how they are converted from 24 hour to 12 hour:

|   Time in 24 hour clock   |   Time in 12 hour clock   |
|---------------------------|---------------------------|
|           09:00           |          09:00 am          |
|           10:00           |          10:00 am         |
|           11:00           |          11:00 am         |
|           12:00           |          12:00 pm         |
|           13:00           |          1:00 pm          |
|           14:00           |          2:00 pm          |
  

</br>
</br>

Often we use the notation "HH:MM" for a time to denote the fact that the first 2 digits represent hours and then the digits after the ":" represent the minutes.

### 🧩 Problem

Let's pose a problem: given any time in 24 hour clock, we want to format it as a 12 hour clock time.  
To achieve this goal, we're going to implement a function `formatAs12HourClock`.

> `formatAs12HourClock` is a function that should take any string representing the time in 24 hour clock 
and return the corresponding time in 12 hour clock.
> Examples:  
>       `formatAs12HourClock("09:00")` should return `"09:00 am"`  
>      `formatAs12HourClock("14:00")` should return `"2:00 pm"` 

### ⚖️ Comparing output with expectation


Whenever we call `formatAs12HourClock` we expect it to return a particular value.  
For example, we expect `formatAs12HourClock("08:00")` to return `"08:00 am"`. 

We can call functions and log their return values to the console. However we can also **compare** 2 values.

We can compare the value `formatAs12HourClock("08:00")` with the expected output of `"08:00 am"` and ask: **are these 2 values the same?** This is very useful whenever we want to check that our code behaves in the way we expect.

To compare 2 expressions and check if they have the same value, we can use a **comparison operator**. In particular we can use the strict equality operator `===`, a comparison operator used to check if 2 values are the same.

We can write an expression as follows:

```js
formatAs12HourClock("08:00") === "8:00 am"
```

In the code above, `===` will check the value on the left of the operator and the value on the right to see if they’re the same.  

We can think of `formatAs12HourClock("08:00") === "8:00 am"`
as being like the question:  
Does `formatAs12HourClock("08:00")` have the same value as `"20:00"` ?

This begs the question:

> What will `formatAs12HourClock("08:00") === "8:00 am"` evaluate to?


### ✅ ❌ Boolean values

Some values are best represented as strings: any piece of text, a name, address, etc will most likely be stored using the string data type. 
Similarly, the number data type will be used to store any numerical data where we'll need to do standard numerical operations with those numbers.  
However, if we're comparing values or expressions then we have one of 2 different states: **true** or **false**.

This brings us to the boolean data type: which has only values of `true` or `false`.

Whenever we compare 2 expressions with a comparison operator then the comparison itself will evaluate to a boolean value: `true` or `false`.

For example:

```js
// comparison expression
42 === 10 + 32
// evaluates to true
```


The comparison expression above is asking whether `42` has the same value as `10 + 32`.


### Writing an assertion


Now we have 2 new pieces of information: booleans and comparisons. From these concepts, we can now write an assertion about the function `formatAs12HourClock`.

> 🔑 An assertion is a _check_ that our code behaves in a particular way: this check can either be `true` or `false`.

Up to now we've used the log function off `console`.
However, we can also write assertions using another function: `console.assert`. Let's look at an example using `console.assert`:


```js
function formatAs12HourClock() {
}
console.assert(formatAs12HourClock("08:00") === "20:00");
```

The documentation for `console.assert` states that a message will be written to the console if the condition is `false`.

We can see above that `convertAs12HourClock("08:00")` will evaluate to `false` so we’ll get an error printed to the console. 

It would be useful to have more information as to why this assertion failed.
We can pass additional arguments to `console.assert`:


```js
function formatAs12HourClock() {
}

console.assert(formatAs12HourClock("08:00") === "20:00",
"current function output: %s, expected output: %s",
formatAs12HourClock("08:00"),
"20:00");
```

Let's break down these arguments to make sense of what's going on:

1. first argument - `formatAs12HourClock("08:00") === "20:00"` - the condition we're checking  

2. second argument - `"current function output: %d, expected output: %d"` - a message string that will be logged to the console if the condition is false.

3. third argument - `formatAs12HourClock("08:00")` - this value will get substituted into the message string at the first "%d"  

4. 4th argument - `"20:00"` - this value will get substituted into the message string at the second "%d"

We can tidy up the assertion even further. As we’re reusing the same expressions and values, we should store these in variables and refer to them again:


```js {linenos=table,linenostart=1}
function formatAs12HourClock() {
}

const currentOutput = formatAs12HourClock("08:00");
const expectedOutput = "08:00 am";
console.assert(
   currentOutput === expectedOutput,
   "current output: %s, expected output: %s",
    currentOutput,
    expectedOutput
);
```

Now we get a log in the console:

```bash
Assertion failed: current output: undefined, expected output: 08:00 am
```


On line 4, the function is being passed a single argument `"08:00"`. Ww can parametrise the function and label the input as `time`:

```js
function formatAs12HourClock(time) {

}
```

According to our assertion we get an input of `"08:00"` and need to create output of `"08:00 am"`.

So we can add `"am"` to the `time` to get the expected output.
We can make use of a template literal and set the return value, and then _re-run_ our assertion to check the function is returning the correct value.

📓 We can continually check our assertions to see if our function’s current behaviour meets our expectations.

So we have the following:


```js {linenos=table,linenostart=1}
function formatAs12HourClock(time) {
   return `${time} am`
}

const currentOutput = formatAs12HourClock("08:00");
const expectedOutput = "08:00 am";
console.assert(
   currentOutput === expectedOutput,
   "current output: %s, expected output: %s",
    currentOutput,
    expectedOutput
);
```
✅ Nothing is printed to the console, so this assertion is working 😎


### Checking different cases


So far we’ve only created assertions that check the function’s behaviour for times _after midnight and before midday_. In these cases, there is a clear pattern: take the current time and add `"am"` to the end.

However, we need to assert the function behaves correctly in cases when the time is later than midday. Let’s create an assertion for our function when passed an input of `"23:00"`:


```js  {linenos=table,linenostart=1,hl_lines=["15-22"]}
function formatAs12HourClock(time) {
   return `${time} am`
}

const currentOutput = formatAs12HourClock("08:00");
const expectedOutput = "08:00 am";
console.assert(
   currentOutput === expectedOutput,
   "current output: %s, expected output: %s",
    currentOutput,
    expectedOutput
);


const currentOutput = formatAs12HourClock("23:00");
const expectedOutput = "11:00 pm";
console.assert(
   currentOutput === expectedOutput,
   "current output: %s, expected output: %s",
    currentOutput,
    expectedOutput
);
```

### Reusing variable names

When we run the file with Node, we get an error in the console:

```bash
SyntaxError: Identifier 'currentOutput' has already been declared
```

An identifier is the name of a variable, so in a variable declaration like

```js
const currentOutput = formatAs12HourClock("08:23");
```
`currentOutput` is the **identifier**.  

When an error is thrown, it means the execution of the program stops at this point and an error report is sent to the user.
We want to do multiple assertions whilst using the same variables.

### Block scope

To reuse variable names, we can make use of a block declaration as follows:

```js
{
  StatementList 
}
```

🔑 A **block** is a region of code defined by a set of curly braces in which we write any number of statements.

As with function scope, **block scope** means that variables declared inside a block are only accessible inside that block. This means we can declare a variable with the same name in 2 different blocks and we won't get an `ReferenceError`:


```js title="problem.js"
function formatAs12HourClock(time) {
   return `${time} am`
}

{
const currentOutput = formatAs12HourClock("08:00");
const expectedOutput = "08:00 am";
console.assert(
   currentOutput === expectedOutput,
   "current output: %s, expected output: %s",
    currentOutput,
    expectedOutput
);
}

{
// ❌ this assertion now fails
const currentOutput = formatAs12HourClock("23:00");
const expectedOutput = "11:00 pm";
console.assert(
   currentOutput === expectedOutput,
   "current output: %s, expected output: %s",
    currentOutput,
    expectedOutput
);
}
```

Now the second assertion fails with the following message:

```bash
Assertion failed: current output: 23:00 am, expected output: 11:00 pm
```

### Branching out

Our function works when we pass a time in the morning like `"08:00"`. In this case, the function returns `"08:00 am"` as expected.
However, at the moment `formatAs12HourClock("23:00")` returns `"23:00 am"`. We need to do something different when the time is after midday like "23:00"

> 💡 The execution of task will only take place when some condition is `true`

```mermaid

flowchart LR

A{Is the time before midday?} -- true --> B[Add am to time string]
A -- false --> C[???]
```

### 🗺️ Describing the strategy

Let's describe the strategy for dealing with an input that is after midday.

Earlier we observed that when the time goes beyond midday then we can subtract 12 from the hours time to get the new hours for the 12 hour clock time.

_Before_ writing code, we can define our approach in steps:

Starting with an input like `"23:00"`:

```mermaid

flowchart TD

A[Step 1: Extract the hours from the time '23:00', to get '23'] --> B[Step 2: Convert '23' to a number, to get 23]
B --> C{Step 3\nCheck: Are the hours greater than 12?}
C -- true --> D[Step 4: subtract 12 from the hours, to get 11]
D --> E[Step 5: add the rest of the time with 'pm', to get '11:00 pm']
E --> F[Step 6: return the new time]
```

This approach involves running some **conditionally**. In this case, we're only going to continue doing something if the condition **hours are greater than 12** is `true`.


### ❓ Conditionally executing code

In programming, an `if` statement will execute some code when a given condition is `true`.  
In JavaScript, we can write an `if` statement as follows:

```js {title="main.js"}
if (condition) {
      // do some code in here
}
```

The `if` statement consists of:
1. `if` keyword: this is the start of the `if` statement
2.  `(condition)`: some conditional expression that is wrapped in parentheses.
3. `{}`: a block statement: any code we want to execute if the condition is true goes inside the curly braces here

We can represent this with a diagram too:

```mermaid

flowchart LR
    IC{condition}
    IB[Execute code in body]
    EXIT([End of if statement])
    IC --> |true| IB
    IC -.-> |false| EXIT
    IB --> EXIT
```

</br>
</br>

### Applying new knowledge

So for `formatAs12HourClock` we said part of the strategy for handling `"23:00"` would involve the following checking that the `hours` value is less than 12. For this purpose, we can use another comparison operator: `>` operator. This will check if the value on the left of the operator is less than the value on the right of the operator.
So `3 > 12` would evaluate to be `false`, as `3` is not greater than `12`. 

So provided we have an expression for the hours from the time, then we can write a conditional statement as follows:

```js
if (expressionsForHours < 12) {
   // do code to format the 12 hours 
}
```

> 🎯 Aim: Find an expression for the hours digits from the `time` input 

### Accessing strings


Given a `time` string we need to access the _first 2 characters_ of the string which represent the hours.

Strings are **zero-indexed**.
**Index** means **position**, so **zero-indexed** means we start counting character positions from `0` onwards.

Here are the positions/indexes for `"23:00"`

|   index   |  0  |  1  | 2   | 3   | 4   |
|:---------:|:---:|:---:|-----|-----|-----|
| character | `"2"` | `"3"` | `":"` | `"0"` | `"0"` |

In JavaScript, we can use square bracket notation to access specific characters in the string using the index.

```js
time[0] // evaluates to "2"
time[1] // evaluates to "3"
time[2] // evaluates to ":"
// etc
```

However at the moment, square bracket access wil only give a single character.
So we must use another method to extract _multiple_ characters from the given string.


### Extracting a slice

We can use a function called `slice`.

[`slice`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice) is a function that can take 2 arguments: a start index and an end index. `slice` will return a section of the string from the start index up to but not including the start index.

```js
time // holds the value "23:00"
```
```js
time.slice(0,2) // will access the characters below
```


|   index   |  0  |  1  | 
|:---------:|:---:|:---:|
| character | `"2"` | `"3"` |


So `time.slice(0,2)` will evaluate to `"23"` when the `time` is `"23:00"`. Finally we must convert `"23"` to the number `23`, otherwise we can't compare this value properly. We can use the `+` operator to convert strings to numbers by writing the following:

```js
+time.slice(0,2); // evaluates to 23
```


<br>
<br>
 
### 🏗️ Assembling the parts

Earlier we had an `if` statement in the form:

```js
if (expressionForHours > 12) {

}
```

So now we've found an expression for the `hours` using `slice`, we can write:

```js
if (+time.slice(0,2) > 12) {

}
```

If the time is `"23:00"` then the condition `+time.slice(0,2) > 12` will evaluate to `true` and the code inside the curly braces will be executed. 

This `if` statement is implementing the following part of the diagram from earlier:

```mermaid 

flowchart TD

A{Check: Are the hours greater than 12?}

```

Now we can format the string using our approach from earlier:
we’ll need to append `"pm"` to the string expression and subtract 12 from the hours. So we get the following:

```js
if (+time.slice(0,2) > 12) {
	return `${time.slice(0,2) - 12}:00 pm`
}
```

The `return` statement above implements the following steps we set out earlier:

```mermaid 

flowchart TD

D[Step 4: subtract 12 from the hours]
D --> E[Step 5: add the rest of the time with 'pm']
E --> F[Step 6: return the new time]

```

Now we can **re-run** our assertions from earlier to check our function behaves as expected.


### 🧹 Improving the code


Now the assertions pass: in other words, our function’s current output matches with the expected output described in the assertions.

However, at the moment, we’re making use of the same expression twice: `+time.slice(0,2)`. This means we’re calling the function `slice` twice. Additionally, expressions embedded inside curly braces and parentheses can often be difficult to read. In this situation it makes sense to label the recurring expression so we can reuse wherever it we need to in our code. 

Let’s create a variable called `hours` and assign to it our expression.

```js
function formatAs12HourClock(time) {
   const hours = +time.slice(0,2);

   if (hours > 12) {
      return `${hours - 12}:00 pm`
   }
   return `${time} am`
}
```

Note that the behaviour of the function hasn't changed: it is still returning the same outputs from the given inputs. We've just improved the implementation without changing the underlying behaviour.
 