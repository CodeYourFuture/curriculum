+++
title = 'Layered Architecture'

time = 120
objectives = [
  'Explain what the term 'software architecture' means',
  'Explain the benefits of having a layered architecture, and the responsibilities of the database, service and presentation layers',
  'Describe the architecture of previous projects you have worked on',
]
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

## Self Study

_As you read through the resources below try to answer the following questions:_

- In a sentence or two, briefly summarise what we mean by 'software architecture'?
- Why is a layered architecture useful? Think in particular about complex software systems that are live in production for a long time (and hence technology evolves!), and where maintainability, testability and reliability are important, where changes are constantly being made and where lots of developers in different teams are making changes at the same time
- How do interfaces help to decouple the layers in an application and why is this decoupling useful?
- Can you think of a project you've worked on where you used a layered architecture? If so, did it help? If you've never used a layered architecture before, can you think of a project that could be improved if refactored to do so?

## Resources

- [Introduction to software architecture](https://vfunction.com/blog/what-is-software-architecture/) - read sections Introduction to software architecture, Importance of software architecture and Software architecture design (the rest discusses architecture design patterns so feel free to read that too!)
- [Good overview of layered architecture](https://medium.com/@sagar.hudge/layers-in-software-architecture-c8cc16329ff6) - focus on _why_ layered architecture is useful, familiarise yourself with the UI, business logic and database layers, and look at the example application

## Exercises
{{<note type="exercise" title="Exercise 1.1">}}

- For a previous project you have worked on, describe the tiers of architecture used. Draw a diagram of the architecture tiers used and the key components and software they use (e.g. React front end, Java Service layer, Hibernate DAO and Postgres DB).
- Consider a social media application where users can write posts on a forum. Consider the process of a user adding a new post - which tier of the application would the code for the following actions live?

- Handling the user interaction to navigate to the 'new post' screen
- Posting the callback to refresh the page when the user saves the post
- Validating that the post doesn't contain any banned words or phrases after the user hits save
- Scanning the contents of the post to add suitable tags to make it appear in relavent search results
- Loading a draft post that was previously saved
- Storing the the post long term
{{</note>}}
