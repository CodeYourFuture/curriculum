+++
title = 'Querying the DOM'
headless = true
time = 30
facilitation = false
emoji= '🧩'
[objectives]
    1='Access elements in the DOM using selector methods'
+++

Inside the body of the html document, we start with the following html:

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
  <p id="character-limit-info">You have 200 characters remaining</p>
</section>
```

### `querySelector()`

{{<note title="recall" type="tip">}}

In the plan defined earlier, we had the following step:
Step 2: Access the `textarea` element

{{</note>}}

The DOM is an interface. It represents html elements as objects and provides functions to access these objects. Let’s start by accessing the `textarea` element and its value. To access DOM elements, we can use a method on the DOM API - [`document.querySelector`](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)

We can create a javascript file, `script.js`, to call DOM methods to interact with the web page. Inside `script.js`, we can call `document.querySelector`:

```js
const textarea = document.querySelector("textarea");
```

`document.querySelector` takes a single argument - the string `"textarea"`, which is the CSS selector used to look up the element.

To link this JavaScript file with the html, we can update the `html`👍

```html {linenos=table,hl_lines=["7"],linenostart=1}
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <script defer src="script.js"></script>
  </head>
  <body>
    <section>
      <h3>Character limit</h3>
      <label for="comment-input"
        >Please enter your comment in the text area below
      </label>
      <textarea id="comment-input" name="comment-input" rows="5"></textarea>
      <p id="character-limit-info">You have 200 characters remaining</p>
    </section>
  </body>
</html>
```

`document.querySelector` **returns** an element object, which represents the `textarea` in the web page. Once we can access the `textarea` object, we can access its properties. In particular we want to access the value a user types into the input box. We can do this by accessing the value property:

```js
const textarea = document.querySelector("textarea");
console.log(textarea.value); // evaluates to the value typed by the user
```

{{<tabs>}}

{{<tab name="🖲️ Follow along">}}

1. On your local machine, set up a new directory with an `index.html` and `script.js`.
2. Make sure you start with the same static html as the example above.
3. Double check your script file is linked to your html file.
4. Try querying the DOM and accessing various elements like the `textarea` element.

{{</tab>}}

{{</tabs>}}
