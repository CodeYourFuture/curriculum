+++
title = "Limitations and trade-offs"
time = 10
hide_from_overview = true
[build]
  render = "never"
  list = "local"
  publishResources = false
+++

A lot of this sprint focuses on {{<tooltip title="Limitations" text="limitations">}}A limitation is something we can't do, or which is hard to do.{{</tooltip>}} and {{<tooltip title="Trade-offs" text="trade-offs">}}A trade-off is when we gain some benefit, but it also has some cost/draw-back.<br /><br />There isn't always a clear correct choice between two approaches - often they have different benefits and draw-backs.{{</tooltip>}}.

When writing software, we are always thinking about limitations and trade-offs. We always have to make choices. Like whether to use a for-loop or `map`. Or whether we want users to register a username that only they can use, or whether users can use any name they want.

Sometimes the choices we make are obvious. But a lot of the time there are advantages and disadvantages to different approaches.

Let's use that example of user registration.

What advantages and disadvantages can you think of each option?

<details>
<summary>Expand for some examples after you've thought of your own</summary>

Approach             | Advantages | Disadvantages
-------------------- | ---------- | ------------
Require registration | Other users know when messages are from the same person.<br />Requiring an email address may help reduce abuse. | May give impression that two names that look similar are the same.<br />Harder to spam.<br />Needs us to store user information.<br />Needs us to protect user data we're storing.
Allow anonymous      | Low friction to contribute.<br />Less functionality to implement. | Allows impersonating other users.<br />Easier to spam.

</details>

Neither approach is obviously _better_ - they have different advantages and disadvantages. Sometimes those advantages and disadvantages are not about the same topic.

Often when thinking about limitations and trade-offs we are sorting requirements by importance, we are finding the places that problems are happen, and we're choosing where things belong. There isn't always one correct answer - we can often build a system many different ways.
