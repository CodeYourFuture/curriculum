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

We can render _any_ film object in the user interface with a general component. We've composed DOM elements to create a card; now we will build a **reusable component**. To do this, we wrap up our code inside a JavaScript function. JavaScript functions **reuse code**: so we can implement **reusable UI components** using functions.

Look at our code so far:

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
    director: "Martin Scorsese"
    times: ["15:35"],
    certificate: "15",
    duration: 112
};

const film2 = {
    title: "Typist Artist Pirate King",
    director: "Carol Morley"
    times: ["15:00", "20:00"],
    certificate: "12A",
    duration: 108
};

document
  .querySelector("ul")
  .append(createFilmCard(film1),createFilmCard(film2)); // append the film cards to the DOM
```

{{<tabs>}}

{{<tab name="🔧 Implement">}}

Update the implementation of `createFilmCard` so it renders other film properties. Other film properties on this object are `director`, `times`, `certificate` and `duration`.

{{</tab>}}

{{<tab name="🧹 Refactor">}}

Refactor the `createFilmCard` function to use object destructuring in the parameters.

{{</tab>}}

{{</tabs>}}
