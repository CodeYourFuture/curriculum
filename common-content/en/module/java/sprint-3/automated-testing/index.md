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

## What you'll learn

How automated unit tests are developed, including the primary libraries for that. Why automated testing is important to the maintainability of a project and how it can be used in automated builds.

Also because the JUnit framework relies heavily on annotations we will look at what they are and how they are used.

## Why start here?

Any software project of a reasonable size quickly gets past the point where manual testing of the functionality with each change is practical. Automated testing gives us reassurance that a project can be enhanced or refactored whilst avoiding regressions.

Adding well constructed tests for a method, showing the expected results from specific inputs can help clarify the intent of a method and also lead to confirmation that the method parameters are sensible (e.g. in name, type and order) for its goal.

## Reading Materials

- Annotations - [geeks for geeks annotations in java](https://www.geeksforgeeks.org/java/annotations-in-java/), [dev.java](https://dev.java/learn/annotations/)
  - Don't worry about how to create annotations
- The official JUnit 5 user guide, which describes how to write tests, how test lifecycle works, what annotations are available, etc. [JUnit 5 user guide](https://docs.junit.org/5.10.0/user-guide/index.html)
  - Important Sections: 1.4, 2.1-2.7, 4.1, 4.2
- Articles summarising JUnit 5 basics: @Test, assertions, lifecycle, visibility rules; [Junit 5 basics](https://nipafx.dev/junit-5-basics/), [baeldung junit-5](https://www.baeldung.com/junit-5), [vogella JUnit](https://www.vogella.com/tutorials/JUnit/article.html)
- Maven surefire plugin (reference for how tests are run during a build) [documentation](https://maven.apache.org/surefire/maven-surefire-plugin/index.html)
- Simple project example [example](https://www.javaguides.net/2018/06/maven-surefire-plugin.html)

## Video Materials

- Beginner-friendly tutorials on creating and running your first JUnit 5 tests
  - [Creating and running a test](https://www.jetbrains.com/guide/java/tutorials/writing-junit5-tests/creating-and-running-a-test/) (IntelliJ)
  - [JUnit 5 Crash Course](https://www.youtube.com/watch?v=6uSnF6IuWIw) (first ~25mins)
- More advanced use of JUnit (up to ~30mins when it starts on Mockito) - [Mastering Java Testing](https://www.youtube.com/watch?v=Pmxh-sObDKg)

## Key Concepts

- Annotations can be used to provide meta-data about a class, method, field or other program-element in Java.
- Annotations are often used by frameworks to provide runtime behaviour, e.g. identify methods which represent tests, identify methods to be used for set-up.
- Explain the use of common core annotations; Override, Deprecated.
- A test as the unit where we confirm a specific set of results from an interaction with a class.
- JUnit provides a standard test class lifecycle that allows common set up to be shared between test cases.
- Assertions are the mechanism by which we verify the results of our interactions are the ones we expect. There are a wide variety of assertion capabilities built-in to JUnit.
- Tests can be run in an IDE or in a build system (e.g. Maven)

## Exercises

{{<note type="exercise" title="Exercise 1.1 - Calculator test">}}

Given this class and fill out some sensible tests in the skeleton

**Code block 1 Calculator.java**
```java
package com.example;

public class Calculator {
  public int add(int a, int b) {
    return a + b;
  }

  public int subtract(int a, int b) {
    return a - b;
  }

  public int multiply(int a, int b) {
    return a\ * b;
  }

  public int divide(int a, int b) {
    if (b == 0) {
      throw new IllegalArgumentException("Division by zero");
    }
    return a / b;
  }
}
```

**Code block 2 TestCalculator.java**
```java
package com.example;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.\*;

class CalculatorTest {

  @BeforeEach
  void setUp() {}

  @Test
  void testAdd() {}

  @Test
  void testDivide() {}

  @Test
  void testDivideByZeroThrows() {}
}
```
{{</note>}}

{{<note type="exercise" title="Exercise 1.2 - Extend Calculator">}}

Write some tests for these methods to be added to the calculator class;

- `int square(int a)`
- `double squareRoot(int a)`

Consider:

- what should happen if `squareRoot` is requested for a negative number?
- how would we check the answer for `squareRoot(3)` ? (think accuracy required)
{{</note>}}

{{<note type="exercise" title="Exercise 1.3 - String Utilities">}}

Write some tests for this class and then complete the implementation.

**Code block 3 StringUtilities**
```java
public class StringUtilities {
    public boolean isPalindrome(String s) { ... }
    public List<String> splitCommaSeparatedLine(String s) { ... }
}
```

Did writing the test cases upfront help you focus on the behaviour you needed to implement? Did you manage to think of edge cases that should be covered? Conversely, what can be a downside (e.g. what tends to happen) if you write tests for a pre-existing implementation?

### Stretch Goal - parameterised tests
Can you write a test-case for the isPalindrome method that uses `@ParameterizedTest` and `@MethodSource` or `@CsvSource` to provide parameters to the test? Can you change so that there is a clearer description associated with each test based on the inputs and expectations?
{{</note>}}

{{<note type="exercise" title="Exercise 1.4 - Maven Project">}}

Create a Maven Project with JUnit 5 dependencies

Add the `Calculator` and `StringUtilities` classes as well as their tests. Note that source and test classes should be in separate folders (`src/main/java`, `src/test/java`). What do you notice if they are all in `src/main/java?`

Build the project (`mvn clean test`) and see that the tests run. Amend one of the implementations so that a test will fail and re-build the project.

#### Questions

When this class test is run, what is the output?

**Code block 4 StringUtilities**
```java
public class ExampleTest {
  @BeforeEach
  public void setup() {
    System.out.println("setting up test data");
    ...
  }

  @Test
  public void testExample1() {
    System.out.println("running test case 1");
    ...
  }
  @AfterAll
  public void closeConnections() {
    System.out.println("closing connections");
    ...
  }

  @BeforeAll
  public void createConnections() {
    System.out.println("creating connections");
    ...
  }
}
```

A) setting up test data, creating connections, running test case 1, closing connections
B) setting up test data, running test case 1, closing connections, creating connections
C) creating connections, setting up test data, running test case 1, closing connections
D) creating connections, setting up test data, closing connections, running test case 1

If we introduce a new `@Test` annotated method testExample2 and run the test class how many times do we expect the following messages to appear;

- setting up test data
- running test case 1
- closing connections
- creating connections
{{</note>}}

#### Reflection on key concepts in automated testing

- Explain why tests should be independent of each other. What benefit does this bring?
- Explain the difference between a test-case, a test class and a test suite. Why might we use test suites?
- Explain the Junit test lifecycle
- particularly how we can use this to re-use state or reset state between tests and why this is useful from a maintainability and performance perspective.
- Are there situations where a test case might not have any assertions?
- What might a test without assertions miss and how could it be improved?
