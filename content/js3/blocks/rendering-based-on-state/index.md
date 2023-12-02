+++
title = 'Rendering based on state'
headless = true
time = 45
facilitation = false
emoji= '🧩'
[objectives]
    1='Filter films based on search terms'
    2='Render just the filtered films'
+++

For now, we have set the initial value of the `searchTerm` state to "Pirate".

This means that our render function should only create cards for films which contain the word "Pirate" in their title.

But right now, our render function creates cards for _all_ of the films.

In our render function, we will need to take our list of all films, and filter it down to just a list of films that match our search term.

This does not require us to introduce new state - we can derive this filtered list from our existing state.

### Filter function

To filter we can use the higher order array function [`.filter()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) to return a new array of films that include the search term:

```js
const filteredFilms = state.films.filter((film) => film.title.includes(state.searchTerm));
```

We can change our render function to _always_ do this, because if `searchTerm` is empty, this filter function will return all of the films:

```js
function render() {
  const filteredFilms = state.films.filter((film) => film.title.includes(state.searchTerm));
  const filmCards = filteredFilms.map(createFilmCard);
  document.body.append(...filmCards);
}
```

If we open our page, we should now only see cards for films containing "Pirate" in their title.

If we change the initial value of `state.searchTerm` back to the empty string and open the page again, we should see cards for all of the films.

We have now solved two of our three problems:
- [x] Identify what state we have.
- [x] Define how to render the page based on that state.
- [ ] Change state (perhaps in response to some user action).

### Making our search more user friendly

{{<note type="tip" title="Things to consider">}}
Users don't always type perfectly. How will you match their typing to the film titles? What if they type in all caps? What is the simplest thing that could possibly work?
{{</note>}}

One of the nice things about breaking down the problem like this is that it allows us to change rendering _without_ needing to interact with the page.

If we want to improve our search functionality (e.g. to make it work if you searched for PIRATES in all-caps), we can set the initial value of `state.searchTerm` to `"PIRATES"` and make changes to our `render` function. Then every time we open the page, it will be like we searched for "PIRATES".

This can be a lot quicker than having to refresh the page and type in "PIRATES" in the search box every time we make a change want to see if our search works.

{{<note type="exercise" title="Exercise: Make search more user friendly">}}
Try to make your render function work even if someone searched for "pirates" or "PIRATES".
{{</note>}}