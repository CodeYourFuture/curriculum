+++
title = 'prep'
description = 'You can use these notes to prepare for the first in-person session of the software development course'
layout = 'prep'
emoji= '📝'
menu_level = ['module']
weight = 1
backlog= 'Module-Induction'
backlog_filter= 'Induction'
+++

# Notes

## Learning objectives

Define a code base
Define a repository
Explain why we use Github
Given a remote or local repository, identify the number of commits
Given a remote or local repository, identify the author, time and message of a given commit
Given a remote or local repository, identify the files and folders from any commit in a version timeline
Describe the purpose of version control
Explain the difference between Git and Github
Get a local copy of a repository on your local machine
Given a local repository, make a local change and inspect the Source Control panel in VSCode
Given a local repository, make some local changes and commit those changes

## 📝 CYF blog

Imagine a scenario where 2 people are writing a blog.
Ahmed and Naima are co-authoring an educational blog to document the things they're struggling with at CYF.

The published blog is live here 👉 [CYF educational blog](https://git-demo-week1.netlify.app/)

{{<note type="exercise" title="exercise">}}
Try exploring the site above. Try clicking around different links on the site and check to see if they're working.
{{</note>}}

This is their current work process for developing the blog together:

- writing the blog in a single file by sharing a **single** computer
- saving multiple versions of the file on a single computer
- they take it in turns to the use the computer at different points in the day

At the moment, the computer has a folder with the work that looks like this:

![different-blog-versions](different-blog-versions.png)

{{<note type="activity" title="activity 1.1">}}

Describe some of the challenges that Ahmed and Naima face when trying to write a blog together in this way.

{{</note>}}

## ⌛ Shared history

> To improve their way of working, Ahmed and Naima realise they need the following:
>
> - want to see a history or timeline of our project as it changes over time
> - a way to create and manage the different versions in the history of our project
> - a way to share the history of the project between different users

{{<note type="activity" title="activity 1.1">}}

To manage the different versions of the blog project, they decide to use Git.

{{</note>}}

{{<note type="definition">}}

Git is **version control software** that allows developers to create and manage different version of a project

{{</note>}}

In Git, we create different versions of a project over time by creating a **commit**.

A **commit** is a snapshot of our project at a particular point in time. You can also think of a **commit** as a particular version of a project in time.

**Commits** will give us the following information👍

- what changed in this commit
- who created the change
- what time the change happen
- what the previous commit was

A typical timeline of commits might look like this:

![commit-history](commit-history.png)

{{<note type="exercise" title="exercise">}}

## Explore 🔍

Go to the following link: https://github.com/CodeYourFuture/git-demo/commits/main

Try answering the following questions:

Go to the commit that says "add test p element to index page"

![highlight-2nd-commit.png]

Try answering the following questions:

- How many files were changed in this commit?
- Who created the change?
- What time did the change take place?

{{</note>}}

## 🗄️ 🌐 Sharing histories

One of the previous needs earlier was as follows:

> a way to share the history of the project between different users

We want to develop a project ( like the blog ) but we will also want to collaborate with other users. So we can also store our projects and their history online.

**Github** is an online platform where teams can store their projects and histories online.
On Github we call our project and its history a **repository**.

{{<note type="exercise" title="Exercise 1.1">}}

## Explore 🔍

⚠️ In this exercise, you'll need to explore a Github repository.
You'll need to look around and figure out where to find different files and find out information about them.
You won't be expected to know what the files do at this stage.

Go to the following link: https://github.com/CodeYourFuture/git-demo

It will take you to the Github repo called **git-demo**.

Follow the link below: figure out the answer to the following questions.
Follow the link to the project.

Answer the following questions:

a) Look at the README.md. Read the instructions on there?
b) How many files are there inside the `blogs` folder?
c) How many lines are there in the **package.json**?
d) Find the file with the blog content you can see on the [live website here](https://git-demo-week1.netlify.app/)

{{</note>}}

## Different versions

We have a need for a way of creating and managing different versions of our project over time.

{{<note type="exercise" title="exercise">}}

Here are some links to the different versions of the same CYF educational backlog

[Version A educational blog](https://64b6fd80d14d510008aab4aa--git-demo-week1.netlify.app)
[Version B educational blog](https://64b6f8e6044ccc0742386430--git-demo-week1.netlify.app/)
[Version C educational blog](https://64b6fd80d14d510008aab4aa--git-demo-week1.netlify.app/)

Answer the following questions:
a) What is the difference between Version A and Version B on the README page.

{{</note>}}

{{<note type="exercise" title="Exercise">}}

🔍 In this activity, you'll need to figure out how to do something.

Go to the REPO_URL

Head to Github, on the web page, find the place where it tells you the number of commits and then visit this page.
On this page, try figuring out the following:

a) What is the URL for this page?
b) When was the first commit created (this is the earliest version of the project)
c) Who was the author of the most recent commit?
d) What is the title of commit "786
d) What **change** was introduced in the second commit?
e) What problem did commit "dfef8" solve? What change was introduced to solve this problem?

{{</note>}}

## 🔍 Check out a commit

What is _in_ a commit? We can recall that a commit is a snapshot of a codebase. Therefore, we should be able to check out the codebase at a given point in the timeline and look at the files and folders there. We can use the Github website to not only see the different **commits** in our project - we can also check out the files and folders at a given point in the history.

{{<note type="exercise" title="Exercise 4.1">}}

Go back to this page GITHUB_REPO_URL to look at the following:

and look at one of the commit with hash "d3567h" and then look for the icon that that says "Browse the repository at this point in the history".

Do the same but for the commit "edf89".

{{</note>}}

## 🍴 Forking a repository

Often we want to take an existing project and start working on it independently: in other words, we start making our own versions of the project separate from the original project.

{{<note type="exercise" title="Exercise 5.1">}}

Visit the following GITHUB_REPO_URL and create a fork of the repository to your local account.

{{</note>}}

## 💻 Working locally

We can use Github to view and manage repositories. However, we can also work with repositories locally. **Locally** means taking a copy of a repository on Github and downloading it on to our local machine where we can look around and make changes without being on Github.

{{<note type="exercise" title="Exercise 6.1">}}

🔍 Figure it out - in this exercise, you'll need to figure out how to do something. Even though it is a little unfamiliar.

Firstly,

1. Open a terminal on your computer.

For each of the steps below, you'll need to use your terminal to carry out the commands below.
You can use the [documentation](https://www.techrepublic.com/article/16-terminal-commands-every-user-should-know/)

2. Print your current working directory.
3. List the files and folders in your current working directory.

You'll need a place to store the repositories you'll use on the CYF course.

4. Make a new directory called `cyf` in your home directory.
5. Change directory into the `cyf` directory.
6. Using the terminal, use a command to create a new directory called "CYF". You'll use this directory to store the files and folders in your project.
7. Change your working directory to the "CYF" directory.

{{</note>}}

## Going local

However, we can also use Git on our local machine to perform similar tasks as we do on Github. The first task we have is This

> ? How can we get a local copy of an existing Github repository on our local machine.

In other words, we need to get a copy of the codebase on Github on to our device.

{{<note type="exercise" title="Exercise">}}

## 👣 Follow the steps

You'll need to follow the steps below so we can achieve the following goal:

> 🎯 Goal: Clone a remote repository to our local machine

You'll need to clone the following repository 👉 https://github.com/Co deYourFuture/cyf-demo-repo

To achieve this goal, follow through the steps in this video 👉 https://www.youtube.com/watch?v=ILJ4dfOL7zs

{{</note>}}

## 📘 Viewing the files

Once you've got a local copy of a codebase on your local machine you can start to view the files and folders in that codebase. You can use a code editor like VSCode; VSCode is an application that enables developers to view and edit files on their local machine.

{{<note type="exercise" title="Exercise">}}

Figure out how to open the cloned repository on your local machine in VSCode. Explore the repository in VSCode and use the code editor to look at the various files and folders.

{{</note>}}
