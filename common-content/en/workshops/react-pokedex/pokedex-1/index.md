# Pokedex 1

Stepping through the Pokedex app, we will learn about React components, props, and state. This workshop takes at minimum 90 minutes.

## Learning Objectives

```objectives
- [ ] Build basic React components
- [ ] Pass data between components using props
- [ ] Render lists in React and use keys properly
- [ ] Split code into separate files and import/export components
```

## Requirements

This workshop is to practice building a React app from scratch. You will be building a Pokedex app that displays information about Pokemon. It's a staged workshop which can be run over multiple weeks. This stage focuses on the basics of React components, props, and state, which are covered in the prep work for this sprint. If you haven't done the prep, you've made an error in judgement. You will find this workshop hard to understand.

## My first Component

In this exercise we replace the placeholder React app found in [the workshop-code repository](https://github.com/Ara225/workshop-code) with our own. Set a whole [class timer for 10 minutes](https://www.google.com/search?q=timer+10+minutes).

<!--{{<note type="activity" title="Exercise 1">}}-->

1. First off, clone the [the workshop-code repository](https://github.com/Ara225/workshop-code) if you haven't already cloned it
2. Head to the `react-pokedex` folder of your `workshop-code` repo and start the app using `npm start`.
3. In the `pokedex` React app that you just created, open the `src/App.js` file.
4. Delete everything in the file except the line containing `export default App`. You should see an error in your terminal and in your web browser - don't panic! We're going to remake the `App` component ourselves.
5. Import the React variable from the React package.
6. Create a function named `App`, which will be our component.
7. Within the `App` function, return a `<h1>` element with the text "Welcome to the Pokedex". What do you see in your web browser?
8. Create a `<div>` element that _wraps around_ the `<h1>` you just created.
9. Below the `<h1>` element (but within the `<div>`), create an `<img>` element. Then make its `src` attribute equal to `https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png`. What do you expect to see in your web browser?
10. Now create a `<header>` element to wrap both the `<h1>` element **and** the `<img>` element.

<!--{{</note>}}-->

## Breaking down the App component

In this exercise, we will split out a new `Logo` component from the `App` component. And then we'll add a new `BestPokemon` component. Set a whole [class timer for 10 minutes](https://www.google.com/search?q=timer+10+minutes).

<!--{{<note type="activity" title="Exercise 2">}}-->

1. In your `pokedex` React app, open the `src/App.js` file.
2. Create a new function named `Logo`.
3. Copy the `<header>` element and its contents and paste it into the `Logo` component.
4. Replace the `<header>` element in the `App` component with the new `Logo` component.
5. Create a new component function named `BestPokemon` and return a `<p>` element with some text saying which is your favorite Pokemon (e.g. "My favorite Pokemon is Squirtle").
6. _Render_ your new `BestPokemon` component below the `Logo` component within the `App` component.

<!--{{</note>}}-->

## Composing components, rendering lists with keys

In this exercise, we'll change the `Logo` component to use a variable for the app name. Then we'll add a new component `CaughtPokemon` which displays today's date. And finally we'll make `BestPokemon` show a list of abilities. Set a whole [class timer for 20 minutes](https://www.google.com/search?q=timer+20+minutes).

<!--{{<note type="activity" title="Exercise 3">}}-->

1. Using the `pokedex` React app that you created earlier, open the `src/App.js` file.
2. Inside the `Logo` component create a new variable called `appName` and assign it to `"[YOUR_NAME]'s Pokedex"`.
3. Now replace the hard-coded app name with `{appName}`. What do you see in your web browser? What would you do if you wanted to change the app name?
4. Create a new component named `CaughtPokemon`. Within this component return a `<p>` tag with the text "Caught 0 Pokemon on" (we're going to fill in today's date in the next step).
5. Create a variable named `date` within the `CaughtPokemon` component, and assign it today's date (hint: `new Date().toLocaleDateString()`). Finally, render the `date` variable after the text "Caught 0 Pokemon on".
6. Render the `CaughtPokemon` component within the `App` component (below `BestPokemon`).
7. Within the `BestPokemon` component, create a variable named `abilities` and assign it to an array with some Pokemon abilities (e.g. `['Anticipation', 'Adaptability', 'Run-Away']`).
8. Change the `BestPokemon` component to return a `<div>` element with the existing `<p>` element inside it. Then add a `<ul>` element underneath the `<p>` element.
9. Now use the `.map()` method on the `abilities` variable to loop over each name and return a `<li>` element for each within the `<ul>` element.

<!--{{</note>}}-->

You may have noticed that we are now seeing a red error message in the Dev Tools: `Warning: Each child in a list should have a unique "key" prop.`. What did you learn about this in your prep work? How can you fix it?

## Importing and exporting components

In this exercise, we'll split the Pokedex app into separate files. It should still look the same in your browser as before. Set a whole [class timer for 10 minutes](https://www.google.com/search?q=timer+10+minutes).

<!--{{<note type="activity" title="Exercise 4">}}-->

1. Open the `pokedex` React app that you created earlier.
2. Create a new file within the `src` directory named `Logo.js`.
3. Copy and paste the `Logo` component from `App.js` into `Logo.js`.
4. Remember to add `import React from 'react'` at the top of `Logo.js`.
5. Export the `Logo` component from `Logo.js`.
6. Delete the old `Logo` component from `App.js`.
7. Import the `Logo` component into `App.js` .
8. Repeat this process with the `BestPokemon` and `CaughtPokemon` components. What do you think the files should be called?

<!--{{</note>}}-->

## Props

In this exercise, we'll move the variables in `Logo`, `BestPokemon` and `CaughtPokemon` to the `App` component. Then we'll make `App` pass those variables as props to the sub-components. Your app should still look the same in your browser as before. Set a whole [class timer for 15 minutes](https://www.google.com/search?q=timer+15+minutes).

<!--{{<note type="activity" title="Exercise 5">}}-->

1. Using the `pokedex` React app that you created earlier, open the `App.js` file.
2. Pass a prop `appName="Pokedex"` to the `Logo` component.
3. Now open the `Logo.js` file.
4. Delete the `appName` variable. What do you see in your web browser? Why?
5. Change the `Logo` function to access the first argument and call it `props`. Use `console.log` to inspect the `props` variable.
6. Change the usage of `appName` in the `<h1>` to be `props.appName` instead. Does this fix the problem? Why?
7. Now open the `BestPokemon.js` file.
8. Copy the `abilities` variable and then delete it from `BestPokemon.js`.
9. Paste the `abilities` variable into `App.js`.
10. Pass the `abilities` variable as a prop to `BestPokemon` from `App.js`.
11. In the `BestPokemon.js` file replace the existing usage of `abilities` with the `abilities` **prop**. You should still see the Pokemon ability names in your web browser.
12. **(STRETCH GOAL)** Repeat the process with the `date` variable in the `CaughtPokemon.js` file.

<!--{{</note>}}-->

## Acceptance Criteria

- Components are created properly and render without errors
- The Logo, BestPokemon, and CaughtPokemon components are split into separate files
- Variables are moved from child components into App and passed back down as props
- Lists are rendered using .map() and have proper keys

Note: inspiration for this workshop came from [Kent Dodd's Beginner React course](https://egghead.io/courses/the-beginner-s-guide-to-react)
