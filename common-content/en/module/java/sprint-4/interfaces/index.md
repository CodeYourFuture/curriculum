+++
title = 'Interfaces'

time = 120
objectives = [
  'Explain what an interface is, key features of interfaces and how they differ to classes',
  'Explain why interfaces are useful, the problems they solve and when to use them',
  'Write an interface with multiple implementations and call the different implementations in a polymorphic way'
]
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

Interfaces are fundamental to understanding Java's design philosophy. Understanding what they are and when to use them will help future topics make sense.

## Self Study

_As you read through the resources below try to answer the following questions:_

- Can you summarise in a sentence or two what an interface is in Java? How do they compare to the classes you've seen so far?
- How is an interface different from a class? What are the key features of each? Think about how an interface relates to a class and compare to how a class relates to an instance of that class.
- Why do interfaces exist? What key problems do they solve? Think about: coupling, polymorphism, testing

### Reading Materials
- [The Importance of Interfaces in Java: A Comprehensive Guide](https://piyu108.medium.com/the-importance-of-interfaces-in-java-a-comprehensive-guide-5d6d2e014cd5) - This Medium article provides some motivation for why interfaces exist in Java and the problems they solve. It's really useful to understand the _why_ before learning the _how._ Note the article does use some quite abstract language, so don't worry if it doesn't all click right away; the aim here is just to give a bit of context before we jump in to the technical details.
- [Baeldung - Interfaces in Java](https://www.baeldung.com/java-interfaces) - Focus on the examples that show how to create an interface in Java
- [W3Schools Java Interface](https://www.w3schools.com/java/java_interface.asp) - Have a look at the code snippets for more examples of basic interfaces
- [GeeksforGeeks - Interfaces in Java](https://www.geeksforgeeks.org/interfaces-in-java/) - Read the summary of when to use classes vs interfaces, and have a look at the diagrams to see the relationship between classes and interfaces

## Exercises

{{<note type="exercise" title="Exercise 1.1">}}
Imagine you are designing a system for a bank to send monthly statements to customers. Some customers prefer to receive physical letters in the post, whereas others prefer to receive emails.

- Create a `StatementSender` interface with a method `#sendStatement` that accepts a `String` parameter `statementContent`
- What should the return type of this method be?
- What is the visibility of interface methods? Why?
- Make sure to write Javadoc on both the class and method
- Why is this Javadoc important? Think about who we are aiming this javadoc at (i.e. who will read it / benefit from it)?
- Create implementations of `LetterStatementSender` and `EmailStatementSender`
- The implementations of `#sendStatement` should simply print to the console a success method to say that the statement has been sent via the given delivery method (in reality these methods would likely call out to some additional processing or third party email/postal service, but we don't need to do that here)
- Now create a class StatementDeliveryService with a method `#deliverStatement(String statementContent, StatementSender statementSender)`
- This method should send the content using the sender
- Now create a main method that creates a new `StatementDeliveryService` and sends a statement via both letter and email

#### Reflections

_Think about the following questions, make notes and be prepared to talk through your thoughts in the workshop._

- Look at the example you just created. Why was it useful to use an interface? How would it look if we had only used classes - can you think of any problems that might cause?
- How will the use of interfaces make the code more maintainable in future? What if we decide we also want the option to send statements via text message?
- How does using an interface enforce the contract that it sets out? Again think about writing a new text message implementation.
- Similarly, what if we decide in future that physical letters are no longer supported; which code do we need to update?
- Think about how you would test `StatementDeliveryService`. In practice you wouldn't want to send an actual email or a letter every time you ran the test, so how could the `StatementSender` interface help here? (NB our expectation here is for a testing-implementation as they won't have covered mocking yet
{{</note>}}


{{<note type="exercise" title="Exercise 1.2">}}
- Create a `Statement` interface and add a new `#sendStatement` method to `StatementSender` that accepts the new interface
- What is it called when you have two versions of the same method?
- What methods might `Statement` have? Think about the type of information you'd expect to see on a bank statement.
- Create two implementations of `Statement`:
  - `AllTransactionsMonthlyStatement` - As the name suggests, includes all transactions, both ingoing and outgoing for the current month
  - `OutgoingTransactionsMonthlyStatement` - Only includes the outgoing transactions for the current month
- How should the implementation behaviour differ?
- Create a new class StatementService that:
  - Has methods to create and send both types of statements
  - Uses `StatementDeliveryService` to send the statements
- Note we'll need a new method on `StatementDeliveryService` that accepts a `Statement`
- Refactor your main method to use `StatementService`
- You're now starting to build up a hierarchy of classes and interfaces. Have a look back through the reflection questions about and apply them to your refactored system - are the answers the same? Are interfaces even more important now? Imagine we increased the complexity even further by adding more services and functionality - do interfaces become more or less important?
{{</note>}}
