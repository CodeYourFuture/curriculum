+++
title = "Virtual environments"
headless = true
time = 30
facilitation = false
objectives=[
    "Create a virtual environment with some dependencies installed.",
]
+++

We often use libraries in Python.

Python handles dependencies differently from JavaScript, but they have similarities.

We've seen that in JavaScript we write down what dependencies we need in a `package.json` file, and when we run `npm install` they will get fetched into a folder called `node_modules`.

In Python, we write down what dependencies we need in a file called `requirements.txt`. It doesn't contain JSON, it just contains a list of dependencies, one per line.

### Virtual environments

To install the dependencies, we need to make something called a virtual environment, where they will get installed to.

{{<note type="Comparing virtual environments and node_modules">}}
A virtual environment is like a `node_modules` folder - it contains all of the dependencies that are installed into it.

When we run `node`, `node` _automatically_ looks for a `node_modules` folder to find dependencies in.

When we run `python3`, `python3` _doesn't_ automatically look for a virtual environment. We need to _activate_ it - tell `python3` which virtual environment we want to use.

There are trade-offs here:
* `node` uses a _convention_ to locate installed dependencies - we don't need to _do_ anything except put the folder in the right place, and it will automatically get used.
* `python3` uses _configuration_ to locate installed dependencies - we need to _configure_ which virtual environment it should use by activating it.

One of the benefits of using configuration is that we could have different virtual environments with different versions of the same dependencies (e.g. to test a version upgrade), and we can switch between them.

One of the drawbacks of using configuration is that we need to do the configuration - we need to explicitly activate the virtual environment for it to be used.
{{</note>}}

First we need to _create_ the virtual environment. We do this by running `python3 -m venv .venv`. This will create a virtual environment in a directory named `.venv`. We could actually create it anywhere, e.g. we could run `python3 -m venv /tmp/python_modules` to create it in a directory named `/tmp/python_modules`. We tend to just use a directory called `.venv` at the root of our project.

> [!NOTE]
>
> This is another example of a convention - you could name your virtual environment anything, but if we all agree to call it `.venv` then we all know what this directory is when we see it.
>
> It also means we can write scripts, or `.gitignore` file entries assuming that's where the virtual environment will be.

Next we need to _activate_ the virtual environment. We do this by running `. .venv/bin/activate` (yes, the command we're running is `.` with a path as an argument - the `.` is important). This will only activate the virtual environment for the terminal window we're in - if you're using more than one terminal window, you'll need to activate it in each of them.

Finally we need to install our dependencies into the virtual environment. We do this by running `pip install -r requirements.txt`. This is saying "Please install all of the dependencies listed in `requirements.txt` into the currently active virtual environment".

After we've done this, we should be able to `import` any installed dependencies into our Python code. This will work as long as we have activated the virtual environment in the terminal window where we're running our program.
