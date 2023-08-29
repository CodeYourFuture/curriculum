+++
title = '🎒 Starting a project'
headless = true
time = 20
facilitation = false
emoji= '🧩'
[objectives]
    1='Outline the effects of running an installation command, e.g. npm install'
+++

Let's imagine we've started a brand new project in a directory called `week-4-example`.

{{<tabs>}}
{{<tab name="💻 Follow along">}}
{{<note type="exercise" title=" ">}}

###

Set up a new directory on your local machine called `week-4-example`.
Make sure you're inside the `cyf` directory you created earlier in the course.
Change directory into the this place and double check your current working directory.

```bash
$ pwd
.../cyf/week-4-example
```

{{</note>}}
{{</tab>}}
{{</tabs>}}

To start, we need to create a file called `package.json` in our project.

> A `package.json` is used to store useful information about our current project, like the name, description, version etc.

We can create a `package.json` file and add the following to it:

package.json

```json
{
  "name": "week-4-test-example"
}
```

Anyone using this project can now check the `package.json` to get the name of the project.
We can also add a description:

```json
{
  "name": "week-4-test-example",
  "description": "An example application showing how to write tests using the jest framework"
}
```

We can continue adding more information about our project as the project grows.
For now we can double check we only have a `package.json` in our project:

```bash
$ ls
package.json
```
