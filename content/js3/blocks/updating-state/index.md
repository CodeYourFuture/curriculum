+++
title = 'Updating the state'
headless = true
time = 30
facilitation = false
emoji= '🧩'
[objectives]
    1=''
+++

How can we filter our film data and update the state? First we need a {{<tooltip title="state">}} State means the state of the data that drives an application's logic and UI. State changes over time in response to interactions with our data. Our UI reacts to changes in state. {{</tooltip>}}

So let's create a state object to hold our film data:

```js
let state = {
  films: [],
};
```

Now we need a way to change the state of our data:

```mermaid
graph LR
A[Initial array] --> B[filter()] --> C[Filtered array]
```

### Input and output

We will also need a list of all our films and a filtered list of films based on search term:

```js
let films = []; // Initial empty film list
let filteredFilms = []; // Updated based on search
```

### Filter function

To filter we can use the higher order function .filter() to return a new array of films that include the search term:

```js
filteredFilms = films.filter((film) => film.title.includes(searchTerm));
```

Those are all the pieces we need to keep track of our film data. Now we can update the state when the user types in the search box.

```js
function handleInput(event) {
  // capture search term
  const { searchTerm } = event.target;
  // Filter films on search term
  filteredFilms = films.filter((film) => film.title.includes(searchTerm));

  // Set state
  state.films = filteredFilms;
}
```

Here when search term changes:

1. We filter original list of films
2. Save filtered films to state

State contains our app data. Keeping it updated lets us re-render UI from latest data. So that's the next step - re-rendering the UI.
