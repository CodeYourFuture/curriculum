+++
title = '🃏 Building a component'
headless = true
time = 30
facilitation = false
emoji= '🧩'
[objectives]
    1='Implement components for a user interface'
+++

Recall our sub-goal:

> 🎯 Sub-goal: Build a film card component

We can compose DOM elements to form a card, by creating a `section` element and adding an `h3` element inside it for the title and adding a `p` element for the director. It would take a long time, but we could create each element individually and add them to the DOM.

But we can render _any_ film object in the user interface with a general component. To do this, we wrap up our code inside a JavaScript function. JavaScript functions **reuse code**: so we can implement **reusable UI components** using functions.

But we can go further. We can define a `<template>` card and pair it with a card `function()`. Look at our code so far:

```js
const film = {
  title: "Killing of Flower Moon",
  director: "Martin Scorsese",
  times: ["15:35"],
  certificate: "15",
  duration: 112,
};

const filmTitle = document.createElement("h3");
filmTitle.textContent = film.title;

document.body.append(filmTitle);
```

We can wrap up some of this code to create our reusable film card component. We can move some of this code into a template and store it in our html. Let's make our template first.

```html
<template id="film-card">
  <section>
    <h3></h3>
  </section>
</template>
```

This is our template card. Place it in the body of your html. It doesn't show up! [Template HTML](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template) is like a wireframe; it's just a _plan_. We can use this template to create a card for any film object. We will clone (copy) this template and populate it with data.

Any HTML we add to this template will be available to all cards we create with JavaScript.

```js
const film = {
  title: "Killing of Flower Moon",
  director: "Martin Scorsese",
  times: ["15:35"],
  certificate: "15",
  duration: 112,
};

const createFilmCard = (template, film) => {
  const card = template.content.cloneNode(true);
  // now we are querying our cloned fragment, not the entire page
  const title = card.querySelector("h3");
  // populate the card with data
  title.textContent = film.title;
  return card;
};
const template = document.getElementById("filmCard");
const filmCard = createFilmCard(template, film);

// remember we need to append the card to the DOM for it to appear
document.body.append(filmCard);
```

{{<tabs>}}

{{<tab name="🔧 Implement">}}

Update the implementation of `createFilmCard` so it renders other film properties. Other film properties on this object are `director`, `times`, `certificate` and `duration`.

You will need to add more elements to the template to display these properties.

{{</tab>}}

{{<tab name="🧹 Refactor">}}

Refactor the `createFilmCard` function to use object destructuring in the parameters.

{{</tab>}}

{{</tabs>}}
