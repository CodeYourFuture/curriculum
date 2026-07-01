# Wordle CLI Workshop

This is a workshop where we, as a class, build a Wordle CLI clone in Node JS.

## Learning Objectives

```objectives
- [ ] Build a fully playable game from scratch, starting with nothing but an idea
- [ ] Locate and make use of NPM dependencies in a project
- [ ] Step through the process of breaking down a high-level idea into smaller, manageable units of functionality
- [ ] Get inspired to take ideas and build something cool
```

## Requirements

- Split the cohort into groups of 3 to 4 people
- We start with an energiser where we play an actual game of Wordle (https://www.nytimes.com/games/wordle/index.html) - sourcing guesses from the class, and hopefully learning how the game works in the process
- Ensure the class understands the rules of the game first
- Then we start building out our Wordle CLI clone from scratch
    - Reference the steps from this README: https://github.com/CodeYourFuture/wordle-clone-example#readme This example solution is in a private repo so you won't be be able to see it if you are not a member of the CodeYourFuture organization on GitHub. The sample code can be given to the trainees after the session has finished.
    - Steps 1 & 2 can be done together as a class. All the code here should be sourced from the trainees themselves - this is their implementation. However, the volunteer who is running the workshop can ensure the high-level problem is broken down into these smaller functions: getRandomWord, getGuess and showWordWithHighlights
    - Step 3 (getRandomWord) can be done in groups
    - Step 4 (getGuess) can be done in groups - but it might be useful for a volunteer to suggest which NPM dependency we could use
    - Step 5 (showWordWithHighlights) can be done in groups - again, we can suggest which NPM dependency to use
    - Step 6 (improving the user experience) could possibly be done as a class together

## Acceptance Criteria

_Given_ the user starts a new Wordle game
_When_ the app is initialized
_Then_ a random 5 letter word should be selected as the target word

_Given_ the target word has been selected
_When_ the user enters a 5 letter guess
_Then_ the guess should be validated
_And_ each letter should be marked as green, yellow or gray based on whether it matches the target word

_Given_ a valid 5 letter guess has been entered
_When_ the guess does not match the target word
_Then_ each letter should be marked as follows:
- Green if the letter is in the correct position
- Yellow if the letter is in the target but not in the correct position
- Gray if the letter is not in the target word

_Given_ a guess has been submitted
_When_ the guess matches the target word
_Then_ a message should indicate the user has won the game

_Given_ guesses have been submitted
_When_ the user reaches 6 guesses without matching the target word
_Then_ a message should indicate the user has lost and show the target word
- I understand the code I have written
