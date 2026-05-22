+++
title = 'Check Git installation'
time = 15
vocabulary=[]
[tasks]
1='Double check Git is installed on your local machine'
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

### Git

You will use Git continually as a developer. We will cover Git in more depth later in the course. Right now, we will just check that you have it installed.

Open up a terminal and run the command `git --version` to double check you have Git installed.
If it is installed successfully, you should get a version number (which may not be exactly the same as this example, but should look similar):

```
git version 2.40.0
```

Otherwise, you will need to [install](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) it or ask for support on your Slack channel.

> [!TIP]
> If you are working on a library computer, you do not have a terminal, but your github.dev account already has Git installed. (It's called "Source Control".) So you can skip this step.
