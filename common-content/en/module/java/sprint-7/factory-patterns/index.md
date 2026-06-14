+++
title = 'The Factory Pattern(s)'

time = 120
objectives = [
  'Understand the differences between static factories, simple factories, the factory method pattern and the abstract factory pattern',
  'Be able to apply each of the above to a relevant situation',
  'Explain in detail what the factory method pattern and abstract factory pattern are, and why they are used',
  'Draw an abstract class diagram representing how the factory method and abstract factory patterns are implemented',
  'Refactor code to implement the factory pattern(s)',
  'Implement the factory pattern(s) from scratch'
]
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

## Self Study

_As you read through the resources below try to answer the following questions:_

- What is a static factory and why is it useful?
- When is it not worth using a static factory? Why?
- What are the key features of the factory method pattern? What problems does it solve? Think about: loose coupling (relates back to the last sprint on interfaces!), testability etc, especially for large codebases where a piece of functionality may be used by lots of teams beyond the one that wrote it.
- Can you think of any code you've seen in other sprints that may benefit from use of the factory method pattern? Why?
- How does the abstract factory pattern differ from the factory method pattern? When would you use one over the other? Do they have any similarities?
- Can you think of any downsides to using the factory pattern or abstract factory pattern? Give an example of a specific situation when using either factory pattern would not be appropriate

### Resources

- [Factory Comparison](https://refactoring.guru/design-patterns/factory-comparison) - 'Factory' is a very overloaded term and can refer to lots of similar sounding concepts and patterns, all of which are worth familiarizing yourself with
- [Static factories](https://medium.com/@deepanshutibrewal08/effective-java-item-1-consider-static-factory-methods-instead-of-constructors-418370277bc6) - not a factory pattern as such, but still a useful technique to be familiar with!
- [Simple factories](https://incusdata.com/blog/design-patterns-simple-factory-pattern) - more like a static factory than either of the factory patterns
- [The factory method pattern](https://refactoring.guru/design-patterns/factory-method)
- [The abstract factory pattern](https://refactoring.guru/design-patterns/abstract-factory)

{{<note type="exercise" title="Exercise 2.1">}}


- Which type of factory (simple, method, abstract) would be most appropriate for the code below? Why?
- Refactor the code to use your chosen pattern

```java
public class NotificationService {
  public void send(String type, String message) {
      if (type.equals("EMAIL")) {
          EmailNotification notification = new EmailNotification();
          notification.send(message);
      } else if (type.equals("SMS")) {
          SMSNotification notification = new SMSNotification();
          notification.send(message);
      }
      // Adding new notification type requires modifying this class
  }
}

```
{{</note>}}

{{<note type="exercise" title="Exercise 2.2">}}

Write pseudocode and draw a class diagram to implement the following scenario using an appropriate factory pattern:

- A software application that can be configured to use a Postgres or Oracle database
- When configuring the database on app start-up there is some generic setup required when either DB platform is in use, but connecting to the database is platform specific
  - There is global configuration (you can use a static constant in the main Application class) to control whether Postgres or Oracle should be used
  - There is a main DatabaseInitializer class that is called from application start-up (i.e. in this case, a main method) with an #initalize method
  - There should be a class responsible for handling the connection, DatabaseConnector, whose behaviour is different for Postgres and Oracle, with a #connect method
{{</note>}}

{{<note type="exercise" title="Exercise 2.3">}}

Now suppose as well as the DatabaseInitializer class, there are other platform specific classes required: DatabaseAuthenticator and DatabaseEntityManager. Each of these are required by DatabaseInitializer. Rewrite or update your pseudocode and class diagram to handle this new scenario. Note you may want to try a different pattern!
{{</note>}}

{{<note type="exercise" title="Exercise 2.4">}}

A requirement comes through to also support MongoDB. What changes would you need to make in order to handle this? Update your code and diagram to reflect this.
{{</note>}}

## Reflections

_Think about the following questions, make notes and be prepared to talk through your thoughts in the workshop._

- Was adding the requirement to support MongoDB easier or harder to implement when the factory pattern was already in play? Why?
  - Do the team implementing the MongoDB requirement need to know about the generic database initialising code?
  - Do they need to coordinate with the team that owns the core db initialisation code?
- What about if we wanted to de-support Oracle - what would we need to change? (just think about this, no need to implement)
- What are the key factors to consider when deciding to use the factory method pattern vs the abstract factory pattern? Does one lead to the other?
  - What do the terms YAGNI and KISS mean? (If you've not seen them before, have a look online.) How do they apply here?
- What are the main benefits the factory pattern delivers?
  - Are there any drawbacks?