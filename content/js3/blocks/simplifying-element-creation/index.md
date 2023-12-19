+++
title = 'Simplifying element creation'
headless = true
time = 45
facilitation = false
emoji= '🧩'
[objectives]
    1='Extract functions for common tasks'
    2='Use template tags to simplify element initialisation'
+++

We now have a card showing all of the information for one film.

The code we have is quite repetitive and verbose. It does similar things lots of times.

Let's look at two ways we could simplify this code.

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

We could extract a function which does these three things. The things which are different each time need to be parameteres to the function.

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

const times = createChildElement(card, "ul", "");

for (const time of film.times) {
  createChildElement(times, "li", time);
}

createChildElement(card, "p", `${film.duration} minutes`);

createChildElement(card, "p", `Certificate: ${film.certificate}`);

document.body.append(card);
```

This code does exactly the same thing as the code we had before. By introducing a function we have introduced some advantages:
1. Our code is smaller, which can make it easier to read and understand what it's doing.
2. If we want to change how we create elements we only need to write the new code one time, not for every element. We could add a class attribute for each element easily.
3. We can see that each element is being created the same way. Before, we would have to compare several lines of code to see this. Because we can see they're calling the same function, we know they're made the same way.

There are also some drawbacks to our refactoring:
1. If we want to change how we create some elements (e.g. we want to include an image of the director, replace the certificate text with a symbol, etc), we may have made it _harder_ to make these changes.
2. If we want to see how one particlar thing, like the director, is show, we need to look in a few places. This is something you will need to get used to, so it's good to start practising now!

### Using `<template>` tags

We could simplify this code with a different technique for creating elements.

Until now, we have only seen one way to create elements: `document.createElement`.

The DOM has another way of creating elements - we can _copy_ existing elements and then change them.

HTML has a useful tag designed to help make this easy, [the `<template>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template). When you add a `<template>` element to a page, it doesn't get displayed when the page loads.

We can copy any DOM element, not just `<template>` tags. For this problem, we will use a `<template>` tag because it isn't displayed, but can be used to make elements which are.

When we copy an element, its children also get copied.

This means we can write our template card as HTML:

```html
<template id="film-card">
  <section>
    <h3 name="title"></h3>
    <p name="director"></p>
    <ul name="times"></ul>
    <p name="duration"></p>
    <p name="certificate"></p>
  </section>
</template>
```

This is our template card. Place it in the body of your html. It doesn't show up! [Template HTML](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template) is like a wireframe; it's just a _plan_. We can use this template to create a card for any film object. We will clone (copy) this template and populate it with data.

```js
const film = {
  title: "Killing of Flower Moon",
  director: "Martin Scorsese",
  times: ["15:35"],
  certificate: "15",
  duration: 112,
};

const card = document.getElementById("film-card").content.cloneNode(true);
// Now we are querying our cloned fragment, not the entire page.
card.querySelector('h3[name="title"]').textContent = film.title;

card.querySelector('p[name="director"]').textContent = `Director: ${film.director}`;

const times = document.querySelector('ul[name="times"]');
for (const time of film.times) {
  // We could use either createChildElement, or a different <template> tag here if we wanted.
  const timeElement = document.createElement("li");
  timeElement.textContent = time;
  times.append(timeElement);
}

card.querySelector('p[name="duration"]').textContent = `${film.duration} minutes`;

card.querySelector('p[name="certificate"]').textContent = `Certificate: ${film.certificate}`;

document.body.append(card);
```

This code will produce the same DOM elements in the page as the two other versions of the code we've seen (the verbose version, and the version using `createChildElement`).

The first two approaches (the verbose version, and the `createChildElement` version) did so by calling the same DOM functions as each other.

This approach uses _different_ DOM functions. But it has the same effect.

{{<note type="exercise" title="Exercise: Consider the trade-offs">}}
We've now seen two different ways of simplifying our function: extracting a function, or using a template tag.

Neither one if these is obviously better. Both have advantages and disadvantages.

Think of at least two trade-offs involved. What is better about the "extract a function" solution? What is better about the template tag solution?

Share your ideas about trade-offs in a thread in Slack.
{{</note>}}
