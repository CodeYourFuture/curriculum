+++
title = "Remote Repositories"
time = 20
[tasks]
1 = "Understand what a remote repository is"
2 = "Create a new repository on GitHub"
3 = "Connect your local repository to GitHub"
4 = "Verify the connection"
[build]
  render = 'never'
  list = 'local'
  publishResources = false
+++

So far, your commits are saved on your computer. A **remote repository** is a copy of your project stored on a server (like GitHub), so others can access it and you have a backup.

## Why Use Remote Repositories?

1. **Backup** - Your code is safe on GitHub's servers
2. **Collaboration** - Other developers can access your code
3. **Portfolio** - Employers can see your work on your GitHub profile
4. **Team projects** - Work together on the same codebase

## Local vs Remote

```
Your Computer              GitHub Server
┌─────────────────────┐   ┌──────────────────┐
│ Local Repository    │   │ Remote Repository │
│ (your commits)      │ ← │ (backup)          │
└─────────────────────┘ →  └──────────────────┘
      "pull"               "push"
```

## Step 1: Create a Repository on GitHub

1. Go to [https://github.com](https://github.com)
2. Click the **+** icon in the top right
3. Select **"New repository"**
4. Give it a name (e.g., `my-first-project`)
5. Add a description (optional)
6. Choose **"Public"** (so your portfolio is visible)
7. **Don't** initialize with README, .gitignore, or license
8. Click **"Create repository"**

{{<note type="info" title="Why Not Initialize with README?">}}
If you initialize with files on GitHub, your local and remote repositories will be different, which causes conflicts. Since we already have commits locally, we'll connect them directly.
{{</note>}}

## Step 2: Add the Remote Connection

GitHub will show you a page with instructions. You need to tell your local Git about this remote repository.

In your terminal, run:

```
git remote add origin https://github.com/YOUR-USERNAME/my-first-project.git
```

Replace `YOUR-USERNAME` with your GitHub username and `my-first-project` with your repository name.

**What does this do?**
- `git remote add` - Add a new remote
- `origin` - The name of the remote (default name)
- The URL - Where the remote repository lives

## Step 3: Verify the Connection

Check that the connection was made:

```
git remote -v
```

You should see:
```
origin  https://github.com/YOUR-USERNAME/my-first-project.git (fetch)
origin  https://github.com/YOUR-USERNAME/my-first-project.git (push)
```

This means your local repository knows how to reach GitHub!

## Step 4: Set Your Default Branch

By default, Git uses "main" as the primary branch. Let's set this:

```
git branch -M main
```

## Understanding "origin" and "main"

- **origin** - The name of your remote repository (GitHub)
- **main** - The name of your default branch (like the main storyline of your project)

Think of it like:
- You have a story (your project)
- It lives in two places: Your notebook (local) and a backup server (origin/main)

{{<note type="tip" title="Branches">}}
A branch is like an alternative version of your project. Most projects have a "main" branch (the stable version) and feature branches (experimental versions). For now, you'll only use "main".
{{</note>}}

## Checking Your Remote

If you ever want to see details about your remote:

```
git remote show origin
```

## What's Next?

Now that your repositories are connected, you're ready to:
- **Push** - Send your local commits to GitHub
- **Pull** - Get updates from GitHub
- **Collaborate** - Work with other developers

You'll learn these in the next module!

## Common Commands

| Command | What it does |
|---------|------------|
| `git remote add origin <url>` | Connect local repo to GitHub |
| `git remote -v` | Show all remote connections |
| `git remote show origin` | Show details about origin |
| `git branch -M main` | Set main as default branch |

## Further Reading

- [GitHub Docs - Adding a Repository](https://docs.github.com/en/migrations/importing-your-projects-to-github/importing-a-repository-with-github-importer)
- [Atlassian - Git Remote](https://www.atlassian.com/git/tutorials/syncing)
- [GitHub Docs - Managing Remote Repositories](https://docs.github.com/en/get-started/getting-started-with-git/managing-remote-repositories)
```