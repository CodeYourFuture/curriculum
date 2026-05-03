# User Needs and Acceptance Criteria

## Learning objectives

```objectives
- [ ] Identify user personas.
- [ ] Define user needs for different user personas.
- [ ] Identify the benefits of using Who/What/Why in user stories.
- [ ] Write acceptance criteria in Given/When/Then format.
- [ ] Identify the benefits of using Given/When/Then in acceptance criteria.
```

## Introduction

When designing and building systems, understanding the customer is critically important. If we don't understand the customer, we may build something that solves the wrong problem, or something that the user can't use.

In this workshop, we are going to think about designing a digital system for a pub. We will think about different user personas, their needs, and how we may be able to solve them.

## Identify User Types (5 minutes)

Get in small groups or pairs to brainstorm and list at least 3 different users of a pub system.

<details>

<summary>Expand for some possible users - compare your list to these when you're done</summary>

* Pub Customer (guest)
* Bartender/Waitstaff
* Pub Manager/Owner
* Kitchen Staff
* Supplier/Delivery Person

</details>

## Define User Needs (10 minutes)

For each user type, take 10 mins to discuss and write down their main needs or goals when interacting with the pub's system.

<details>

<summary>Expand for volunteer facilitation hints</summary>

Examples:

| User Type     | Needs / Goals                                                   |
| ------------- | --------------------------------------------------------------- |
| Customer      | Browse menu, place order, reserve table, pay bill, leave review |
| Bartender     | View orders, update order status, manage reservations           |
| Manager/Owner | View sales reports, manage menu, oversee staff schedules        |
| Kitchen Staff | Receive new orders, update order status                         |
| Supplier      | Schedule deliveries, update inventory                           |

</details>

## Write User Stories (10 minutes)

Select at least one user type within your groups and write a user story for them, focusing on a specific need.  

<details>

<summary>Expand for volunteer facilitation hints</summary>

Format could be as follows:

* "As a _user type_, I want to _do something_, so that _benefit_."

Example could be as follows:

* "As a customer, I want to reserve a table online, so that I can ensure seating when I arrive."

</details>

## Acceptance Criteria with Gherkin (15 minutes)

For each user story, write acceptance criteria using [Gherkin syntax](https://cucumber.io/docs/gherkin/reference/).

<details>

<summary>Expand for volunteer facilitation hints</summary>

Make sure Gherkin syntax is clear for trainees as below:

```
Given [context]
When [action]
Then [expected outcome]
```

Ask trainees to think of examples if they’re stuck. See below for examples:

* Customer Table Reservation:

```
Given I am a registered customer on the pub's website
When I select a date and time and submit a reservation request
Then I should see a confirmation message with my reservation details
```

* Bartender Viewing Orders:

```
Given I am logged in as a bartender
When a new order is placed by a customer
Then I should see the new order appear at the top of my orders list
```

</details>

## Group Sharing & Discussion (10 minutes)

Take {{<timer>}}5{{</timer>}} to present your user stories and acceptance criteria.

Discuss what makes acceptance criteria clear and testable for {{<timer>}}5{{</timer>}}.

<details>

<summary>Expand for volunteer facilitation hints</summary>

Make sure the trainees receive peer feedback and volunteer guidance.

</details>

## Wrap-Up (5 minutes)

As a group, summarise the key takeaways and discuss why applying these practices in future projects could be useful.

<details>

<summary>Expand for volunteer facilitation hints</summary>

Make sure we've covered user-centric thinking, specificity in requirements, clarity in acceptance criteria.

</details>
