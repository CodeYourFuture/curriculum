+++
title = 'Updating the interface'

time = 25
[objectives]
    1='Access and modify the textContent of a html element'
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

We know we don't want to always have the number "200" in the text "You have 200 characters remaining".

We've solved Step 3: Calculate the number of characters left. So we know what value we want to show.

All that remains is:

1. To solve Step 4: Update the interface with the number of characters left.
2. To make this happen on page load.
3. To make this also happen when the textarea changes.

Instead of writing that text exactly in our HTML, we can use the DOM to set the contents of our `p` tag.

We can do this by querying the DOM for the element we want to update, and setting its `innerText` property. `innerText` is a property that represents "the text inside the element".

If we change the value of a property in the DOM, it will update the page we're viewing.

Try writing adding this to your `script.js`:

```js
const limitDisplay = document.querySelector("#character-limit-info");
limitDisplay.innerText = "You have loaded the page.";
```

Even though our HTML said the paragraph should contain "You have 200 characters remaining", we _replaced_ this text by using the DOM.

> Step 4: Update the interface with the number of characters left.

To achieve this goal, we'll need to access the `p` element with id `"character-limit-info"` and then update its text content. As before, we can use `document.querySelector` to access an element in the DOM using an appropriate CSS selector:

```js {linenos=table,linenostart=1, hl_lines=["8-9"] }
const textarea = document.querySelector("textarea");
const remainingCharacters = textarea.maxLength - textarea.value.length;

const charactersLeftP = document.querySelector("#character-limit-info");
charactersLeftP.textContent = `You have ${remainingCharacters} characters remaining`;
```

And we can remove the initial text from the `p` tag from our HTML.

We want to do this because we have another way of setting this. If we wanted to change the text (e.g. to "You **only** have 200 characters remaining"), or change the character limit, we only want to change that one place (in our JavaScript). If we leave the initial value in the HTML, it could get out of date.

```html {hl_lines=["15"]}
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <section>
      <h3>Character limit</h3>
      <label for="comment-input">
        Please enter your comment in the text area below
      </label>
      <textarea
        id="comment-input"
        name="comment-input"
        rows="5"
        maxlength="200"
      ></textarea>
      <p id="character-limit-info"></p>
    </section>
  </body>
</html>
```

We are now _computing_ and _setting_ the character limit info using the DOM on page load.
