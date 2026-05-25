+++
title = 'Exceptions'

time = 120
objectives = [
  'Explain the difference between checked and unchecked exceptions in Java',
  'Explain why we have checked and unchecked exceptions',
  'Give examples of when to use checked and unchecked exceptions',
  'Handle potential nulls in Java code',
  'Write code using try/catch/finally and try-with-resources blocks',
  'Explain how exception handling is used to avoid resource leaks'
]
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

## Self Study

_As you read through the resources below try to answer the following questions:_

- How do Java exceptions compare to non-Java exceptions that you've seen before? Think about Javascript / HTTP errors etc - do they serve the same purpose?
- Why does Java have checked and unchecked exceptions? What are the features of each? Think of an example of when you'd use each
- What is the hierarchy of exceptions in Java?
- What are the options for handling checked exceptions? What are the Java keywords involved?
- What is a null pointer exception?
- What is the Closable interface and why do we need it? What are the options for closing closable resources?

### Reading Materials

- Both of these pages provide a solid overview of exceptions in Java; read at least one of them:
  - [Exceptions In Java](https://www.geeksforgeeks.org/java/exceptions-in-java/)
  - [Mastering Java Exception Handling: A Comprehensive Guide For Developers](https://medium.com/@ShantKhayalian/mastering-java-exception-handling-a-comprehensive-guide-for-developers-c31cef921d75)
- [Checked vs Unchecked Exceptions](https://www.baeldung.com/java-checked-unchecked-exceptions)
- [A Summary Of Why The Two Exception Types Exist](https://docs.oracle.com/javase/tutorial/essential/exceptions/runtime.html)
- [Explanation Of Nulls And Null Pointer Exceptions](https://stackoverflow.com/questions/218384/what-is-a-nullpointerexception-and-how-do-i-fix-it)

### Checked vs Unchecked Exceptions Quiz

Complete the short quiz [here to check your understanding of checked vs unchecked exceptions](https://www.geeksforgeeks.org/java/java-checked-vs-unchecked-exceptions/#:~:text=Examples%3A%20NullPointerException%2C%20ArrayIndexOutOfBoundsException.-,Suggested%20Quiz,-3%20Questions)

## Exercises 

{{<note type="exercise" title="Exercise 3.1">}}

_Create a service that safely reads text files_

- Create a `FileReaderService` class with a method `#readFile(String filename)` that:
  - Attempts to read a file using `BufferedReader`
  - Returns the file contents as a `String`
  - Properly handles `FileNotFoundException` and `IOException`
  - Uses try/finally to ensure the file is closed
  - Safely handles the possibility of `fileName` being null
  - Create a custom checked exception called `InvalidFileFormatException`
  - Throw this if the file is empty
- From a main method, call the service with some dummy text files, including an empty file
{{</note>}}

{{<note type="exercise" title="Exercise 3.2">}}

- Refactor your above method to use try-with-resources instead of try/finally

#### Reflections

_Think about the following questions, make notes and be prepared to talk through your thoughts in the workshop._

- Why are `FileNotFoundException` and `IOException` checked rather than unchecked exceptions? What advantages does this give developers and systems that use them?
- In this example we had control over which strings we passed to the method, so in theory we could make sure they wouldn't ever be null. When writing production code do we have this same level of control?
- When is it beneficial to include null checks, and when isn't it?
- How does try-with-resources relate to a try/finally block? Think about flexibility / clean code etc
- If an exception is thrown, does a finally block get executed before or after the catch block? How could you prove this?
- What about if the catch block throws an unchecked exception? Does the finally block still execute?
{{</note>}}

{{<note type="exercise" title="Exercise 3.3">}}

Should try/catch blocks be used as part of 'standard' processing? e.g. say I have a payment processing system that accepts cash or card, and I first attempt to process a card payment, before throwing an error and processing cash if no card details are found:

```java
void processPayment(Payment payment) {
    try {
        cardProcessor.process(payment);
    } catch(NoCardDetailsFoundException e) {
        cashProcessor.process(payment);
    }
}
```

- Will this work correctly? If we know some payments will definitely be made by cash, is there a better way to handle this? Why?
- What are some potential problems with throwing errors like this? Think about: when we want to find out about errors / unnecessary processing etc
- Update the above pseudocode to remove the try/catch block and handle the card/cash options more gracefully. Feel free to invent some methods on Payment to help you!
{{</note>}}