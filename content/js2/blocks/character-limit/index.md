+++
title = '🛑 Character limit'
headless = true
time = 20
facilitation = false
emoji= '🧩'
[objectives]
    1='Use the Teach Tech Together guide to construct your objectives'
+++

Let’s define a problem.

Suppose we're working on a website where users will need to send messages. They'll provided with an input box where they can type their message. However, there is a _character limit_ of 120. As users type in to the box they should get feedback on how many characters they've got left.

{{<wordlimit>}}

We can define the problem more clearly:

> _Given_ an input box and a character limit of 120,
> _When_ I type characters into the input box
> _Then_ I should be told how many characters I’ve got left

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
      <p id="character-limit-info">You have 200 characters remaining</p>
    </section>
  </body>
</html>
```

To implement the functionality, we'll need to interact with the elements on the page. We'll need a way to **access** and **update** elements based off **user interactions**.
