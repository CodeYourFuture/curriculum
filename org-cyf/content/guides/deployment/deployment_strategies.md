---
id: deployment_strategies
title: Deployment strategies
weight: 4
emoji: 🖥️
---

# Deployment strategies

In the previous section, we went through where you can deploy your application. In this guide, we will go through how to do that.

## Manual deployment

Manual deployments are when you need to take action yourself to get your application deployed. This can be anything from running a couple of commands to needing to press a button on a website.

For example in the scenario where we imagined that you have both a development computer and a small server in your house, deploying your latest version manually could be following the steps below:

1. Commit your changes and push them to the `main` branch on the development machine
2. Login onto your server computer
3. Go to the running application's directory
4. Stop the application
5. Pull the latest changes from the `main` branch
6. Run `npm i`
7. Start the application again

Manual deployments done in the way above can be error-prone. For example, if you forget to do step 7 your application will not be running at all at the end. If your provider does not support built-in automated deployments it is usually advised to create scripts that would do all of the steps above, so any time you wish the latest version to be deployed you would just need to run the script. Scripts can fail so you would still need to make sure to check the logs and see if everything went as expected. Trying to access your website after deployment is also a good way to check that everything is in order.

## Automated deployment

Automated deployment or Continuous deployment is whenever your code changes, the deployment flow is initiated automatically. For example, any time your code ends up in the `main` branch of your GitHub repository deployment will commence automatically, and your code will end up on your servers. You can imagine this by someone automatically running the deployment script we've created above whenever your repository changes.

Some frontend and backend providers have GitHub integration and will support automated deployments out of the box. For others, you either need to deploy manually by following a set of steps or automate these manual steps by creating GitHub workflows manually.

## Pull Request checks

While automated deployments might sound scary, for example if you make a mistake in your code automated deployments would deploy that mistake automatically. There are ways to mitigate these risks by adding checks that run after each pull request is created, blocking merging if they fail. Common checks include linting, which would make sure that your code adheres to good coding conventions. Other checks that you can include are running unit, integration and end-to-end tests for each PR making sure that the code you've done passes these requirements.

## Snapshot builds

Another feature that helps make automated deployments less risky is snapshot builds. These are a feature of some providers where they not only deploy your `main` branch but also deploy your other branches as well in a temporary fashion. For example, if you create a new pull request from branch `new-awesome-feature` the provider will deploy this branch separately to your production environment. This will allow you, and anyone assessing your pull request to check how your changes would look like before actually merging them.

Not all providers support snapshot builds. For the ones that do not, a common way to mitigate this is to set up two sets of servers, one called _production_ and the other _staging_ (other common names for this second set are _pre-production_ or _sandbox_). You would then deploy to this environment first, and only after checking that it works as expected continue the deployment to _production_ one. Do note that this usually requires you to set up your environment multiple times, and this will also increase the cost of your setup.
