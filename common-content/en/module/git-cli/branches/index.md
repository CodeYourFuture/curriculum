+++
title = 'Branching & Merging'

time = 20
[objectives]
    1='Create a branch in a repository from the terminal'
    2='Merge two branches in the terminal'
    3='Delete a branch'
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

By now you have had lots of experience creating branches and raising pull requests on GitHub. When it comes to merging work we won't make any fundamental changes: we will still use Github to manage PRs and to complete any merges when working on group projects. Pull requests are a feature of GitHub specifically rather than Git so we can't recreate them exactly using the terminal, but in this section we'll look at how we can create and merge branches.

### Creating a branch

For this section we'll revisit the educational blog from the [JavaScript Fundamentals module](/itp/javascript-fundamentals/sprints/1/prep/). Open the project in VSCode and navigate to that directory in your terminal.

We're going to follow a similar workflow to begin with by creating a branch. For this we're going to use the `git branch` command along with the name we want to give our branch. Since this will be our second update we'll call it `update-blog-2`.

```sh {title="education-blog"}
git branch update-blog-2
```

At this point we diverge from how VSCode handled the process because we haven't actually switched to our new branch, only created it. We can confirm this by typing `git branch` without any arguments and checking the output.

```console
* main
  update-blog-1
  update-blog-2
```

We have our `main` branch, our new branch and `update-blog-1` from our previous Git work. The asterisk indicates which branch we are currently working on. If we want to work on our new branch we can move over to it using `git switch`.

```sh {title="education-blog"}
git switch update-blog-2
```

Checking `git branch` will confirm the change.

```console
  main
  update-blog-1
* update-blog-2
```

If we know we're going to switch immediately we can do both steps at once by adding the `-c` flag to the switch command and providing the name of the branch.

```sh
git switch -c update-blog-2
```

{{<note type="exercise" title="Exercise: Update the blog">}}
Add some more unblocking tips to the list and commit your changes.
{{</note>}}

### Merging

With the tools we have had at our disposal so far, at this point we would publish our branch to Github and raise a pull request. Once everything was reviewed and merged we would pull the updated version of `main` and continue. To be clear, **this is still the recommended way of working!**

It's not the only way of working though. We can use `git merge` to complete the merge locally and bypass Github. This has its drawbacks though, in particular the fact it is only possible to get your changes reviewed if your colleague is in the room with you. 

We need to think carefully about how we manage the merge. We don't want to end up with any broken code on our `main` branch, so if there are any issues it's better to sort them out before they get there. How will we know there are going to be issues?

Before merging our branch onto `main` we can discover any conflicts by merging `main` onto our branch first. If there are problems (such as merge conflicts) we fix them on the branch and leave `main` unpolluted for everyone else. Once the conflicts are resolved we merge our changes to `main`.

First we need to ensure we are on the correct branch. Use `git branch` to check if you are unsure. Then use `git merge` and the name of the branch you want to merge.

```sh {title="education-blog"}
git merge main
```

We are asking Git to merge the _named_ branch onto the _current_ branch. If there were commits on `main` which we did not have on `update-blog-2` they would be moved across, but since there aren't we will see a message confirming this.

```console
Already up to date.
```

The next step is switching to `main`:

```sh {title="education-blog"}
git switch main
```

Pause for a moment and look at the files in VSCode - see how the new tips you added have disappeared? That commit only exists on `update-blog-2`, so the changes we made don't show up on `main` yet. We can confirm this by checking `git log` and seeing that the commit isn't listed.

Next merge our working branch:

```sh {title="education-blog"}
git merge update-blog-2
```

This time we do have some commits to merge so we get a summary of the changes:

```console
Updating 4244c24..438484a
Fast-forward
 blogs/1.md | 4 +++-
 1 file changed, 3 insertions(+), 1 deletion(-)
```

And now our changes are visible in VSCode while we're on `main`.

### Deleting branches

When working on longer projects we will likely end up with a _lot_ of branches. This can get very confusing very quickly so we're going to practice good Git hygiene by deleting branches we no longer need.

We're going to use the `git branch` command again but this time we're going to add a flag. By including `-d` before a branch name we will delete the branch locally, but **not** on Github. Likewise if we delete a branch on Github the local version will remain. Let's delete `update-blog-2` since we're done updating our list for now.

```sh {title="education-blog"}
git branch -d update-blog-2
```

Checking with `git branch` will confirm the branch is gone.

{{<note type="caution" title="Make sure you mean to do this!">}}
Like most other things in the terminal, **this is permanent!** Make sure you're _definitely_ done with the branch before deleting it.
{{</note>}}