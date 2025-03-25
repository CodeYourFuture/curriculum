+++
title = "Extending: Adding Features the Right Way"
time = 90
emoji= "🌱"
[build]
  render = 'never'
  list = 'local'
  publishResources = false
[objectives]
    1="Add new features that respect existing patterns"
    2="Extend legacy code without breaking existing functionality"
    3="Follow the design principles of the original codebase"
    4="Use test-driven development for new features"
+++

{{<note type="tip" title="When in Rome">}}
When adding features to legacy code, write code that looks like it belongs. This isn't the time to introduce radically different approaches or programming paradigms. That would make our code harder to navigate and understand.
{{</note>}}

For Purple Forest, this means:

1. Following the component-based architecture
2. Using the single source of truth pattern for state
3. Extending the API service for data fetching and updates if necessary

In your backlog, you have some more features to add. Let's do one simple feature extension together. Branch from main to `feature/unfollow`.

Add an "Unfollow" button to the Profile component. This button should remove the current user from the list of followers. The button should only appear if the current user is following the user.

{{<tabs name="Feature Extension">}}
===[[Step 1: Describe the feature]]===

Given a profile component sample  
And I am logged in as sample2  
And sample2 is following sample  
When I view the profile component for sample  
Then I should see a button labeled "Unfollow"  
When I click the "Unfollow" button  
Then I should no longer be following sample  
And the unfollow button is not visible
And a "Follow" button should be visible

The tabs contain sample code for each step of this process, but you should write your own implementation, based on your understanding of the Purple Forest codebase.

Before you start coding, open each file you think you will need in your editor. You will need to touch 5-7 files only. Use what you understand about the system to predict which files these will be.

===[[Step 2: Write a test]]===

```javascript
test("allows unfollowing a user from their profile", async ({ page }) => {
  // Given a profile component sample
  // And I am logged in as sample2
  await loginAsSample2(page);
  // And sample2 is following sample
  await page.goto("/front-end/#/profile/sample");
  await page.click('[data-action="follow"]');

  // When I view the profile component for sample
  // Then I should see a button labeled "Unfollow"
  const unfollowButton = page.locator('[data-action="unfollow"]');
  await expect(unfollowButton).toBeVisible();

  // When I click the "Unfollow" button
  await unfollowButton.click();

  // Then I should no longer be following sample
  const followerCount = page.locator("[data-follower-count]");
  await expect(followerCount).toHaveText("0");
  // And the unfollow button is not visible
  await expect(unfollowButton).toBe("hidden");
});
```

Commit your changes to your branch.

===[[Step 3: Implement the UI]]===

#### 🏠 `index.html`

Find the follow button and, and following its patterns, add an unfollow button next to it.

#### 🪪 `components/profile.mjs`

`handleUnfollow`: Add a new function to handle the unfollow action. Find the follow handler and use it as a template.

`createProfile` : For each line that creates the follow button, add a line that creates the unfollow button. For example, after:

`const followButtonEl = profileElement.querySelector("[data-action='follow']");`

add

`const unfollowButtonEl = profileElement.querySelector("[data-action='unfollow']");`

Don't feel tempted to optimise this yet. You can refactor later.

### 🍱 `views/profile.mjs`

You should have exported the `handleUnfollow` function from the profile component. Now you need to import it into the profile view and call it when the unfollow button is clicked.

Find the follow button event listener and add a similar listener for the unfollow button.

Commit your changes to your branch.

Your test is still failing. Make a prediction about what will happen when you click the unfollow button. What will you need to change to make the test pass?

Use your debugging skills to find out.

===[[Step 4: Hook up the back end]]===

(You could have done this from the back to the front, we just happened to start at the front end.)

You have written an interface, but you haven't connected it to anything in the back end! There's an API endpoint in the apiService, but is there an matching endpoint in `main.py`? Go look.

Find the @route for follow in `main.py` and use it to make a new route, directly underneath, called unfollow. Play computer with each line of code so you are sure you understand what is happening.

```python
@app.route("/unfollow/<unfollow_username>", methods=["POST"])
@jwt_required()
def unfollow(unfollow_username):
    username = get_current_user().username

    if unfollow_username not in users:
        return make_response(
            (f"Cannot unfollow {unfollow_username} - user does not exist", 404)
        )

    follows.remove(username, unfollow_username)
    return jsonify(
        {
            "success": True,
        }
    )
```

Will this make the test pass? Make a prediction and then go look.

{{</tabs>}}

### ✍🏾 Document your feature in your PR message.

Once you have got the entire feature working end to end with tests, open a PR with your changes. In your PR message, write everything that you needed to know to build this feature. Be good to the reviewer, they're a good friend of yours.

### 📅 Schedule a revision

Schedule a revision in your calendar for two weeks from today to come back and review your own PR. You might choose to refactor your feature in your review.
