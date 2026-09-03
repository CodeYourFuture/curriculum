+++
title = 'Package Management in JavaScript'
time = 20
[objectives]
    1="Define a package"
    2="Define a dependency"
    3="Explain the purpose of `node_modules`"
[build]
  render = 'never'
  list = 'local'
  publishResources = false
+++

In the last module we started to write reusable blocks of code by defining [functions](itp/javascript-fundamentals/sprints/3/prep/#functions). Using functions helps to keep our code clean and maintainable, and as an added bonus we only need to write the logic out once! We're not the only developers doing this though - _everyone_ is trying to reuse code wherever they can.

This practice is an established part of a typical workflow and every language has its own tools to support this. In this section we will look at how we can set up one of the JavaScript tools to support our development.

### Setting up a package manager.

When we bundle code together and share it we publish it as a **package**. In order to use someone else's code in our projects we need to use a **package manager** to install it. The package manager we will use is called **npm**.

{{<note type="tip" title="Other package managers">}}
npm is not the only package manager available for JavaScript, **yarn** is a popular alternative. If you have experience in other languages you may have used package managers there, eg. Python users may have used pip. Each tool has its own commands and ecosystem but the core concepts are the same.
{{</note>}}

Before we start using npm in a project we need to so some setup. It was already installed for us when we set up Node but we also need to configure the project. Create a new directory called `packages-practice` and navigate there in your terminal. Once you are there use the command `npm init -y` to start the setup.

```sh {title="username/cyf-work/packages-practice"}
npm init -y
```

You should see some output printed:

```console
Wrote to username/cyf-work/packages-practice/package.json:

{
  "name": "packages-practice",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "type": "commonjs"
}
```

Look carefully at the first line: it says something was written to a file. If we check using `ls` we'll see that there's now a file called `package.json`, and if we open the directory in VSCode we see that it includes all the information printed above. Now we have this file we can use npm to do a few different things with our project, but for now we'll focus on adding packages.

{{<note type="definition" title="Definition: JSON">}}
This file is written in **JSON** - **J**ava**S**cript **O**bject **N**otation. Values before a colon are **keys** and the values after the colons are the associated **values**. Using this structure we can quickly find important information about our project. 

We will look at JavaScript objects in more detail in the next module.
{{</note>}}

{{<note type="tip" title="The `-y` flag">}}
In this example we added `-y` to the end of the setup command. This was optional, but by including it we prep-populated `package.json` with some common default values. If you don't include the flag the command will still work but you will be prompted to add a value for each property before the file is created.
{{</note>}}

### Installing a package

We're going to add our first package. We're going to use [is-odd](https://www.npmjs.com/package/is-odd) which provides logic to check if a number is odd or not. This is a very simple example of the workflow, but the process would be the same if we were adding a more complex package. 

{{<note type="tip" title="npmjs.com">}}
The link above leads to [www.npmjs.com](https://www.npmjs.com). This site has a searchable list of packages available to install through npm - if you're looking for something specific you should start here!
{{</note>}}

Switch back to your terminal and make sure you are in the same directory as `package.json`, then type the command below:

```sh
npm install --save is-odd
```

Let's break down the command:

- `npm` indicates that the command is run using npm
- `install` indicates that we want to install a package
- the `--save` flag adds additional instructions about _how_ we save the package. We will see some alternatives later in this sprint.
- `is-odd` is the name of the package we want to install

Switch back to VSCode and you will see some new information at the bottom of `package.json`:

```json {title="package.json"}
{
  // ...
  "dependencies": {
    "is-odd": "^3.0.1"
  }
}
```

The `is-odd` package is now listed in our project as a **dependency**. This is important information for anyone else who wants to run our project: it tells them that our code **depends** on something from `is-odd` and they will need to install it too.

Take a look in the file explorer tab and you will see there is also now a folder called `node_modules`. If you open it up you will see a directory for our `is-odd` package which contains the code it needs to run. When we ran `npm install` this is what was downloaded. There is also a directory for something else called `is-number`, which is a dependency of `is-odd`. It's very common for additional packages to be installed to support the one we need.

Think back to the last sprint where we spoke about [`.gitignore` files](itp/javascript-fundamentals/sprints/3/prep/#ignoring-files). In that section we saw a `.gitignore` with `node_modules` already included in it, and now we can start to see why. If we tried to track everything in `node_modules` with Git we would end up with a very bloated repository and the potential for _lots_ of conflicts. Instead we ignore the folder and ask anyone using our code to download their own copy of the packages.

