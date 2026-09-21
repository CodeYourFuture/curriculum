+++
title = "Familiarising Yourself With a Codebase"
time = 30
objectives = [
    "Explain the purpose of README files.",
    "Identify the directory structure of an existing project.",
    "Explain why and how project documentation may go out of date.",
]
[build]
  render = "never"
  list = "local"
  publishResources = false
+++

Before we can debug or fix anything in our new codebase, we need to understand what we have.

Different projects document things differently. Some common conventions are:
* In a README.md file at the root of the repository.
* In a README.md file in the directory of each component.
* In comments across the codebase.
* In a wiki, or standalone website, for the project.
* In a file named DEVELOPING.md, CONTRIBUTING.md, or similar, in the root of the repository.
* Assuming you'll ask someone who already knows how things work to help you get started.

{{<note type="exercise">}}
Work out which of these approaches the Purple Forest application uses.
{{</note>}}

Sometimes documentation goes out of date! Most of the time the documentation was correct _at the time it was written_, but something changed in the application and no one remembered to update the documentation.

This is unfortunate, but the reality of the world. Sometimes there will be gaps. Sometimes you need to work out how to fill them. Sometimes you need to understand error messages to fill in those gaps. Sometimes you will need to ask someone. Sometimes you can look through the git history to work out what changed since the documentation was written.

{{<note type="exercise">}}
Work out what software you need installed on your computer to run Purple Forest, and how it's intended to be run.
{{</note>}}
