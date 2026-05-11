+++
title = 'Classes and Objects'

time = 120
objectives = [
    'Explain what a class represents in Java',
    'Create object using constructors',
    'Use constructor overloading and constructor chaining to set particular fields on objects',
    'Explain how object references work when objects are assigned or passed around'
]
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

Classes and objects are the fundamental units of structure in Java. Every non-trivial Java program is a collaboration between objects.

Many early Java bugs come from misunderstandings about:

- How many objects actually exist
- Whether two variables refer to the same object
- When modifying one thing unexpectedly affects another
- One way of guarding against this is by using immutable objects, a concept we'll introduce later in the sprint

This section helps you build a correct mental model of object creation and identity, which becomes especially important when the objects are passed between services.

## Self Study

_As you read through the resources below try to answer the following questions:_

- What is the difference between a class and an object in Java?
- Explain how they relate to each other, and why many objects can be created from the same class.
- What actually happens when you create an object using new and a constructor?
- Include what the constructor is responsible for, and why a class might have more than one constructor.
- When one object variable is assigned to another or passed into a method, what is being shared?
- Explain how references work, and why changing an object through one variable can affect another.

### Reading Materials

- (Baeldung - Classes & Objects)[https://www.baeldung.com/java-classes-objects]- Focus on: fields, methods, constructors
- (Baeldung - Constructors)[https://www.baeldung.com/java-constructors] - Focus on: overloading and chaining
- (W3Schools - Constructors)[https://www.w3schools.com/java/java_constructors.asp] - An alternative resource for classes, objects and constructor material
- (Baeldung - Immutable Objects)[https://www.baeldung.com/java-immutable-object] - Focus on: how objects can be immutable, and the benefits of that immutability

### Video Materials
- (Coding with John - Constructors)[https://www.youtube.com/watch?v=pgBk8HC7jbU]

## Exercises

### Exercise 1.1 - Product Class

Create a Product class with:

- Fields: name, price, stockCount
- Getters and setters for each field
- A toString method that includes each of the fields
- Two constructors:

- Name and price only, defaulting stockCount to 0
- Name, price and stock

Create several products and print them, then modify your first constructor so that it takes advantage of constructor chaining.

_Think about the following questions, make notes and be prepared to talk through your thoughts in the workshop._

- How did constructor overloading change the way Product objects could be created?
- What problem does constructor chaining with this() solve?
- When you created multiple Product objects, how did the constructor arguments affect the state of each object?

### Exercise 1.2 - Reference Behaviour

Starting with the following in your main method:

```java
Product p1 = new Product("Laptop", 900);
Product p2 = p1;
p2.setPrice(1100);
System.out.println(p1.getPrice());
System.out.println(p2.getPrice());
```
#### Tasks:

- Predict the output
- Run the code to verify
- Change how p2 is instantiated so that making changes to it does **not** affect p1

_Think about the following questions, make notes and be prepared to talk through your thoughts in the workshop._

- Why did changing p2 also change p1?
- What does this tell you about what p1 and p2 actually store?
- How did your fix prevent changes to p2 from affecting p1?
- What new object(s) existed after your change compared to before?
- How could this kind of reference behaviour cause bugs in a larger codebase if it's not well understood?
