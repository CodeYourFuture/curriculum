+++
title = '🃏 Installing Jest'
[build]
    render = false
    list = 'local'
    publishResources = false
time = 20
facilitation = false
emoji= '🧩'
[objectives]
    1='Outline the effects of running an installation command, e.g. npm install'
+++

Jest is a package used to help us to write and run test cases in JavaScript.
Our next step will be to figure out how to install the Jest package on our machine, so that we can use it in our project.

We can find out more about the Jest framework from the [documentation online](https://jestjs.io/docs/getting-started).

In the **Getting started** section of the documentation, Jest gives us the following command:

```console
npm install jest --save-dev
```

Let's break down the different parts of this command.

- `npm` - in the terminal, we can use the `npm` command to install packages from the [**npm** registry](https://www.npmjs.com/)

- `install` - download a package on to our machine.

- `jest` - this is the name of the package we want to install on our machine

- `--save-dev` - this means the package is needed for development but _not_ needed in production

So overall we can think of this command as saying:
_"Please go to the npm database, find the Jest package and install it on my local machine"_

Let's execute this command in the same directory as the `package.json`.
To double check we're in the correct directory, we can run `pwd`:

```console
$ pwd
.../cyf/week-4-example
```

`pwd` is telling us we're in the `week-4-example` directory.

We need to double check the `package.json` is also there too.

```console
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
├── node_modules
├── package-lock.json
└── package.json

1 directory, 3 files
```

After running the command, we now have a directory called `node_modules` in our project too.

> The `node_modules` directory contains all the code from the{{<tooltip title="dependencies">}}A **dependency** is a package that your project depends upon.{{</tooltip>}}we installed in our project. You won't need to look inside the `node_modules directory` - you just need to know it contains the code for Jest and any other dependencies we install in our project.

Running the `npm` command also updated our `package.json` file for us:

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
"devDependencies" : {
    "jest":  "^29.5.0"
}
```

{{<note type="exercise" title="🕹️ Follow along">}}

###

Install Jest on your local machine. Double check you've got the correct files and folders written to your local machine.

{{</note>}}
