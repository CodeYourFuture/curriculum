+++
title = "Configuring Git with VSCode"
time = 20
[tasks]
1 = "Configure Git with your name and email"
2 = "Set VSCode as your default Git editor"
3 = "Test your Git configuration"
[build]
  render = 'never'
  list = 'local'
  publishResources = false
+++

Git is a version control system that helps developers track changes to their code. Before you can use Git effectively, you need to configure it on your machine and connect it with VSCode, your code editor.

### What is Git?

Git allows you to:
- Track every change you make to your files
- Work collaboratively with other developers
- Save different versions of your project
- Revert to previous versions if something goes wrong


### Step 1: Configure Git with Your Name and Email

We installed Git in a previous section but before we can use it we needs to let it know who we are. Open your terminal and type these commands (replace the values with your own):

```
git config --global user.name "Your Full Name"
git config --global user.email "your.email@example.com"
```

**Why is this important?** Every commit (version save) will be labeled with your name and email, so others can see who made changes.


{{<note type="tip" title="What's a Terminal?">}}
A terminal (also called command line or console) is a text-based interface where you type commands to control your computer. Think of it as giving your computer instructions in its native language.

We will learn a lot more about the terminal in future sprints.
{{</note>}}


### Step 2: Set VSCode as Your Default Git Editor

When you make a commit, Git might open a text editor to let you write a detailed message. Let's tell Git to use VSCode:

```
git config --global core.editor "code --wait"
```

This tells Git: "When I need an editor, use VSCode and wait for me to save and close it before continuing."

### Step 3: Verify Your Configuration

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
- Mac: Press `Cmd + Space`, type "Terminal"
- Linux: Right-click desktop and select "Open Terminal Here"

If the output doesn't make sense or you can't find what you're looking for you can post a screenshot in Slack and ask for advice. You can also ask a volunteer in class.
{{</note>}}

### What's Next?

Now that Git knows who you are, you're ready to:
1. Create a local repository
2. Make commits (save versions of your work)
3. Push your code to GitHub

You'll learn these skills in the next sections!

### Further Reading

- [Git Official Documentation](https://git-scm.com/doc)
- [Atlassian Git Tutorial - Getting Started](https://www.atlassian.com/git/tutorials/setting-up-a-repository)
- [GitHub's Git Guides](https://github.github.io/training-kit/)
