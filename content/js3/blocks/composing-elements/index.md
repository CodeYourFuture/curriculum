+++
title = '🧱 Composing UI elements'
headless = true
time = 30
facilitation = false
emoji= '🧩'
[objectives]
    1='Compose UI elements to some specification'
+++

To build a component, we can start by calling `createElement` to create and {{<tooltip title="compose DOM elements">}}To **compose DOM elements** means to **combine DOM elements** to form some part of the user interface.{{</tooltip>}}. and set its `innerHTMl` property using data from the `film` object. For now, we'll only consider rendering the `title` property. After we've rendered the film title we can then render more data from the film object.

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
  <h3>${film.title}</h3>
`;
console.log(filmCard);
```

If we open up the console tab, we should be able to see this element logged in the console. However, it won't yet appear in the browser.

### Appending elements

To display the film card, we need to append it to another element that is already in the DOM tree.

```js {linenos=table,hl_lines=["15"],linenostart=1}
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

document.querySelector("ul").append(section);
```
