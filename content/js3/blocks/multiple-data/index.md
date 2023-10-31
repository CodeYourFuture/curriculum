+++
title = 'Rendering a list'
headless = true
time = 30
facilitation = false
emoji= '🧩'
[objectives]
    1='Describe how to render a list of data'
+++

We can take a single datum and render it in the UI. However,the goal is to render a list of data in the user interface:

Let's consider an array of data like this:

```js
const shows = [
  {
    name: "Little Simz",
    date: "5th November",
    location: "02 Victoria Warehouse",
    city: "Manchester",
  },
  {
    name: "Little Simz",
    date: "5th November",
    location: "02 Victoria Warehouse",
    city: "Manchester",
  },
];

const cards = [];
for (const item of shows) {
  cards.push(createShowCard(item));
}

document.querySelector("ul").append(...elements);
// invoke append using the spread operator
```

We want to map over this data and render it in the user interface.

```js
const shows = [
  {
    name: "Little Simz",
    date: "5th November",
    location: "02 Victoria Warehouse",
    city: "Manchester",
  },
  {
    name: "Little Simz",
    date: "5th November",
    location: "02 Victoria Warehouse",
    city: "Manchester",
  },
];

const elements = [];
for (const item of items) {
  const userCard = createUserCard(item);
  elements.push(userCard);
}

document.querySelector("#main-content").append(...elements);
```

Now we have a situation where we want to map elements from the DOM to a user interface.
