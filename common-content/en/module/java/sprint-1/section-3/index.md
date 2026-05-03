+++
title = 'Section 3: Method Signatures'

time = 120
[objectives]
    1='Write methods and explain the structure and components of method signatures.'
    2='Write and run custom methods with parameters and return types.'
    3='Document methods using JavaDoc'
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

Understanding method signatures is essential for ensuring the code is readable & maintainable. When writing code, we should expect that someone else will need to understand and adapt it - we work in teams, not in isolation. Therefore, it's important to write code that is clear and understandable. 
It's important when writing Java code to document classes and methods so others understand the intended purpose of the code, this can been done with JavaDoc - have a read through how to format different types of JavaDoc.

## Self Study
As you read through the resources below try to answer the following questions:
1.	What are the components of a method signature? Are any of them optional?
2.	What is Javadoc? Who is it for and why is it useful?

### Reading material
- [Introduction to methods in Java](https://www.baeldung.com/java-methods)
- [Method signatures in Java](https://www.baeldung.com/java-main-method)
- [Writing Java methods](https://www.w3schools.com/java/java_methods.asp)
- [Introduction to JavaDoc](https://www.baeldung.com/javadoc)

### Exercise 3.1
Goal: Write a method signature which takes parameters.
- Create a private method called greetUser that:
- Accepts a String name as a parameter.
- Returns a greeting message like "Hello, Alice!".
- Call this method from a main method and print the result.
- Explain each part of the method signature for the name method.

### Exercise 3.2
- Create a method calculateSum that takes two integers and returns their sum.
- Add JavaDoc comments explaining the method.

## Reflections
Think about the following questions, make notes and be prepared to talk through your thoughts in the workshop.
- Why are private methods useful? Why not just have everything in the main method?
- Javadoc should describe the why not the what of your code - why?
