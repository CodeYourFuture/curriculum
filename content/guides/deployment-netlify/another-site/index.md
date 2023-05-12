---
id: another-site
title: Deploying Another Site
sidebar_label: Deploying Another Site
weight: 2
emoji: 🚀
---

## First: log into [Netlify](https://www.netlify.com/)

{{<note type="tip" title="Remember">}}remember that you sign in using GitHub{{</note>}}

1. ![Netlify dashboard](01-netlify-dashboard.png "On your Netlify dashboard, click Sites in the top navigation")

2. ![Creating a new site from an existing project](02-sites-page.png "Click on the 'Add new site' button, then 'Import an existing project'")

3. ![Choosing your site's Git provider](03-git-provider.png "This might be familiar now! Click 'GitHub' as your Git provider")

4. ![Choosing the GitHub repo to create your site from](04-choose-repo.png "A pop up will show briefly, but then you'll see a list of your GitHub repos. Click on the relevant one")

5. ![Choosing a branch to create your site from](05-choose-branch.png "Under 'Branch to deploy' choose the 'main' branch of your repo, which is usually called `main`.")
   {{<note type="tip">}}You do **not** need to change anything under "Basic build settings", Netlify will do this for you {{</note>}}

6. Click the "Deploy site" button

## Done!

It make take a few minutes before the deploy is complete. Try refreshing your browser.

<!-- 06-site-is-live.png -->

![The site is live](06-site-is-live.png "When a `.netlify.app` URL appears then the site is live!")
