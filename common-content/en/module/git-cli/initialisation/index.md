+++
title = 'Working with Git in Terminal'

time = 10
[objectives]
    1='Initialise a Git repository from the terminal'
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

So far you have seen two ways of interacting with your file system: your computer's terminal application and its explorer GUI. You probably have a preference and you probably prefer using one over the other for particular tasks. Neither is the "correct" way of working, but it's useful to know about both.

We have similar options for Git. So far we have been working with VSCode's version control tools and they're fine for what we need, but there are some things that are quite fiddly and some things we we can't do at all. In this sprint we'll look at using Git in the terminal and recreate our VSCode workflow, looking at some of the differences as we go.

### Preparation

We're going to recreate our workflow from the Onboarding module and sprint 1 of JavaScript Fundamentals exactly. We'll create the same files and the same commits, but this time we won't touch the source control tab at all.

Start by opening your terminal and creating a directory to work in. Call this one `git-cli-practice`

```sh
mkdir git-cli-practice
```

### Initialising a repository

Everything we did using buttons in VSCode can be recreated using terminal commands. Think back to working with packages last sprint: we knew we were doing something with npm because the commands we used all started with `npm`. In a similar way our Git commands will all start with `git`.

We initialise a new repository using the `init` command in our directory.

```sh {title="git-cli-practice"}
git init
```

Our directory is now a local git repository. We can confirm this using the `status` command.

```sh {title="git-cli-practice"}
git status
```

This should give the following output:

```console
On branch main

No commits yet

nothing to commit (create/copy files and use "git add" to track)
```

We are ready to start committing!

{{<note type="tip" title="Visual indicators">}}
Some terminal applications will give a visual indication when the current directory is a git repository or can be customised to do so. For example, it may include the word "git" and the name of the current branch next to the directory name. Check the documentation for your OS and terminal app to find out how to set this up if you want to.
{{</note>}}

What have we actually done here? The `ls -a` command will list files and folders including anything which has been hidden and if we run it here we will see that a `.git` folder has been created. This is the directory Git uses to store our commit history and everything else it needs to do its job.

{{<note type="caution" title="Initialising in the wrong place">}}
Initialising a repository in the wrong place is a common mistake to make when learning how to use Git in the terminal. It can cause some tricky problems, but it isn't difficult to fix. Just delete the `.git` folder with `rm -r .git` and the repository will be deleted. Remember that this is permanent though - the files will remain but the commit history showing how they changed will be gone.
{{</note>}}