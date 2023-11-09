+++
title = '💽 Single datum'
headless = true
time = 30
facilitation = false
emoji= '🧩'
[objectives]
    1='Define a sub-goal for rendering data in the user interface'
+++

> 🎯 Sub-goal: Build a film card component

To break down this problem, we'll render a single datum, before doing this for the whole list. Here's one film:

```js
const film = {
    title: "Killing of Flower Moon",
    director: "Martin Scoresese"
    times: ["15:35"],
    certificate: "15",
    duration: 112
};
```

Starting with this object, we'll focus _only_ on building this section of the user interface:

![single-film-display](single-film-display.png)
