# Pokedex 3

Stepping through the Pokedex app, we will learn about fetching data, useEffect, and forms. This workshop takes at minimum 90 minutes.

## Learning Objectives

```objectives
- [ ] Fetch data from an API and render it
- [ ] Update state on input changes
- [ ] Conditionally render UI based on state
- [ ] Control form inputs with state
```

## Requirements

This workshop is to practice building a React app from scratch. You will be building a Pokedex app that displays information about Pokemon. It's a staged workshop which can be run over multiple weeks. This stage focuses on fetching data, Effects, and forms, which are covered in the prep work for this sprint. If you haven't done the prep or the previous workshop, you will find this workshop hard to understand.

## Fetching data

In this exercise, we'll fetch some data about a Pokemon's moves from the Pokemon API and render it a component. Split into your React groups. Set a whole [class timer for 20 minutes](https://www.google.com/search?q=timer+20+minutes).

<!--{{<note type="activity" title="Exercise 1 (20m)">}}-->

1. Open the `pokedex` React application again.
2. Create a new file `src/PokemonMoves.js`, and copy/paste the code from [this CodeSandbox](https://codesandbox.io/s/pokemonmoves-useeffect-exercise-starting-point-f1mwm?file=/src/PokemonMoves.js).
3. Render the `PokemonMoves` component inside the `App` component (underneath `CaughtPokemon`).
4. Take a few minutes to read the code in the new `PokemonMoves` component. Discuss with another trainee why you think it doesn't work.
5. Create a new state variable called `pokemonData` and initialise it to `null`. <details><summary>Click here if you are stuck.</summary>Check last week's lesson for a reminder on creating state variables.</details>
6. Now add a `useEffect` call, but leave the callback function empty for now. **Make sure you remember to add the empty array after the callback function**.
7. Inside the `useEffect` callback, call the `fetch` function with this URL: `https://pokeapi.co/api/v2/pokemon/1/`.
8. Add a `.then` handler into the `fetch` function (remember this needs to come immediately after the `fetch` call) which converts the response from JSON (hint: `.then(res => res.json())`).
9. Add a second `.then` handler after the one we just added, where the callback function will receive an argument called `data`.
10. Within the second `.then` callback function, log out the data that we just received (hint: `console.log(data)`). Inspect the data in the dev tools console. Is there any interesting data? (Hint: think about what the component is trying to render).
11. Still within the second `.then` callback, set the `pokemonData` state to be the `data` object we received from the API.
12. What happens in your browser? Do you understand why? If not, discuss it with another trainee. If you are both stuck, ask a mentor.

<!--{{</note>}}-->

## Conditional rendering

In this exercise, we'll change the `PokemonMoves` component to use a ternary operator. Your app should still look the same in your browser as before. Set a whole [class timer for 10 minutes](https://www.google.com/search?q=timer+10+minutes).

<!--{{<note type="activity" title="Exercise 2 (10m)">}}-->

1. Open the `pokedex` application and the `src/PokemonMoves.js` file.
2. Change the `if` / `else` statement in your JSX to use the ternary operator (`condition ? outputIfTrue : outputIfFalse`) instead.

<!--{{</note>}}-->

## fetch Moves

In this exercise, we'll add some buttons which allow you to select which Pokemon's moves we will fetch from the Pokemon API. Set a whole [class timer for 15 minutes](https://www.google.com/search?q=timer+15+minutes).

<!--{{<note type="activity" title="Exercise 3 (15m)">}}-->

1. Open the `pokedex` React application.
2. Create a new file `src/PokemonMovesSelector.js`. Copy/paste the code from [this CodeSandbox](https://codesandbox.io/s/pokemonmovesselector-exercise-starting-point-wt5d0) into the new file.
3. Open `src/App.js` and replace the `PokemonMoves` component with the `PokemonMovesSelector` component (remember to update the `import` too!)
4. Take a few minutes to read what the `PokemonMovesSelector` component does. If you have questions, ask a Teaching Assistant to help. We **won't** need to make any more changes to this component.
5. Open the `PokemonMoves` component again. Change the URL to use backticks (`` `...` ``) instead of double-quotes (`"..."`). Then replace the hard-coded number 1 with `${props.pokemonId}`. What will this do? <details><summary>Click here if you don't know</summary>The URL will contain the <code>pokemonId</code> instead of always fetching the Pokemon with id of 1</details>
6. Open your browser and find where the `PokemonMovesSelector` component is rendered. **Before you click the buttons**, think about what you expect will happen. Then click the "Fetch Bulbasaur" button to find out what actually happens.
7. Refresh the page. What happens now if you click the "Fetch Bulbasaur" button, then click the "Fetch Charmander" button? Is this what you expected? Discuss with another trainee why this happens.
8. Fix the bug by adding `props.pokemonId` to the `useEffect` dependencies array in `PokemonMoves`. Remember that you can test if the bug still happens by refreshing the page, clicking one of the buttons, then the other button.

<!--{{</note>}}-->

## Working with forms

In this exercise, we'll create a new component where you can type in the name of a Pokemon city and see it on screen. Set a whole [class timer for 15 minutes](https://www.google.com/search?q=timer+15+minutes).

<!--{{<note type="activity" title="Exercise 4">}}-->

1. Open the `pokedex` React application.
2. Create a new file `src/PokemonCity.js`. Copy/paste the code from [this CodeSandbox](https://codesandbox.io/s/pokemon-city-exercise-starting-point-6wivm?file=/src/PokemonCity.js) into the new file.
3. Open the `src/App.js` file and render the new `PokemonCity` component (underneath `PokemonMovesSelector`).
4. Take a few minutes to understand what the `PokemonCity` component does.
5. Add an `<input type="text" />` element above the `<p>` element.
6. Set the `value` attribute of the `<input>` to the `city` state.
7. Create a function within the component called `updateCity`. Pass this function to the `onChange` event handler.
8. Change the `updateCity` component so that it has a parameter named `event`.
9. Add a `console.log` to inspect the value of `event.target.value`. What happens when you type in the input?
10. Using `setCity`, update the city state to what was typed in the input box.

<!--{{</note>}}-->

## Forms with multiple inputs

In this exercise, we will change the `CaughtPokemon` component so that you can type in the name of a Pokemon that you caught and it will show in the list. Set a whole [class timer for 15 minutes](https://www.google.com/search?q=timer+15+minutes).

<!--{{<note type="activity" title="Exercise 5">}}-->

1. Open the `pokedex` React application again and open the `src/CaughtPokemon.js` file.
2. Render an `<input>` before the `<button>` (hint: `<input type="text" />`).
3. Create a new state variable called `pokemonNameInput` and initialise to an empty string (`""`).
4. Add a `value` attribute to the `<input>` which is set to the `pokemonNameInput` state variable. (Hint: `value={pokemonNameInput}`)
5. Create a new `handleInputChange` function within the component.
6. Add a `onChange` handler to the `<input>` that will call `handleInputChange`.
7. Add a parameter called `event` to the `handleInputChange` function. Set the `pokemonNameInput` state variable to `event.target.value`. Try typing in the `<input>` again. What happens now?
8. Change the `catchPokemon` function to add the `pokemonNameInput` state to the `caught` array (hint: change the value that we are passing to the `concat` method)
9. Open your browser, type a Pokemon name into the `<input>` and click on the "Catch Pokemon" button. Do you see your new Pokemon being added to the list?
10. Empty the `<input>` after clicking on the button. To do this, set the state of `pokemonNameInput` to an empty string `""` after we have added it to the `caught` array in the `catchPokemon` function.

<!--{{</note>}}-->

**(STRETCH GOAL)** Make sure the user cannot add a Pokemon to the `caught` state if the value of `pokemonNameInput` state is empty.

## Acceptance Criteria

- Fetches and displays a Pokemon's moves
- Updates moves when a new Pokemon is selected
- Renders a user-entered city name
- Allows user to enter a caught Pokemon name

Note: inspiration for this workshop came from [Kent Dodd's Beginner React course](https://egghead.io/courses/the-beginner-s-guide-to-react)
