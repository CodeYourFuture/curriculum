+++
title = 'Introduction to Testing'
time = 30
hide_from_overview = true
[objectives]
 1='Explain the need for testing when writing code'
 2='Define "unit testing"'
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

Now we know how to use packages in our projects we have opened the door to make them much more complex. Many of the applications you use every day will make use of third-party packages, with potentially hundreds of dependencies in total. That's a lot of things which all have to work together correctly - how can we make sure that happens?

### Testing

We make sure by **testing** our code! Testing doesn't have any special meaning in software - we are going to check that a program does the right thing at the right time. There are many different ways for us to do that though.

In this module we are going to concentrate on **unit testing**. That means we are testing the individual components of a program - our functions - to ensure they work correctly. In a real project we would also consider how these components work together and with other systems (known as **integration testing**).

Testing code is something that every developer should be doing, but it wouldn't make much sense for every developer to write their own tools to test their code. We're going to use a package to help us write our tests.

### Our function

Before we start writing tests we're going to write the function which we will be testing. In this example we're going to create a function which will take a time in 24-hour format (eg. `15:00`) and convert it to 12-hour format (`3:00 pm`). We will name our function `formatAs12HourClock`. Create a new directory to store your files (make sure you aren't in the `packages-practice` folder) and a new `timeConverter.js` file.

Stating our problem in the given-when-then structure:

- _Given_ a time in 24-hour format  
- _When_ we call `formatAs12HourClock`  
- _Then_ we get back a string representing the same time in 12-hour 

To do the conversion we will need to examine the input and determine if the part of it representing the hour is over or under 12. If it's under we don't need to change it, if it's over we need to subtract 12 to get the 12-hour equivalent. Finally we need to add `am` or `pm` and return the new value.

Converting that to pseudocode:

```js {title="timeConverter.js"}
// function receives a string representing time in 24-hour format as an argument
// extract digits representing hours
// if hour value over 12, subtract 12
// if hour value under 12, continue
// add am or pm
// return new value
```

We can write our function as:

```js {title="timeConverter.js"}
// function receives a string representing time in 24-hour format as an argument
function formatAs12HourClock(time) {

  // extract digits representing hours
  const hours = Number(time.slice(0, 2));

  // if hour value over 12, subtract 12
  // if hour value under 12, continue
  if (hours > 12) {
    // add pm and return value
    return `${hours - 12}:00 pm`;
  }
  // add am and return value
  return `${time} am`;
}
```

{{<note type="exercise" title="Exercise: Research new functions">}}
There are two functions used here which you may not have seen before:
- `Number()`
- `String.slice()`
  
Use the [MDN docs](https://developer.mozilla.org/en-US/) to research these functions and understand what they are doing here.
{{</note>}}

We can check that our function works by calling it a couple of times and using `console.log()` to print the results.

```js {title="timeConverter.js"}
// ...

console.log(formatAs12HourClock("23:00"));
console.log(formatAs12HourClock("08:00"));
```

This does the job, but it doesn't scale well at all. Imagine we have a lot of functions to test - that would mean lots of `console.log()` calls cluttering up our files. It also relies on people running the file using Node, so if our tests require anything more complex like a database integration it won't be possible to run them properly. We're going to move our tests into an environment where it's much easier to keep track of everything.
