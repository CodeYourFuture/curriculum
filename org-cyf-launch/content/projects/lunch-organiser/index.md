+++
title = "Lunch Organiser"
+++

## Business problem

In CodeYourFuture's London office, we have lots of trainees on different courses. Sometimes we're running one course, sometimes we're running five. Organising lunch for them is often complicated. It involves coordinating between a lot of different people and tracking lots of input.

The process currently is roughly:
1. Someone has to know whether there are leftovers in the kitchen from the last week - this may reduce how much we order.
2. We need to know what classes are happening, and how many people we expect to show up. (Sometimes it's just ITP, sometimes there are four other courses going on!)
3. We need to know any dietary requirements of attendees. We don't necessarily need to know _every_ dietary requirement (e.g. if we get lots of vegetarian food, that happens to cover several dietary requirements). But we do need a general idea, and _some_ are quite specific.
4. Someone is responsible for creating a lunch order online (generally from a supermarket).
5. A CYF staff member creates the order on the supermarket website and pays it.
6. Someone checks the order is correct before the deadline, and suggests amendments.
7. Someone is at the office to receive the order. (Ideally their phone number is attached to the order.)
8. The community provide feedback on what could be better next time.

This is currently a very manual process. Lots of Slack messages are exchanged. Most people don't know the status of things (so people may re-do work, or worry it won't get done). We probably ask people for their dietary requirements too often, or don't ask enough people about them or both.

We would like to automate this as much as possible. Actually ordering lunch is hard to automate - supermarkets don't tend to have APIs. But we control everything _else_. Let's simplify this and save manual work.

### Requirements

An application to manage lunch orders. The backend should store and persist data. The frontend could be a web app, a Slack bot, or something else.

People who are participating in lunch ordering should know what the current status of the lunch order is, what they need to do, or what is blocking progress.

If action is expected from someone, they shouldn't need check to know this - they should be notified (perhaps by email or Slack) telling them there's something for them to do.

Data privacy is important for this project. Our trainees' personal data, including their names and dietary requirements, and our class venues are not public.

Personal trainee data should only be exposed to those who need to know it (i.e. people who are actually planning or doing the order).

Any class venue data can be exposed to people in the CYF community, but should not be visible outside of the CYF community.

As will all projects, it should work, be accessible, have enough testing, and be deployed. We want to use this at CYF, so it needs to be easy for CodeYourFuture volunteers to keep deployed, maintain, and maybe even improve.
