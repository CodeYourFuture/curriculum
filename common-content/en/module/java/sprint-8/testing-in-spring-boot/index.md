+++
title = 'Testing in Spring Boot'

time = 120
objectives = [
  'Create and run unit tests that validate individual methods.',
  'Explain when to use simple unit tests versus when a Spring context is needed.',
  'Create and integration test with @SpringBootTest.',
  'Mock dependencies with Mockito & explain why mocking is used in unit testing.'
]
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

Testing ensures that your application is reliable, maintainable, and behaves the way you expect. Spring Boot provides powerful, built‑in support for testing through JUnit and Mockito, making it easy to test everything from small pieces of logic to full application flows. In this section, students will learn the difference between unit and integration tests, how to write each type using Spring Boot's testing tools, and how to use Mockito to isolate components with mocks. By the end, they'll have a solid foundation in verifying Spring applications efficiently and consistently.

### Reading material

- [Unit testing with spring framework](https://docs.spring.io/spring-framework/reference/testing/unit.html)
- [Integration testing with spring framework](https://docs.spring.io/spring-framework/reference/testing/integration.html)
- [MockMvc](https://docs.spring.io/spring-framework/reference/testing/mockmvc.html)