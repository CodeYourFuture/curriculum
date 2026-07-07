+++
title = 'Accessibility and the DOM'
time = 20
[build]
  render = 'link'
  list = 'local'
  publishResources = false
+++

A short demo of how changing the DOM can change the accessibility of a page, and
how to find those problems with Lighthouse **Snapshot mode**.

## Learning Objectives

```objectives
- [ ] Explain how changing the DOM can change the accessibility of a page
- [ ] Find accessibility problems that only appear after user interaction
- [ ] Use Lighthouse Snapshot mode to audit a page after it has changed
```

## Requirements

For this demo you will need:

- [ ] [Chrome](https://www.google.com/intl/en_uk/chrome/) with Dev Tools
- [ ] This [demo page](/workshops/accessibility-and-the-dom)

The page is fully accessible when it first loads. Each time you press **Add an
element**, JavaScript adds a new element to the page. Every new element renders
fine, but each one has a different accessibility problem:

- text with not enough colour contrast
- an image with no alt text
- a link with no accessible name
- a button with no accessible name

A normal Lighthouse audit runs in **Navigation mode**: it reloads the page and
checks it as it first appears. At that point the page is empty, so it finds
nothing. The problems only appear _after_ you interact with the page, so a
normal audit misses them. **Snapshot mode** audits the page in its current
state, without reloading it, so it can catch the problems your clicks
introduced.

### Try it

Open the [demo page](/workshops/accessibility-and-the-dom) and follow the steps on it: run a Lighthouse audit in Navigation mode, add elements until the button is disabled, then run a Snapshot audit and compare the two reports.

## Acceptance Criteria

You have finished this workshop when:

- You have run both a **Navigation** and a **Snapshot** audit, and seen that Navigation reports no accessibility problems while Snapshot reports several.
- You can explain why the Navigation audit missed them: it checks the page only as it loads, before your clicks changed the DOM.
- You can list the accessibility problems the Snapshot audit found.

> [!NOTE]
> The accessibility problems on this page are deliberate. They are added by
> JavaScript after you interact with the page, so they only show up in a
> Snapshot audit. That is the whole point of the demo.
