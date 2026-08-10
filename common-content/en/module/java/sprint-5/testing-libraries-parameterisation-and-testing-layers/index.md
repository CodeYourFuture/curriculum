+++
title = 'Testing Libraries, Parameterisation and Testing Layers'

time = 120
objectives = [
  'Explain why mocks are useful, giving examples of the type of objects that are mocked',
  'Be able to use mocks to provide simple responses in a test',
  'Be able to use mocks to provide complex responses in a test (i.e. based on the input received)',
  'Be able to verify that mocks have been used in the expected manner during a test (i.e. asserting expected interactions with external resources)',
  'Be able to convert unit tests into a parameterised test',
  'Explain some benefits of test parameterisation',
  'Explain some of the mechanisms that can be used to provide parameters for a test',
  'Explain what implicit and explicit conversion for test parameters is. Give an example of implicit conversion.',
  'Be able to use additional libraries when testing a project.',
  'Explain why using assertAll or fluent assertions is beneficial in a test in comparison to multiple separate assertions.',
  'Explain the difference between test layers, often referred to as unit, assembly and integration tests.',
  'Explain why we would want different numbers of tests in each layer (relative to each other) e.g. thinking about the cost associated with adding, running and maintaining the tests.',
  'Explain what is meant by Test Driven Development (TDD).'
]
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

## Overview

This is a deeper dive into common industry terminology and testing techniques that will help you write better tests.
**Why start here?**

In larger software applications you will have some services with many dependencies and you need to understand how to write effective isolated tests using mocks as well as the common terminology used. Most software organisations use Test Driven Development, or something closely aligned to it, as part of their software development process and therefore understanding the principles and terminology can be essential to progressing your work.

Mocks make it easy for a test to focus on the processing of a specific service without needing to rely on lots of other services too. For example, by mocking the dependencies used to provide access to external resources (databases, external web services, storage) we can provide tests which are faster, simpler and clearer about what they are assuming and what they are checking.

## Self Study
### Reading Materials

- [Mockito documentation](https://javadoc.io/doc/org.mockito/mockito-core/latest/org.mockito/org/mockito/Mockito.html#1) - Read #1 to #33
- [Baeldung Mockito Series](https://www.baeldung.com/mockito-series) - follow basics
- [JUnit5 assert all vs multiple assertions](https://www.baeldung.com/junit5-assertall-vs-multiple-assertions)
- [AssertJ documentation](https://assertj.github.io/doc/#assertj-overview) (1, 2.1, 2.5-2.8)
- [JUnit Parameterised tests](https://docs.junit.org/5.10.0/user-guide/#writing-tests-parameterized-tests)
- [Baeldung JUnit Parameterised tests](https://www.baeldung.com/parameterized-tests-junit-5)
- Test doubles (terminology around mocks) - [Test Double](https://martinfowler.com/bliki/TestDouble.html)
- Test layers - [Martin Fowler test-pyramid](https://martinfowler.com/articles/practical-test-pyramid.html), 
- [Google beyond the test pyramid](https://testing.googleblog.com/2024/10/smurf-beyond-test-pyramid.html)
- [Martin Fowler Unit Test](https://martinfowler.com/bliki/UnitTest.html)
- [Martin Fowler Integration Test](https://martinfowler.com/bliki/IntegrationTest.html)
- [Test Driven Development](https://martinfowler.com/bliki/TestDrivenDevelopment.html)

### Video Materials

- [Junit + Mockito (composite - lots of chapters)](https://www.youtube.com/watch?v=0ZtU3X9n6tI)
- parameterised tests - [parameterised tests 1](https://www.youtube.com/watch?v=31FhEpKANOQ), [parameterised tests 2](https://www.youtube.com/watch?v=7rz9VLGOVhk)
- Dave Farley (modern software engineering channel) - [test types](https://www.youtube.com/watch?v=gnrBqLbj1_Q), [test driven development](https://www.youtube.com/watch?v=llaUBH5oayw), [red-green refactoring process](https://www.youtube.com/watch?v=fx-Ne_s71iY)
- [Automated testing, testability and test-driven development (discussion)](https://www.youtube.com/watch?v=JDi3MSUd3zs)

### Key Concepts

- There is a rich and meaningful terminology around various types of test double; mock, stub, spy, fake
- Mocking provides a way of simplifying test setup, keeping tests fast and creating separation between components when testing
- Frameworks are available to provide powerful mocking techniques
- Frameworks are available to provide additional assertion patterns and capabilities
- Test layers are used to describe the scope of the test and what real resources (rather than test doubles) it utilises

## Exercises

{{<note type="exercise" title="Exercise 3.1 - Mocking a Dependency">}}
Given the `PriceService` below write a test using Mockito.

- Provide a fixed exchange rate regardless of what is requested
- Add a method `convertToGbp` and amend the mock to provide different exchange rates for EUR->GBP and EUR->USD

#### Code block 13 PriceService
```java
public class PriceService {
    private final ExchangeRateClient client;
 
    PriceService(ExchangeRateClient client) {
        this.client = client;
    }
 
    public double convertTo(double eurPrice, String targetCurrency) {
        return eurPrice * client.getRate("EUR", targetCurrency);
    }
}
 
public interface ExchangeRateClient {
    double getRate(String from, String to);
}
```

{{</note>}}

{{<note type="exercise" title="Exercise 3.3 - Asserting exceptions">}}
Make the `NotificationService` throw an `IllegalStateException` if the address does not contain an "@".

Write a test using AssertJ to verify that `sendWelcome("badaddress.com")` throws an exception, checking the type and the content of the message.
{{</note>}}

{{<note type="exercise" title="Exercise 3.4 - Parameterising tests">}}

Take the tests written under `PriceService` and parameterise them so that each currency is called from a single test method

Take the tests written under `NotificationService` and parameterise them so that two methods are used to verify behaviours; one for a variety of valid addresses and another for invalid addresses.

In each case provide a suitable name for the test case that includes the parameter value.

Consider how the test methods for `NotificationService` could be further consolidated into a single method and the benefits and drawbacks of that.
{{</note>}}
## Questions

With the following test what will the output be;

### Code block 15 NotificationService
```java
@ParameterizedTest
@CsvSource({"JANUARY, true", "JANUARY, false", "FEBRUARY, true", "FEBRUARY, false", "MARCH, true"})
void months_AreAtLeast29DaysLongCsv(Month month, boolean isALeapYear) {
    assertTrue(month.length(isALeapYear) >= 29);
}
```

A) The code won't work as we have strings but need Month and boolean

B) The code won't work because we can't provide multiple parameters for each run

C) The code runs and fails for the 3rd input ("FEBRUARY, false")

D) The code runs and each case passes
