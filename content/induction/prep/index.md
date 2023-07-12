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

What is a code base?

Today our lives depends on countless applications that we access on digital devices. These applications run on these devices, and in order to carry out their tasks they make use of software ( or instructions for machines ). A code base is defined as the all code required to implement an application. So a code base is a collection of files and folders that represent all the code we need for a particular application.

What is a repository?

## Repository

A repository is a place where we store files and folders used to build a software project.W
We can now think about the

## :octo Storing repositories

Github is a web-based platform used to store repositories. Github is a place where repositories are **hosted**. IN other words, a repository for a project is available over a network. THis means a Github repository can be accessed by multiple developers across a network where they can collaborate on the project.

{{<note type="exercise">}}

Follow the link below: figure out the answer to the following questions.
Follow the link to the project.
Answer the following questions:
a) Look at the README.md. Read the instructions on there
a) How many folders are there in the project?
b) How many files are there in the project?
c) How many fi

{{</note>}}

## 📸 Different versions

Building software is difficult: it is easy for developers to make errors and program computers to do the wrong thing.
Imagine a situation where we're making changes to a single file.
We might want to make a change so we have to edit this file and then to fix a mistake. We then save the changes.
This means the old version of the file is overwritten and we're left with the newly saved file.

{{<note type="exercise">}}

Why is it important to build up different versions of a project over time?
If we build up a collection of different versions in our project?

{{</note>}}

Imagine if you want to track the growth of a plant over time.
You could start by taking a photo at the very beginning.You could then add water to the plant to help it grow and then take another photo of the plant. You could continue taking photos this way. Each photo is a snapshot: a record of the plant at a given moment in time.
In a similar way, we want to build up snapshots of our project's repository over time.
can think of a **commit** as a snapshot of our project at a given moment in time.
A **commit** is a version of our code base at a particular point in time: in other words, a commit is a snapshot

{{<note type="exercise">}}

🔍 Figure out

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

{{<note type="exercise">}}

Go back to this page GITHUB_REPO_URL to look at the following:

and look at one of the commit with hash "d3567h" and then look for the icon that that says "Browse the repository at this point in the history".

Do the same but for the commit "edf89".

{{</note>}}

## 🍴 Forking a repository

Often we want to take an existing project and start working on it independtly: in other words, we start making our own versions of the project separate from the original project.

{{<note type="exercise">}}

Visit the following GITHUB_REPO_URL and create a fork of the repository to your local account.

{{</note>}}

## 💻 Working locally

We can use Github to view and manage repositories. However, we can also work with repositories locally. **Locally** means taking a copy of a repository on Github and downloading it on to our local machine where we can look around and make changes without being on Github.

{{<note type="exercise">}}

Figure it out

Follow the following instructions.

1. Open a terminal on your computer.
2. Run the `pwd` command. Check the command output - what does this command tell you? Double **check** you're in the home directory.
3. Run the `ls` command. What does this command tell you?
4. Using the terminal, use a command to create a new directory called "CYF". You'll use this directory to store the files and folders in your project.
5. Change your working directory to the "CYF" directory.

{{</note>}}

## Version control software

**Version control software** is software that allows developers to create and manage the versions of a codebase. **Git** is a particular tye of version control software. **Github** is built using Git. However, we can also Git on our local machine to perform similar tasks as we do on Github. The first task we have is This

> ? How can we get a local copy of an existing Github repository on our local machine.

In other words, we need to get a copy of the codebase on Github on to our device.

{{<note type="exercise">}}

Figure it out

1. Research a command you can use to get a local copy of a repository on your local machine.
   Use this command to check

{{</note>}}

## 📘 Viewing the files

Once you've got a local copy of a codebase on your local machine you can start to view the files and folders in that codebase. You can use a code editor like VSCode; VSCode is an application that enables developers to view and edit files on their local machine.

{{<note type="exercise">}}

Figure out how to open the cloned repository on your local machine in VSCode. Explore the repository in VSCode and use the code editor to look at the various files and folders.

{{</note>}}

## 🏗️ Git model

Let's consider
