# Pokedex 2

Stepping through the Pokedex app, we will learn about events and interactivity.

## Learning Objectives

```objectives
- [ ] Attach event handlers to React components
- [ ] Pass function references between components
- [ ] Update state based on events and user interactions
- [ ] Render lists from state
```

## Requirements

This workshop is to practice building a React app from scratch. You will be building a Pokedex app that displays information about Pokemon. It's a staged workshop which can be run over multiple weeks. This stage focuses on events, which are covered in the prep work for this sprint. If you haven't done the prep or the previous workshop, you will find this workshop hard to understand.

## Handling events

In this exercise we will extend our `Logo` component to log to the console when clicking on the image. Split into your React groups. Set a whole [class timer for 10 minutes](https://www.google.com/search?q=timer+10+minutes).

<!--{{<note type="activity" title="Exercise 1">}}-->

1. Open your `pokedex` React application and open the `Logo.js` file.
2. Add a function named `logWhenClicked` within the `Logo` component.
3. In the `logWhenClicked` function, `console.log` a message (it doesn't matter what the message is).
4. Add an `onClick` handler to the `<img>` that will call `logWhenClicked`. (Hint: look at the `ClickLogger` component above).
5. In your web browser, try clicking on the logo image. What do you see in the JavaScript console?
6. Discuss what would happen if you changed your code to `onClick={logWhenClicked()}`. Can you explain why?

<!--{{</note>}}-->

## Passing functions as props

In this exercise, we'll move the `logWhenClicked` function in the `Logo` component to the `App` component. Then we'll make `App` pass those variables as props to the sub-components. Your app should still look the same as before. Set a whole [class timer for 10 minutes](https://www.google.com/search?q=timer+10+minutes).

<!--{{<note type="activity" title="Exercise 2">}}-->

1. Open the `pokedex` React application and open the `Logo.js` file.
2. Copy and paste the `logWhenClicked` function from the `Logo` component to the `App` component.
3. Pass the `logWhenClicked` function **reference** as a prop to the `Logo` component. (Hint: look at the `ClickLoggerApp` component above for an example).
4. In the `Logo` component change the `onClick` prop so that it passes `props.handleClick`. (Hint: look at the `FancyButton` component above for an example). |
5. Discuss what you think will happen when you click the logo image now. Predict and then test. Can you explain why?

<!--{{</note>}}-->

## useState

In this exercise, we'll add a button to the `CaughtPokemon` component which adds one to the number of Pokemon you have caught. Set a whole [class timer for 20 minutes](https://www.google.com/search?q=timer+20+minutes).

<!--{{<note type="activity" title="Exercise 3">}}-->

1. Open the `pokedex` React application and open the `CaughtPokemon.js` file.
2. Create a new state variable with `useState`. It should be named `caught` and be initialised to `0`
3. Within the JSX, there should be a "hard-coded" number 0. Replace it with your new `caught` state.
4. Add a button to the component with an `onClick` handler that calls a function called `catchPokemon`.
5. Create the `catchPokemon` function and have it update the `caught` state so that it is increased by 1 on each click. <details><summary>Click here if you are stuck.</summary>You will need to call the set state function (the 2nd item in the `useState` array) with `caught + 1`.</details>
6. Write down the things that will happen when you click the button. Compare your list with your group and discuss.

<!--{{</note>}}-->

<details><summary>Hint inside.</summary>The state will be updated to be the current state + 1. React is notified that our state has changed, so it re-renders. When rendering, the current state will be different and so React updates the DOM.</details>

## Showing a list of Pokemon

In this exercise, we'll change the `CaughtPokemon` component to show a list of Pokemon that we have caught instead of a number. Set a whole [class timer for 15 minutes](https://www.google.com/search?q=timer+15+minutes).

<!--{{<note type="activity" title="Exercise 4">}}-->

1. Open the `pokedex` React application and open the `CaughtPokemon.js` file.
2. Change the `useState` to be initialised to an empty array (`[]`)
3. There will now be a bug in your app! We don't see how many Pokemon we have caught. Discuss with another trainee what you think the problem is.
4. Change the JSX to instead render `caught.length`. Does this fix the bug?
5. Let's now show the names of the Pokemon we have caught. Render a `<ul>` element within the component. Then use the `map` method to loop through each item in the `caught` array and render it in an `<li>` element.
6. Change the `catchPokemon` function to add a new Pokemon (it doesn't matter which one) onto the `caught` array. (Hint: use the `concat` method.)

<!--{{</note>}}-->

**(STRETCH GOAL)** Generate a random Pokemon each time you click the button <details><summary>Hint inside</summary>[This StackOverflow post](https://stackoverflow.com/questions/4550505/getting-a-random-value-from-a-javascript-array) may be helpful.</details>

## Acceptance Criteria

- The logo click handler is passed from `App` as a prop function
- `CaughtPokemon` tracks a caught state variable with `useState`
- Clicking catch adds a Pokemon name to the caught array
- Caught Pokemon names are rendered in a list

Note: inspiration for this workshop came from [Kent Dodd's Beginner React course](https://egghead.io/courses/the-beginner-s-guide-to-react)
