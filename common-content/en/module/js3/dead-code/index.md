+++
title = 'Dead code'

time = 30
[objectives]
1="Define what is meant by 'dead code'"
2="Identify 'dead code' in a existing code base"
3="Understand why 'dead code' matters in the context of working as a software engineer"
4="Demonstrate how we handle 'dead code' in our codebases"

[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

As software engineers we have a responsibility to build code programmes that not only fulfil the required behaviours but are well-structured and "clean".

What is meant by "clean"?

Clean code generally means code that is:

- Understandable for other programmers.
  We achieve this through good variable naming, avoiding chaining too many methods in one line, good choice of syntax depending on the data type being used etc.
- Avoids duplication
  Not repeating code where it could be a reusable function, making more efficient if/else statements, using loops where relevant etc.
- Passes all tests (if you have tests in the repository)

- And importantly, contains a minimal amount of "moving parts"
  Removing any bulk that isn't contributing to the behaviour we want to achieve. This means watching out for "dead code".

All the above help us collaborate better, code more efficiently and accurately, and make programmes more readable. It means products we build can be maintained in the future without wasting more developer time than necessary trying to work out what the code is doing.

So let's focus specifically on "dead code". What does it mean?

Take a read of this short article on [Dead Code](https://refactoring.guru/smells/dead-code) and this [more detailed Medium article](https://medium.com/beyond-the-code-by-typo/how-to-identify-and-remove-dead-code-8283b0bf05a3). There are also plenty of reddit threads and stack overflow posts asking the universal question... "What IS dead code?" feel free to look around and see what devs in the world define it as.

Answer the following questions:

- What makes a piece of code count as "dead code"?
- Why do we want to remove "dead code" as much as possible? What are the benefits of removing it?
- What tool makes finding "dead code" in our repositories easiest? (hint: do you use this tool already?)
- How would you define 'technical debt'?

The backlog item relating to dead code will be getting you to LOOK for dead code in a existing code base and handle it appropriately. Have fun!

Reading:
clean code - https://blog.codacy.com/what-is-clean-code
the pragmatic programmer
