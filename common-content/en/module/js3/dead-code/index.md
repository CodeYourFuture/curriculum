+++
title = 'Dead code'

time = 30
[objectives]
1="Define what is meant by 'dead code'"
2="Understand why 'dead code' matters in the context of working as a software engineer"
3="Demonstrate how we handle 'dead code' in our codebases"
4="Identify 'dead code' in an existing code base"

[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

As software engineers, we have a responsibility to build code that not only fulfils the required behaviours of the programme but is part of a well-structured and "clean" codebase.

**What is meant by "clean"?**

Clean code generally means code that is:

- **Understandable for other programmers.**
  We achieve this through good variable naming, avoiding chaining too many methods in one line, good choice of syntax depending on the data type being used, etc.
- **Avoids duplication**.
  Not repeating code where it could be a reusable function, making more efficient if/else statements, using loops where relevant, etc.
- **Passes all tests** (if you have tests in the repository).

- And importantly, contains a **minimal amount of "moving parts"**.
  Removing any bulk that isn't contributing to the behaviour we want to achieve. This means watching out for "dead code".

Keeping to **clean code** helps us collaborate better, code more efficiently and accurately, and make programmes more readable.

It means products we build can be maintained in the future without wasting more developer time than necessary trying to work out what the code is doing.

So let's focus specifically on "dead code". What does it mean?

{{<note type="exercise" title="Exercise">}}
📖 Read this short article on dead code: https://refactoring.guru/smells/dead-code.

📖 Read this more detailed breakdown of dead code from Devopedia: https://devopedia.org/dead-code.

❓ Answer the following questions:

- What makes a piece of code count as "dead code"?
- What is the difference between "redundant code" and "unreachable code"?
- Why do we want to remove "dead code" as much as possible? What are the benefits of removing it?
- What tool makes finding "dead code" in our repositories easiest? (Hint: Do you use this tool already to code?)
  {{</note>}}

{{<note type="tip"  title="Tip">}}
There are also plenty of Reddit threads and Stack Overflow posts asking the question... _"What IS dead code?"_. Look around the internet and see what developers in the world define it as.
{{</note>}}

In the related backlog item, you will look for dead code in an existing code base and handle it appropriately. Have fun!
