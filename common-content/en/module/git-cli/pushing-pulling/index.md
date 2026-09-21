+++
title = 'Pushing & Pulling'

time = 20
[objectives]
    1='Push to a remote repository from the terminal'
    2='Configure a default upstream'
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

Our repositories are linked and it's time to push our changes. Once again we can condense many button clicks down to a single command in the terminal.

### Pushing changes

The command we will use is `git push`, but it needs two extra pieces of information:

- The remote we are pushing to
- The branch we are pushing

We only have one of each at the moment so our command will be pretty straight-forward. We'll see how to push a different branch in a later section.

```sh {title="git-cli-practice"}
git push origin main
```

This will take every commit on `main` which has not yet been pushed and upload it to the url specified as `origin`. In our case this will be GitHub and if we check the repository now we will see our files there, just like when we used VSCode.

{{<note type="exercise" title="Exercise: Practice the workflow again">}}
1. Create a file called `facts.txt`
2. Add your favourite fun fact to the file
3. Save the file
4. Commit your changes
5. Add another fact. Commit this change.
6. Push to GitHub
7. Go to GitHub and refresh to see your changes!
{{</note>}}

### Default upstream

When we push to GitHub we are pushing to an **upstream** branch. If we are regularly pushing to the same branch we can configure a default so that we only need to type `git push` without the remote or branch name. **Handle with care!** When we are working in the terminal we don't have any of the safety features VSCode has and it would be very easy to accidentally push something to the wrong place if we rely on a default.

We can set a default by using the `-u` flag when we push.

```sh
git push -u origin main
```

After doing this we can just run `git push` without naming a remote or branch.

### Pulling

The commands to pull are similar but use the `pull` keyword instead of `push`.

```sh
git pull origin main
```

It is possible to pull one branch from GitHub onto another locally, eg. pull the remote `main` onto the local `my-feature-branch`. This can lead to conflicts though and is best avoided in favour of keeping each local+remote branch pair in sync.
