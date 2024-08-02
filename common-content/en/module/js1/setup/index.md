+++
title = '🎒 Starting a project'
[build]
    render = false
    list = 'local'
    publishResources = false
time = 10
facilitation = false
emoji= '🧩'
[objectives]
    1='Identify a package.json'
    2='Explain the purpose of a package.json'
+++

{{<tabs name="Start Project">}}
{{<tab name="🕹️ Follow along">}}
Let's start a brand new project in a directory called `week-4-example` and create a file called `package.json` in our project.

1. Open your terminal and ensure you're inside the `{{<our-name>}}` directory you created earlier in the course.
1. [Make](https://man7.org/linux/man-pages/man1/mkdir.1.html) a new directory on your local machine called `week-4-example`.
1. Change directory into `week-4-example` and double-check your current working directory.

```console
pwd .../{{<our-name>}}/week-4-example
```

👉🏽 [Now create a `package.json` file](#start-project-1)

{{</tab>}}

{{<tab name="🕹️ Create a package.json">}}

{{<note type="tip" title="Package">}}A `package.json` stores useful information about our project, like the name, description, and version. It is written in the [JSON format](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON).{{</note>}}

1. Create a `package.json` in `week-4-example`.
1. Make sure it contains a name and description.

👉🏽 Need help? [Follow step by step instructions](#start-project-2)

{{</tab>}}

{{<tab name="👣 Step by step">}}

1. Create a `package.json` file in your project directory:

```zsh
touch package.json
```

2. Add a name to it like this:

```json
{
  "name": "week-4-test-example"
}
```

3. Add a description:

```json
{
  "name": "week-4-test-example",
  "description": "An example application showing how to write tests using the jest framework"
}
```

{{</tab>}}
{{</tabs>}}

We can continue adding more information about our project as the project grows. For now, double-check we only have a `package.json` in our project:

```console
ls package.json
```
