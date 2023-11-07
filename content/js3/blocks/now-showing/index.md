+++
title = '📽️ Cinema listings'
headless = true
time = 30
facilitation = false
emoji= '🧩'
[objectives]
    1='Explain how data is rendered into a user interface'
+++

Suppose you're building a user interface to display the films that are now showing on a film website. We need to render some cinema listings in the user interface. Let's define an acceptance criterion:

> _Given_ a list of film data
> _When_ the page first loads
> _Then_ it should display the list of films now showing, including the film title, times and film certificate

We can use a {{<tooltip title="wireframe">}}A wireframe is a basic outline of a web page used for design purposes{{</tooltip>}}to visualise how the user interface should look:

### Cinema listings wireframe 🖼️

![film-cards](film-cards.png)

The wireframe is composed of a series of {{<tooltip title="card components">}}A card component is a UI component that creates a visually distinct group of logically related information{{</tooltip>}}card components. To build this user interface, we will start with data in the form of an array of objects, each with similar properties. Here are some example film data:

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

So our task will be to take this data and build the film listings view.
