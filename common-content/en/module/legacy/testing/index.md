+++
title = "Capturing behaviour in tests"
description="Noticing and copying patterns"
time = 45
emoji= "🧪"
[objectives]
    1="Describe a feature in terms of its behaviour"
    2="Write a test that captures the behaviour of a feature"
+++

> Tests are the best documentation for how a system should behave.

## Describe the Behaviour, Capture your Understanding

Now we have an understanding of the system, the bug, and the intended behaviour, we need to write a test to capture our understanding. There are some [Playwright tests](https://playwright.dev/docs/writing-tests) in the codebase already, but no project has complete test coverage for absolutely every eventuality.

Launch the test runner (look in `package.json` to find the command). Find the file to add your test and describe the behaviour you expect.

### 📝 Activity: Write a test for the hashtag endpoint

```js
// Given I am logged in
// When I navigate to /front-end/#/hashtag/playwright
// Then the number of requests should be fewer than 4
```

<details>
<summary>You might find this a bit tricky if you're new to end to end testing, so here's a test to copy if you get stuck.</summary>

```js
test("should not make infinite hashtag endpoint requests", async ({ page }) => {
  // ===== ARRANGE
  const requests = [];
  page.on("request", (request) => {
    if (
      request.url().includes(":3000/hashtag/playwright") &&
      request.resourceType() === "fetch"
    ) {
      requests.push(request);
    }
  });
  // ====== ACT
  // When I navigate to the hashtag
  await page.goto("/front-end/#/hashtag/playwright");
  // And I wait a reasonable time for any additional requests
  await page.waitForTimeout(200);

  // ====== ASSERT
  // Then the number of requests should be 1
  expect(requests.length).toEqual(1);
});
```

</details>

Your test should be failing because your system is making too many requests. This is a good thing! It means you have a clear goal for your next step.
