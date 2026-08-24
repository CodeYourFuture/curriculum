+++
title = "Practising Git Fundamentals"
time = 50
objectives = [
  "Create a new directory",
  "Create files in the directory",
  "Initialise a Git repository",
  "Edit files in a Git repository and commit the changes",
]
[build]
  render = "never"
  list = "local"
  publishResources = false
+++

Git is going to be a core part of your lives as developers. In this workshop we're going to practice the basics again: adding, committing and pushing files.

{{<note type="tip" title="Hint: Use the notes!">}}
This isn't a memory test! If you can remember how to complete all of these steps that's great, but if you can't it's ok. You can refer back to the notes in the [prep section](/itp/onboarding/prep) if you need a reminder.

Before you do that, why not ask your colleagues if you need help? You can ask the volunteers too!
{{</note>}}

### Step 1: Setting up the repository

Before we can start making commits we need a repository to work in.

1. Create a folder and give it a name which makes it clear what it is for. How about something like `onboarding-git-workshop`?
2. Use VSCode to initialise a Git repository in your new directory.

### Step 2: Making some commits

It's time to create a file and add some information to it.

1. Create a file called `about-me.txt`.
2. Stage the change and make your first commit.
3. Add three pieces of information about your self to the file. After each new thing you should stage the change and make a commit.

<details>
<summary>Example:</summary>

```text {title="about-me.txt"}
My name is Colin.
I live near Edinburgh.
My favourite colour is purple.
```
</details>

### Step 3: Get some feedback

Before we go any further let's pause for a moment. One of the main things we will use Git for is collaborating with others, which means our colleagues need to be able to understand our work. A good commit message should make it clear what changes were committed without needing to open any files to check.

Open the source control tab in VSCode so you can see the commit history. Find someone else in the group and ask them to look at it. See if they can tell what you added to the file in each commit. If they can't then your commit messages need to be clearer.

### Step 4: Act on the feedback

Let's create some more commits, but this time we'll make sure they explain what we're doing!

1. Create another file called `todo-list.txt`
2. Stage and commit the change
3. Add three things to your to-do list. After each one stage and commit the change, but think about the feedback you got and apply it here.

<details>
<summary>Example:</summary>

```text {title="todo-list.txt"}
- Do laundry
- Finish backlog tickets
- Go to the shop for milk
```
</details>

### Step 5: Push to GitHub

It's time to share your work with the world!

1. Go to GiHub and create a new repository
2. Link your GitHub repository to your local repository using VSCode
3. Push your files to the remote repository

### Extension Task

If you finish everything else you could try replacing the text files with [markdown](https://www.markdownguide.org/). Markdown is a very common document format - in fact it's what this whole course is written in!