# Pokedex 4

Stepping through the Pokedex app, we will learn about routing with [React Router](https://v5.reactrouter.com/web/guides/quick-start). This workshop takes at minimum 30 minutes.

## Learning Objectives

```objectives
- [ ] Fetch data from an API and render it
- [ ] Update state on input changes
- [ ] Conditionally render UI based on state
- [ ] Control form inputs with state
```

## Requirements

This workshop is to practice building a React app from scratch. By now, you will have built an application that displays information about Pokemon. It's a staged workshop which can be run over multiple weeks. This stage focuses on creating multi-page apps with routing, which is covered in the prep work for this sprint. If you haven't done the prep or the previous workshops, you will find this workshop hard to understand.

## Routing

> https://v5.reactrouter.com/web/example/basic

React Router provides some default React components that you can use to enable routing in your application. Examine the sandbox above. First, notice the top level `<BrowserRouter>` component which wraps everything else. Then, the `<Routes>` component which will choose one `<Route>` based on the current path. Each route is defined with the `<Route>` component which maps a path (defined with the `path` props) to a React component. You can pass an entire component including its properties to the `element={...}` prop. Finally, the `Link` component can be used to create links to navigate to different routes.

## Pokedex Multi-Page App

Open the `pokedex` React application. Instead of displaying all your components in the same page, we will use React Router to define different pages in the `pokedex` application. Set a whole [class timer for 20 minutes](https://www.google.com/search?q=timer+20+minutes).

<!--{{<note type="activity" title="Exercise 1 (20m)">}}-->

1. In the terminal, install React Router with `npm install --save react-router-dom`.
2. Open `src/App.js` and import BrowserRouter, Route, Routes and Link components from React Router (hint: `import { BrowserRouter, Routes, Route, Link } from "react-router-dom";`)
3. Wrap all the components in the `render` method in the `<BrowserRouter>` component.
4. In the following, we will have `CaughtPokemon` and `BestPokemon` displayed with different route. But first, let's create some links to navigate to different pages. Still in the `<BrowserRouter>` in the `render` method of `src/App.js`, use the `Link` component to create 2 links: one to navigate to the URL `/best-pokemon` and another one to navigate to `/caught-pokemon` (hint: `<Link to="/best-pokemon">Best Pokemon</Link>`).
5. Open the `pokedex` in your browser and verify that you can see 2 links on the page. When clicking on each of these links, the URL in your browser address bar should change (but nothing will change on the screen yet!).
6. Create a `<Routes></Routes>` component inside your `<BrowserRouter>`. This is where we will nest our `<Route>` components. It will display one of them at a time depending on the current URL path.
7. Now let's define the routes to map a path to a React component. First, create a route to map `/best-pokemon` to the `BestPokemon` component. Then, use another route to map `/caught-pokemon` to the `CaughtPokemon` component (Hint: move the component inside the `element` key, as in `<Route element={...} path="/my-path" />`).
8. Open the `pokedex` in your browser and verify that when clicking on each link, `BestPokemon` and `CaughtPokemon` are rendered accordingly.

<!--{{</note>}}-->

## URL parameters

> https://v5.reactrouter.com/web/example/url-params

In this exercise, we will create a new component to display a Pokemon information. The Pokemon name will be passed through the URL and displayed on the screen. Set a whole [class timer for 10 minutes](https://www.google.com/search?q=timer+10+minutes).

<!--{{<note type="activity" title="Exercise 2 (10m)">}}-->

1. Create a new component `PokemonInfo`.
2. In `src/App.js`, create a new route which maps the path `/pokemon/:name` to the previously created component `PokemonInfo` (hint: `<Route path="/pokemon/:name" element={<PokemonInfo />} />`).
3. In the `render` method of `PokemonInfo` component, display the name of the Pokemon which is passed in the URL parameter (hint: use the hook `useParams()` and extract `name` from the object it returns ).
4. Open the `pokedex` in your browser and try several URLs (such as `http://localhost:3000/pokemon/Pikachu` and see if the Pokemon name is displayed accordingly on your screen.

<!--{{</note>}}-->

## Stretch goal

If you have finished early:

Instead of passing the name of the Pokemon in the URL parameter, now pass an ID. The ID passed correspond to the ID of the Pokemon in the Poke API. For example, the ID 1 corresponds to the Pokemon Bulbasaur (https://pokeapi.co/api/v2/pokemon-species/1/). In the `PokemonInfo` component, use the Pokemon ID from the URL to load the corresponding Pokemon data from the Poke API and display the following Pokemon information on the screen: name, color.name, shape.name, base_happiness and capture_rate.

## Acceptance Criteria

- Fetches and displays a Pokemon's moves
- Updates moves when a new Pokemon is selected
- Renders a user-entered city name
- Allows user to enter a caught Pokemon name

Note: inspiration for this workshop came from [Kent Dodd's Beginner React course](https://egghead.io/courses/the-beginner-s-guide-to-react)
