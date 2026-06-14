<!---
title='Break it down'
time='120'
facilitation=true
[objectives]
+++
-->

# Break it down

https://www.whatshalfway.com/

Here is an app that helps users find a halfway point to meet up.

> How does this work?

> How would you build this in real life?

You have probably done lots of tutorials where you follow along and copy what the teacher shows you, and this does teach you some simple things about programming. But it doesn't teach you how to solve your own problems or build your own products, and it doesn't help you when things go _wrong_. To understand how to develop really new things, you have to practice thinking up your own solutions and trying (and failing a lot).

So let's start today by "reverse engineering" an existing app together.

Start by identifying the core functionality of this app. Forget about the web page, or the fonts, or the name... what does this thing REALLY DO? **What is the simplest version of that function you can build and test.**

Split into groups of 4-6. Choose one of the group to wear the User Hat. If in doubt, blocked, or making an assumption, ask the User what to do.

## User Stories

<!--{{<note type="activity" title="Spike on User Stories, 10m" >}}-->

1. Set a [timer for 10 minutes](https://www.google.com/search?q=timer+for+10+minutes).
2. Define a User Story:
   "As a user, I want to do _x_ so that I can _y_."
   <!--{{</note>}}-->

<details>
<summary>Perhaps you said something like...
</summary>

- As a user, I want to draw a line and cut it in half.
- As a user, I want to find the midpoint between me and my friend so we can meet for lunch.
- As a user, I want to enter two different locations and receive information about the geographic midpoint between them.

</details>

---

Put all your user stories together and vote on the best one. Now let's spike on Acceptance Criteria.

## Acceptance Criteria

<!--{{<note type="activity" title="Spike on Acceptance Criteria, 10m" >}}-->

1. Set a [timer for 10 minutes](https://www.google.com/search?q=timer+for+10+minutes).
2. Define Acceptance Criteria (Given/When/Then):

   _Given_ some scenario, _when_ I do something, _then_ I expect some outcome.

<!--{{</note>}}-->

<details>
<summary>Perhaps you said something like...
</summary>

- _Given_ that I have two distinct geographical locations,
- _When_ I input these locations into the application,
- _Then_ I should be provided with the geographic midpoint between the two locations.

</details>

---

Put all your acceptance criteria together and vote on the best one. Now we understand it more clearly, let's spike on a test for this feature.

## Test

<!--{{<note type="activity" title="Spike on Test, 15m" >}}-->

1. Set a [timer for 15 minutes](https://www.google.com/search?q=timer+for+10+minutes).
2. Define a test: - What is the simplest test you can write to prove that your acceptance criteria is met? - What is the simplest code you can write to pass that test?
<!--{{</note>}}-->

<details>
<summary>Perhaps you said something like...
</summary>

```js
const calculateMidpoint = require("./calculateMidpoint");

test("calculateMidpoint calculates the correct midpoint", () => {
  expect(calculateMidpoint(51.5074, 0.1278, 48.8566, 2.3522)).toEqual({
    lat: 50.182,
    lon: 1.24,
  });
});
```

This test defines two locations, London and Paris, and expects the midpoint between them to be calculated to three decimal places.

You might not have chosen to use longitude and latitude at all, so your test might look different. That's ok! The important thing is that you have a test for the acceptance criteria you defined.

</details>

---

Now that we have a test, we can write the simplest code to pass that test.

## Code

<!--{{<note type="activity" title="Spike on Code, 15m" >}}-->

1. Set a [timer for 15 minutes](https://www.google.com/search?q=timer+for+10+minutes).
2. Write the simplest code to pass your test.
<!--{{</note>}}-->

<details>
<summary>Perhaps you said something like...
</summary>

```js
function calculateMidpoint(lat1, lon1, lat2, lon2) {
  // Compute average latitude and longitude
  const mid_lat = (lat1 + lat2) / 2;
  const mid_lon = (lon1 + lon2) / 2;

  return {
    lat: parseFloat(mid_lat.toFixed(3)),
    lon: parseFloat(mid_lon.toFixed(2)),
  };
}

module.exports = calculateMidpoint;
```

This code takes two locations, calculates the average latitude and longitude, and returns the midpoint between them, more or less. It's more complicated to calculate the midpoint between two points on a sphere accurately.

So we have discovered something we need to ask our user about:

> how accurate do you need this to be?

Remember we are writing the simplest thing that can possibly _work_. For now, we'll use this rough calculation.

</details>

---

OK that's a spike! We have a test and some code that passes that test. We can go forward and build this app for the rest of the day if we like. But first, let's do it again with a different product.

## Practice makes permanent

Go to the [CYF Product Factory](https://curriculum.codeyourfuture.io/workshops/breakdown) and get a random product. Break it down into user stories, acceptance criteria, tests, and code.

1. Discover the core functionality of the product.
2. Write a user story for that functionality.
3. Write acceptance criteria for that user story.
4. Write a test for that acceptance criteria.
5. Write code to pass that test.
