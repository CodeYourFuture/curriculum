+++
title = 'Packages, import, static & final'

time = 120
objectives = [
    'Explain how Java packages organise code and communicate structure',
    'And demonstrate organising code into appropriate packages',
    'Explain how import works across packages',
    'Use an IDE to import classes',
    'Explain what it means for a member to belong to a **class** vs an **instance**',
    'Explain how static changes ownership and lifetime',
    'Write static fields and methods',
    'Explain how final communicates constraints and design guarantees',
    'Write final methods and classes'
]
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

As projects grow, structure becomes just as important as logic. Without clear organisation, even correct code becomes difficult to understand, change, and extend.

Packages help you:

- Group related concepts
- Separate responsibilities
- Communicate architectural intent to other developers

The static and final keywords let you express design decisions directly in code, rather than relying on comments or conventions.

## Self Study

_As you read through the resources below try to answer the following questions:_

- How do packages communicate structure and intent, beyond just avoiding name clashes?
- What does it mean for a field or method to belong to a class rather than an instance?
- Why can misuse of static be harmful to object-oriented design?
- How does the meaning of final differ when applied to fields, methods, and classes?

### Reading Materials

- [Baeldung - Packages)[https://www.baeldung.com/java-packages]
- [Baeldung - Static)[https://www.baeldung.com/java-static]
  - Don't worry about static code blocks or inner-classes at this point
- [Medium - Hazards of global state)[https://medium.com/@obemeuche/the-hazards-of-globalizing-dynamic-variables-in-java-a-code-centric-perspective-fafa625b0a4d]
- [Baeldung - Final)[https://www.baeldung.com/java-final]
- [Baeldung - Immutable objects)[https://www.baeldung.com/java-immutable-object]
  - For applications of the final keyword to guard against unwanted side-effects
