+++
title = 'Remote Repositories'

time = 10
[objectives]
    1='Link local and remote repositories using the terminal'
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

The next step in the process is linking our repository to a remote so we can push our changes to GitHub.

{{<note type="exercise" title="Exercise: Create a new repository">}}
Create a new repository on GitHub called `git-cli-practice`. This part of the process happens entirely on GitHub so will be exactly the same as it was when we first looked at this.
{{</note>}}

### Connecting a remote

When we want to do something with a remote through terminal we will use the `git remote` command. First we need to `add` the remote to our repository. Copy the url for your repository from GitHub and use it with the command below:

```sh {title="git-cli-practice"}
git remote add origin https://github.com/your-username/git-cli-practice.git
```

- `git remote` tells us we are using a Git command specifically for managing remotes
- `add` tells us we are adding a new remote
- `origin` is the name we attach to the remote
- the final part is the url

{{<note type="tip" title="HTTPS vs SSH">}}
If you are using HTTPS as your protocol you will be asked to enter your username and password _every_ time you push commits to GitHub. If you haven't already [configured SSH](https://docs.github.com/en/authentication/connecting-to-github-with-ssh) now would be an excellent time to do so!
{{</note>}}

We can create as many remotes as we like so long as they have unique names - this allows us to work with different people's forks of the same project. By convention we will keep using `origin` as the name for our remote source control repo. We can see a list of all available remotes by typing `git remote` with no other arguments.

Occasionally we may need to disconnect a remote from our local repository. If that ever happens we can use the command `git remote remove {remote_name}` to break the connection. 