+++
title = 'Dependencies and Dependency Injection'

time = 120
objectives = [
 'Explain what dependency injection is and why it is useful',
 'Compare and contrast the different types of dependency injection : constructor and method based (note field injection does also exist but is generally considered bad practice outside of tests and is not covered here)',
 'Refactor Java classes to use dependency injection and write new classes using DI'
]
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

## Self Study

_As you read through the resources below try to answer the following questions:_

- What do we mean by a 'dependency' in a Java class?
- What is Inversion of Control (IoC) and how does it relate to Dependency Injection (DI)?
- Can you give an example of IoC that isn't DI?
- What are some potential issues with Java classes that have dependencies but don't use DI. Think about testability, maintainability and tight-coupling for large code bases that evolve over time.
- How does DI help solve the above issues?
- What is constructor injection and how is it different to method injection?

### Resources

- [Overview of dependency injection](https://medium.com/@AlexanderObregon/the-basics-of-java-dependency-injection-fc5573d31655) - ignore section on interface injection
- [A more general discussion of Inversion of Control and how Dependency Injection is an example](https://stackoverflow.com/questions/3058/what-is-inversion-of-control) -Note some of the ideas here can be a little hard to understand in the abstract - focusing on the examples can be a good way to see the concepts in action

## Exercises
{{<note type="exercise" title="Exercise 2.1">}}

Refactor the code below to use constructor based dependency injection:
```java
 public static void main(String[] args) {
    Car car = new Car();
    car.start();
  }
 
  static class Car {
    Engine engine = new Engine();
 
    void start() {
      engine.rev();
      System.out.println("Car Started");
    }
 
  }
 
  static class Engine {
    Gears gears = new Gears();
    Cambelt cambelt = new Cambelt();
 
    void rev() {
      gears.initialise();
      cambelt.initialise();
    }
  }
 
 
  static class Gears {
    Set<Cog> cogs = Set.of(new Cog(), new Cog(), new Cog());
 
    void initialise() {
      cogs.forEach(cog -> cog.spin());
 
      // Initialisation logic
    }
  }
 
  static class Cog {
    void spin() {
      // Spin logic
    }
  }
 
 
  static class Cambelt {
    void initialise() {
      // Initialisation logic
    }
  }

```
{{</note>}}

## Reflections

_Think about the following questions, make notes and be prepared to talk through your thoughts in the workshop._

- Suppose we wanted to refactor our car such that it supported multiple different types of engine. How might we do it?
- How would unit testing the Car class be easier after it was refactored to use DI? Remember the unit tests for Car should not need to also test Engine, Gears, Cogs etc
- Why in this example (and in general) do we prefer constructor injection to setter injection?