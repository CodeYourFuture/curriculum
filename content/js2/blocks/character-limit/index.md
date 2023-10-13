+++
title = '🛑 Character limit'
headless = true
time = 20
facilitation = false
emoji= '🧩'
[objectives]
    1='Define acceptance criteria for the character limit component'
+++

Let’s define a problem.

Suppose we're working on a website where users will need to **comment** on articles. In the user interface, they'll be provided with an `textarea` element where they can type their comment. However, there is a _character limit_ of `200` characters on their comment. As users type in to the box they should get feedback on how many characters they've got left for their comment. An example character limit component is rendered below, try typing in it:

{{<wordlimit>}}

We can define _acceptance criteria_ for this component:

> _Given_ an textarea and a character limit of 200,
> _When_ a user types characters into the textarea
> _Then_ the interface should update with how many characters they've got left

### 🏁 Starting point

In the user interface, we will start off with some static html:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <section>
      <h1>Character limit</h1>
      <textarea id="comment-input" name="withHint" rows="5"></textarea>
      <label for="comment-input"
        >Please enter a comment in fewer than 200 characters
      </label>
      <textarea
        id="comment-input"
        name="comment-input"
        rows="5"
        maxlength="200"
      ></textarea>
      <p id="character-limit-info">You have 200 characters remaining</p>
    </section>
  </body>
</html>
```

To implement the functionality, we'll need to interact with the elements on the page. We'll need a way to **access** and **update** elements based off **user interactions**.
