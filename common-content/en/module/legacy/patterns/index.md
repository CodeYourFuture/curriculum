+++
title = "Identifying patterns"
time = 30

+++

> Patterns are reusable solutions to common problems.

In [the PurpleForest application](https://github.com/CodeYourFuture/Module-Legacy-Code), there are identifiable patterns. These are rules that the original developers followed when they built the application. By understanding these patterns, you can understand how the application works and how to extend it.
{{<columns>}}

### Architectural Patterns

These are [known solutions](https://www.turing.com/blog/software-architecture-patterns-types) to common tasks in software. In Purple Forest, we could identify an [MVC](https://developer.mozilla.org/en-US/docs/Glossary/MVC) pattern, a [SPA](https://developer.mozilla.org/en-US/docs/Glossary/SPA) pattern, and a [RESTful API](https://developer.mozilla.org/en-US/docs/Glossary/REST) pattern, among others.

You don't need to memorise all these names, just be alive to the idea that there are patterns in the codebase that you should look for and reuse. You have implemented patterns many times before in previous modules without knowing their names.
<--->

### Design Patterns

Formal [design patterns](https://refactoring.guru/design-patterns/what-is-pattern) are more commonly used in object-oriented programming (OOP).

In Purple Forest, which is not written in an OOP style, you can still find patterns like the [Factory Method](https://refactoring.guru/design-patterns/factory-method) or the [Singleton](https://refactoring.guru/design-patterns/singleton).
{{</columns>}}

### Code Conventions

We can also see regularities in the codebase called conventions. You can derive useful information from these conventions. Write down your answers to the following questions:
{{<note type="Activity" title="Investigate and document">}}

1. How are functions named? If you wanted to edit a function that handles user input, what could you search for?
1. How are files organised? To find out how the application puts together the signup page, where will you look?
1. Is there [a pattern](https://getbem.com/) to the classes and ID names in the HTML? If you were to add a new template, how would you name it?
1. Compare any two components. Is there a similarity in their structure? How would you write a new one?

{{</note>}}

### Component Creation Pattern

Let's identify a convention in the Purple Forest application. Read any "createComponent" function in the Purple Forest codebase. In your notebook, write down the general steps this function takes to create a component.

<details><summary>Play computer and think about it</summary>

```javascript
// function name starts with create
// then name of file
// function expects a template (id) and data as arguments {
// first, return if there's no data
// next, clone template to create a fragment
// then, populate the fragment with data
// return fragment
//}
```

</details>

Check your specification against another "createComponent" function. Does the pattern hold?

> [!TIP]
> Once you identify a pattern, you can predict how other parts of the system will work.

#### Why Patterns Matter

Patterns help you:

- Predict how other parts of the system work
- Guide your implementation of new features
- Spot potential problems where patterns are broken

Understanding patterns allows you to {{<tooltip title="chunk">}}[Chunking](https://www.youtube.com/watch?v=hydCdGLAh00) is a way to group information together so it's easier to remember and understand.{{</tooltip>}} information, making complex codebases easier to comprehend.

#### Enforcing patterns

Sometimes these patterns are enforced by the shape of the code, e.g. `renderEach` ensures that if we're rendering multiple pieces of data we will always have the data, a container, a template name, and a `create*` function.

Other times these patterns are just implemented by writing code in similar styles. This is less reliable - it's easy for someone to forget a step. Particularly this is harder to _keep_ consistent over time - if you change the pattern, you need to make sure you update it everywhere.

Relying on code constructs (like functions) to _enforce_ our use of patterns makes them more likely to be consistently followed.
