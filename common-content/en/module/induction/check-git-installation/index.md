+++
title = 'Check Git Installation'
time = 15
vocabulary=[]
[tasks]
1='Check Git is installed on your local machine'
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

### Git

{{<note type="definition" title="Definition: Git">}}

Git is **version control software** that allows developers to create and manage different versions of a project.

{{</note>}}

You will use Git continually as a developer. Before we can do any work with it we need to check that you have it installed.

Open your computer's terminal application and run the command `git --version` to double check you have Git installed.
If it is installed successfully, you should get a version number (which may not be exactly the same as this example, but should look similar):

```
git version 2.40.0
```

If Git is not installed, you will see an error instead, saying that `git` was not found or not recognised. In that case you will need to [install git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) or ask for support on your Slack channel.

{{<note type="tip" title="Installed Git but the command still fails?">}}
A terminal that was already open before you installed Git cannot see it. After installing:

1. Close your terminal completely and open a new one.
2. Run `git --version` again.
3. If it still fails, restart your computer and try once more.

If VSCode was open while you installed Git, fully quit and reopen it too, or it will not find Git either.
{{</note>}}
