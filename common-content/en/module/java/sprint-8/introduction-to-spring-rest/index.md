+++
title = 'Introduction to Spring REST'

time = 120
objectives = [
  'Define REST Controllers for Tasks and Users, using @RestContoller and mapping annotations (@GetMapping, @PostMapping)',
  'Send HTTP requests to Spring REST endpoints using Postman'
]
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

REST stands for Representational State Transfer and allows applications to communicate using HTTP methods, for example GET, POST, PUT and DELETE. REST APIs follow a stateless architecture, i.e. every request contains all the necessary information for the server to process it without relying on previous requests.

Spring REST is part of the Spring Framework, which simplifies the process of writing REST APIs by providing support for handling HTTP requests, data conversion & error handling. To utilise Spring REST, we must have a dependency on Spring WEB (spring-boot-starter-web) in our project.

REST Controllers manage HTTP requests, to define a REST Controller, we use the `@RestController` spring annotation.

[Postman](https://www.postman.com/) is a popular HTTP client used for sending HTTP requests to a REST API and checking the response, allowing you to test out your newly created APIs.

### Reading material

- [Overview of HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview)
- [Building REST services with Spring](https://spring.io/guides/tutorials/rest/)
- [Introduction to Spring REST](https://dev.to/ayshriv/introduction-to-spring-rest-3nhl)

### Exercises

{{<note type="exercise" title="Exercise 3.1">}}

- Create the following REST controllers, with the listed methods:
- `TaskController`
  - Get all tasks from the database
  - Create a new task and save it to the database
  - Delete a task from the database
- `UserController`
  - Get all users from the database
  - Test using [Postman](https://www.postman.com/api-platform/api-testing/) or curl (or alternative tooling for testing HTTP calls).
{{</note>}}
