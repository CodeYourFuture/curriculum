+++
title = "Creating a Commit"
time = 25
[tasks]
1 = "Initialize a new Git repository"
2 = "Create and modify files in your repository"
3 = "Stage changes for commit"
4 = "Create your first commit"
5 = "View your commit history"
[build]
  render = 'never'
  list = 'local'
  publishResources = false
+++

A **commit** is a saved version of your project at a particular moment in time. Think of it like saving a document, but with a detailed message explaining what changed and why.

## Understanding the Three States

Git has three states for your files:

1. **Modified** - You changed the file, but haven't saved the version yet
2. **Staged** - You've marked the file as ready to be saved
3. **Committed** - The file is now saved in Git history

```
Working Directory → Staging Area → Git Repository
   (Modified)       (Staged)       (Committed)
```

## Step 1: Create a New Repository

A repository is a folder where Git tracks all your files and their changes.

1. Create a new folder for your project:
   ```
   mkdir my-first-project
   cd my-first-project
   ```

2. Initialize Git in this folder:
   ```
   git init
   ```

You should see: "Initialized empty Git repository"

{{<note type="exercise" title="Create Your First Repository">}}
1. Open your terminal
2. Navigate to your Documents or Desktop folder
3. Run the commands above
4. You've created your first Git repository! 🎉
{{</note>}}

## Step 2: Create a File and Make Changes

Let's create a simple text file:

1. In VSCode, create a new file called `notes.txt`
2. Add some text:
   ```
   My First Git Project
   
   Today I'm learning Git!
   This is my first commit.
   ```
3. Save the file

## Step 3: Check the Status of Your Repository

Before making a commit, let's see what Git sees:

```
git status
```

You should see output like:
```
On branch main

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        notes.txt

nothing added to commit but untracked files present
```

Git is saying: "I see a file called `notes.txt`, but you haven't told me to track it yet."

## Step 4: Stage Your Changes

Now we tell Git we want to save this file. This is called **staging**:

```
git add notes.txt
```

You can also stage all files at once:
```
git add .
```

Check the status again:
```
git status
```

Now you should see:
```
Changes to be committed:
  (use "git rm --cached <file>..." to unstage)
        new file:   notes.txt
```

Git is saying: "I'm ready to save this file. Are you sure?"

## Step 5: Create Your First Commit

Now we actually save the version:

```
git commit -m "Add initial project notes"
```

The `-m` flag means "message". The message describes what you changed.

{{<note type="tip" title="Good Commit Messages">}}
Write messages that explain **what** you changed and **why**:
- ✅ Good: "Add login button to homepage"
- ✅ Good: "Fix bug where users can't save files"
- ❌ Avoid: "stuff", "changes", "update"

Keep messages short but clear (under 50 characters is ideal).
{{</note>}}

## Step 6: View Your Commit History

See all the commits in your repository:

```
git log
```

You should see your commit with:
- Your name and email
- The date and time
- Your commit message

Press `q` to exit the log.

## Workflow Summary

Here's the complete workflow for making commits:

1. **Modify files** in your editor
2. **Check status**: `git status`
3. **Stage changes**: `git add .`
4. **Create commit**: `git commit -m "Your message"`
5. **View history**: `git log`

{{<note type="exercise" title="Make Another Commit">}}
1. Create a new file called `planning.txt`
2. Add some text to it
3. Save it
4. Run: `git add planning.txt`
5. Run: `git commit -m "Add project planning document"`
6. Run: `git log` to see both commits
{{</note>}}

## Common Commands

| Command | What it does |
|---------|------------|
| `git status` | Shows which files have changed |
| `git add <file>` | Stages a specific file |
| `git add .` | Stages all changed files |
| `git commit -m "message"` | Creates a commit with a message |
| `git log` | Shows all commits in order |
| `git diff` | Shows exactly what changed in files |

## Further Reading

- [Atlassian - Git Commit](https://www.atlassian.com/git/tutorials/saving-changes/git-commit)
- [GitHub Docs - Recording Changes](https://docs.github.com/en/get-started/using-git/about-git)
```