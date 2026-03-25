+++
title = "CV Matching Game"
+++

## Business problem

CV Personal Statements [should be personal](/guides/employability/cvs/common-mistakes/#generic-personal-statements). Many of our trainees write really impersonal statements.

We want to be able to run a fun game in class to test how personal their personal statements are.

We want a website people can go to in class. A volunteer should be able to start a game, and trainees should be able to join a started game.

Each trainee should be able to enter their name, and their personal statement from their CV.

When all trainees have entered theses details, the game can start.

The app should show everyone one personal statement without a name attached, and a list of all of the names of trainees who have submitted statements.

Each trainee should be able to choose whose personal statement they think it is.

After everyone has voted, we move on to the next statement, and so on, until all of the statements have been shown and guessed.

At the end, we want to see how personal the statements were. For each statement, how many people guessed correctly? If people guessed correctly, it's a personal personal statement. If not, it's too generic.

### Requirements

A small, simple frontend, and a backend for coordinating state across users.

We do _not_ want long-term persistence. After a game has been played (or after 24 hours, if the game wasn't finished), the data should all be deleted.

It should not be easy for someone to accidentally view a personal statement. Probably this means having some password to join a game (e.g. the volunteer can make a password when making the game, and trainees need to enter that password to join).

As will all projects, it should work, be accessible, have enough testing, and be deployed. We want to use this in class, so it needs to be easy for CodeYourFuture volunteers to keep deployed, maintain, and maybe even improve.

Everything else is up to you.
