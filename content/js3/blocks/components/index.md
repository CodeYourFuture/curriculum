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

A film card component will enable us to render _any_ film object in the user interface. At the moment, we've composed DOM elements but we've not built a **reusable component**. To do this, we can wrap up our code inside a JavaScript function. JavaScript functions **enable us to reuse code**: therefore we can implement **reusable UI components** using functions.

Let's consider our code thus far:

```js
const film = {
    title: "Killing of Flower Moon",
    director: "Martin Scoresese"
    times: ["15:35"],
    certificate: "15",
    duration: 112
};

const filmCard = document.createElement("section");
filmCard.innerHTML = `
<p>${film.title}</p>
`;
console.log(filmCard);
```

We can wrap up some of this code to create our reusable film card component:

```js
function createFilmCard(film) {
  const card = document.createElement("section");
  card.innerHTML = `
    <p>${film.title}</p>
`;
  return card;
}

const film1 = {
    title: "Killing of Flower Moon",
    director: "Martin Scoresese"
    times: ["15:35"],
    certificate: "15",
    duration: 112
};

document
  .querySelector("ul")
  .append(createShowCard(film1)); // append the film cards to the DOM

const film2 = {
    title: "Typist Artist Pirate King",
    directory: "Carol Morley"
    times: ["15:00", "20:00"],
    certificate: "12A",
    duration: 108
};

document
  .querySelector("ul")
  .append(createShowCard(film2)); // append the film cards to the DOM
```

{{<tabs>}}

{{<tab name="🔧 Implement">}}

Update the implementation of `createFilmCard` so it renders other film properties like `times` etc.

{{</tab>}}

{{<tab name="🧹 Refactor">}}

Refactor the `createFilmCard` function to use object destructuring in the parameters.

{{</tab>}}

{{</tabs>}}
