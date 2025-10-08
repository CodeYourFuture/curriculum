+++
title = 'What is HTML?'

time = 45
activities = ['defining-key-terms']
[objectives]
    1='Define HTML, tags, and nesting'
    2='Explore the semantics of HTML'
    3='Analyse the role of HTML in the browser'
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

{{<note type="question" title="10 Things About HTML">}}

<details>
   <summary>What is HTML?</summary>

HTML stands for Hypertext Markup Language. Markup means tags that go around content like text, pictures, videos, to "mark up" or describe what they are.

HTML tags look like this: `<p>This is a paragraph.</p>`. They typically surround a piece of content, like a block of text, and describe it as such. In this case, the `<p>` tag describes the content as a paragraph.

</details>

<details>
<summary>What are some examples of HTML tags?</summary>

Examples of HTML tags include `<mark>`, `<section>`, `<header>`, and `<button>`.

</details>

<details>
<summary>What does it mean to nest HTML tags?</summary>

Nesting is like Russian dolls - or tupperware - a box in a box in a box. We _nest_ tags _inside_ each other. That's how we write HTML. For example:

```html
<article>
  <header>
    <h1>Title</h1>
  </header>
</article>
```

Here the `<header>` tag is nested inside the `<article>` tag, and the `<h1>` tag is inside the `<header>` tag.

Not all tags are nested, in this example:

```html
<article>
  <header>
    <h1>Title</h1>
  </header>
  <p>Some content</p>
</article>
```

Both the `<header>` and `<p>` tags are nested inside the `<article>` tag, but the `<header>` and `<p>` tags are not nested inside each other - they are siblings.

</details>
<details>
<summary>What are some examples of web browsers?</summary>

Chrome, Firefox, Safari, Lynx, JAWS, Brave, Edge, Vivaldi, Opera...

</details>
<details>
<summary>Here’s an interesting question: what does HTML produce in the browser?</summary>

It produces what we see - it produces a visual representation of the document. But in a little more detail: the browser **parses** the HTML we write, executes the linked Javascript, loads the CSS, media, and other resources, and produces a _model_ of our document, called the document object model. It produces an **API** called the **DOM**.

It uses all of this information to decide what to show us.

</details>

<details>
<summary>What is parsing?</summary>

Make sense of. Analyse **syntactically**.

</details>

<details>
<summary>What is syntax?</summary>

The rules that structure language, so it can be understood by someone else. I put words in an order, according to rules, I _structure meaning_ and you can get that meaning back out if you know the same rules. Programming languages are the same - they each have a set of rules, they each have a _syntax_.

Think about HTML and CSS. They use different syntaxes.

For instance, when grouping together the information about an HTML tag, you may write: `<h1 class="main-title">This is a title</h1>` - there are several pieces of syntax here, and one is that the tag is opened by `<h1>` and its contents are done when you see `</h1>`.

In CSS, on the other hand, you may have a rule like `h1 { color: red; }` - we group together declarations applying to the selector between `{}`s.

HTML and CSS use different syntaxes, even though some of the concepts are similar.

</details>

<details>
<summary>What is an API?</summary>

API stands for Application Programming Interface.

Imagine you want to know what the weather is going to be tomorrow. You may have an app in your phone which can tell the weather, but it doesn't _know_ the weather everywhere - it will ask some service on the internet.

That service on the internet is an API. The service on the internet can be asked specific questions. Maybe it can be asked "What will the temperature be tomorrow in London?" or "Tell me the next week's temperatures for every city in the UK?" or "When will it next rain in Glasgow?".

And when you ask a question, you need to know how to interpret the answer. If you ask "When will it next rain in Glasgow", and get back an answer of "5", what does that mean? In 5 minutes? In 5 hours? It's been raining for the last 5 days?

The service may have a lot of knowledge, but it can only be asked specific questions. And the app on your phone needs to know how to interact with it. "What can I ask/tell the API?", "How do I ask/tell it those things?", and "How should I interpret the answers I get back?" are all good things to think about when thinking about an API.

The DOM is an API. From our code, we can tell it things (like "All h1 tags should be blue"), and it will take action as a result. One of the ways we can interact with the DOM API is by giving it a CSS file - it will apply the CSS file when it's working out how to display a page. The CSS specification helps us understand how we can interact with the API - what we can tell it, and how we tell it those things.

</details>

<details>
<summary>What is semantic HTML? What does semantic mean?</summary>

Semantics means _meaning_. Semantic HTML is _meaningful code_: each piece of data marked up with correct, that is to say, descriptive tags. A heading has an h1 tag. A button has a button tag. There are only two html tags that deliberately have no meaning (div and span).

These tags are then _interpreted_ by APIs to give functionality to the page. A button tag is interpreted by the browser as a button, and so it can be clicked, or triggered in many ways. A heading tag is interpreted by the browser as a heading, and so provides a traversible page outline to a screen reader.

HTML tags are powerful because they are meaningful. They are meaningful because they are semantic. Semantic HTML is powerful HTML.

</details>

<details>
<summary>Why is semantic HTML important?</summary>

HTML tags are powerful because they are meaningful. They are meaningful because they are semantic. Semantic HTML is powerful HTML.

The better structured your document, the more meaning you can pack into it, the more powerful your code is, the better it will work in more contexts, and more things will be able to interface with it.

One place semantic HTML is useful is that if you use a `<footer>` tag instead of a `<div>` tag, a screen reader can understand that it is a footer, and treat it specially.

Another place it's useful is that another programmer reading the CSS you've written can see a `header { ... }` block and know that you're styling the header, rather than needing to work out what `div.top { ... }` means and applies to.

By using semantic conventions, we make it easier for everyone and everything to understand what we're trying to express.

</details>

{{</note>}}
