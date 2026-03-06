+++
title = 'Composing elements'

time = 20
[objectives]
    1='Compose UI elements to some specification'
    2='Append DOM elements to other nodes in the DOM tree'
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

We can start by calling `createElement` to create and {{<tooltip title="compose DOM elements">}}To **compose DOM elements** means to **combine DOM elements** to form some part of the user interface.{{</tooltip>}}.

{{<tabs name="Rendering from data">}}
===[[JavaScript]]===
For now, we'll only consider rendering the `title` property from the `film` object. Create this script in your index.html:

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
console.log(filmTitle);
```

If we open up the console tab, we should be able to see this element logged in the console. However, it won't yet appear in the browser.

{{<note type="tip">}} If you see this error:

```
Uncaught ReferenceError: document is not defined
```

make sure you are running your code in the browser and not a terminal. Node doesn't have the DOM API. You need to use your browser console. See [how to set up your html](#rendering-from-data-1) if you are stuck.{{</note>}}

===[[HTML]]===

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Film View</title>
  </head>
  <body>
    <script>
      const film = {
        title: "Killing of Flower Moon",
        director: "Martin Scorsese",
        times: ["15:35"],
        certificate: "15",
        duration: 112,
      };
      const filmTitle = document.createElement("h3");
      filmTitle.textContent = film.title;
      console.log(filmTitle);
    </script>
  </body>
</html>
```

{{</tabs>}}

### Appending elements

To display the film card, we need to append it to another element that is already in the DOM tree. For now let's append it to the body, because that always exists.

```js {linenos=table,hl_lines=["12"],linenostart=1}
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

We can extend this card to include more information about the film by creating more elements:

```js
const film = {
  title: "Killing of Flower Moon",
  director: "Martin Scorsese",
  times: ["15:35"],
  certificate: "15",
  duration: 112,
};

const card = document.createElement("section");

const filmTitle = document.createElement("h3");
filmTitle.textContent = film.title;
card.append(filmTitle);

const director = document.createElement("p");
director.textContent = `Director: ${film.director}`;
card.append(director);

const duration = document.createElement("time");
duration.textContent = `${film.duration} minutes`;
card.append(duration);

const certificate = document.createElement("data");
certificate.textContent = `Certificate: ${film.certificate}`;
card.append(certificate);

document.body.append(card);
```

Eventually, we will include all the information, to match the wireframe. This is a bit tedious, as we had to write lots of similar lines of code several times, but it works.
