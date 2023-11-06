+++
title = '📽️ Cinema listings'
headless = true
time = 30
facilitation = false
emoji= '🧩'
[objectives]
    1='Explain how data is rendered into a user interface'
+++

### 📽️ Cinema listings

Suppose you're building a user interface to display the films that are now showing on a film website. We need to render some cinema listings in the user interface. Let's define an acceptance criterion:

> _Given_ a list of film data
> _When_ the page first loads
> _Then_ it should display the list of films now showing, including the film title, times and film certificate

A typical film can be modelled as a JavaScript object with the following properties:

```js
// js object with event data
{
  title: "Killing of Flower Moon",
  times: ['15:35'],
  certificate: "15"
}
```

So our list of film showing data can be modelled as an array of objects, each with a similar shape:

```js
const films = [
  {
    title: "Killing of Flower Moon",
    director: "Martin Scoresee"
    times: ["15:35"],
    certificate: "15",
    duration: 112
  },
  {
    title: "Typist Artist Pirate King",
    directory: "Carol Morley"
    times: ["15:00", "20:00"],
    certificate: "12A",
    duration: 108
  },
];
```
