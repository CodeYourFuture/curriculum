+++
title = 'Reacting to events'

time = 60
[objectives]
    1='Identify the syntactic features of a call to addEventListener'
    2='Explain when an event listener is called'
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

As a user, we interact with the elements on a web page. We _click_ on buttons, _input_ text, _submit_ forms etc.

To react to an event, we can declare a function that we want to run whenever a certain event occurs. We call this function an **event handler**. In the example below, we _name_ this function `updateCharacterLimit`:

```js {linenos=table, hl_lines=["3"] linenostart=1}
const textarea = document.querySelector("textarea");

function updateCharacterLimit() {}
```

We need to tell the browser to call `updateCharacterLimit` whenever a **keyup** event {{<tooltip title="fires">}}"fires" means "an event is triggered"{{</tooltip>}}. We do this using `addEventListener`:

```js {linenos=table,linenostart=1 hl_lines=["5"]}
const textarea = document.querySelector("textarea");

function updateCharacterLimit() {}

textarea.addEventListener("keyup", updateCharacterLimit);
```

Let's break down the arguments that are passed to `addEventListener`.

- [`"keyup"`](https://developer.mozilla.org/en-US/docs/Web/API/Element/keyup_event) - this is the type of event we want to be notified about
- `updateCharacterLimit` - the second argument is a function. It is a function that is called when an event occurs.

In JavaScript, we can pass functions as arguments to other functions. In this case, we're passing a function `updateCharacterLimit` to `addEventListener` as an input. We can think of this as saying: whenever a key is released on the `textarea` element, then the browser will call the function `updateCharacterLimit`. Any code we want to run in response to the `keyup` event will need to be inside the `updateCharacterLimit` function.

{{<tabs>}}

===[[javascript]]===

We can add a log to `updateCharacterLimit` to check it is called every time the `"keyup"` event fires.

```js
// We already had the top part of this code before.

const textarea = document.querySelector("textarea");
const remainingCharacters = textarea.maxLength - textarea.value.length;

const charactersLeftP = document.querySelector("#character-limit-info");
charactersLeftP.innerText = `You have ${remainingCharacters} characters remaining`;

// From here down is new.

function updateCharacterLimit() {
  console.log(
    "keyup event has fired... The browser called updateCharacterLimit..."
  );
}

textarea.addEventListener("keyup", updateCharacterLimit);
```

===[[html-css]]===

```html
<section>
  <h3>Character limit</h3>
  <label for="comment-input"
    >Please enter your comment in the text area below
  </label>
  <textarea
    id="comment-input"
    name="comment-input"
    rows="5"
    maxlength="200"
  ></textarea>
  <p id="character-limit-info"></p>
</section>
```

===[[✏️ check]]===

In your local project, define your own event handler and then use `addEventListener` to register that event handler for a `keyup` event.
Add a `console.log` to the event handler and **check** the event handler is being called when the event fires.
Check the console tab in dev tools to see the log appear in the console.

{{</tabs>}}
