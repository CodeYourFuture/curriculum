+++
title = '🧩 Components'
headless = true
time = 30
facilitation = false
emoji= '🧩'
[objectives]
    1='Explain how data is rendered into a user interface'
+++

To build user interfaces, we break down the interface into smaller **components**. Functions are reusable blocks of code that we can use to do the same thing again and again. In a similar way, we build a complex user interface from **components** - resuable blocks of the user interface. As functions allow us to reuse code again and again, we can implement components using functions.

Let's consider our code thus far:

```js
const show = {
  name: "Little Simz",
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
  name: "Gang of Four",
  date: "5th November",
  location: "02 Victoria Warehouse",
  city: "Manchester",
};

function createShowCard() {
  const section = document.createElement("section");
  section.innerHTML = `
    <p>${show.name}</p>
    <p>${show.date}</p>
    <p>${show.location}</p>
`;
  return section;
}

document.append(createShowCard(show1), createShowCard(show2)); // append the show cards to the DOM
```
