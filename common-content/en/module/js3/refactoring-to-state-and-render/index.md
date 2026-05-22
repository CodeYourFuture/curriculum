+++
title = 'Refactoring to state+render'

time = 30
[objectives]
    1='Structure code to use state and render'
    2='Define refactoring'
    3='Refactor code'
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

We are going to introduce a common pattern in writing UIs, which is to define and use a function called `render`.

Up until now, our film website has been **static**: it never changes. By introducing a search input, our website is becoming **dynamic**: it can change. This means that we may need to re-run the code which creates our UI elements.

So before we add the new functionality to our website, we are going to {{<tooltip title="refactor">}}**Refactoring** is when we change _how_ our code is structured, without changing _what_ it does. Even though we have changed our code, it does exactly the same thing it did before. {{</tooltip>}}. Find your code that creates the film cards and adds them to the page. Move your code into a function called `render`:

```js
const films = [
  // You have this array from before.
];

function createFilmCard(filmData) {
  // You should have an implementation of this function from before.
}

function render() {
  const filmCards = films.map(createFilmCard);
  document.body.append(...filmCards);
}
```

We're missing one thing: We're never calling our `render` function! Call your `render` function after you define it:

```js
const films = [
  // You have this array from last week.
];

function createFilmCard(filmData) {
  // You should have an implementation of this function from last week.
}

function render() {
  const filmCards = films.map(createFilmCard);
  document.body.append(...filmCards);
}

render();
```

Your application should now work exactly the same as it did before. Because we moved our code into a function, this means we can call that function again if we need to, for instance when someone searches for something.

We saw this same pattern when we made the character limit component. We called the same function on page load, and when someone typed something.

### Storing our state somewhere

Up until now, we had a variable called `films`, and we created some cards based on that variable.

Let's move this `films` variable inside an object called `state`, to make it clear to us what the state is in our application.

```js
const state = {
  films: [
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
  ],
};
```

Each time we need to store more information we should think: Is this a piece of state, or is this something we're deriving from existing state? Whenever something in our state changes, we will tell our UI just to show "whatever is in the state" by calling the `render` function. In this way, we simplify our UI code by making it a function of the state.

{{<note type="tip" title="Tip">}}
We don't _need_ to store our state in a variable called `state`. It was _already_ state when it was called `films`. But naming this variable `state` can help us to think about it more clearly.
{{</note>}}

Make sure to update any references to the `films` variable you may have had before to instead reference `state.films`.

This is another refactoring: we didn't change what our application does, we just moved a variable.
