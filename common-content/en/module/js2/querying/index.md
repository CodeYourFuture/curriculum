+++
title = 'Querying the DOM'

time = 30
[objectives]
    1='Access elements in the DOM using selector methods'
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

Inside the `body` of the html document, we start with the following html:

```html
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
  <p id="character-limit-info">You have 200 characters remaining</p>
</section>
```

### `querySelector()`

{{<note title="recall" type="tip">}}

In the plan defined earlier, we had the following step:
Step 2: Access the `textarea` element

{{</note>}}

The DOM is an interface. It represents HTML elements as objects and provides functions to access these objects. Let’s start by accessing the `textarea` element and its value. To access DOM elements, we can use a method on the DOM API - [`document.querySelector`](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)

We can create a Javascript file, `script.js`, and link it to the HTML document using a `script` element:

```html {linenos=table,linenostart=1 hl_lines=["7"]}
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

Inside `script.js`, we can call `document.querySelector`:

```js
const textarea = document.querySelector("textarea");
```

`document.querySelector` takes a single argument a string containing a CSS selector (just like we use when defining what elements a CSS rule should apply to).

`document.querySelector` **returns** an element object representing the first element in the page which matches that CSS selector. This element object lets us _inspect_ and _modify_ the element in the page.

Here we have given it the string `"textarea"`, which is the CSS selector used to look up the elements with tag name `textarea`. The function **returns** an element object, which represents the first `textarea` in the web page. Once we can access the `textarea` object, we can access its properties. In particular we want to access the value a user types into the `textarea` box. We can do this by accessing the value property:

```js
const textarea = document.querySelector("textarea");
console.log(textarea.value); // evaluates to the value typed by the user
```

{{<note type="activity" title="🖲️ Follow along">}}

1. On your local machine, set up a new directory with an `index.html` and `script.js`.
2. Make sure you start with the same static HTML as the example above.
3. Double-check your script file is linked to your html file.
4. Try querying the DOM and accessing various elements like the `textarea` element.
5. Try typing in the `textarea` element, and then accessing its `value` property in Dev Tools.

{{</note>}}
