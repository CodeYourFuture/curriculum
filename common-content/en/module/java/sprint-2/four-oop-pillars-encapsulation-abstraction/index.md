+++
title = 'The Four OOP Pillars - Encapsulation & Abstraction'

time = 120
objectives = [
    'Explain what encapsulation means and why protecting object state matters',
    'Explain what abstraction means and how it reduces system complexity',
    'Identify class responsibilities and object boundaries',
    'Explain why we use access modifiers to control visibility',
    'Explain why fields are usually private',
    'Design classes that expose a clear public API while hiding internal implementation'
]
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

The four pillars are descriptions of patterns that appear in well-designed systems. Understanding these principles gives you:

- A shared vocabulary for talking about design
- A way to reason about why code is structured the way it is
- A foundation for understanding interfaces, collections, and services later in the course

We're going to initially focus on two of these:

- **Encapsulation** protects domain models and services
- **Abstraction** underpins dependency injection and service boundaries

If these concepts feel abstract now, that's normal, their value becomes clearer as you apply them repeatedly in code.

## Self Study

_As you read through the resources below try to answer the following questions:_

- In a sentence or two, describe abstraction and encapsulation
- How might abstraction help if your current project became part of a larger system?
- What problems arise when object state can be modified freely from outside the class?
- How would private fields and the use of setters improve safety over public fields?
- What problems do encapsulation and abstraction help prevent in real programs?

### Reading Materials

- (Baeldung - OOP Concepts)[https://www.baeldung.com/java-oop]
  - Focus on: abstraction and encapsulation
  - Skip: advanced class types
- (GeeksforGeeks - OOP Concepts)[https://www.geeksforgeeks.org/object-oriented-programming-oops-concept-in-java/]
  - Focus on: abstraction and encapsulation
- (Baeldung - Access Modifiers)[https://www.baeldung.com/java-access-modifiers]
- (Baeldung - Encapsulation & Information Hiding)[https://www.baeldung.com/java-information-hiding-vs-encapsulation]
