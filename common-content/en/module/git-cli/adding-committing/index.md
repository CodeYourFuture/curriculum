+++
title = 'Adding & Committing'

time = 30
[objectives]
    1='Stage a change using the terminal'
    2='Make a commit using the terminal'
    3='Check the status of a repository'
    4='Access the commit history'
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

It's time to create a file to work in. Use the terminal to create `notes.txt` then open the directory in VSCode.

```sh {title="git-cli-practice"}
touch notes.txt
```

Just like last time we'll add some text to the file and save it.

```text {title="notes.txt"}
Git in the Terminal

I'm learning how to use Git from the command line.
It's going well so far!
```

### Staging changes

Let's move back to the terminal. If your terminal may have some sort of indication that something has changed, but it may not. We can always use `git status` again to check the state of our repository. This time the output will look like this:

```console {title="git-cli-practice"}
On branch main

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)
	notes.txt

nothing added to commit but untracked files present (use "git add" to track)
```

This is the terminal equivalent of the big green "U" next to the file name in VSCode. Git is very helpfully telling us the command we need to stage our change so let's go ahead and do it.

```sh {title="git-cli-practice"}
git add notes.txt
```

Now if we check our repository's status again we see a different message:

```console {title="git-cli-practice"}
On branch main

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)
	new file:   notes.txt
```

We can add multiple files at once if we want to by passing multiple arguments to `git add`:

```sh
git add file1.txt file2.txt #...
```

{{<note type="tip" title="Other ways to stage changes">}}
Adding individual files gives us precise control over what we want to stage but it can be a little cumbersome if we have lots of files to stage at once. There are other ways of staging changes which capture multiple files at once:

- `git add .` - This stages all changes in the **current directory**. 
- `git add --all` - This stages all changes in the **current repository**.

At the moment our repository is a single directory so these commands will do the same thing, but as our projects get more complex the distinction becomes useful.
{{</note>}}

### Making a commit

The next step in the process is to commit our staged change. We still need to provide a commit message and it's still very important that it tells our colleagues **what** we changed and **why**. We don't have a text box to type it in though, so how do we supply the information?

We will use the `git commit` command to make the commit but we will use the `-m` flag to provide the commit message.

```sh {title="git-cli-practice"}
git commit -m "adding initial notes"
```

Our commit has now been made.

{{<note type="caution" title="What if I forget the message?">}}
Forgetting to add the `-m` flag is another common error when learning Git. A commit _must_ have a message associated with it, so if you forget to include one you will be prompted to add one before the commit is made. Git will open your default text editor and prompt you to add the message. When you are done you can save and close the file and you will be in the same place you would have been using the flag.
{{</note>}}

Another `git status` check will have us back at the "nothing to commit" stage.

### Viewing the commit history

We no longer have our repository's history represented as a nicely-coloured timeline, but we do still have access to the information. The `git log` command will show us the same information, and will actually give us even more!

```console
commit dc976c03d859a368281ff8875997d1afa6e643d8 (HEAD -> main)
Author: A. User <user@email.com>
Date:   Thu Sep 17 17:10:24 2026 +0100

    adding initial notes
```

We can see all the same information that VSCode provided us with:

- The commit message
- The user who made the commit
- The date and time of the commit
- The branch the commit was made to

We also have a long hexadecimal number on the first line which wasn't there before. This is the **commit hash** which acts as a unique identifier for the commit. Any time we need to refer to a specific commit we use this hash. Typically we only need to provide the first seven characters when doing so.

Commits are listed with the most recent first and you can exit the log by pressing the `q` key.

{{<note type="exercise" title="Exercise: Make another commit">}}
It's time to practice using the CLI by recreating the next stage of our original Git notes.

1. Create a new file called planning.txt
2. Add some text to it
3. Save it
4. Stage your changes
5. Make a commit with the message "Add project planning document"
6. Check the history to see both commits
{{</note>}}