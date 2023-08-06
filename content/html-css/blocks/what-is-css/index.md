+++
title = 'What Is CSS'
headless = true
time = 60
facilitation = false
vocabulary=['property', 'value', 'cascade', 'specificity', 'declarative', 'render', 'block', 'inline']
emoji= '🧩'
[objectives]
    1='Define all key terms of CSS'
+++

{{<note type="question" title="10 Things About CSS">}}

<details>
<summary>What is CSS?</summary>

Cascading Style Sheets are a language of style - a visualisation of the DOM - using selectors, properties, and values in rulesets.

A ruleset is made up of a selector and a declaration. A declaration is made up of at least one property and value pair. This is the syntax of CSS.

</details>

<details>
<summary> What is a selector, property, and value?</summary>

```css
selector {
  property: value;
}
```

Selectors look like this: `p { background: red }`. The selector is the `p` in this case. This p selects all elements of the DOM tree called `p` and sets a rule about how to show them. Selectors always come first in a ruleset.

A property is a quality, a characteristic. A value is the amount.

For a person, you might say their 'age' property has the value of 40. For an element, you might set the `width` property to the value of `100%`.

</details>

<details>
<summary>How do you know what properties and values there are?</summary>

You learn them by using them. You look it up here: https://developer.mozilla.org/en-US/docs/Web/CSS/Reference. And the other thing you can do is look at the autocomplete in Devtools.

</details>

<details>
<summary>Why is CSS a 'cascading' style sheet? What does cascade mean?</summary>

<iframe src="https://giphy.com/embed/zFSGphnnT9opa" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/zFSGphnnT9opa">via GIPHY</a></p>

A cascade is a stream or sequence of a things where each thing affects the next. You might imagine pouring champagne into a tower of glasses. The champagne flows into the top container; it then cascades into the next container; etc. In CSS we’re actually pouring from many bottles into one tower.

So in CSS 'the cascade' means the order or sequence of the rules as they flow into the DOM tree according to CSS precedence.

</details>

<details>
<summary>What does precedence mean?</summary>

It means hierarchy. One hierarchy in CSS is inheritance: children inherit from parents. If a parent node has red text, all its children will inherit that red text color. But when another rule comes after, and overrules, it takes precedence. Everything in CSS is determined by order.

Order is so important in CSS because CSS is a declarative programming language that programs the layout of boxes.

CSS renders the nodes in our DOM tree as nested boxes, and we program their appearance using fonts, colours, and spacing.

</details>

<details>
<summary>What does declarative mean?</summary>

It means, broadly speaking, that the entire code is processed and then applied, from top to bottom in one go. You don’t write for loops or if/else statements; there are no functions as such; you just _declare_ the outcome.

In CSS you do the 'what', and the browser does the 'how'.

</details>

<details>
<summary>What is specificity?</summary>

Specificity is a [weighting system for CSS rules](https://specifishity.com/). The more specific your selector, the more power it has. For example: IDs can only ever mean _one_ node. IDs are unique, so they are _more specific_ than classes, which could mean many nodes.

Classes added to html element are _more specific_ than just a plain element selector, as a class of `p` is _more specific_ than just all `p`. If you get two elements with the same specificity then the one that comes last in the order wins.

The browser sorts all your rulesets, or declarations, into a defined order according to the power, or weight, of the declaration and applies the result, like a game of cards where higher value cards beat lower value cards.

Stronger rules _override_ weaker rules. Everything is sorted and sorted until eventually a final value wins out and the view is rendered. The browser sorts like this:

1. Match the media
1. Sort by origin
1. Sort by specificity
1. Sort by document **order**

</details>

<details><summary>What do we mean by order?</summary>

Order means 'what comes first?'.

Another way to think of ‘earlier and later’ is ‘farther and nearer’. The _closer_ the declaration is to the node in the DOM, the ‘later’ it is in the CSS. So an inline style overrides a style set in a style block, which overrides a stylesheet linked in the head, which overrides any stylesheet linked higher up in the head, which all ultimately overrides the user agent style that comes in the browser.

</details>

<details>
<summary>What does specify mean?</summary>

Identify clearly. Name explicitly.

</details>

<details>
<summary>What does render mean in context of a browser?</summary>

Render means to hand over, actually - to give back. In the browser, it means to show the result of all these computations we have talked about. It turns the code into pixels and paints them on your screen. So it’s the end result - the final face.

</details>

{{</note>}}
