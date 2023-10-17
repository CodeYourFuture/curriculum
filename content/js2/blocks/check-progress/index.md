+++
title = '📈 Check progress'
headless = true
time = 30
facilitation = false
emoji= '🧩'
[objectives]
    1='Use the Teach Tech Together guide to construct your objectives'
+++

```mermaid
flowchart TD
A[Step 1: Define the character limit] --> B[Step 2: Access the textarea element] --> C["`**Step 3: In response to the user typing**`"] --> D[Step 4: Calculate the number of characters left] --> E[Step 5: Update the interface with the number of characters left]
```

Let's consider our code at the moment:

```js
const characterLimit = 200;
const textarea = document.querySelector("textarea");

function handleKeyup() {
  console.log("keyup event has fired... calling handleKeyup...");
}

textarea.addEventListener("keyup", handleKeyup);
```

We've done the following:

- [x] Step 1: defined a `characterLimit`
- [x] Step 2: accessed the `textarea` element
- [x] Step 3: registered an event handler `handleKeyup`

We must still work out the following:

- [ ] Step 3: Calculate the number of characters left
- [ ] Step 4: Update the user interface with the number of characters left

To obtain the characters left, we can calculate the difference between `characterLimit` and the number of characters in the `textarea` element:

{{<tabs>}}

{{<tab name="javascript">}}

```js
const characterLimit = 200;
const textarea = document.querySelector("textarea");

function handleKeyup() {
  const charactersLeft = characterLimit - input.value;
  console.log(`You have ${charactersLeft} characters remaining`);
}

textarea.addEventListener("keyup", handleKeyup);
```

{{</tab>}}

{{<tab name="html-css">}}

```html
<section>
  <h1>Character limit</h1>
  <textarea id="comment-input" rows="5" maxlength="200"></textarea>
  <label for="comment-input"
    >Please enter a comment in fewer than 200 characters
  </label>
  <p id="character-limit-info">You have 200 characters remaining</p>
</section>
```

{{</tab>}}

{{</tabs>}}

Typing in to the `textarea` element, we should see a string like `"You have 118 characters left"` printed to the console each time a key is released. However, we have one final step: we must now **update** the DOM label with the information about how many characters are left.
