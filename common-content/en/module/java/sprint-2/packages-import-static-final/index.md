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

- [Baeldung - Packages](https://www.baeldung.com/java-packages)
- [Baeldung - Static](https://www.baeldung.com/java-static)
  - Don't worry about static code blocks or inner-classes at this point
- [Medium - Hazards of global state](https://medium.com/@obemeuche/the-hazards-of-globalizing-dynamic-variables-in-java-a-code-centric-perspective-fafa625b0a4d)
- [Baeldung - Final](https://www.baeldung.com/java-final)
- [Baeldung - Immutable objects](https://www.baeldung.com/java-immutable-object)
  - For applications of the final keyword to guard against unwanted side-effects

## Exercises
{{<note type="exercise" title="Exercise 4.1 - Static Instance Counter">}}

Tasks:

- Create a class: Create a new class named `Planet`
- Instance Field: Give the class a non-static (instance) field: `private String name;`
- Add a constructor that takes the name.
- Static Field (Shared State): Add a private static field to track the number of `Planet` objects created: `private static int planetCount = 0;`
- Modify the Constructor: In the Planet constructor, increment `planetCount` every time a new `Planet` object is created
- Static Method (Class Behaviour): Add a public static method to retrieve the count: `public static int getPlanetCount()` that returns `planetCount`
- What happens if you try to reference the instance's name field in this method?
- Test: In your main method (or a separate test file):
  - Create three different `Planet` objects: earth, mars, jupiter
  - Print the planetCount using only the class name (`Planet.getPlanetCount()`)
  - What happens when you print `earth.getPlanetCount()`, why is this confusing?

_Think about the following questions, make notes and be prepared to talk through your thoughts in the workshop._

- Why does planetCount have to be static, while name should not be?
- Why is it important that getPlanetCount() is static?
- What are some of the dangers of using global static variables?
- What would happen if planetCount were an instance field instead?
{{</note>}}

{{<note type="exercise" title="Exercise 4.2 - Final Safety">}}

This exercise explores the three main uses of final: fields, methods, and classes.

#### Final Fields

- Create a class named `Configuration` in a package of your choice.
- Class Constant: Add a public static final field for a universally constant value: `public static final int MAX_USERS = 100;`
- Final Instance Field: Add a private final field: `private final String systemName;`
- Initialise it in the constructor.
- Test in main:
  - Try to reassign `Configuration.MAX_USERS = 200;` and observe the compiler error.
  - Create a Configuration instance. Try to reassign its `systemName` field (you'll need to create a setter for this) and observe the compiler error

#### Final Methods and Classes

**Create a parent class**
- Create a class named `Polygon` in your package.
- Add a private final int field for `numberOfSides`.
- Create a constructor that does not include this field, what happens?
- Create a constructor that takes a `numberOfSides` parameter and initialises the field.
- Add a getter method `getNumberOfSides()` to return the value of `numberOfSides`.
- Add a `public final` method `describe()` that prints: 'I am a polygon with X sides' where X is the `numberOfSides` field
- Try to create a setter for `numberOfSides`. Can you compile it?

**Create a subclass**
- Create a class named `Triangle` that extends `Polygon`.
- In the constructor, call the superclass constructor with 3 sides.
- Try to override the `describe()` method in `Triangle`. What error does the compiler give you?

**Make the parent class final**
- Change the `Polygon` class declaration to:
- public final class `Polygon`
- Try to compile the `Triangle` class. What error do you get?

_Think about the following questions, make notes and be prepared to talk through your thoughts in the workshop._

- Why can `MAX_USERS` never be reassigned?
- Why can the `systemName` field not be reassigned, even via a setter?
- Why can't you add a setter for `numberOfSides`?
- How do final fields in `Configuration` and `Polygon` serve different purposes?
- Why might a designer choose to make a class final?
{{</note>}}