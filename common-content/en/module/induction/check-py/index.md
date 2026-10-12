+++
title = 'Check Python'
time = 10
vocabulary=[]
[tasks]
1='Check the right version of python is installed on your local machine'
[build]
  render = 'never'
  list = 'local'
  publishResources = false
+++

SDC introduces new programming languages, including python.

Python comes in different versions, and you need to make sure the correct version is installed on your machine.
For SDC, we require a minimum of version 3.12.

To check which version you have installed, type the following command into a terminal: `python`

If you see a python interpreter that looks like this:
```txt
Python 3.14.4 (main, Aug 20 2026, 10:41:58) [GCC 15.2.0] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>>
```
It worked succesfully! This example shows version 3.14 is installed.
To exit from the python interpreter, press Ctrl+D.

If the version you see begins with a "2", try using the command `python3` and see if that gives you a more up to date version.

If you have a version that is older than 3.12, check [the python website](https://www.python.org) for instructions on how to install a more up to date version.
