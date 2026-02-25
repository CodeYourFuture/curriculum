+++
title = "Deploy a frontend and backend"
headless = true
time = 60
facilitation = false
objectives = [
  "Deploy a frontend and backend",
  "Configure a frontend to talk to a specific deployed backend",
]
+++

Websites tend to only be useful if they're running somewhere that people can access them.

We need to deploy our frontend and our backend on the internet so that people can use them.

And they need to know how to talk to each other. In your frontend you probably hard-coded your `fetch` to fetch from `http://127.0.0.1:3000`.

First let's deploy our backend somewhere. Then when we know its address, we can update our frontend to talk to our deployed backend, and then deploy it too.

{{<note type="Exercise">}}
We also need to store our frontend and backend somewhere to deploy them from:
1. Make a new Git repository on your GitHub.
2. Make a directory called `frontend` in the repository, and move your frontend files there.
3. Make a directory called `backend` in the repository, and move your backend files there.
4. Commit your files, and push them to your GitHub repository.
{{</note>}}

{{<note type="Exercise">}}
Follow the [Deploying to CYF's hosted environment guide](/guides/deploying/cyf) to deploy your backend.
{{</note>}}

{{<note type="Exercise">}}
Update your frontend to talk to your deployed backend when it uses `fetch`.

Follow the [Deploying to CYF's hosted environment guide](/guides/deploying/cyf) to deploy your frontend.
{{</note>}}

Make sure you can use your frontend which was deployed to CYF's hosted environment. Try adding a quote, and make sure it shows up in your frontend.
