+++
title = "Using Python dependencies"
headless = true
time = 30
facilitation = false
objectives=[
    "Write and run a Python program which uses third-party dependencies.",
]
+++

Let's create a small program which uses a dependency.

We're going to use the `cowsay` library to make a program which outputs a picture of a cow saying something.

First let's create a Python file which tries to use `cowsay`:

{{<note>}}
It's important that you don't name your Python file the same as the name of a library you're trying to import.

We can't call our file `cowsay.py` because we're going to try to import `cowsay`.

We can call it `main.py` or `hello.py` or `cow.py`. Just not `cowsay.py`.

In this example, we'll call it `cow.py`.
{{</note>}}

```python
import cowsay
```

Run `python3 cow.py`. It will trigger this error:

```
ModuleNotFoundError: No module named 'cowsay'
```

This is because we haven't installed cowsay yet.

### Installing our dependency

We will create a virtual environment, activate it, and install cowsay to it:

```console
% python3 -m venv .venv
% . .venv/bin/activate
(.venv) % echo cowsay > requirements.txt
(.venv) % pip install -r requirements.txt
```

When we activate a virtual environment, its name gets shown before our terminal prompt. This is a useful reminder that we're in a virtual environment!

### Running our program

Run `python3 cow.py`. We don't get an error because we installed `cowsay` into our active virtual environment.

Open a new terminal and run `python3 cow.py`. You will get an error again! This is because we haven't activated a virtual environment.

Run `. .venv/bin/activate` and then `python3 cow.py`. It will start working again.

Now we can finish our program - let's have the cow say the arguments back to the user (joining together the arguments with spaces). We need to use a slice to skip the first argument, which is our program name:

```python
import cowsay
import sys

cowsay.cow(" ".join(sys.argv[1:]))
```

Notice how `import cowsay` and `import sys` look the same - as long as we've installed dependencies, we can `import` them just like we can import things that are built into Python.

```console
(.venv) % python3 cow.py Hello friend
  ____________
| Hello friend |
  ============
            \
             \
               ^__^
               (oo)\_______
               (__)\       )\/\
                   ||----w |
                   ||     ||
```
