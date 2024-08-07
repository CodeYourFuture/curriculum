# Music data project

One of the most common tasks in software is to take some data, process it in some way, and present it usefully to a user.

For this project, we have supplied a collection of data for you to analyse. Your task is to write code which processes it and shows useful conclusions to a user.

Your task is to make a small HTML + CSS + JavaScript frontend which displays the answers to several questions, which are listed below.

Some principles you should remember throughout this project:
1. This is a project about data processing, not UI. You should make a simple frontend to show the data, but you should spend as little time as you can on the frontend. No credit will be given for making prettier or more complicated frontend.
2. You should assume the data will change in the future, but will have the same schema. So you shouldn't pre-compute anything - your code should always read the data and calculate results from scratch.

TODO: Generate and link to `data.js`

`data.js` is a file containing three functions:
1. `getUserIDs()`: when called, returns an array of strings, each of which is a user ID.
1. `getListens(userID)`: when called, returns an array of objects, each of which contains information about a single time that the given user listened to a song. The listens are sorted by when they happened, oldest to newest.
2. `getSong(songID)`: when called with one string as an argument, returns an an object containing information about a single song.

## Requirements

You must submit both a link to your GitHub repo, and a link to the deployed website.

Your website must be hosted on the internet, and must be automatically deployed when you merge changes to your GitHub repo.

Your website must include a drop-down to select a user to display information for. When a user is selected, you must display answers to all of the questions for that user. If a question doesn't apply to that user, you should not show the question.

You **must not** implement any kind of authentication. Just a drop-down to choose which user's information to display.

Your GitHub repository must contain unit tests which demonstrate that your code works. End to end tests are optional.

## Questions to answer

1. What was the user's most often listened to song according to the data?
2. What was the user's most often listened to artist according to the data?
3. What was the user's most often listened to song on Friday nights (between 5pm and 4am)?
4. If we were talking about _listening time_ rather than _number of listens_, would any of the above questions have different answers?
5. What song did the user listen to the most times in a row (i.e. without any other song being listened to in between)? How many times was it listened to?
6. Are there any songs that the user listened to every day?
7. What were the user's top three genres to listen to?

## Rubric

TODO: Unclear whether we want this to be in the trainee-facing part of the project, or hidden, or to have the same bullet points in both but more information only available to assessors?

All of the below requirements must be met for the project to be considered complete:

* The website must contain a drop-down which lists three users.
* Selecting a user must display answers relevant to that user (see table below).
* The code written to calculate the answers to the questions must seem like it could handle different data if it were supplied, including the following edge-cases:
  * An empty array of song data, or an empty subset for any question, should completely hide the question and answer. Displaying the question and an empty result, or any kind of error, is not acceptable. If no questions apply to the user, some intelligible statement should be shown to the user (e.g. "This user didn't listen to any songs.").
  * If fewer than three (but more than zero) genres were listened to the site should list the top genres listened to, and should not display text like "Top 3 genres" but may say "Top genres" or "Top 2 genres" or similar.
* Unit tests must be written for at least one non-trivial function.

Bonus points (which don't mean anything):

* Re-using code between the "most often" questions (i.e. questions 1, 2, 3, 4).
* End-to-end tests.


Expected output data:
| Question                     | User 1 | User 2 | User 3 |
| ---------------------------- | ------ | ------ | ------ |
| Most listened song (count)   | TODO   | TODO   | TODO   |
| Most listened song (time)    | TODO   | TODO   | TODO   |
| Most listened artist (count) | TODO   | TODO   | TODO   |
| Most listened artist (time)  | TODO   | TODO   | TODO   |
| Friday song (count)          | TODO   | TODO   | Never listens to music on Friday night |
| Friday song (time)           | TODO   | TODO   | Never listens to music on Friday night |
| Longest streak song          | TODO   | Has two valid answers - can choose to display either or both | TODO |
| Every day songs              | TODO   | TODO   | Doesn't listen to a song every day |
| Top three genres             | TODO   | TODO   | Only listens to one genre: TODO |
