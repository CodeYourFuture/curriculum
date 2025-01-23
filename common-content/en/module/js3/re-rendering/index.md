+++
title = 'Re-rendering'

time = 10
emoji= '🔁'
[objectives]
    1='Re-render a page based on user input'
    2="Debug why a page isn't re-rendering as expected"
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

Now that we've shown we can log the search text, we can set the new value of the `searchTerm` state, and re-render the page.

We should have a page like this:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Film View</title>
  </head>
  <body>
    <label>Search <input type="text" id="search" /></label>
    <template id="film-card">
      <section>
        <h3>Film title</h3>
        <p data-director>Director</p>
        <time>Duration</time>
        <data data-certificate>Certificate</data>
      </section>
    </template>
    <script>
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

      const template = document.getElementById("film-card");
      const createFilmCard = (film) => {
        const card = template.content.cloneNode(true);
        // Now we are querying our cloned fragment, not the entire page.
        card.querySelector("h3").textContent = film.title;
        card.querySelector(
          "[data-director]"
        ).textContent = `Director: ${film.director}`;
        card.querySelector("time").textContent = `${film.duration} minutes`;
        card.querySelector(
          "[data-certificate]"
        ).textContent = `Certificate: ${film.certificate}`;
        // Return the card, rather than directly appending it to the page
        return card;
      };

      function render() {
        const filteredFilms = state.films.filter((film) =>
          film.title.includes(state.searchTerm)
        );
        const filmCards = filteredFilms.map(createFilmCard);
        document.body.append(...filmCards);
      }

      const searchBox = document.getElementById("search");

      searchBox.addEventListener("input", handleSearchInput);

      function handleSearchInput(event) {
        const searchTerm = event.target.value;
        console.log(searchTerm);
      }

      render();
    </script>
  </body>
</html>
```

We want to change our search input handler to update `state.searchTerm` and call `render()` again.

Implement this and try searching. What happens? Play computer to work out why what's happening isn't what we expected.
