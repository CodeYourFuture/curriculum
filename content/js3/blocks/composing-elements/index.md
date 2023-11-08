+++
title = '🧱 Composing elements'
headless = true
time = 20
facilitation = false
emoji= '🧩'
[objectives]
    1='Compose UI elements to some specification'
    2='Append DOM elements to other nodes in the DOM tree'
+++

We can start by calling `createElement` to create and {{<tooltip title="compose DOM elements">}}To **compose DOM elements** means to **combine DOM elements** to form some part of the user interface.{{</tooltip>}}. For now, we'll only consider rendering the `title` property from the `film` object:

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
