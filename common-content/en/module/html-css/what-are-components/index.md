+++
title = 'What are components?'

time = 30
[objectives]
    1='Identify 5 UI components'
    2='Describe the benefits of building with components'
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

{{<note type="question" title="5 Things About Components">}}

<details>
   <summary>What are components?</summary>

A component is a reusable, self-contained piece of code. Components are like lego blocks you can build websites with. Most websites are made by "composing" components in this way.

</details>

<details>
<summary>But... practically speaking, what are components? Name at least five.</summary>

Examples of UI components: [header](https://design-system.service.gov.uk/components/header/), [nav](https://getbootstrap.com/docs/4.0/components/navs/), [hero](https://bulma.io/documentation/layout/hero/), [card](https://ant.design/components/card), [breadcrumbs](https://design-system.w3.org/components/breadcrumbs.html), [toast](https://chakra-ui.com/docs/components/toast), [chip](https://m3.material.io/components/chips/overview), [carousel](https://vuetifyjs.com/en/components/carousels/), [rating](https://shoelace.style/components/rating). There are so many more.

</details>
<details>
<summary>How am I going to remember all that?!</summary>

It clearly doesn't make sense to try to memorise oodles of components in zillions of libraries. Instead, we should spend our time more wisely:

- identifying common patterns
- breaking down designs into these common patterns
- _finding and reading documentation_ so we can use components in any library or design system

</details>

<details>
<summary>Why do we build with components?</summary>

#### ♻️ Re-use

Instead of writing out all the HTML and CSS each time, we can save our decision about how a card should work, or how a button should look, in a component and re-use it over and over. If we want to change the rules, we can change them in just one place, our component, instead of over many files or pages.

#### 👩🏽‍👩🏽 Consistency

If we call a header component, we know that _all_ our headers will match on our site, because they all use the same shared rules.

#### 🍱 Composition

We can build bigger components out of smaller components and compose them onto pages to make views. This is how we build complicated interfaces quickly.

#### 🚅 Efficiency

We can split up the tasks and work in parallel. One person can work on the button component, another on the card component. When a new developer joins the team, they can make changes to a limited part of the codebase, rather than having to understand the whole thing first.

</details>

<details>
<summary>How do we split up HTML and CSS into composable pieces?</summary>

So, we actually can't yet, not really! We are only beginning our journey with components now. (If you are here from a scheduled review, update your answer.)

To compose pages from many small reusable pieces stored in separate files, we need a third programming language. We are going to learn JavaScript to help us do this. We could use other languages (this curriculum is written in [Go](https://gohugo.io/about/what-is-hugo/)), but we will start with JavaScript.

We will keep meeting this idea of small reusable pieces and composition throughout the course. Keep an eye out for it!

</details>
{{</note>}}
