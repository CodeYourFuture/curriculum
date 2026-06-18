+++
title = 'JavaDoc'

time = 120
objectives = [
    'Be able to write javadoc for a type and its methods.',
    'Be able to use the IDE to generate the skeleton javadoc for a type or method.',
    'Be able to use tags in javadoc to appropriately describe inputs, outputs and exceptions for a method.',
    'Explain the use of specific javadoc tags; @deprecated, @since, @see',
    'how do these provide meaning relating to the history and future intention for APIs?',
    'Explain the main java program elements that can have javadoc'
]
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

## What you'll learn

How to write useful javadoc, how it is structured and why it is important.

## Why start here?

Most classes and methods are used by people other than the original developer. Providing a concise description of what a class / method is for and how to use it ensures that the correct expectations are set and that the developer is not surprised by any results/behaviours.

## Self Study

### Reading Materials

- Wikipedia - [Javadoc](https://en.wikipedia.org/wiki/Javadoc)
- Oracle tool and specification - [overview](https://docs.oracle.com/en/java/javase/17/javadoc/javadoc.html) [javadoc spec](https://docs.oracle.com/en/java/javase/25/docs/specs/javadoc/doc-comment-spec.html)
- example style guide - [javadoc-tool](https://www.oracle.com/uk/technical-resources/articles/java/javadoc-tool.html)
- Examples;
- [Java Util](https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/util/package-summary.html)
- [Apache Commons Lang](https://commons.apache.org/proper/commons-lang/apidocs/index.html)

### Video Materials

- [Javadoc explainer](https://www.youtube.com/watch?v=GM3P5vAOjx8)
- [Javadoc in IntelliJ](https://www.youtube.com/watch?v=9jtSXcp7u6g)

### Key Concepts

- Good javadoc is more than comments on the implementation
- Javadoc should depend on context;
- frameworks should illustrate how code is written to run using them
- libraries should illustrate how they are to be used
- Links can be to other parts of the code or to external materials e.g. for more complete explanations.
- Javadoc on tests is as important as on the source;
- useful javadoc will help provide context around edge cases and unusual assertions of behaviour

## Exercises

In these exercises focus on;

- usage of the core syntax elements; @param, @return, @throws, @see, @link
- what a user of the service needs to know
- example usage, particularly any edge cases
- what tests are showing you about specific methods and their behaviours, in particular any edge cases that may need more explanation.

{{<note type="exercise" title="Exercise 2.1 - Calculator">}}
Given the `Calculator` class from exercise 1.1 and 1.2 write javadoc for the source classes and methods and for the test class and test methods.

Are there any cases where `@see` might be useful? think about how certain methods might relate to each other, e.g. inverse operations.
{{</note>}}

{{<note type="exercise" title="Exercise 2.2 - StringUtilities">}}
Given the `StringUtilities` class from exercise 1.3, write javadoc for the source classes and methods and for the test class and test methods.
{{</note>}}
