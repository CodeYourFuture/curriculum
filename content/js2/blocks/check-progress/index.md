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
A[Step 1: Define the character limit] --> B[Step 2: Access the input element] --> C[Step 3: calculate the number of characters left] --> D[Step 4: Update the interface with the number of characters left]
```

Let's consider our code at the moment:

```js
const input = document.querySelector("#word-limit-input");

function handleKeyup() {}

input.addEventListener("keyup", handleKeyup);
```

We've done the following:

- [x] defined a `characterLimit`
- [x] accessed the `textarea` element
- [x] registered an event handler `handleKeyup`

We must still work out the following:

- [ ] Step 3: Calculate the number of characters left
- [ ] Step 4: Update the user interface with the number of characters left

To obtain the characters left, we can calculate the difference between `characterLimit` and the number of characters in the `input` element:

{{<tabs>}}

{{<tab name="javascript">}}

```js
const characterLimit = 200;
const input = document.querySelector("input");

function handleKeyup() {
  const charactersLeft = characterLimit - input.value;
  console.log(`${charactersLeft} characters remaining`);
}

input.addEventListener("keyup", handleKeyup);
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

Typing in to the `textarea` element, we should see a string like `"118 characters left"` printed to the terminal each time a key is released. However, we have one final step. We must now **update** the DOM label with the information about how many characters are left.
