+++
title = 'Re-rendering the UI'

time = 45
[objectives]
    1='Trace the flow of data from user input to updated UI'
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

With state updated from user input, we can re-render:

```js
const render = (films) => {
  // Clear existing DOM elements
  // Map films to DOM elements
};

function handleInput(event) {
  // capture search term
  const { searchTerm } = event.target;
  // Filter films on search term
  filteredFilms = films.filter((film) => film.title.includes(searchTerm));
  // Set new state
  state.films = filteredFilms;
  // Re-render UI with updated films
  render(state.films);
}
```

{{<note type="tip" title="Things to consider">}}
Users don't always type perfectly. How will you match their typing to the film titles? What if they type in all caps? What is the simplest thing that could possibly work?
{{</note>}}

To re-render the UI, we need to update the DOM elements to match the latest state. We can do this by:

1. Clearing existing DOM elements
2. Mapping updated films data to new DOM elements
3. Appending new elements to DOM

This is how we update the user interface in response to updated application state! We declare that our UI is a function of the state.

> 🧠 Our UI is a function of the state

Recalling our card function, let's see how we can update the UI with the latest films data.

{{<tabs name="Updating the DOM">}}

===[[Render]]===

```js
const render = (container, list) => {
  container.textContent = ""; // clear the view
  const cards = list.map((film) => createCard(template, film));
  container.append(...cards);
};
```

===[[Card]]===

```js
const createCard = (template, { title, director }) => {
  const card = template.content.cloneNode(true);

  card.querySelector("h3").textContent = title;
  card.querySelector("dd").textContent = director;

  return card;
};
```

===[[Template]]===

```html
<template id="filmCardTemplate">
  <section class="film-card">
    <h3></h3>
    <dl>
      <dt>Director</dt>
      <dd></dd>
    </dl>
  </section>
</template>
```

===[[Data]]===

```js
const films = [
  {
    title: "The Matrix",
    director: "Lana Wachowski",
    certificate: "15",
  },
  {
    title: "Inception",
    director: "Christopher Nolan",
    certificate: "12A",
  },
];
```

===[[Compiled]]===

<iframe src="../../../../filterFilms.html" width="100%" height="480px"></iframe>

{{</tabs>}}
