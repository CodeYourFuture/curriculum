---
title: Deploying Your First Site
description: How to deploy your first site on Netlify
weight: 1
emoji: 🚀
---

1. ![Netlify homepage](01-netlify-homepage.png "Visit https://www.netlify.com/ and click the 'Sign up' button in the top navigation")
1. ![Netlify sign up page](02-netlify-signup.png "Choose 'GitHub' on the sign up page")
1. If you are logged out of GitHub, then log in
1. ![Granting GitHub account permissions to Netlify](03-github-account-permissions.png "Read the permissions and click the 'Authorize netlify' button")
1. If prompted to 'Tell us about yourself', fill out the information. Note: only the 'I'm using Netlify for' question is required, so you can skip everything else if you want
1. ![Choose how to deploy your site on Netlify](04-deploy-first-project.png "Click the 'Import from Git' button")
1. ![Choose your site's Git provider on Netlify](05-git-provider.png "When asked to connect a Git provider, click the 'GitHub' button")
1. ![Granting further GitHub permissions to Netlify](06-github-further-permissions.png "A pop-up window will ask for some more GitHub permissions. Click the 'Authorize Netlify' button")
1. ![Installing Netlify into your GitHub account](07-install-netlify.png "You will be asked to 'Install Netlify'. If you are prompted 'Where do you want to install Netlify', choose _your personal_ GitHub username.") {{<note type="warning" title="Warning">}}Do **NOT** choose Code Your Future's account, as this won't work!{{</note>}}
1. ![Choosing the GitHub repo to create your site from](08-choose-repo.png "Select the GitHub repo to create a site from")
1. ![Choosing the branch to create your site from](09-choose-branch.png "Under 'Branch to deploy' choose the 'main' branch of your repo, which is usually called `main`. You do not need to change anything under 'Customize build settings', Netlify will do this for you")
1. Click the 'Deploy site' button
1. It make take a few minutes before the deploy is complete. Try refreshing your browser, when a `.netlify.app` URL appears then the site is live

![The site is live](10-site-is-live.png)
