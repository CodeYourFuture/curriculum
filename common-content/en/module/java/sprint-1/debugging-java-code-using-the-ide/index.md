+++
title = 'Debugging Java Code Using the IDE'

time = 120
[objectives] = [
    'Use debugging tools in the IDE to fix runtime issues',
    'Set breakpoints and inspect variables.',
    'Step through code execution to identify logic errors.'
]
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

Debugging is an essential skill for any developer. IntelliJ provides powerful tools to help you find and fix issues quickly. In your IDE, there are two ways to run a program:
- Run 
- Debug

If you use the debug option, you will be able to set breakpoints at which the program will pause execution. When the program stops on a breakpoint, you can: 
- View the value of all variables that are in scope
- View the current execution stack
- Evaluate a specific piece of code
- Step line-by-line through the code

When stepping through code, you can: 
- Step over: steps over the next single line
- Step into: step into a method that is being invoked on the current line
- Run to cursor: continues execution until it reaches the cursor
- Evaluate: evaluates a selected portion of code. You can also write arbitrary code to evaluate.

## Self Study
As you read through the resources below try to answer the following questions:
- What are some Intellij shortcuts to help with debugging?
- How does debugging in Java compare to debugging you've seen in other languages?

### Reading material 
- [Introduction to debugging in Java](https://www.w3schools.com/java/java_debugging.asp)
- [Debugging a Java application with IntelliJ](https://www.jetbrains.com/help/idea/debugging-your-first-java-application.html)
- [Understanding compilation](https://www.baeldung.com/java-compiled-interpreted)

{{<note type="exercise" title="Exercise 4.1">}}
**Goal:** Learn to use breakpoints and inspect variables.

- Write a program that calculates the sum of numbers from 1 to 100 and prints the result
- Introduce a bug (e.g., start the loop at -1 instead of 1).
- Use IntelliJ’s debugger to:
- Set a breakpoint inside the loop.
- Inspect the value of the sum variable and the result variable, seeing how they change as you step through.
- Step through the code to find the error.
{{</note>}}

## Reflections
Think about the following questions, make notes and be prepared to talk through your thoughts in the workshop.
- How might you have found the issue if you didn't have a debugger?
- What was the process you followed when debugging code? e.g. how did you decide where to put breakpoints? 
