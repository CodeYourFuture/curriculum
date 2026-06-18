+++
title = 'Create a work folder'
time = 20
vocabulary=[]
tasks = [
  'Create a named directory to store your work over the course',
]
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

> [!IMPORTANT]
> Make a folder called `{{<our-name>}}` in your home directory. Store all your work for the course in this folder.

You'll need to create a {{<our-name>}} folder to store your projects on the course. You can do this any way you like (e.g. through a file explorer, or using the terminal.)

<details>

<summary>If you want to create the folder using the terminal, expand these instructions.</summary>

1. Open a terminal on your computer.

For each of the steps below, you'll need to use the command line in your terminal.

Use this [cli documentation](https://www.techrepublic.com/article/16-terminal-commands-every-user-should-know/) to remember terminal commands.

2. In your terminal, **p**rint your current **w**orking **d**irectory (by running `pwd`). Make sure you're in your home directory. If you're not, you may need to **c**hange **d**irectory with the command `cd` to your home directory.

3. **M**a**k**e a new **dir**ectory called `{{<our-name>}}` in your home directory (by running `mkdir {{<our-name>}}`).

4. Check that the directory got created by **l**i**s**ting the children of the directory (by running `ls`) - you should see `{{<our-name>}}` there.

5. **C**hange **d**irectory into the `{{<our-name>}}` directory by running `cd {{<our-name>}}`.

6. Double check you're in the right place by **p**rinting your current **w**orking **d**irectory (by running `pwd`) again.

</details>

> [!TIP]
> If you're working on a library computer, skip this step. You will store your work in your GitHub account.
