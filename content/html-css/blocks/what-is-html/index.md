+++
title = 'What is HTML?'
headless = true
time = 45
facilitation = false
emoji= '🧩'
[objectives]
    1='Define HTML, tags, and nesting'
    2='Explore the semantics of HTML'
    3='Analyse the role of HTML in the browser'
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

It produces what we see, of course; it produces a visual representation of the document. But in a little more detail: the browser **parses** the HTML we write, executes the linked Javascript, loads the CSS, media, and other resources, and produces a _model_ of our document, called the document object model. It produces an **API** called the **DOM**.

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

API stands for Application Programming Interface. Imagine you are at a train station: You ask the station master what trains are running today, and they read you a list. You ask when the next train to Manchester is, and they tell you it has been delayed.

The station master has _lots more_ information on the trains, but when you ask your question, they know precisely what information you want, based on your shared understanding of the question. The DOM is the station master; the DOM is the interface.

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

The better structured your document, the more meaning you can pack into it, the more powerful your code is, the better it will work in more contexts, and more things will be able to interface with it. The more meaning you put in, the more meaning other readers can get out.

</details>

{{</note>}}
