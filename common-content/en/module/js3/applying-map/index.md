+++
title = 'Applying map to our problem'

time = 30
hide_from_overview = true
[objectives]
    1='Use map to render multiple film cards'
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

Now that we understand `map`, let's ty to use it in our project.

Given the list of film data:

```js
const films = [
  {
    title: "Killing of Flower Moon",
    director: "Martin Scorsese",
    times: ["15:35"],
    certificate: "15",
    duration: 112,
  },
  {
    title: "Typist Artist Pirate King",
    director: "Carol Morley",
    times: ["15:00", "20:00"],
    certificate: "12A",
    duration: 108,
  },
];
```

Use `createFilmCard` and `map` to create an array of film card components. In your local project, render this array of components in the browser.
