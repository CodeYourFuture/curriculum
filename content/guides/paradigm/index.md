---
id: paradigm
title: What we teach and why
description: Our Approach
emoji: 👩🏿‍🏫
---

# What are we actually teaching?

We can only teach a subset of programming in our syllabus and because we teach React, that means that we teach functional programming. Further, we teach declarative programming. Our strategy is to build a coherent journey in programming that guides our trainees to their final project with the tools to write great React code. After this, they will go off into many different directions, and they should!

We don’t teach them this is the only way, but this _is_ the only way we teach them.

Let’s articulate together our clear and guiding principles.

## What don’t we teach?

There’s so much we don’t cover in our syllabus. It’s not always obvious what we skip because it’s out of paradigm, and what we skip because we’re out of time. So let’s notice some things that are missing and say why:

### For time reasons

We don’t teach the following topics, though useful and important, simply because we don’t have time to cover them:

- Recursion
- Regex (though we typically mention them in JS1-W3, we don’t teach them or expect trainees to be able to write them)

We have some Codewars collections around these topics.

### For simplicity and clarity

The following topics are largely unnecessary for writing code in the style we teach. We omit them for clarity and focus.

- OOP generally
- JS classes and constructors
  - The `this` keyword is famously unintuitive. React changed its API to avoid using this. Since JS classes tend not to be useful without the this keyword, we avoid them altogether.
- Mutability/immutability
- Passing by value vs reference

In general: while we cover basic language features like for loops, we quickly move on to higher order functions and encourage these over imperative strategies. We downplay strategies that mutate arrays, like push, and pop.

## What do we teach?

We teach a subset, so what do we focus on? We broadly focus on Declarative and Functional programming paradigms.

### Declarative

We teach three purely declarative languages: HTML, CSS, & SQL and one multiparadigmatic language, JavaScript, focusing on React, a declarative framework.

### Functional

When we mentor trainees we guide them with these principles:

{{<note type="piece" title="Prefer pure functions">}}
Pure functions are predictable. The same input will always produce the same output.

{{</note>}}

{{<note type="piece" title="Prefer composable functions">}}

Break up your functions.
{{</note>}}
{{<note type="piece" title="Minimise side effects">}}

A function without side effects is pure.
{{</note>}}
{{<note type="piece" title="Avoid mutation">}}

In practical terms this means preferring methods that return new objects, arrays, or values over methods that mutate data. Yes to `map`, no to `forEach`.
{{</note>}}
And so therefore:

{{<note type="piece" title="Prefer arrow functions">}}

Arrow functions do not have their own bindings to `this` or `super`, or an arguments object.
{{</note>}}

### Code as documentation

Expressing ideas clearly in code. Code should be simple, clearly named, and easy to follow.

{{<note type="piece" title="Name data clearly">}}

Prefer verbose and specific naming conventions over algebraic ones so trainees can trace the function. Yes to `numberOfDevelopers.map(developer => ...`, no to `xs.map(x => ...`
{{</note>}}
{{<note type="piece" title="Comments are why not what">}}

Encourage skeleton code in comments as part of development. Then delete those comments as part of refactoring. Use comments to explain choices.
{{</note>}}

{{<note type="piece" title="Documentation is expected, simple and routine.">}} Our trainees must practice writing.
{{</note>}}

### Test driven development

{{<note type="piece" title="Red, green, refactor">}}

Ideally: Requirements are expressed as tests. Production code is only written to pass a test. Implementation details are not tested.
{{</note>}}
