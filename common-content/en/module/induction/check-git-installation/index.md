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

Otherwise, you will need to [install](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) it or ask for support on your Slack channel.
