+++
title = 'Introduction to Spring Framework & Spring Boot'

time = 120
objectives = [
  'Explain why java frameworks are used in enterprise applications',
  'Explain why field injection is not recommended',
  'Explain the benefits of using Spring in Java applications',
  'Explain what Spring Boot is and why it simplifies Spring development'
]
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

Spring is one of the most widely used frameworks in Java development. It provides a comprehensive programming and configuration model for modern enterprise applications. Understanding Spring is essential for building scalable, maintainable, and testable applications, because many applications depend on it for tasks like dependency management, configuration, and testing.

Spring Boot is a tool built on top of Spring that makes it easier to create stand-alone, production-ready applications with minimal configuration. It removes boiler-plate code and provides sensible defaults, which reduces setup time and complexity. Spring Boot provides tools like Spring Initializr, spring profiles, and environment configuration to streamline development and deployment. These features allow developers to quickly scaffold projects, manage environments, and reduce errors during deployment.

There is a variety of reading material provided here, it's not essential to read it all, some covers similar content from a different point of view.

## Self Study
### Reading material

- [What are Java Frameworks?](https://www.redhat.com/en/topics/cloud-native-apps/what-is-a-Java-framework)
- [Introduction to Spring Framework](https://www.geeksforgeeks.org/advance-java/introduction-to-spring-framework/)
- [Introduction to Inversion of Control and Dependency Injection with Spring](https://www.baeldung.com/inversion-control-and-dependency-injection-in-spring)
- [Why is field injection not recommended?](https://www.baeldung.com/java-spring-field-injection-cons)
- [How Spring Boot compares to Spring](https://www.baeldung.com/spring-vs-spring-boot)
- [Boot strap a simple application](https://www.baeldung.com/spring-boot-start)
- [Spring boot annotations](https://www.baeldung.com/spring-boot-annotations)

### Framework documentation

These pages may be a useful first port of call when troubleshooting, but you don't need to read them in their entirety:

- [Spring Framework documentation](https://docs.spring.io/spring-framework/reference/index.html)
- [Spring Boot documentation](https://docs.spring.io/spring-boot/index.html)
- [Spring Initializr documentation](https://docs.spring.io/initializr/docs/current/reference/html/)

## Exercises

{{<note type="exercise" title="Exercise 1.1">}}

Here we are going to generate a to do list application, using [spring initializr](https://start.spring.io/), that we will build on throughout the sprint. In this section, we'll set up the building blocks and initial services:

- Generate a spring application with the following dependencies:
  - spring-boot-starter-web
  - spring-boot-starter-data-jpa
  - spring-boot-starter-test
- Create as a maven project, using the latest version of maven available.
- Create models for the following:
  - Task - each task should have the following: title, priority, completed, due date, assignee username
  - User - each user should have an id and username
- Create a `TaskService` with the following methods, writing unit tests for each:
- `createTask`
  - Pass in a task without an id. The method will provide a new id, validate and store the new task.
- `listTasks`
- `updateTaskById`
  - Provide a task with an id (a task without id will fail), update the task (unit test should validate this list is the same size).
- `deleteTaskById`
- `getTasksByUser`
- Add a `TaskValidatorService` which is able to validate a number of cases, including:
  - Title validation: short, long, null, empty, incl. spaces.
  - Write a unit test for each case.
{{</note>}}

### Quiz

1. Which of these best describes how the Spring Framework helps a developer build an application?
  1. It acts as a "glue" that manages how different objects (dependencies) interact with each other
  2. It provides specialised modules to help with tasks like Database access.
  3. It removes the need for boiler-plate code
  4. All of the above
2. Which annotation is used to indicate a Spring-managed bean?
  1. `@Component`
  2. `@Bean`
  3. `@Service`
  4. All of the above
3. What is dependency injection in Spring?
  1. The process of creating an object
  2. A design pattern for managing object creation
  3. A way to achieve loose coupling between classes
  4. Both 2 and 3
4. What annotation is used for automatic dependency injection in Spring?
  1. `@Inject`
  2. `@Autowired`
  3. `@Resource`
  4. `@Qualifier`

#### Answers
1. - 4: Spring acts as comprehensive toolbox that manges how objects interact, provides pre-built modules and eliminates repetitive setup code in favour of an annotation-driven approach

2. - 4: All these annotations indicate a Spring-managed bean. `@Component` is a generic stereotype, while `@Service` is used for service-layer beans, and @Bean is used in configuration classes.

3. - 4: Dependency injection is a design pattern that allows for loose coupling between classes by managing object creation and dependencies outside of the classes themselves.

4. - 2: The `@Autowired` annotation is used to tell Spring to automatically find and inject dependencies into a field, constructor or setter, without needing to instantiate objects using the new keyword
