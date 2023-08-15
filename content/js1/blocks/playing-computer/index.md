+++
title = '💻 Playing computer'
headless = true
time = 5
facilitation = false
emoji= '🗄️'
[objectives]
    1='Analyse each line in a given program and state what the line does when the program executes'
+++

> To understand how `convertToPercentage` currently behaves we must build a mental model of how the computer executes our code.

To make sense of how the computer executes our code, we use a method called **playing computer**.

{{<note title="Playing computer" type="note">}}
**Playing computer** means simulating how the computer executes our code.
We have to step through the code line by line and work out what the computer does when it encounters a particular instruction.

This is difficult at first: however with practice, we develop a powerful tool for understanding how our code works.
{{</note>}}

## ➡️ Current line of code

We can make use of execution diagrams to step through our code.

Firstly, we need a way to track the **line of code that is currently executing.**

{{<note type="activity" title="Playing computer: current line of code">}}

In the interactive widget below, we use an arrow to indicate which line of code is currently being executed.
Each line is an instruction to the computer that will produce some effect.
For example, a line of code with a variable declaration means "store a new variable with a particular value".

Click on next to observe what happens when the computer executes the variable declaration.

<iframe width="800" height="300" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=const%20name%20%3D%20'Gayle'%3B&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>

{{</note>}}

## 🖼️ Storing things in memory

As variables are declared, we need a way to track the memory stored as our program executes.
In our diagrams, we keep track of memory using a _frame_.

For now, we can think of a frame as a space in our diagram that represents the variables stored in memory.

The _global frame_ is always the first frame that gets created when our program starts executing. We can think of the _global frame_ as a location for variables created outside of any function. When we run the variable declaration above, we get a string `"Gayle"` stored in the Global frame:

![global-frame](global-frame.png)

## 📲 Calling functions

So far, we've seen two things:

- lines of code are executed from top to bottom
- we keep track of variables stored in memory using a global frame

However, we must consider what happens when we declare and call a function in our program.
Let's consider another example:

<iframe width="850" height="375" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=function%20makeGreeting%28%29%20%7B%0A%20%20%20%20const%20greeting%20%3D%20%22Hello%20there!%22%3B%20%0A%7D%0A%0Aconst%20firstName%20%3D%20'German'%3B%0Aconst%20lastName%20%3D%20'Bencii'%3B%0A%0AmakeGreeting%28%29%3B&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>

The first thing in the program is the function declaration for `makeGreeting`.

`makeGreeting` is stored in the Global frame as an **object**. We don't need to explore objects as this point - all we need to understand at this stage is that objects are a data type in JavaScript. We will return to objects in more depth later on in the course.

On line 7 we have a function call:

```js {linenos=table,hl_lines=["7"],linenostart=1}
function makeGreeting() {
  const greeting = "Hello there!";
}

const firstName = "German";
const lastName = "Bencci";

makeGreeting();
```

A function call means "go execute the instructions in the body of a function".

🤔 In our diagram we need a way to show what happens to the current executing line when a function is called.

{{<note type="activity" title="exercise">}}
Given the code above, try using the visualisation diagrams to work out what happens when `makeGreeting` is called on line 7.

What happens to the arrow indicating the current line of code that we're executing.
What else do you notice when `makeGreeting` is called above?

{{</note>}}

The arrow representing the current line of execution now moves to the first line inside the function: this shows that the computer now starts running instructions inside the function.

In addition, another frame is created when we call `makeGreeting`:

![make-greeting-frame](make-greeting-frame.png)

Like the global frame, the `makeGreeting` frame will be used to track variables that are created when `makeGreeting` is executed.

## 📥 Returning from a function

Earlier we defined the value a function call evaluates to by writing a return statement with a return value.

<iframe width="800" height="450" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=function%20makeGreeting%28%29%20%7B%0A%20%20%20%20const%20greeting%20%3D%20%60Hello%20there%60%3B%0A%20%20%20%20return%20greeting%3B%0A%7D%0A%0Aconst%20firstName%20%3D%20'German'%3B%0Aconst%20lastName%20%3D%20'Bencii'%3B%0A%0A%0A%0AmakeGreeting%28%29%3B&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>

However, we can see that the `return` keyword also has additional effects. As well as defining the value the function call will evaluate to, it also tells us to "return" to the place in our code where the function was called.

{{<note type="activity" title="exercise">}}
Try using the visualisation diagram above to work out what happens when the computer executes the return statement.

{{</note>}}

## 🧩 Putting everything together

So now we have some idea of how the computer executes our code, we can apply these ideas to a program for our current implementation of `convertToPercentage`:

<iframe width="800" height="450" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=function%20convertToPercentage%28%29%20%7B%0A%20%20const%20num%20%3D%200.5%3B%0A%20%20const%20percentage%20%3D%20%60%24%7Bnum%20*%20100%7D%25%60%3B%0A%20%20return%20percentage%3B%0A%7D%0A%0Aconst%20output1%20%3D%20convertToPercentage%280.5%29%3B%0Aconst%20output2%20%3D%20convertToPercentage%280.231%29%3B&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>

{{<note type="activity" title="exercise">}}

Earlier we noted that when the computer executes the code above, we get the following output:

```bash
50%
50%
```

Given the code above, use the interactive widget to "play computer" with this example.
Try stepping through each line of code to explain why the program is giving this output.

{{</note>}}

## Checking our code

Given our code below:

```js {linenos=table,hl_lines=[7] ,linenostart=1}
function convertToPercentage() {
  const decimalNumber = 0.5;
  const percentage = `${num * 100}%`;
  return percentage;
}

const output1 = convertToPercentage(0.5);
const output2 = convertToPercentage(0.231);
```

when the function `convertToPercentage` is called, the variable `num` gets recreated in the `convertToPercentage` frame and set to `0.5` every time we call the function. Instead of `num` being set to `0.5` every time the function is called, we want to make use of the input that is passed to the function `convertToPercentage` each time it is called.
