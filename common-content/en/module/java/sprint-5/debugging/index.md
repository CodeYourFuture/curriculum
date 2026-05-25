+++
title = 'Debugging'

time = 120
objectives = [
  'Explain breakpoints in the debugger',
  'Explain movement through the code using; step into, step over, step out, run to cursor in the debugger',
  'Explain evaluation of variables, watches in the debugger'
]
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

## Overview

Debugging a java application effectively is a core skill needed during both development and support of an application. You will learn how to step through, into and over code, evaluating expressions and observing variables/state.

**Why start here?**

As you develop and refactor software applications things will go wrong and you will need to find the cause.

## Self Study
### Reading Materials

The main principles are common across all implementations but there will be some IDE specific material

- [IntelliJ debugging ](https://www.jetbrains.com/help/idea/debugging-code.html)
- Advanced Debugging - [IntelliJ debugging tricks](https://www.baeldung.com/intellij-debugging-tricks), [stream debugging](https://www.baeldung.com/intellij-debugging-java-streams)
- [VS Code debugging ](https://code.visualstudio.com/docs/java/java-debugging) or [baeldung eclipse debugging](https://www.baeldung.com/eclipse-debugging)
- [Eclipse debugging your programs](https://help.eclipse.org/latest/index.jsp?topic=%2Forg.eclipse.jdt.doc.user%2FgettingStarted%2Fqs-13.htm&cp%3D1_1_0_11)
- [How To Read And Understand A Java Stacktrace](https://www.twilio.com/en-us/blog/developers/tutorials/building-blocks/how-to-read-and-understand-a-java-stacktrace)

### Video Materials

- [IntelliJ debugger](https://youtu.be/V5iQ1FyRtBo?si=eA3YB2VcU7pLBdTi)
- [VS Code](https://www.youtube.com/watch?v=R1F5ihQKL4U)
- [Eclipse](https://www.youtube.com/watch?v=aqcJsKdjjvU)
- [Stacktraces 1](https://www.youtube.com/watch?v=1KusP1VeW6g), [Stacktraces 2](https://www.youtube.com/watch?v=PFSJlZgNJXM)

### Key Concepts

- The debugger allows you to step through code in a manner similar to a video-player might allow you to skip between chapters, move forward in steps and pause.
- Variables can be inspected and expressions evaluated during debugging to give insight into the processing and execution paths that will be followed.
- Breakpoints can be applied in advanced ways to enable; conditional-stopping, stopping on exceptions, tracking field-access
- The debugger can be used without specific breakpoints to suspend processing and inspect where current execution is at (e.g. for long-running processes or bugs in loops)
- Stacktraces can be used to track the way an application has executed to reach its current point (e.g. where an exception is thrown) and can be used to locate the root cause or where to set breakpoints to investigate further.

## Exercises
{{<note type="exercise" title="Exercise 2.1 - Faulty Calculator">}}

Using the debugger set a breakpoint, step through the loop and inspect variables to determine the source of the error and correct it;

#### Code block 11 FaultyCalculator

```java
import java.util.Arrays;
import java.util.List;
 
public class FaultyCalculator {
 
    public static void main(String[] args) {
        List<Integer> values = Arrays.asList(10, 20, 30, 40);
 
        double average = calculateAverage(values);
        System.out.println("Average = " + average);  // Expected: 25
    }
 
    public static double calculateAverage(List<Integer> numbers) {
        int sum = 0;
        for (int i = 1; i < numbers.size(); i++) {
            Integer currentNumber = numbers.get(i);
            sum += currentNumber;
        }
 
        return (double) sum / numbers.size();
    }
}
```

Suppose that there wasn't an intermediate variable `currentNumber`, what could you do in the debugger instead? hint - experiment with "evaluate" functionality.
{{</note>}}

{{<note type="exercise" title="Exercise 2.2 - Order Processing failure">}}
Run the code below and observe the failure.

Using the debugger set a breakpoint after the construction of the Order, observe the state in the Order object constructed. Debug again but stop the code in the constructor for Order and the inspect variables to determine the source of the error. Correct the error and observe the "process" completing with the output "Customer name: ALICE".

#### Code block 12 OrderProcessor
```java
public class OrderProcessor {
 
    public static void main(String[] args) {
        Order order = new Order(123);
        process(order);
    }
 
    public static void process(Order order) {
        System.out.println("Customer name: " + order.customer.name.toUpperCase());
    }
}
 
class Order {
    int id;
    Customer customer;
 
    public Order(int id) {
        this.id = id;
        Customer customer = new Customer("Alice");
    }
}
 
class Customer {
    String name;
 
    public Customer(String name) {
        this.name = name;
    }
}
```