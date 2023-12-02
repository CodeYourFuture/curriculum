+++
title = 'Introducing new state'
headless = true
time = 30
facilitation = false
emoji= '🧩'
[objectives]
    1=''
+++

We are introducing a new feature: being able to search for films.

We have already identified that this introduces one new element of state - the search term someone has asked for.

Let's add it to our state object:

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
  searchTerm: "",
};
```

We needed to pick an initial value for this state. We picked the empty string, because when someone first loads the page, they haven't searched for anything.

When someone types in the search box, we will change the value of this state, and re-render the page.

But - we could pick any initial value. This actually allows us to finish implementing our render function _before we even introduce a search box into the page_. In real life, we probably want our `searchTerm` state to be empty, but we can use different values while we're developing if we want.

We can make the page look like someone searched for "Pirate", even before we introduce a search box.

This is because we have split up our problem into three parts:
1. Identify what state we have.
2. Define how to render the page based on that state.
3. Change state (perhaps in response to some user action).

Let's try making our render function work for the search term "Pirate".

Change the initial value of the `searchTerm` field of the `state` object to "Pirate":

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
  searchTerm: "Pirate",
};
```

We expect, if someone is searching for "Pirate", to only show films whose title contains the word Pirate.