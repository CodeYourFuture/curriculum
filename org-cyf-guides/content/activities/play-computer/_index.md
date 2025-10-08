+++
title="Play computer"
description="Play the role of a computer by stepping through the execution of a computer program"
activities=["nature"]
term=true
emoji="🎲🖥️ "
time=30

[objectives]
    1='Analyse each line in a given program and state what the line does when the program executes'
    2='Differentiate between a function declaration and a function invocation'
    3='Define a frame'
    4='Describe what happens when a function is called'
    5='Differentiate between a local frame and a global frame'
+++


# What is "Playing Computer"?
A computer program is made up of a sequence of instructions, carried one after the other.
To best understand what a program is doing it can be helpful to follow these instructions one by one so we can see what is happening.

This is useful when:
* You are faced with a brand new program and are trying to figure out what it does
* You want to confirm that code you have written will work as you expect
* You are debugging code to find out where a bug is happening

Playing computer offers some benefits:

what are the benefits

# How to Play Computer
The goal of playing computer is to pretend you are the computer, processing each line of code, and tracking everything that changes.
You can play computer individually or in pairs. You can use paper, or if you prefer an online visualisation, the [Python Tutor](https://pythontutor.com/render.html#mode=display) tool may be useful. 

You need to keep track of 3 things, and it may help to use 3 separate pieces of paper:
* One to track the "Global Frame" for the whole program
* A new piece of paper each time you enter a "Local Frame"
* A final piece of paper to print out the output from any console logging.

The **Global Frame** is the state of the whole program, and you use it to keep track of:
* Which line you are at in the program, remembering to step back here when you exit a function
* The global variables declared in the program
* Any defined functions

The **Local Frame** is the state when you step into a function, and keep track of:
* Arguments defined for the function
* Local variables scoped specifically to that function
* Which line you are at within that function

You can only use functions or variables that are available to you in your frames.
Each time you step into a function, you get a new local frame.
Each time you step out of (or return from) a function, you get rid of that local frame.
When you leave a frame, you return to the last line of execution you were at in the frame above.

If you ever come across a `console.log()` call, you write down what needs to be printed.

If you try to access a function or a variable that is not defined in any frame, that is an error.
When you encounter an uncaught error, the program has crashed and you can't continue further.


# Advice for Trainees

The goal of playing computer is to help you improve your skill at understanding how a computer interacts with code.
You might want to encourage playing computer if you see trainees:
* Having difficulty explaining what code is doing
* Struggling to understand why code is acting in a particular way
* 


To get the most benefit from this, here are some suggestions:
* Read and work through every line of code, without skipping any of them
* Perform any calculations yourself to see what the code is _really_ doing, and avoid making assumptions about what you think it _should_ be doing


# Advice for Volunteers

Playing computer helps trainees build up improved mental models about how code execution works.
It practices skills that will be helpful when debugging or testing code.

To best help facilitate playing computer, here are some tips:
* Make sure that trainees are going through each line of code and following the commands as they are written
* If trainees are working in pairs, encourage them to take turns tracking the global frame and local frame(s) of different programs.



# Step-By-Step Example

Let's work through an example function to see how we would play computer.
We will try to figure out what this simple function is doing:

```
function multiply(x, y){
    let sum = 0;
    for(let i = 0; i < x; i++){
        sum = sum + y;
    }
    return sum;
}
let result = multiply(2,3);
console.log(result);
```

TODO this would be better as an interactive widget / slides we could step through

1. Execution always starts from the top of the code. We first see the declaration of a function `multiply`. We haven't actually called it yet, it's just being defined. Note it down on your global frame:
| Global Frame |
|-|
| **multiply(x,y)** |
| _at line 1_ |
1. Because we are not running this function right now, we skip to the next line of code.
| Global Frame |
|-|
| multiply(x,y) |
| _at line 8_ |
1. The next line is `let result = multiply(2,3)`. Now we are calling a function. Make sure the function `multiply` is either on our list of globally available functions or is a built-in javascript function. It is on our global frame, so we can start executing it.
1. We step into the function `multiply` using our arguments 2 and 3.
1. As the values 2 and 3 have been passed as arguments, we need to initialise these variables on our "Local Frame":
| Local Frame |
|-|
| **x:2** |
| **y:3** |
| _at line 1_ |
1. The first line of execution inside the function initialises another variable, `sum`, so we add that to the function-scope memory note:
| Local Frame |
|-|
| x:2 |
| y:3 |
| **sum:0** |
| _at line 2_ |
1. The next line sets up a for loop. Although it is written on one line, a few separate things are happening here. The first time we encounter the for loop, we initialise a variable:
| Local Frame |
|-|
| x:2 |
| y:3 |
| sum:0 |
| **i:0** |
| _at line 3_ |
1. The next thing is a comparison, `i < x`. We look up the values for these variables in our local frame, and see this gives us `0 < 2`. 0 is less than 2, so we proceed with the for loop.
| Local Frame |
|-|
| x:2 |
| y:3 |
| sum:0 |
| i:0 |
| _at line 3_ |
1. The line inside the for loop changes a variable using the value stored in another variable. We first have to look up `sum` (0) and `y` (3). We add them together, and then store this new value back into `sum`, updating our local frame:
| Local Frame |
|-|
| x:2 |
| y:3 |
| **sum:3** |
| i:0 |
| _at line 4_ |
1. The final step of a for loop is to execute the third instruction: `i++`. This tells us to look up the value `i` (0) and to "increment", or "add one". We then update our local frame:
| Local Frame |
|-|
| x:2 |
| y:3 |
| sum:3 |
| **i:1** |
| _at line 3_ |
1. We now repeat the steps for our for loop, starting with the comparison, `i < x`. We look up the values for these variables in our memory note, and see this gives us `1 < 2`. 1 is less than 2, so we proceed with the for loop.
| Local Frame |
|-|
| x:2 |
| y:3 |
| sum:3 |
| i:1 |
| _at line 3_ |
1. Again, we look up `sum` (3) and `y` (3). We add them together, and then store this new value back into `sum`, updating our local frame:
| Local Frame |
|-|
| x:2 |
| y:3 |
| **sum:6** |
| i:1 |
| _at line 4_ |
1. And finally we increment again: `i++`. This tells us to look up the value `i` (0) and add one to it. We then update our local frame:
| Local Frame |
|-|
| x:2 |
| y:3 |
| sum:3 |
| **i:2** |
| _at line 3_ |
1. This time when we check whether our for loop should run, we look up the variables and check `2 < 2`. 2 is not less than 2, so we stop going through the for loop.
| Local Frame |
|-|
| x:2 |
| y:3 |
| sum:3 |
| i:2 |
| _at line 3_ |
1. Exiting the for loop, the next and final line of the function is to return the value in the varibale `sum`. We look this up and return 6 from our function.
| Local Frame |
|-|
| x:2 |
| y:3 |
| sum:3 |
| i:1 |
| _at line 6_ |
| **Return:6** |
1. We now have to go back to where we were before we stepped into the function. You can now erase or throw away the function scope memory now as we have left it.
| Global Frame |
|-|
| multiply(x,y) |
| **returned value:6** |
| _at line 8_ |
1. According to where we left off, the line was `let result = multiply(2,3)`. This is creating a new variable in the global frame, and assigning it the returned value. We now need to update the global frame. Notice how none of the variables used within the function (the local frame) exist any more:
| Global Frame |
|-|
| multiply(x,y) |
| **resut:6** |
| _at line 8_ |
1. Lastly, we are writing this out to the console. On your console page, look up the value stored in the `result` variable (6), and print that out.
| Global Frame |
|-|
| multiply(x,y) |
| resut:6 |
| _at line 9_ |
```
console output
6
```
1. Congratulations! You've succesfully played computer and worked through this small program. Some questions to consider: 
* What was the purpose of this code?
* Does the code perform as expected?
* Can you think of any problems this code might have depending on the inputs?
* Based on your experience playing computer, what change could you make to this code to improve it?
