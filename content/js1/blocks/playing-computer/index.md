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

We will use execution diagrams to step through our code. First, we need to track the line of code that is **currently executing**.

{{<note type="activity" title="Playing computer">}}

In the interactive widget, an arrow shows which line of code is being executed. Each line is an instruction to the computer that will produce some effect. For example, a line of code with a variable declaration means "store a new variable with this value".

Choose _next_ to see what happens when the computer executes the variable declaration.

```js {linenos=table,linenostart=1}
const decimalNumber = 0.5;

function convertToPercentage() {
  const percentage = `${decimalNumber * 100}%`;
}

convertToPercentage(0.5);
```

{{</note>}}

### 🖼️ Storing things in memory

As variables are declared, we need a way to track the memory stored as our program executes. In our diagrams, we keep track of memory using a _frame_.

For now, we can think of a frame as a space where we execute some code in a function.

The _global frame_ is always the first frame that gets created when our program starts executing. We can think of the _global frame_ as the place we start executing code. When we run the code above, `decimalNumber` and `convertToPercentage` are stored in the _global frame_. We then call the function `convertToPercentage`. Then a frame is created for `convertToPercentage` where we create the percentage string using an expression.
