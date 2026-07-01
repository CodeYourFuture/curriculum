+++
title = 'Auditing changes to the DOM'

time = 15
[objectives]
    1='Explain how changing the DOM can introduce problems that were not there when the page loaded'
    2='Use Lighthouse Snapshot mode to audit a page in its changed state'
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

You have just been changing pages by updating the DOM: adding elements, changing text, and reacting to events. Whenever we change a page after it has loaded, we can introduce problems that were not there when it first loaded. Some are accessibility problems, like text with not enough colour contrast. Others might be a broken layout or a slower page.

So far we have only audited a page as it loads. But once we update the interface using JavaScript, the page changes, so we need to **check it in its changed state too**.

### Lighthouse audit

You have already used **Lighthouse** to audit pages. Lighthouse is an automated tool built into Chrome that checks a page for problems with accessibility, performance, best practices, and more. It is a natural tool to reach for here too. But there is a catch.

When you run Lighthouse the usual way, it **reloads the page** and audits it as it first appears. This is called **Navigation mode**. It is great for checking the page you start with, but it cannot see any of the changes our JavaScript makes _after_ the user starts interacting with the page, such as clicking a button.

In other words, a normal audit checks the page _before_ the user has interacted with it. Such problems may only appear _after_ the user interacts with the page, so a normal audit can miss them.

### Snapshot mode

Lighthouse has a **Snapshot mode** that audits the page **in its current state**, without reloading the page, so it sees everything your JavaScript added and can catch problems that appear after the page changes. You can read more in the [Lighthouse documentation](https://developer.chrome.com/docs/lighthouse/overview#modes).

### Try it yourself

Open the [Accessibility and the DOM demo page](/workshops/accessibility-snapshot) and follow the steps on the page. You will run a Lighthouse audit in Navigation mode, then add some elements and run a Snapshot audit, and compare what each one finds.

The key takeaway: whenever your JavaScript changes the page, remember to test the page **after** those changes with Lighthouse's Snapshot mode, not just when it loads.
