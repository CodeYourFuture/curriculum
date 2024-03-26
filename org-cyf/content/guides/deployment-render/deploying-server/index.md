---
title: Deploy a server
description: How to deploy a server on Render
emoji: 🍦
weight: 2
---

1. Make sure you have connected your GitHub account to Render (see [How to connect your GitHub to Render](connecting-github.md))

2. ![Render dashboard](render-dashboard.png "Log into the Render dashboard")

3. ![New + button on dashboard](dashboard-new-button.png "Click on the New + button")

4. ![Select Web Service from the New + button dropdown](new-web-service.jpg "Click on Web Service from the dropdown list")

5. ![Connect repo to Render](connect-repo.jpg "Select your repo to connect to Render by clicking on the Connect button")

6. ![Name the new web service](name-web-service.jpg "Fill out the Name field, which will be used to label the server within Render")

7. ![Provide a Start Command field for the new web service](start-command.jpg "Provide a Start Command field. This should be in the format `node YOUR_FILENAME.js`, it is likely `node server.js`")

8. ![Create the server by clicking on the Create Web Service button](create-web-service.jpg "Create your new server by clicking on the Create Web Service button")

9. You should have been taken to the Build page for your new server

10. ![Wait for the build to complete](build-successful.jpg "Wait for the build to complete. It should display **Build successful** as well as **Live**")

11. ![URL to the newly deployed server at the top of the Web Service page](url-to-deployed-web-service.jpg "You can view your newly deployed server by clicking the URL at the top of Web Service page")
