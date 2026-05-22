+++
title = 'Creating elements with <template>'

time = 30
[objectives]
    1='Use template tags to simplify element initialisation'
    2='Identify trade-offs between using functions vs template tags to create components'
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

### Using `<template>` tags

We could simplify this code with a different technique for creating elements.

Until now, we have only seen one way to create elements: `document.createElement`. The DOM has another way of creating elements - we can _copy_ existing elements and then change them.

HTML has a useful tag designed to help make this easy, [the `<template>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template). When you add a `<template>` element to a page, it doesn't get displayed when the page loads. It is an inert fragment of future HTML.

We can copy any DOM node, not just `<template>` tags. For this problem, we will use a `<template>` tag because it is designed for this purpose.

When we copy an element, its children get copied. This means we can write our template card as HTML:

```html
<template id="film-card">
  <section>
    <h3>Film title</h3>
    <p data-director>Director</p>
    <time>Duration</time>
    <data data-certificate>Certificate</data>
  </section>
</template>
```

This is our template card. Place it in the body of your html. It doesn't show up! [Template HTML](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template) is like a wireframe; it's just a _plan_. We can use this template to create a card for any film object. We will clone (copy) this template and populate it with data. Replace the contents of your `<script>` tag with this:

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
card.querySelector("h3").textContent = film.title;
card.querySelector(
  "[data-director]"
).textContent = `Director: ${film.director}`;
card.querySelector("time").textContent = `${film.duration} minutes`;
card.querySelector(
  "[data-certificate]"
).textContent = `Certificate: ${film.certificate}`;

document.body.append(card);
```

This code will produce the same DOM elements in the page as the two other versions of the code we've seen (the verbose version, and the version using `createChildElement`).

The first two approaches (the verbose version, and the `createChildElement` version) did so by calling the same DOM functions as each other.

This approach uses _different_ DOM functions. But it has the same effect.

{{<note type="exercise" title="Exercise: Consider the trade-offs">}}
We've now seen two different ways of simplifying our function: extracting a function, or using a template tag.

Both have advantages and disadvantages.

Think of at least two trade-offs involved. What is better about the "extract a function" solution? What is better about the template tag solution? Could we combine them?

Share your ideas about trade-offs in a thread in Slack.
{{</note>}}
