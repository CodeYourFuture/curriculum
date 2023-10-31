+++
title = '👓 Creating elements'
headless = true
time = 30
facilitation = false
emoji= '🧩'
[objectives]
    1='Build UI components composed of DOM elements'
+++

To render an element in the DOM, we can use `createElement` to create a DOM element and set its `innerHTMl` property using data from the `show` object.

```js
const show = {
  name: "Little Simz",
  date: "5th November",
  location: "02 Victoria Warehouse",
  city: "Manchester",
};

const section = document.createElement("section");
section.innerHTML = `
<p>${show.name}</p>
<p>${show.date}</p>
<p>${show.location}</p>
`;
console.log(section);
```

If we open up the console tab, we should be able to see this element logged in the console. However, it won't yet appear in on the page in the browser.

### Displaying elements

To display these UI elements, we need to append it to another DOM element that is already in the DOM tree.

```js {linenos=table,hl_lines=["15"],linenostart=1}
const show = {
  name: "Little Simz",
  date: "5th November",
  location: "02 Victoria Warehouse",
  city: "Manchester",
};

const section = document.createElement("section");
section.innerHTML = `
<p>${show.name}</p>
<p>${show.date}</p>
<p>${show.location}</p>
`;

document.querySelector("body").append(section);
```
