+++
title = '📦 Using packages'
headless = true
time = 30
facilitation = false
emoji= '🧩'
[objectives]
    1='Define dependency'
    2='Identify some benefits of using a third-party party software library when programming'
+++

When writing software, we need to continually make use of **packages** written by other developers.

A **package** is a set of programs which are grouped together to provide some functionality.

Different programming languages give developers different ways of accessing packages for use in their code.

In JavaScript, we can use **npm**.

> **npm** is a tool used for accessing packages that can be downloaded and used to help developers write applications. The **npm registry** is an online collection of packages that we can download using **npm** commands.

### 🃏 Installing Jest

Our next step will be to figure out how to install the Jest package on our machine.

We can find out more about the Jest framework from the [documentation online](https://jestjs.io/docs/getting-started).

![jest-install](jest-install.png)

In the **Getting started** section of the documentation, Jest gives us the following command:

```bash
npm install --save-dev jest
```

- `npm` is an online database of packages, like Jest, that we can fetch and install on to our machines. It also provides us with
- in the terminal, we can use the `npm` command to install packages on the

`install` - download a package on to our machine.

- `--save-dev` - this indicates that Jest is a package we only use when our application is being developed.

- `jest` - this is the name of the package we want to install on our machine

So overall we can think of this command as saying:
_"Please go to the npm database, find the Jest package and install it on my local machine"_

Let's execute this command in the same directory as the `package.json`.
To double check this we can run `pwd`:

```bash
$ pwd
.../cyf/week-4-example
```

`pwd` is telling us we're in the `week-4-example` directory.

We need to double check the `package.json` is also there too.

```bash
$ ls
package.json
```

Now we can execute the command

```bash
npm install --save-dev jest
```

Our project structure will now look as follows:

```raw
week-4-example
├── get-ordinal-number.test.js
├── package-lock.json
└── package.json

1 directory, 3 files
```

After running the command, we now have a directory called `node_modules` in our project too.

> The `node_modules` directory contains all the code from the{{<tooltip title="dependencies">}}A **dependency** is a package that your project depends upon.{{</tooltip>}}we installed in our project. You won't need to look inside the `node_modules directory` - you just need to know it contains the code for Jest and any other libraries we install in our project.

The `package.json` should also be updated:

```json
{
  "name": "week-4-test-example",
  "description": "An example application showing how to write tests using the jest framework",
  "devDependencies": {
    "jest": "^29.5.0"
  }
}
```

We've now got some additional information inside the `package.json`:

```json
"devDependencies" : "^29.5.0"
```

{{<note type="exercise" title="exercise">}}

### 🔍 Figure it out

There should be one more change to your project after running the installation command. Use documentation or ChatGPT to figure out what this change is for.

{{</note>}}
