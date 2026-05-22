+++
title = 'What Is CSS'

time = 60
vocabulary=['selector', 'property', 'value', 'cascade', 'specificity', 'declarative', 'precedence', 'render', 'block', 'inline']
[objectives]
    1='Define the terms: selector, property, value, cascade, specificity, declarative, precedence, render, block, and inline'
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

{{<note type="question" title="10 Things About CSS">}}

<details>
<summary>What is CSS?</summary>

Cascading Style Sheets are a language of style - a way to change how we visualise the DOM - using selectors, properties, and values in rulesets. They provide a way to change how a browser displays HTML.

A ruleset is made up of a selector and a list of declarations. A declaration is made up of one property and value pair. This is the syntax of CSS.

</details>

<details>
<summary> What is a selector, property, and value?</summary>

```css
selector {
  property: value;
}
```

Rulesets look like this: `p { background: red; }`. The selector is the `p` in this case. This `p` selects all elements of the DOM tree called `p` and sets rules about how to show them. Selectors always come first in a ruleset.

A property is a quality, a characteristic. A value is the amount.

For a person, you might say their 'age' property has the value of 40. For an element, you might set the `width` property to the value of `100%`.

Within a ruleset, multiple declarations may set values for properties, and each declaration ends with a semi-colon (`;`), e.g. `p { background: red; color: blue; }`.

</details>

<details>
<summary>How do you know what properties and values there are?</summary>

You learn them by using them. You look it up here: https://developer.mozilla.org/en-US/docs/Web/CSS/Reference. Another thing you can do is look at the autocomplete in Devtools.

</details>

<details>
<summary>Why is CSS a 'cascading' style sheet? What does cascade mean?</summary>

<iframe src="https://giphy.com/embed/zFSGphnnT9opa" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/zFSGphnnT9opa">via GIPHY</a></p>

A cascade is a stream or sequence of a things where each thing affects the next. You might imagine pouring champagne into a tower of glasses. The champagne flows into the top container; it then cascades into the next container; etc. In CSS we're actually pouring from many bottles into one tower.

So in CSS 'the cascade' means the order or sequence of the rules as they flow into the DOM tree according to CSS precedence.

Several rules may apply to one element, and they are applied in a particular order, with later, more specific, or more important rules adding to or overriding ones that have already been applied.

</details>

<details>
<summary>What does precedence mean?</summary>

It means the order rules are applied.

One way rules are applied in CSS is inheritance: children inherit from parents. If a parent node has red text, all its children will inherit that red text color. But when another rule with higher precedence comes and overrules, it replaces the rule which had lower precedence. An explicit rule targeting an element directly overrules a rule it inherited from its parent.

Inheritance forms a hierarchy. The elements being styled are hierarchical - with children inheriting from (but perhaps overriding) parents.

Everything in CSS is determined by order. Order is so important in CSS because CSS is a declarative programming language that programs the layout of boxes.

CSS renders the nodes in our DOM tree as nested boxes, and we program their appearance using fonts, colours, and spacing.

</details>

<details>
<summary>What does declarative mean?</summary>

It means that we describe a set of rules, and all of the rules are processed and then applied, in a well-known order, in one go. The browser works out how to apply the rules. You don’t write for loops or if/else statements; there are no functions as such; you just _declare_ the outcome with some rules, and those rules get applied.

In CSS you do the 'what', and the browser does the 'how'.

</details>

<details>
<summary>What is specificity?</summary>

Specificity is a [weighting system for CSS rules](https://specifishity.com/). The more specific your selector, the more power it has. For example: IDs can only ever mean _one_ node. IDs are unique, so they are _more specific_ than classes, which could mean many nodes.

Classes added to html element are _more specific_ than just a plain element selector, as a class of `p` (e.g. `p.instruction`) is _more specific_ than just all `p`. If you get two rules with the same specificity then the one that comes last in the order wins.

The browser sorts all your rulesets, or declarations, into a defined order according to the power, or weight, of the declaration and applies the result, like a game of cards where higher value cards beat lower value cards.

Stronger rules _override_ weaker rules. Everything is sorted and sorted until eventually a final value wins out and the view is rendered.

This only applies where there is a conflict. If both `p { color: red; background-color: blue; }` and `p.instruction { color: orange; }` apply to the same element, the `color` will end up `orange` because it was specified in a more specific rule, but the `background-color` will still be `blue` because nothing overrode that property.

The browser sorts like this:

1. Match the media
1. Sort by origin
1. Sort by specificity
1. Sort by document **order**

Specificity forms a hierarchy. CSS rules are hierarchical - with more specific rules being applied after (and perhaps overriding) less specific rules.

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

Render means to hand over, or to give back. In the browser, it means to show the result of all these computations we have talked about. It turns the code into pixels and paints them on your screen. So it's the end result - how the page finally looks on your screen.

</details>

{{</note>}}
