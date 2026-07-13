+++
title = "Breaking down a project to work in parallel"
time = 50
objectives = [
  "Explain how agreeing a shared data shape and interfaces lets a team work in parallel.",
  "Break a small requirement into tasks a team can work on in parallel.",
  "Identify dependencies between tasks and use agreed interfaces to unblock them.",
]
[build]
  render = "never"
  list = "local"
  publishResources = false
+++

When a team builds a project together, we break the big job into smaller tasks. But breaking work into small tasks is only half of it. We also have to agree how those tasks fit together, so people can work on them at the same time without blocking each other.

Today we will look at how this worked on a project you have already done, learn the steps to do it on purpose, and then practise on a new one.

## Part 1: How Tic-Tac-Toe let you work in parallel

In the terminal Tic-Tac-Toe project, three people worked at the same time, each on a different file:

- `board-printer.js`
- `move-maker.js`
- `status-checker.js`

and `play.js` tied everything together.

Why were you able to work on these at the same time, without waiting for each other? Because two things were agreed **before** anyone started writing code.

1. The shape of the data. The board is always a 3 by 3 array of arrays, holding `'X'`, `'O'` or `'_'`:

```js
const board = [
  ["X", "_", "_"],
  ["_", "X", "_"],
  ["O", "O", "X"],
];
```

Every function in every file expects the board to look exactly like this.

2. The {{<tooltip title="function signatures">}}A function's signature is its name, the parameters it takes, and what it returns. If two people agree a signature, they can each rely on it without seeing the other's code.{{</tooltip>}}. What each function is called, what it takes, and what it returns:

- `printBoard(board)`
- `makeMove(board, move, player)` returns `true` or `false`
- `isGameOver(board)` returns `true` or `false`

Once these are agreed, the person writing `printBoard` doesn't need to wait for the person writing `makeMove`. They both already know what a board looks like and what their own function must do.

This is the whole trick: **agreeing the shape of the data and the interfaces up front is what lets a team work in parallel.**

{{<note type="exercise" title="Spot the agreements">}}

1. Set a timer for {{<timer>}}5{{</timer>}}.
2. As a group, look back at the Tic-Tac-Toe files and find:
   - Where is the shape of the board written down, so everyone agreed on it?
   - Pick two of the files. What did each person need to know about the other's function to work without waiting for them?

{{</note>}}

## Part 2: How to break a project down for parallel work

Tic-Tac-Toe was already broken down for you. Now let's make the steps explicit, so you can do it yourselves. Whenever a team takes on a project:

1. **Understand the requirement.** Be clear on what the finished thing must do.
2. **Agree the shared data and interfaces first.** Decide the shape of the data everyone will pass around (like the board), and the signatures of the functions that connect the pieces. This is the most important step: it is what lets people work without waiting for each other.
3. **Split the work into tasks.** Give each person a piece they own: a file, a function, or a component.
4. **Find the dependencies and order them.** Some tasks need something from another task. Arrange them so nobody is stuck waiting.

### Dependencies don't have to block you

Even with a good breakdown, some tasks depend on others. In Tic-Tac-Toe, `status-checker.js` uses a function called `checkIfNoMovesLeft`, which lives in `board-printer.js`. That is a dependency: one task needs something from another.

But notice you were _not_ blocked by it. Because the name and behaviour of `checkIfNoMovesLeft(board)` were agreed, the person writing `status-checker.js` could rely on it before it was even finished. Agreeing the interface breaks the block.

How do you carry on before the real function exists? You **stub** it: write a placeholder that matches the agreed signature and returns a fixed sample value, so your code can be built and tested before the real version is written. The Tic-Tac-Toe files started exactly like this: empty functions with agreed signatures. In the simplest case you can even **hardcode** a value (write a fixed value straight into your code) to work against, and swap in the real thing later.

## Part 3: Break one down yourselves

Now practise the four steps on a new requirement.

> **Requirement.** Your group is building a small app that shows a to-do list on the page. It must:
>
> - let a user add a to-do,
> - show all the current to-dos.
>
> The to-dos are held in a global variable while the app is running, so it is fine if the list resets when the page is reloaded.

{{<note type="exercise" title="1. Brainstorm the tasks">}}

1. Set a timer for {{<timer>}}5{{</timer>}}.
2. Individually, write down all the tasks you think are needed to build this.

{{</note>}}

{{<note type="exercise" title="2. Agree the interfaces and split the work">}}

1. Set a timer for {{<timer>}}20{{</timer>}}.
2. As a group:
   - Agree the shape of a single to-do item. What keys does the object have?
   - Agree the shape of the global variable that holds all the to-dos. Is it an array? An object?
   - Split the tasks so two or three of you could work at the same time. Who owns what?
   - Which tasks depend on another? How does agreeing the data format let you work on them in parallel anyway?
   - If one task is waiting on another, how could you stub or hardcode a value to keep going? (For example, one of you could put a sample to-do in the global variable to display, while the other builds the add feature.)

{{</note>}}

{{<note type="exercise" title="3. Share back">}}

1. Set a timer for {{<timer>}}10{{</timer>}}.
2. Each group shares their breakdown. As a class, discuss: where did agreeing the data format up front let you unblock parallel work?

{{</note>}}

## Takeaway

Before splitting work across a team, agree the shared data shapes and the interfaces between the pieces. Then everyone can work in parallel, and dependencies stop being blockers.

<details>

<summary>Tips for volunteers</summary>

The insight we're driving at is that **agreeing a data format and interfaces in advance is what makes parallel work possible.** Tic-Tac-Toe already did this for the trainees (the board shape and the function signatures). In Part 3 the goal is for them to do it themselves: the key move is agreeing the shape of a to-do item and the global variable that holds the list _before_ splitting the work.

</details>
