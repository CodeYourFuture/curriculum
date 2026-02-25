+++
title = 'Playing computer'

time = 30
[objectives]
    1='Analyse each line in a given program and state what the line does when the program executes'
    2='Differentiate between a function declaration and a function invocation'
    3='Define a frame'
    4='Describe what happens when a function is called'
    5='Differentiate between a local frame and a global frame'
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

To understand how `convertToPercentage` works we must build a mental model of how the computer executes our code. To build this model, we use a method called {{<tooltip title="playing computer">}}.**Playing computer** means simulating how the computer executes our code. We "step through" the code, line by line, and work out what the computer does when it follows each instruction.{{</tooltip>}}

We will use an interactive code visualiser to play computer.

{{<note type="activity" title="👣 Step through">}}

In a JavaScript program, each line is an instruction that will have some effect. For example, a line of code with a variable declaration means "store a new variable with this value in memory". In the interactive widget, arrows are used to show which _line just executed_ and which _line is next to be executed_.

Click _next_ to see what happens when the computer executes the following program. Pay particular attention to what happens when the function `convertToPercentage` is called.

<iframe title="interactive-widget" width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=const%20decimalNumber%20%3D%200.5%3B%0A%0Afunction%20convertToPercentage%28%29%20%7B%0A%20%20const%20percentage%20%3D%20%60%24%7BdecimalNumber%20*%20100%7D%25%60%3B%0A%7D%0A%0AconvertToPercentage%280.5%29%3B&codeDivHeight=400&codeDivWidth=300&cumulative=false&curInstr=4&heapPrimitives=nevernest&origin=opt-frontend.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>

{{</note>}}

### 🖼️ Global frame

As we step through the program, we keep track of two things: _memory_ and the _line that is being currently executed_. We keep track of this information using a {{<tooltip title="frame">}} Think of a frame as the context in which some code gets executed. We use frames to keep track of memory and the line of code that is being currently executed.{{</tooltip>}}.

The _global frame_ is always the first frame that gets created when our program starts executing. It is like the starting point for our program, the place where code gets executed first. When we run the code above, `decimalNumber` and `convertToPercentage` are both stored in the _global frame_.

### 🖼️  Local frame

{{<note type="tip" title="recall">}}
A **function call** is an instruction to run the code inside a function
{{</note>}}

Whenever we call a function a new frame is created for executing the code inside that function. In the example above, we call the function `convertToPercentage` on line 7 and then a new frame is created for `convertToPercentage`. Inside the `convertToPercentage` frame, the computer executes the instructions inside `convertToPercentage`, storing new variables in memory and keeping track of the current line that is being executed.
