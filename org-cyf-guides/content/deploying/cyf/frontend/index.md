---
emoji: 🚀
title: Adding a frontend
description: Learn how to deploy a frontend to CYF's hosted environment
weight: 2
---

## Creating a frontend

**Click "Add New Resource"**

![Click "Add New Resource"](click-add-new-resource.png)

**Add the GitHub repository**

The hosting platform needs to know where to get your backend from.

You probably want to add a "Public Repository" Git Based repository, to tell it your project is in GitHub.

If you want your application to auto-deploy when you push changes to it, you'll need to instead choose "Private Repository (with GitHub App)" and set up a GitHub App yourself.

![Click "Public Repository"](add-github-repo.png)

Open your GitHub in another tab, and **copy the HTTPS Clone URL**

![Copy HTTPS Clone URL](copy-https-clone-url.png)

Go back to the CYF Hosting and **paste the URL into the "Repository URL" field**

![Paste into Repository URL](paste-repository-url.png)

**Click "Check repository"**.

Click **It is a static site?**.

Press **Continue**.

## Configuring the frontend

Most things should Just Work.

There are some things you may want or need to configure. If you do change any, you need to press the **Enter** key to save the change.

If your frontend is located in a subdirectory of the repo, you should set the **Base Directory**.

![Set Base Directory](set-base-directory.png)

You may want to choose a friendly/memorable **Domain**:

![Choose a friendly domain](choose-friendly-domain.png)

If you want to deploy from a branch that isn't `main`, you need to configure this in the Git Source tab:

![Configure git branch](customise-branch.png)

## Add NODE_ENV to Your Project

**Required for:** All Node.js projects (anything that has a `package.json` file) 

### Steps

1. Click on **"Environment Variables"** in the left sidebar
2. Click the **"+ Add"** button

![Environment Variables](click_environment_variables.png)

3. Fill in the form:
   - **Name:** `NODE_ENV`
   - **Value:** `{{team.NODE_ENV}}`
   - Make sure **"Available at Build time" is not checked** ❌  
   - Make sure **"Available at Runtime"** is checked ✅ 

![Fill the new environment variables form](fill_the_form.png)

4. Click **"Save"**

## Deploying the frontend

When everything is configured correctly, press the **Deploy** button:

![Deploy](deploy.png)

Watch the logs. Fix anything that goes wrong. When the deploy is finished, you can test out your frontend.

## Fix MIME types

If your frontend uses `.mjs` files, you need to customise the Nginx configuration so that these are served with the correct MIME type.

Do this by:

Pressing **Generate Default Nginx Configuration**

![Generate Default Nginx Configuration](generate-default-nginx-configuration.png)

Paste this text before the final `}` in the generated config:

```
    # Serve .mjs files with the correct MIME type
    include mime.types;
    types {
        application/javascript js mjs;
    }
```

![Paste MIME type config](paste-mime-type-config.png)

Save the configuration, and deploy again.

We hope to make this step unnecessary in the future.
