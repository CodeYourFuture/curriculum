+++
title = 'The Four OOP Pillars - Inheritance & Polymorphism'

time = 120
objectives = [
    'Explain the difference between method overriding and overloading',
    'And write overridden and overloaded methods',
    'Explain Java decides which method implementation to run',
    'Explain what upcasting and downcasting are, and when they occur',
    'Explain how polymorphism enables flexible, reusable designs',
    'Inspect types using _instance of_'
]
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

Inheritance on its own is rarely the goal, polymorphism is.

Polymorphism allows you to:

- Treat different objects in a common way, e.g. based on their common inheritance.
- Write code that works with future extensions, for instance logging behaviour in classes that extend a base application logger class
- Write classes that do not need to know about those extensions, operating only on the base class

Once polymorphism is understood, many Java features that previously seemed complex start to feel natural and predictable.

## Self Study

_As you read through the resources below try to answer the following questions:_

- How can inheritance help you avoid repeating the same behaviour in multiple classes?
- What additional benefits does inheritance provide when it allows polymorphism? How does this affect the way objects are used in code?
- What problem does method overriding solve that method overloading does not?
- Why is frequent downcasting often a sign of a design problem

### Reading Materials

- (Baeldung - Inheritance)[https://www.baeldung.com/java-inheritance]
- (Baeldung - Polymorphism)[https://www.baeldung.com/java-polymorphism]
- (GeeksForGeeks - Upcasting Vs Downcasting in Java)[https://www.geeksforgeeks.org/java/upcasting-vs-downcasting-in-java/]
- (Baeldung - Overloading vs Overriding)[https://www.baeldung.com/java-method-overload-override]
- (Medium - Composition: Understanding Has-A vs. Is-A in Java)[https://medium.com/@noble_frost_lion_664/composition-understanding-has-a-vs-is-a-in-java-1a1d8e2eab50]

### Video Materials

- (Java Polymorphism Fully Explained In 7 Minutes)[https://www.youtube.com/watch?v=jhDUxynEQRI]
- (Programming with Mosh)[https://www.youtube.com/watch?v=pTB0EiLXUC8]
  - Focus on the principles in the video rather than the javascript coding examples
- (Java OOP in 10 minutes)[https://www.youtube.com/watch?v=CWYv7xlKydw]
  - May be useful to help solidify concepts with java examples
