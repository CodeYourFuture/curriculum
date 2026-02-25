+++
title = 'Creating elements with functions'

time = 30
[objectives]
    1='Extract functions for common tasks'
    2='Identify benefits of using reusable functions'
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

We now have a card showing all of the information for one film. The code we have is quite repetitive and verbose. It does similar things lots of times.

Let's look at two ways we could simplify this code. First we will explore extracting a function. Then we'll look at using `<template>` tags.

### Refactoring: Extracting a function

One way we can simplify this code is to refactor it.

{{<note type="tip" title="Definition: refactoring">}}
To refactor means to update our code _quality_ without changing the _implementation_.
{{</note>}}

We can identify things we're doing several times, and extract a function to do that thing for us.

In this example, we keep doing these three things:

1. Create a new element (sometimes with a different tag name).
2. Set that element's text content (always to different values).
3. Appending that element to some parent element (sometimes a different parent).

We could extract a function which does these three things. The things which are different each time need to be parameters to the function.

We could write a function like this:

```js
function createChildElement(parentElement, tagName, textContent) {
  const element = document.createElement(tagName);
  element.textContent = textContent;
  parentElement.append(element);
  return element;
}
```

And then rewrite our code to create the card like this:

```js
const film = {
  title: "Killing of Flower Moon",
  director: "Martin Scorsese",
  times: ["15:35"],
  certificate: "15",
  duration: 112,
};

function createChildElement(parentElement, tagName, textContent) {
  const element = document.createElement(tagName);
  element.textContent = textContent;
  parentElement.append(element);
  return element;
}

const card = document.createElement("section");

createChildElement(card, "h3", film.title);

createChildElement(card, "p", `Director: ${film.director}`);

createChildElement(card, "time", `${film.duration} minutes`);

createChildElement(card, "data", `Certificate: ${film.certificate}`);

document.body.append(card);
```

This code does exactly the same thing as the code we had before. By introducing a function we have introduced some advantages:

1. Our code is smaller, which can make it easier to read and understand what it's doing.
2. If we want to change how we create elements we only need to write the new code one time, not for every element. We could add a class attribute for each element easily.
3. We can see that each element is being created the same way. Before, we would have to compare several lines of code to see this. Because we can see they're calling the same function, we know they're made the same way.
4. We're less likely to make mistakes copying and pasting the code. In the first version of this content, we actually wrote `` duration.textContent = `Certificate: ${film.certificate}`; `` instead of `` certificate.textContent = `Certificate: ${film.certificate}`; `` because we were just copying and pasting and missed an update. The less we need to copy and paste and update code, the less likely we are to miss an update.

There are also some drawbacks to our refactoring:

1. If we want to change how we create some, but not all, elements, we may have made it _harder_ to make these changes. When we want to include an image of the director, or replace the certificate text with a symbol, we will have to introduce branching logic.
2. To follow how something is rendered, we need to look in a few places. This is something you will need to get used to, so it's good to start practising now.
