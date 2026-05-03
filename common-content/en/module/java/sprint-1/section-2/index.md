+++
title = 'Section 2: Java keywords and syntax'

time = 120
[objectives] = [
    'Identify Java reserved keywords in an IDE',
    'Explain and use common keywords like public, private, static, void, for, if, and primitive types',
    'Declare variables and print them out to the console.',
    'Write a conditional statement',
    'Write a for loop and a switch statement',
    'Explain the trade-offs between switch statements and if/else statements'
]
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

Java has strict syntax rules and reserved keywords that define its structure. Understanding these early will prevent common errors. 

Compilation is the process of converting the Java code you write into a format that your computer can execute. Compile time is when Java checks your code for errors before running your program, which is different from languages like Python or JavaScript that check for errors while the program is actually running. This provides us with the significant benefit of being able to spot (some!) errors without running the code. It also means Java IDEs come with a set of powerful tools to aid development. 

Java has two types of data type: primitive and reference. Without going into too much detail right now, primitive types are usually much faster for the computer to deal with and should be used in situations where performance is important. Moreover, the primitive types are the basic 'building blocks' of Java and all reference types are ultimately made up of primitive types. You can identify primitive types because they are always in lowercase, unlike reference types which are in UpperCamelCase. The primitive types are defined by the Java language itself and we cannot create any new ones ourselves or change any existing ones. We'll focus on the following primitive types for now:
- int
- long
- double
- boolean
- char
Java is a statically typed language, which means that variable types are known at compile time. As such, the type must be provided by the programmer when writing the code. 
For example, if you are to define a string, you must explicitly state that the variable is of type string:

```
String myVariable = "hello world";
```

## Self Study
As you read through the resources below try to answer the following questions:
1.	What is a keyword in java?
1.	Choose 3 keywords and explain what they represent
2.	What is meant by the term 'primitive type'?

### Reading material
- [Dynamic vs. static typing](https://docs.oracle.com/cd/E57471_01/bigData.100/extensions_bdd/src/cext_transform_typing.html)
- [Java keywords with explanations](https://www.w3schools.com/java/java_ref_keywords.asp)
- [Java Primitives](https://www.baeldung.com/java-primitives)
- [Java For Loop](https://www.baeldung.com/java-for-loop)
- [Decision Making in Java - Conditional Statements](https://www.geeksforgeeks.org/java/decision-making-javaif-else-switch-break-continue-jump/)

{{<note type="exercise" title="Exercise 2.1">}}
**Goal:** Practice basic syntax and keywords.

Create a program that:
- Declares variables of different primitive types (int, double, boolean, char).
- Prints their values to the console.
- Add comments explaining what each keyword does (e.g., public, static, void).
{{</note>}}

{{<note type="exercise" title="Exercise 2.2">}}
**Goal:** Identify and fix compilation errors.

- Remove a semicolon or misspell a keyword in your code.
- Observe the compilation error in IntelliJ.
- Fix the error and re-run the program
{{</note>}}

{{<note type="exercise" title="Exercise 2.3">}}
**Goal:** Compare Java control flow with JavaScript.

Write a program that:
- Uses a for loop to print numbers 1 to 10.
- Uses an if-else statement to check if a number is even or odd.

**Bonus:** Rewrite the same logic in JavaScript and note the differences in syntax.
{{</note>}}

{{<note type="exercise" title="Exercise 2.4">}}
- Write a program that uses a switch statement to print the name of the day based on an integer (1 = Monday, etc.).
- Explain why switch in Java differs from JavaScript (e.g. type safety).
{{</note>}}

## Reflections
Think about the following questions, make notes and be prepared to talk through your thoughts in the workshop.
- List the primitive types you've seen and explain what they represent
- What is an enhanced for loop in Java? Would an enhanced for loop be useful for this exercise? Why? When would an enhanced for loop be useful?
- Did you encounter any compilation errors when writing your code? How did you fix them? Did the IDE help?
