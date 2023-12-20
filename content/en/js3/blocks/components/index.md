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

Now that we have made a card work for one particular film, we can re-use that code to render _any_ film object in the user interface with a general component. To do this, we wrap up our code inside a JavaScript function. JavaScript functions **reuse code**: so we can implement **reusable UI components** using functions.


```js
const film = {
  title: "Killing of Flower Moon",
  director: "Martin Scorsese",
  times: ["15:35"],
  certificate: "15",
  duration: 112,
};

const createFilmCard = (film) => {
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
  // Return the card, rather than directly appending it to the page, because it means the caller could do something else with it if they wanted. e.g. if we wanted to show cards in different parent elements, we could still re-use this function.
  return card;
};
const template = document.getElementById("filmCard");
const filmCard = createFilmCard(template, film);

// Remember we need to append the card to the DOM for it to appear.
document.body.append(filmCard);
```

{{<note type="exercise" title="Exercise: Use destructuring">}}
Refactor the `createFilmCard` function to use object destructuring in the parameters.
{{</note>}}
