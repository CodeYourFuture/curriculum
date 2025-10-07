---
title: Asking Questions
description: Asking Questions systematically
emoji: 💬
---

Often trainees at Code Your Future find it difficult to get help. This is because we are dealing with complicated questions that people need lots of details about to be able to answer.

{{<note type="activity" title="Asking Questions workshop" >}}

If you have not completed the [Asking Questions workshop](https://workshops.codeyourfuture.io/#asking-questions), find a small group of people to do that together before reading further.

It is important to understand how your current mental model helps you to ask a good question.

{{</note>}}

## Building your mental model

As we learned in the Asking Questions workshop, it is important to share your current mental model to help you ask an {{<tooltip title="effective question">}}Questions are _effective_ when they are more likely to receive an answer.{{</tooltip>}}.

Before asking a question, make sure that you have:

1. Made a prediction and explain why you think that will happen
1. Run the code
1. Compared your prediction against what actually happened

Now, write up your mental model using this format:

1. What I _did_
1. What I _expected_
1. What actually _happened_

## Sharing your mental model

To be able to fully understand your mental model, volunteers need to have **context**. So it's important that you share at least the following information:

- The coursework task that you're working on. It's helpful to include a link to the task
- What isn’t working in your code, or what you don’t understand
- What you have done so far
- What you predicted would happen before you ran the code
- What actually happened
- The exact code that you are running. **Don't include a screenshot of your code**, see [sharing code below](#sharing-code)

### Question template

Use this template:

{{<note type="question" title="Request for help" >}}

**Coursework:**

// Write which coursework you're working on here

**Problem:**

// Describe the problem you have

**What I did:**

// Describe what you've done so far here

**What I expected:**

// Describe what you predicted would happen here

**Code:**

// Include snippet(s) of code that you are running here. See sharing code below

{{</note>}}

#### For example

{{<note type="question" title=" Request for help">}}

**Coursework:**

[HTML-CSS Module: Form Controls](https://github.com/CodeYourFuture/Module-HTML-CSS/issues/6)

**Problem:**

The headings on my website don't look right.

**What I did:**

I've tried to use a H1 tag but it doesn't seem to do anything.

**What I expected:**

The heading should be much bigger than the other text on the page.

**Code:**

https://github.com/CodeYourFuture/Module-HTML-CSS/pull/1234

{{</note>}}

## Sharing code

Your question will be **much** more likely to be answered if other people can _quickly_ read and understand the code, so your code should be formatted nicely.

### Never use a screenshot

A screenshot is the **worst** way to share your code!

- A screenshot is very small so the people trying to help you have to zoom into and pan around to read it
- If you have more than 1 page of code then the people trying to help have to switch between multiple screenshots
- Screenshots aren't accessible, so some people can't read them

It is always better to share your code as text.

### GitHub PRs are best!

The best way to share your code is using a GitHub pull request. This is because:

- They contain all of the code that you are running
- The code is shared as text so that it is easy to be read by other developers
- The code _should_ be {{<tooltip title="formatted">}}Formatting is the spacing around the code itself, which makes it easier to read.{{</tooltip>}} nicely, if you have the [CYF VS Code extension pack](https://marketplace.visualstudio.com/items?itemName=CodeYourFuture.cyf-extension-pack) installed. (If you don't, please install it now!)
- Other people can leave comments on specific lines of your code to ask questions or point out problems

**Before** you ask a question, make sure you commit and push all of your changes so that the PR contains the same code as what is on your computer.

{{<note type="remember" title="Remember:" >}}

You do **not** need to complete a coursework exercise before making a pull request. You can always push more commits after you have solved the problem.

{{</note>}}

### Share a minimum reproducible example

When it's not possible to link to a PR, and you want to share your code to get help, please prepare a what is called a "Minimum Reproducible Example".

This is when you prepare the minimum working code that shows exactly what the problem is, without any extras.
A volunteer helping you should be able to run and test a minimum reproducible example without needing to do add anything to the code you share.

{{<note type="remember" title="Why?" >}}
Preparing a minimum reproducible example makes it easier for someone helping you to pinpoint exactly what the problem is.
You will get much better help if you do this, and you will learn to solve your own problems.
Also, it is considered a basic sign of respect for those who are volunteering their time to help you.
{{</note>}}

How to make a Minimum Reproducible Example:
1. Follow the guidance in the article
["How to create a Minimal, Reproducible Example"](https://stackoverflow.com/help/minimal-reproducible-example) on StackOverflow.
1. Edit your code down and check that it really doesn't have any code that is irrelevant to the problem
1. You can use one of these services to quickly deploy a minimum example:
	* [codepen.io](https://codepen.io/pen/)
	* [repl.it](https://repl.it/)
	* [codesandbox](https://codesandbox.io/)
	* [jsfiddle](https://jsfiddle.net/)
	* [glitch](https://glitch.com/)

After this is ready you can share a link to your example, or follow the advice below to share the code directly in slack.

### Slack

Sometimes it's not convenient to share a GitHub PR, so code can be shared on Slack directly. Here's some rules for sharing code on Slack:

1. **Never** share a screenshot of your code (we really mean it!)
1. Copy/paste your code into a [code snippet](https://slack.com/intl/en-gb/help/articles/204145658-Create-or-paste-code-snippets-in-Slack). This will make your code look like code, not just a "normal" message
1. Alternatively, if you need to share a larger chunk of code try copy/pasting your code into a [Gist](https://gist.github.com/) and sharing the link

## Checklist

Before asking a question check in with yourself and make sure you have done the following:

{{<note type="exercise" title="I have..." >}}

- [ ] **Done** some _research_ myself
- [ ] **Explained** what I’ve already _tried_ to solve my problem
- [ ] **Stated** what I expected, why I expected it, and the actual results
- [ ] **Formatted** my code
- [ ] **Checked** my spelling and grammar
- [ ] **Pasted** the exact, complete error message, if there is one
- [ ] **Read** my whole question carefully to make sure it makes sense and contains enough information for someone coming to it without any of the **context that I already know**?

{{</note>}}

### After you've asked your question

{{<note type="exercise" title="I have checked..." >}}

- [ ] Are you monitoring your questions and replying to people giving their time to help you?
- [ ] Have you posted an easy to understand answer to your questions that includes everything you learnt

{{</note>}}

## Conclusions

By completing all of these steps you make it really easy for you to **get help quickly** and for **other students to learn from your question**. Together, you and your colleagues will build up a shared knowledge base you can search and share.

You also make yourself a better developer. Describing problems clearly and systematically is an important skill for a developer.
