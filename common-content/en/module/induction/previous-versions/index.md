+++
title = 'Inspecting previous versions'
objectives = ["Use a Git history to view previous versions of a project", "Find the commit that corresponds to a particular version of a project"]
time ="20"
emoji= '📜'
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


We can view the different commits of a project on Github. This means we can see what the website looked like before, in previous versions.

{{<note type="exercise">}}
Here are some different versions of the same educational backlog.

[Deployed version A educational blog](https://git-demo-week1-version-a.netlify.app/)

<!---
Version A should have a test p element on the index page
-->

[Deployed version B educational blog](https://git-demo-week1-version-b.netlify.app/)

<!---
Version B should have nothing on the index page
-->

[Deployed version C educational blog](https://git-demo-week1-version-c.netlify.app/)

<!---
Version C should be same as production deployment but with some rogue characters on the page
-->

#### Questions

1. What is the difference between Version A and Version B on the index page (the page you first land on after clicking on the link)
1. What is the difference between Version C and the main version of the site.
1. Which commit from the [**education-blog**](https://github.com/CodeYourFuture/education-blog/commits/main) repo correspond to Version C? Remember to check the git history.
1. Which commit from the [**education-blog**](https://github.com/CodeYourFuture/education-blog/commits/main) repo correspond to Version A?

{{</note>}}
