+++
title = 'Accessibility and the DOM'
[build]
  render = 'link'
  list = 'local'
  publishResources = false
+++

# Accessibility & the DOM

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
- [ ] This [demo page](/workshops/accessibility-snapshot)

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

1. Open the [demo page](/workshops/accessibility-snapshot) in Chrome.
2. Open Dev Tools and go to the **Lighthouse** panel.
3. With **Mode** set to **Navigation** (the default), click **Analyze page load** and wait for the report. The **Accessibility** section should report no problems, because the page is fine when it first loads.
4. Press the **Add an element** button until it is disabled. The page has now changed, but your Navigation report still shows the page as it was when it loaded.
5. To run another audit, first start a new report by clicking the **+** button at the top of the Lighthouse panel. Then change **Mode** to **Snapshot**, click **Analyze page load**, and wait for the report.
6. Compare the two reports. Write down every accessibility issue Snapshot mode finds.

## Acceptance Criteria

- A **Navigation** mode audit of the page on load reports an Accessibility score of 100. The page is accessible to begin with.
- After adding the elements, a **Snapshot** mode audit reports the accessibility problems, and you can list each one and say which element caused it.

> [!NOTE]
> The accessibility problems on this page are deliberate. They are added by
> JavaScript after you interact with the page, so they only show up in a
> Snapshot audit. That is the whole point of the demo.
