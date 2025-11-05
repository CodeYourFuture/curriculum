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

You start at the top of a script and run down line by line, evaluating what each line does.
When you reach the end without any errors, your script has finished.

When you see a variable or function declaration, you record that in the appropriate frame.
You can only use functions or variables that are available to you in your frames.
Each time you step into a function, you get a new local frame.
Each time you leave (or return from) a function, you get rid of that local frame.
When you leave a frame, you return to the last line of execution you were at in the frame above.

If you ever come across a `console.log()` call, you write down what needs to be printed.
You can assume that built-in functions, like those in `console.` and `Math.`, are always available to use.

If you try to access a function or a variable that is not defined in any frame, that is an error.
When you encounter an uncaught error, the program has crashed and you can't continue further.


# Advice for Trainees

The goal of playing computer is to help you improve your skill at understanding how a computer interacts with code.
You might want to encourage playing computer if you find you:
* Have difficulty explaining what your code is doing to others
* Struggle to understand why code is acting in a particular way
* Can't find why an error or bug is happening
* Don't understand how code someone else wrote works

To get the most benefit from this, here are some suggestions:
* Read and work through every line of code, without skipping any of them
* Perform any calculations yourself to see what the code is _really_ doing, and avoid making assumptions about what you think it _should_ be doing
* You might be tempted to avoid using notes to keep track of frames in simple scripts, but while you're building up experience try to do the full exercise so you understand what is happening

After playing computer, you might want to ask yourself some questions as a final step of the activity, to make sure you fully understood the code you were working with.
Here are some examples you might use: 
* **Purpose**: What was the purpose of this code? Does its behaviour match what you think it should be doing? Does the code perform as expected? 
* **Problems**: Are there any bugs or errors? Can you think of any problems this code might have if you changed the inputs? Does it need any input validation or error handling?
* **Improvements**: Based on your experience playing computer, could you make any changes to this code to improve it? Does it get stuck in lots of loops that could be made more efficient? Are there variables that could be better named?


# Advice for Volunteers

Playing computer helps trainees build up improved mental models about how code execution works.
It practices skills that will be helpful when debugging or testing code.

To best help facilitate playing computer, here are some tips:
* Make sure that trainees are going through each line of code and following the commands as they are written
* If trainees are working in pairs, encourage them to take turns tracking the global frame and local frame(s) of different programs.
* Trainees may be tempted to make assumptions about what code is doing, or skip certain parts that seem obvious. Recommend that trainees do everything fully, as this may result in the trainees missing out key learning opportunities



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



{{<tabs name="playcomputer">}}
===[[Global Frame]]===
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
1. The next line is `let result = multiply(2,3)`. Now we are calling a function. Make sure the function `multiply` is either on our list of globally available functions or is a built-in JavaScript function. It is on our global frame, so we can start executing it.
1. We step into the function `multiply` using our arguments 2 and 3.
👉🏼 [Next](#playcomputer-1)
===[[Local Frame]]===
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
👉🏼 [Next](#playcomputer-2)
===[[In a Loop]]===
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
👉🏼 [Next](#playcomputer-3)
===[[In a Loop (again!)]]===
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
1. Exiting the for loop, the next and final line of the function is to return the value in the variable `sum`. We look this up and return 6 from our function.
| Local Frame |
|-|
| x:2 |
| y:3 |
| sum:3 |
| i:1 |
| _at line 6_ |
| **Return:6** |
👉🏼 [Next](#playcomputer-4)
===[[Returning]]===

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
| **result:6** |
| _at line 8_ |
1. Lastly, we are writing this out to the console. On your console page, look up the value stored in the `result` variable (6), and print that out.
| Global Frame |
|-|
| multiply(x,y) |
| result:6 |
| _at line 9_ |
```
console output
6
```
1. Congratulations! You've successfully played computer and worked through this small program.
1. Ask yourself, did the program do what you expected it to? Given the inputs 2 and 3, it returned the value 6. That sounds like the function `̀multiply` is working as expected!
1. Are there any improvements that could be made? What if the inputs were 50 and 60? How long would it take you to get to the correct answer of 300? Is there a faster way of achieving the same thing?

{{</tabs>}}





# Example running through buggy code
The above example shows how you would play computer with some code that works well. But what about code that isn't working right, which has bugs in it? This is where playing computer can really be helpful as it will help you to spot, and better understand, where a bug is and why it is causing a problem.

We will play computer using this example code:
```
function squareNumber(numbers) {
    return number**number;
}

let number = 2;
let otherNumber = 3;
console.log(squareNumber(number));
console.log(squareNumber(otherNumber));
```

{{<tabs name="playbrokencomputer">}}
===[[Starting out]]===
1. We'll use the same method, tracking the global frame, the local frame, and the outputs.
1. We read past the function definition, recording it in our global frame:
| Global Frame |
|-|
| **squareNumber(numbers)** |
| _at line 3_ |
1. We now have a couple of variable declarations we need to add to the frame:
| Global Frame |
|-|
| squareNumber(numbers) |
|  **number:2** |
| **otherNumber:3** |
| _at line 6_ |
1. At the next line, we have two functions being called. console.log and squareNumber. We need to evaluate squareNumber() first. We look it up in our global frame, see it is defined, so we start that function. We have to look up the number variable as this is going to be passed as an argument.
| Global Frame |
|-|
| squareNumber(numbers) |
|  number:2 |
| otherNumber:3 |
| _at line 7_ |
1. We pass the value 2 to our `squareNumber` function.
👉🏼 [Next](#playbrokencomputer-1)
===[[First Function]]===
1. We have now entered a new scope, so we need to build up a new local frame, recording the value 2 that was passed as a parameter to the function.
| Local Frame |
|-|
| **numbers:2** |
| _at line 1_ |
1. Moving to the next line of our function, we are immediately returning an expression. The expression `number**number` needs to be evaluated first before we can return it.
1. We need to look up the values used in the expression. They are both the same variable - number. We look this up in the local frame:
| Local Frame |
|-|
| numbers:2 |
| _at line 2_ |
1. Notice _number is not listed!_. We have to then see if it exists in our global frame instead:
| Global Frame |
|-|
| squareNumber(numbers) |
| number:2 |
| otherNumber:3 |
| _at line 7_ |
1. Now we can remember it has the value 2 in it. We evaluate the expression `2**2`, which in JavaScript is the equivalent of 2 to the power of 2, giving us an answer of 4
| Local Frame |
|-|
| numbers:2 |
| _at line 2_ |
| **Return:4** |
1. Lastly, we return this value 4 back out of our function. We don't need the local frame any more, and we can get rid of it, leaving us only the global frame:
| Global Frame |
|-|
| squareNumber(numbers) |
| number:2 |
| otherNumber:3 |
| **returned value:4** |
| _at line 7_ |
1. We next pass the value 4 that was returned from the function to the final console.log(). We look up console.log() in our global frame. It is not there, but we know that console.log is a built-in function so we can still use it. This gives us our output, and we can move on:
| Output |
|-|
| 4 |

| Global Frame |
|-|
| squareNumber(numbers) |
| number:2 |
| otherNumber:3 |
| _at line 7_ |

👉🏼 [Next](#playbrokencomputer-2)


===[[Second Function]]===
1. The next line works in much the same way as the last one. From our global frame, we find the function squareNumber and the value we want to pass to it, otherNumber, which has the value 3.
| Global Frame |
|-|
| squareNumber(numbers) |
| number:2 |
| otherNumber:3 |
| _at line 8_ |
1. We have now entered a new scope, so we need to build up a new local frame, recording the value 3 that was passed as a parameter to the function.
| Local Frame |
|-|
| **numbers:3** |
| _at line 1_ |
1. Moving to the next line of our function, we are immediately returning an expression. The expression `number**number` needs to be evaluated first before we can return it.
1. We need to look up the values used in the expression. They are both the same variable - number. We look this up in the local frame:
| Local Frame |
|-|
| numbers:3 |
| _at line 2_ |
1. Notice _number is not listed!_. We have to then see if it exists in our global frame instead:
| Global Frame |
|-|
| squareNumber(numbers) |
| number:2 |
| otherNumber:3 |
| _at line 8_ |
1. Now we can remember it has the value 2 in it. We evaluate the expression `2**2`, which in JavaScript is the equivalent of 2 to the power of 2, giving us an answer of 4
| Local Frame |
|-|
| numbers:2 |
| _at line 2_ |
| **Return:4** |
1. Lastly, we return this value 4 back out of our function. We don't need the local frame any more, and we can get rid of it, leaving us only the global frame:
| Global Frame |
|-|
| squareNumber(numbers) |
| number:2 |
| otherNumber:3 |
| **returned value:4** |
| _at line 8_ |
1. We next pass the value 4 that was returned from the function to the final console.log(). We look up console.log() in our global frame. It is not there, but we know that console.log is a built-in function so we can still use it. This gives us our output, and we can move on:
| Output |
|-|
| 4 |
| 4 |
👉🏼 [Next](#playbrokencomputer-3)

===[[Finishing Up]]===
1. We've now finished playing computer with our script. Let's review what happened.
| Output |
|-|
| 4 |
| 4 |

| Global Frame |
|-|
| squareNumber(numbers) |
| number:2 |
| otherNumber:3 |
| _at end of script_ |
1. First, did the JavaScript behave as expected? Our function was called squareNumber, so we expect it to square some numbers. Is this what happened?
* We gave it an input 2, and it printed the value 4. that's correct.
* We gave it an input 3, and it printed the value 4. If we square 3 we should have got the answer 9, so something has gone wrong
1. Our goal with playing computer in buggy code is to identify the source of bugs by doing exactly what the computer does. Let's try to think about the places where a bug might have happened.
* Remember when we tried to look up the variable `number` and found it did not exist in the local frame? That might be a cause of the problem.
* We could investigate further by changing some of the values.
* What happens if we changed the `number` variable to 3? It would then give us the output 27 (cubing instead of squaring) each time. That might also be a problem.
1. How could we fix the problems? 
* We spotted that the `number` variable wasn't working right, so we should rename the variables used inside the squareNumber function.
* The parameter `numbers` is too similar to other variables like `number`, so a more obvious name like `inputNumber` makes more sense.
* The first variable in the expression `number**number` should be renamed so points to this parameter instead of the global variable: `inputNumber**number`
* When squaring things we want to always use the power of 2, so it might be better to hard-code this instead of relying on a global variable that might change: `inputNumber**2`
1. After we make those changes, this is what our fixed JavaScript looks like:
```
function squareNumber(inputNumber) {
    return inputNumber**2;
}

let number = 2;
let otherNumber = 3;
console.log(squareNumber(number));
console.log(squareNumber(otherNumber));
```
If you try playing computer again, you'll see that it works as expected, logging the values 4 and 9 to the output. Much better!
{{</tabs>}}
