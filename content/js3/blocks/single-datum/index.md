+++
title = '💽 Single datum'
headless = true
time = 30
facilitation = false
emoji= '🧩'
[objectives]
    1='Define a sub-goal for rendering data in the user interface'
+++

To break down this problem, let's define a sub-goal:

> 🎯 Sub-goal: Build a film card component

We'll consider how to render _any_ single datum using a film card. We'll start with an object like the one below:

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
