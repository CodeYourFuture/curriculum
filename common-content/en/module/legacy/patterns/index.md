+++
title = "Identifying patterns"
time = 60
emoji= "🏴󠁧󠁢󠁳󠁣󠁴󠁿🏴󠁧󠁢󠁥󠁮󠁧󠁿🇬🇧"

+++

> Patterns are reusable solutions to common problems.

Legacy code is like a crime scene. We will use our detective skills to understand how it happened.

Programmers like you take a complex problem and break it down into smaller, understandable pieces. Your solutions, once you have them, can be re-used in other places. Sometimes we call these solutions "[design patterns](https://refactoring.guru/design-patterns/what-is-pattern)". It's not the specific code, but the shape of the solution that's important. It's like the difference between the shirt you're wearing and the concept of a shirt.

Identifying patterns in a codebase can help you understand it by allowing you to use something called {{<tooltip title="chunking.">}}[Chunking](https://www.youtube.com/watch?v=hydCdGLAh00) is a way to group information together so it's easier to remember and understand.{{</tooltip>}}

In [the PurpleForest application](https://github.com/CodeYourFuture/Module-Legacy-Code), there are several identifiable patterns. They are rules that the original developers followed when they built the application. By understanding these patterns, you can understand how the application works and how to extend it.

### Architectural Patterns

These are known solutions to common tasks in software. In Purple Forest, we could identify an [MVC](https://developer.mozilla.org/en-US/docs/Glossary/MVC) pattern, a [SPA](https://developer.mozilla.org/en-US/docs/Glossary/SPA) pattern, and a [RESTful API](https://developer.mozilla.org/en-US/docs/Glossary/REST) pattern, among others.

You don't need to memorise all these names, what you need is to be alive to the idea that there are patterns in the codebase that you can look for and reuse. Just like a musician, you can join in with the band and play along, even if you haven't heard the song before.

### Design Patterns

### Code Conventions

Looking through the codebase, answer the following:

1. How are functions named? If you wanted to edit a function that handles user input, what could you search for?
1. How are files organised? To find out how the application puts together the home page, where will you look?
1. Is there [a pattern](https://getbem.com/) to the classes and ID names in the HTML?

### 3. Implicit Patterns

These are unwritten rules that emerge through consistent choices:

- **Error Handling Approaches**: How errors are caught and displayed
- **State Update Mechanisms**: How the application state is modified
- **DOM Interaction Patterns**: How the code interfaces with the DOM

## Finding Patterns in Purple Forest

Let's identify some specific patterns in the Purple Forest application:

### Component Creation Pattern

Purple Forest uses a consistent pattern for component creation:

```javascript
// Component creation pattern
function createComponent(template, data) {
  // Clone template
  // Populate with data
  // Return fragment
}

// Used consistently throughout the application
render(
  [data], // Data to pass to the component
  getContainer(), // DOM container
  "template-id", // Template ID
  createComponent // Creator function
);
```

### Unidirectional Data Flow Pattern

The data flow follows a consistent pattern:

```javascript
// User action in component
function handleAction(event) {
  // Call API service
  apiService
    .performAction()
    .then(() => {
      // State is updated by API service
      // UI updates triggered by state-change event
    })
    .catch((error) => {
      // Error handled by error component
    });
}
```

## Using Patterns to Navigate Legacy Code

> [!TIP]
> Once you identify a pattern, you can predict how other parts of the system will work.

Patterns help you navigate legacy code by:

1. **Creating expectations**: Once you understand one component, you can predict how others work
2. **Guiding changes**: Patterns tell you how new code should be structured
3. **Highlighting anomalies**: Code that breaks established patterns may indicate problems
