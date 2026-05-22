+++
title = "Design a frontend and backend"
headless = true
time = 30
facilitation = false
[objectives]
    1="Design a frontend and backend which can communicate with each other"
+++

We're going to take a frontend you've already made, and overcome one of its limitations by adding a backend.

You should already have built a quote generator frontend before. The quote generator you already made used a static array of quotes that were {{<tooltip title="hard-coded">}}Hard-coding is when we write the exact data in the source code of our programme, rather than fetching it from some data source or generating it.{{</tooltip>}} in the frontend.

We will add some extra functionality to our quote generator. Users will be able to add their own quotes, and then other users on other computers will be able to see the quotes that were added.

Because we want to be able to store data across computers and users, we know we will need a backend.

Because we want to be able to change what data we're storing, we know our backend will need to be stateful.

Because we don't want to have to learn about databases right now, we're going to accept the limitation that when we restart our server, we will lose any added quotes.

### Communication protocols

Before we get started, we should agree how our frontend and backend are going to talk to each other.

The example stateful backend we looked at before exposed this {{<tooltip title="API">}}An API - Application Programming Interface - is a description of how one program can interact with another.{{</tooltip>}}:

| Path | Method | Body | Example request body | Response body | Example response body |
| ---- | ------ | ---- | -------------------- | ------------- | --------------------- |
| `/`  | `GET`  |      |                      | A string: A quote (in quotation marks), then a dash and the author of the quote. | `"I should have been more kind." -Clive James` |
| `/`  | `POST` | JSON-serialised object with two keys: "quote" and "author", both of which contain strings. | `{"author": "Ibrahim", "quote": "Hello"}` | The string "ok" if successful, or a string describing an error. | `ok` |

This API is asymmetric:

When you POST information to it, you post structured information - the backend can easily tell which part is the author and which is the quote.

When you GET information from it, the information is less structured - the server has already formatted the author and quote into a string.

Pre-formatting the data may be convenient for the frontend if the backend knows exactly how it will be presented. But it takes away some flexibility from the frontend. If the frontend wanted to show the quote in italics, or the author in bold, this would be hard, because it would need to split the formatted string back up into its constituent parts.

We probably instead want to change our GET endpoint to also return structured information, which the frontend can choose to format how it wants:

| Path | Method | Body | Example request body | Response body | Example response body |
| ---- | ------ | ---- | -------------------- | ------------- | --------------------- |
| `/`  | `GET`  |      |                      | JSON-serialised object with two keys, "quote" and "author", both of which contain strings. | `{"author": "Clive James", "quote": "I should have been more kind."}` |
| `/`  | `POST` | JSON-serialised object with two keys: "quote" and "author", both of which contain strings. | `{"author": "Ibrahim", "quote": "Hello"}` | The string "ok" if successful, or a string describing an error. | `ok` |

We could also design different APIs for our frontend and backend to communicate - the important thing is that they agree on what API we will have.
