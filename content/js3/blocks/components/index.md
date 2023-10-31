+++
title = '🧩 Components'
headless = true
time = 30
facilitation = false
emoji= '🧩'
[objectives]
    1='Explain how data is rendered into a user interface'
+++

To build user interfaces, we break down the interface into smaller {{<tooltip title="components">}}A component is a reusable, self-contained piece of code. Components are like lego blocks you can build websites with. Most websites are made by "composing" components in this way.{{</tooltip>}}. Functions too are reusable blocks of code. In a similar way, we build a complex user interface from **components** - resuable blocks of the user interface. As functions allow us to reuse code again and again, we can write components in JavaScript using functions.

Let's consider our code thus far:

```js
const show = {
  event: "Little Simz concert",
  date: "5th November",
  location: "02 Victoria Warehouse",
  city: "Manchester",
};

const section = document.createElement("section");
section.innerHTML = `
<p>${show.name}</p>
<p>${show.date}</p>
<p>${show.location}</p>
`;
console.log(section);
```

Our sub-goal is to be able to render _any_ show object in the DOM. To do this, we can wrap up create a show card component using a function.

```js
const show1 = {
  name: "Little Simz",
  date: "5th November",
  location: "02 Victoria Warehouse",
  city: "Manchester",
};
const show2 = {
  name: "Slowdive",
  date: "13th November",
  location: "02 Victoria Warehouse",
  city: "Manchester",
};

function createShowCard(show) {
  const card = document.createElement("section");
  card.innerHTML = `
    <p>${show.name}</p>
    <p>${show.date}</p>
    <p>${show.location}</p>
`;
  return card;
}

document
  .querySelector("ul")
  .append(createShowCard(show1), createShowCard(show2)); // append the show cards to the DOM
```

{{<tabs>}}

{{<tab name="🧹 Refactor">}}

Try refactoring the `createShowCard` function to use object destructuring in the parameters.

{{</tab>}}

{{</tabs>}}
