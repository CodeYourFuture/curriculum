+++
title = 'prep'
layout = 'prep'
emoji= '📝'
menu_level = ['sprint']
weight = 1
backlog= 'Module-JS1'
backlog_filter= 'Week 3'
+++


## Setting up a problem

A typical time can be written in one of 2 ways: 24hour clock or 12 hour clock. In 12 hour clock the hours reset after midday, so an hour after midday you have 1 pm. The pm means “in the afternoon”. For 24 hour clocks, the hours continue counting up after midday. So in 24 hour clock, 1 hour after midday would be 13:00.
We can write a short table summarising some of the times and how they are converted from 24 hour to 12 hour:

Time in 24 hour clock   Time in 12 hour clock

09:00                             9:00 am
10:00                             10:00 am
11:00                              11:00 am
…

13:00                              1:00 pm
 
## Problem

We want to convert any time from 24 hour clock into 12 hour clock. To achieve this goal, we can implement a function formatAs12HourClock that will take any string representing a time in 24 hour clock and convert it to the corresponding time in 12 hour clock.

So given a string input of “08:00”
formatAs12HourClock(“08:00”)
To return “20:00”


## Comparing output with expectation

Previously we logged the function’s output to the terminal. However, it is also essential that we can perform a comparison. We want to compare the function’s current return value with an expected output based on some input. 
Given the input “08:00” we want to compare the return value formatAs12HourClock(“08:00”) with the output 

We can use a comparison operator:`
`formatAs12HourClock(“08:00”) === “20:00”`, `===` is the strictly equality operator: it will check the value on the left of the operaror and the value on the right to see if they’re the same. This begs the question:

> What will `formatAs12HourClock("08:00") === "20:00"` evaluate to?


## Using booleans

There will need to be some way to indicate that the expression above is correct. So this expression will evaluate to a boolean: this is another data type in JavaScript with one of 2 values: true or false. The boolean data type is 


## Writing an assertion


Now that we can check the function’s output, we can write an assertion. An assertion is a claim that our function behaves in some way. The assertion is a check that our code behaves in a particular way, then following this check the user will receive feedback on the outcome of this assertion.

We can use access another function on the console object other than log. We can use console.assert:


```js
function formatAs12HourClock() {
}
console.assert(formatAs12HourClock(“08:00”) === ”20:00);
```

The documentation for console.assert states that a message will be written to the console if the condition is false. We can see above that convertAs12HourClock(“08:00”) will evaluate to false so we’ll get an error printed to the console. 
It would be useful to have slightly more information as to why this assertion failed. We can pass additional arguments to console.assert 


```js
console.assert(
formatAs12HourClock("08:00") === "20:00",
"current function output: %d, expected output: %d",
formatAs12HourClock("08:00"),
"20:00");
```

The second argument is a message string that will be logged to the console if the condition is false. The string message has “%d characters which represent values that will be replaced by actual values. So we pass in 2 more arguments, the return value `formatAs12HourClock(“08:00”)` and `“20:00”` and these will be replaced inside the string message. So we can write 
As we’re reusing the same expressions and values, we should store these in variable and refer to the variables again


```js
const currentOutput = convertTo12HrClock(“08:00”)
const expectedOutput = "8:00 am";
console.assert(
   currentOutput === expectedOutput,
   "current output: %s, expected output: %s",
    currentOutput,
    expectedOutput
);
```

Now we get a log in the console:

“current output: undefined, expected output: 08:00 am”



Let’s consider the following problem: we want to convert any time in 24hour clock to 12 hour clock. 

The function is being passed a single argument so we can parametrise and label this input as time. According to our assertion we get an input of “08:00” and need to create output of “8:00 am”. So we can start by accessing the string inside the function. So we’ll need to add “am” to the time and to get the required output. We can make use of a template literal and set the return value, and then re-run our assertion.
We can continue checking our assertion to see if our function’s current behaviour meets our expectations.
So we have the following:


```js title="problem.js"
function convertTo12HrClock(time) {
  
   return `${time} am`
}

const currentOutput = convertTo12HrClock("08:00");
const expectedOutput = "8:00 am";
console.assert(
   currentOutput === expectedOutput,
   "current output: %s, expected output: %s",
    currentOutput,
    expectedOutput
);
```


The current output is 


This is very close! However, the hours still has a zero in front of the function’s current output.
One approach can be to access the hours section of the string. 



## Asserting more cases


So far we’ve only created assertions that check the function’s behaviour for times after midnight and before midday. In these cases, there is a clear pattern: 
Take the current time and append the “am” string to the current time. 
However, we need to assert the function behaves correctly cases when the time is later than midday. Let’s create an assertion for our function when passed an input of “23:00”

```js
console.assert(“formatAs12HourClock(“23:00”) === “11:00 pm”)
```

## Reusing variable names

When we run the file with Node, we get an error report in our console.`SyntaxError`
An identifier is the name of a variableL so in a variable declaration like
`const currentOutput = convertTo12HrClock("08:23");` output is said to be the identifier. 
When an error is thrown, it means the execution of the program stops at this point and 


## Describing the approach 

So we need to go from the input “23:00” to “11:00pm”
In this case we’re taking the hours from time “23” 
Check the hours are above 12, if so
Convert to a number to get 23
Subtract 12 to get the new hours of 11
And then put back together with the rest of the time with “pm” on the end.

The approach described above involves running some conditionally. In other words, we must check if some condition is true and if so, execute some code. 
We can start by writing out 


## Conditionally executing code


We can start by writing an if statement:
The condition will be evaluated to a boolean: if this is true then the code inside the curly braces will be executed. According to the approach above, we need to check that the hours are above 12. So we’ll need to access the first characters of the string.

```js {title="main.js"}
if (condition) {
      // do some code in here
}
```

We want to check that some value ( the hours ) is less than 12. We can use another comparison operator for this purpose: < operator. This will check if the value on the left of the operator is less than the value on the right of the operator. 
So 
3 < 12 would be true, as 3 is less than 12.
So if we can create an expression for the hours from the time, then we can write a conditional statement as follows:

```js
if (expressionsForHours < 12) {}
```

## Accessing strings


So given a string of form 23:00” we want to access the hours portion of the string, the first 2 characters of the string. Strings are zero-indexed: we talk of characters being at a certain position in the string starting from zero and incrementing by one as we move to the right.

Here are the positions for “23:00”
Index:         0           1         2         3        4     
Character  “2”        “3”       “:”       “0”      “0”

We can use square bracket notation to access specific characters in the string

```js
time[0] // evaluates to “2”
time[1] // evaluates to “3”
time[2] // evaluates to “:”
// etc
```

We want to access the hours section of the string. If we can access “23” from the string time we can convert it to a number and remove the 0 in front. 

However at the moment, square bracket access wil only give a single character. So we must appeal to another function to extract multiple characters from the given string,


## Extracting a section 

We can use a function called slice - a function that is accessed of the string itself in the following way:


Time: 
time.slice(0,2), slice is a function that can take 2 arguments: a start index and an end index. Slice will return a section of the string from the start index up to but not including the start index. 

time.slice(0,2) will access the slice
Time: “23:00”
Index :       0       1       2 
Character “2”     “3”     “:”
 

time.slice(0,2) 

Now we can return to our conditional statement and write:

```js
if (+time.slice(0,2) > 12) {

}
```

If the time is “23:00” then the condition +time.slice(0,2) > 12 will evaluate to true and the code inside the curly braces will be executed. Now we can format the string as with our approach from earlier:
We’ll need to append “pm” to the string expression and subtract 12 from the hours. So we get the following:

```js
if (+time.slice(0,2) > 12) {
	return `${time.slice(0,2) - 12}:00 pm`
}
```

Now we can recheck our assertions:


## Improving the code


The function’s output satisfies the assertions: in other words, our function’s current output matches with the expected output described in the previous assertions. In our code at the moment, we’re making use of the same expression twice. time.slice(0,2). This means we’re calling the function slice twice. Additionally, expressions like inside curly braces and parentheses can often be difficult to read. In this situation it makes sense to label a particularly useful expression so we can reuse wherever necessary in our code. 

Let’s create a variable called hours.

```js
const hours = +time.slice(0,2)

if (hours > 12) {
	return `${hours - 12}:00 pm`
}
```
