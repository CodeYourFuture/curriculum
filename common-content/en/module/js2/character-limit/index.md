+++
title = 'Implementing a character limit'

time = 20
[objectives]
    1='Define acceptance criteria for the character limit component'
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

Let’s define a problem.

Suppose we're working on a website where users will need to **comment** on articles. In the user interface, they'll be provided with a `textarea` element where they can type their comment. However, there is a _character limit_ of `200` characters on their comment. As users type in to the `textarea` they should get feedback on how many characters they've got left for their comment.

{{<wordlimit>}}

> [!TIP]
> 🕹️ Try typing in the character limit box above and observing the behaviour as you type.

We can define _acceptance criteria_ for this component:

> _Given_ an textarea and a character limit of 200  
> _When_ a user types characters into the textarea  
> _Then_ the interface should update with how many characters they've got left.

> _Given_ an textarea and a character limit of 200  
> _When_ a user has already typed 200 characters into the textarea  
> _And_ the user tries to type another character  
> _Then_ the extra character should not get added to the textarea.

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
      <h3>Example character limit comment component</h3>
      <label for="comment-input">
        Please enter your comment in the text area below
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

To implement the acceptance criterion, we'll need to interact with the elements on the page. We'll need a way to **access** and **update** elements based off **user interactions**.
