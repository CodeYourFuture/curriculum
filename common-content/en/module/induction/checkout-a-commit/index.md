+++
title = 'Check out a commit'

time ="15"
emoji= '🔍'
[objectives]
    1='Given a remote repository on GitHub, identify the files and folders from any commit in a version timeline'
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++
{{<note title="📌 Disclaimer">}}
This exercise is hosted on the GitHub repository of our partner NGO, **Code Your Future** (UK), and **not** on a MigraCode-owned repository.
We are part of a European network where we share resources and support each other as we share the same mission -  to provide free, high-quality tech education to our communities.

The exercise works as intended — you are free to **fork and clone** the repository as usual, if required by the exercise.

However, please do not make any pull requests to the original Code Your Future repository.
{{</note>}}


Recall that a commit is a snapshot of our project at some point in time.

Therefore, we should be able to check out a previous version of our project and look at the files and folders there.
We can use the Github interface to check out the files and folders at a previous commit.

{{<note type="exercise">}}

Go back to this page https://github.com/CodeYourFuture/education-blog/commits/main

Locate the the commit with hash `4e78b32` and then look for the icon that that says "Browse the repository at this point in the history".
Explore the code at this point in the history. What differences do you notice?

Do the same but for the commit `cd981a0`.

{{</note>}}
