+++
title = "Configuring Git with VSCode"
time = 20
[tasks]
1 = "Install Git on your machine"
2 = "Configure Git with your name and email"
3 = "Set VSCode as your default Git editor"
4 = "Test your Git configuration"
[build]
  render = 'never'
  list = 'local'
  publishResources = false
+++

Git is a version control system that helps developers track changes to their code. Before you can use Git effectively, you need to configure it on your machine and connect it with VSCode, your code editor.

## What is Git?

Git allows you to:
- Track every change you make to your files
- Work collaboratively with other developers
- Save different versions of your project
- Revert to previous versions if something goes wrong

## Step 1: Install Git

### On Windows
1. Go to [https://git-scm.com/download/win](https://git-scm.com/download/win)
2. Download the installer and run it
3. Follow the installation wizard (most default options are fine)
4. Open a terminal (or Git Bash) and type: `git --version` to verify installation

### On Mac
1. Go to [https://git-scm.com/download/mac](https://git-scm.com/download/mac)
2. Download and install the package
3. Open Terminal and type: `git --version` to verify installation

### On Linux
Open your terminal and run:
```
sudo apt-get install git
```
Then verify: `git --version`

{{<note type="tip" title="What's a Terminal?">}}
A terminal (also called command line or console) is a text-based interface where you type commands to control your computer. Think of it as giving your computer instructions in its native language.
{{</note>}}

## Step 2: Configure Git with Your Name and Email

Git needs to know who you are. Open your terminal and type these commands (replace the values with your own):

```
git config --global user.name "Your Full Name"
git config --global user.email "your.email@example.com"
```

**Why is this important?** Every commit (version save) will be labeled with your name and email, so others can see who made changes.

{{<note type="exercise" title="Configure Your Identity">}}
1. Open your terminal/command prompt
2. Type the commands above with YOUR name and email
3. After each command, press Enter
4. Verify it worked by typing: `git config --list`
5. You should see your name and email in the output
{{</note>}}

## Step 3: Set VSCode as Your Default Git Editor

When you make a commit, Git might open a text editor to let you write a detailed message. Let's tell Git to use VSCode:

```
git config --global core.editor "code --wait"
```

This tells Git: "When I need an editor, use VSCode and wait for me to save and close it before continuing."

## Step 4: Verify Your Configuration

Run this command to see all your Git settings:

```
git config --list
```

You should see:
- `user.name=Your Full Name`
- `user.email=your.email@example.com`
- `core.editor=code --wait`

{{<note type="tip" title="Troubleshooting">}}
If the configuration doesn't appear, or if you see errors, don't worry. The most important settings are `user.name` and `user.email`. You can always reconfigure later.

**Can't open terminal?**
- Windows: Right-click in a folder and select "Open in Terminal" or press `Win + R`, type `cmd`
- Mac: Press `Cmd + Space`, type "Terminal"
- Linux: Right-click desktop and select "Open Terminal Here"
{{</note>}}

## What's Next?

Now that Git knows who you are, you're ready to:
1. Create a local repository
2. Make commits (save versions of your work)
3. Push your code to GitHub

You'll learn these skills in the next modules!

## Further Reading

- [Git Official Documentation](https://git-scm.com/doc)
- [Atlassian Git Tutorial - Getting Started](https://www.atlassian.com/git/tutorials/setting-up-a-repository)
- [GitHub's Git Guides](https://github.github.io/training-kit/)
```