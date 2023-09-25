+++
title = '🎮 Playing computer'
headless = true
time = 30
facilitation = false
emoji= '🗄️'
[objectives]
    1='Analyse each line in a given program and state what the line does when the program executes'
+++

To understand how `convertToPercentage` works we must build a mental model of how the computer executes our code. To make sense of how the computer executes our code, we use a method called {{<tooltip title="playing computer">}}**Playing computer** means simulating how the computer executes our code. We "step through" the code, line by line, and work out what the computer does when it follows each instruction.{{</tooltip>}}

### ➡️ Current line of code

We will use an interactive code visualiser to play computer. First, we need to track the line of code that is **currently executing**.

{{<note type="activity" title="Playing computer">}}

In the interactive widget, an arrow shows which line of code is being executed. Each line is an instruction to the computer that will produce some effect. For example, a line of code with a variable declaration means "store a new variable with this value".

Click _next_ to see what happens when the computer executes the variable declaration.

<iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=const%20decimalNumber%20%3D%200.5%3B%0A%0Afunction%20convertToPercentage%28%29%20%7B%0A%20%20const%20percentage%20%3D%20%60%24%7BdecimalNumber%20*%20100%7D%25%60%3B%0A%7D%0A%0AconvertToPercentage%280.5%29%3B&codeDivHeight=400&codeDivWidth=300&cumulative=false&curInstr=4&heapPrimitives=nevernest&origin=opt-frontend.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>

{{</note>}}

### 🖼️ Global frame

As the program runs, we need to keep track of two things: memory and the line that is being currently executed. We keep track of this information using a {{<tooltip title="frame">}} we can think of a frame as a environment where we execute some code.{{</tooltip>}}

Frames are the environment where code is executed.

The _global frame_ is always the first frame that gets created when our program starts executing. The global frame is like the starting point for our program, the place where code gets executed first. When we run the code above, `decimalNumber` and `convertToPercentage` are stored in the _global frame_.

### 🖼️  Local frame

On line 7, we call the function `convertToPercentage`. Whenever we call a `convertToPercentage` frame is created. The `convertToPercentage` frame is an environment for executing the code declared inside the body of `convertToPercentage`.

> Whenever we call a function, a brand new frame is created for executing the code inside that function
