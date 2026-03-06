+++
title = 'Using packages'

time = 5
[objectives]
    1='Define a dependency'
    2='Define a package'
    3='Identify some benefits of using a third-party party software library when programming'
    4='Describe why need to use npm when we are building JavaScript applications'
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

When writing software, we continually make use of software written by other developers. We can call these {{<tooltip title="packages">}}A **package** is some code which is grouped together to provide some functionality.{{</tooltip>}}

We use packages so that we don't have to solve every problem ourselves. Other people have often solved some things we need to do really well. Using other people's solutions to parts of a problem means we can focus our time and effort on what's special about _our_ problem.

Imagine we wanted to work out what the time is in a user's city. Instead of writing code to work out the time for every city's time zone (and when they change!), we can use a package some "city time" experts have written, and which they keep up to date.

Different programming languages give developers different ways of accessing packages for use in their code. We will use {{<tooltip title="npm">}} Node Package Manager, or `npm`, downloads and manages useful packages of code from the [npm registry](https://www.npmjs.com/).
{{</tooltip>}}
