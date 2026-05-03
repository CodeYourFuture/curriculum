# Breaking down the quote generator

You should have already followed the prep to design, write, and deploy a quote generator.

We already broke down this project into steps. We're going to talk about the techniques that helped us to do this breaking down. This will help you to break down projects yourself in the future.

Get into groups of about 5, with at least one volunteer per group.

## Axes to break down by (20 minutes)

There are different ways we can break down a project. For instance:
* We could write the whole frontend, then the whole backend (or the whole backend then the whole frontend).
* We could build one entire feature in the frontend and backend, then another feature in the frontend and backend.
* We could write down the whole API between the backend and frontend, and then build one, then the other.

There are other ways we could break down the project too.

Spend 3 minutes thinking of different ways you could break down a project.

Spend 10 minutes discussing all of your ideas (including the suggestions above) in your group. What advantages does each approach have? What disadvantages does each have?

Are the answers different depending on the number of people working on the project?

Are the answers different depending on whether you have specialists (e.g. one person who is specialised in frontend and one specialised in backend) vs generalists (people who can do a bit of everything)?

Can you think of ways to combine approaches, to get the advantages of different approaches?

<details>

<summary>Hints for volunteers</summary>

We're generally trying to get towards:
* Breaking down by feature is useful (proves out end-to-end design, provides incremental value, ...).
* Thinking about data / APIs can help us to develop components in parallel.
* We can often interact with components in isolation for testing, e.g. `curl` testing against a backend, dummy backends for testing frontends, etc.
</details>

## User journey mapping

### Collecting features (5 minutes)

We often first break down projects by feature. We try to build entire end-to-end journeys for one thing a user can do at a time.

One example of a feature our quote generator has is "Add a quote".

Spend 2 minutes thinking of as many features as you can for our quote generator. These don't have to be things we _have_ implemented, they can also be things we _haven't implemented yet_. For instance, I can imagine after adding a quote, a user may want to share a link to _that_ quote with someone - our server doesn't support this right now (it only shows random quotes). But this is still a feature we can imagine.

In your group, make a list of all of the features you have thought of.

<details>

<summary>Some examples if you're really stuck</summary>

* Displaying a quote on first load.
* Displaying new quotes on demand.
* Adding new quotes.
* Seeing the quote you just added actually got added.
* Sharing a link to a specific quote.
* Displaying a new quote that is guaranteed not to have been show before.
* Showing statistics about how often a quote has been displayed.
* Up/down-voting quotes.
* Finding quotes on similar themes.
* Listing all of the quotes by a particular person.
* Auto-grouping similar quote authors (e.g. "FDR" and "Franklin Roosevelt" are the same person).

</details>

### Mapping features (20 minutes)

Pick three features and create user journey maps for them. Use [the user journey mapping intro you read](https://www.nngroup.com/articles/journey-mapping-101/) to help you - who wants to use each feature? What do they want to achieve? What steps would they need to achieve their goals? What would they experience on the way?

## Making a plan

### Unlocking parallelism and feedback (10 minutes)

When developing, we want to get feedback as quickly as we can. We don't want to have to build a whole backend and a whole frontend and a whole database in order to see whether any one piece works.

It can be helpful to think about the _interfaces_ between these components before building them. Asking questions like:
* For each operation, what data will we need to pass from the frontend to the backend?
* For each operation, what data will we need to pass from the backend to the frontend?

In our quote generator, this may mean asking questions like:
* What information does the frontend need from the backend in order to display a quote? (The answer here may be: An object containing two fields - the quote as a string, and the author as a string).
* What information does the frontend need to give the backend to save a quote?
* What information does the frontend need to give the backend in order to get a specific quote? (This question may suggest we need some kind of ID for each quote, which we can put in a URL, but don't show to the user in the page).
* What information does the frontend need to give the backend if it wants to guarantee the next quote it shows hasn't been shown to this user before?

For each of the three features your have mapped, write down what information needs to be sent between which components in order to perform an action. Be specific. Include names and types of each field.

### Agreeing on data formats and APIs

Now that we know what data we need to pass where, we can come up with the APIs we need to build. This can happen at multiple levels, e.g. you can decide:
* The backend APIs your frontend will call (and what the requests and responses will look like).
* The function one part of your frontend will call to to generate a component for some data.
* The frontend URLs that a user can visit to interact with the application, and what they will do.
* And more.

By agreeing on these things, we can start building them in parallel - one person can be working on one side of the API (like the backend endpoint, or a function) while another works on the code that will call it.

### Using dummy data

We can even use fake versions of these APIs with dummy data.

One of our user journeys is "When I load the page, a quote is displayed". Some ways we can develop this without having a whole backend:
* We can write the frontend code to display a quote with one hard-coded quote.
* We can write a `fetchQuote` function in the frontend which doesn't call a backend but instead always returns one quote _in the data format we've agreed_.
* We can fetch a quote, but write a small backend where the "get quote" endpoint always returns one quote (while someone makes the backend do something more complicated like choose a random quote).

These are all ways we can develop and test our frontend before completing the whole system. Agreeing on a data format, and APIs, makes it easier for us to do this.

### Making a plan (30 minutes)

For each of the three user journey maps you've created, make a plan for how you could break these down and implement them.

You should work out the data formats, work out the APIs, and work out how different people could be working on different parts of the implementation at the same time.

Write down tickets for each task that contain enough information that someone could pick up the ticket and work on it. Make sure to identify which tickets _depend_ on which other tickets (i.e. which ones need to be done before each other).
