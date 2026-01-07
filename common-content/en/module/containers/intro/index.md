+++
title = "Containers"
time = 30
objectives = [
  "Define a container.",
  "Explain why a container is useful.",
  "Explain the relationship between a container and an image.",
]
[build]
  render = "never"
  list = "local"
  publishResources = false
+++

A **container** is a kind of [sandboxed](https://en.m.wikipedia.org/wiki/Sandbox_(computer_security)) process on a computer that is isolated from all other processes, unless specifically allowed.

Containers have an isolated filesystem. This filesystem is provided by a container **image**. Since the image contains the container's filesystem, it must contain everything needed to run an application: all dependencies, configurations, scripts, binaries, & other files or data. The image also contains other configuration for the container, such as environment variables, a default command to run, and other metadata.

By building images, and then running containers from the image, we can package whole applications in a way that is transferrable (we can create them completely separately from running them) and highly reproducible. Both of these are very important in a production environment.

The isolation and security allows us to run many containers simultaneously on a host computer. Containers are lightweight and contain everything needed to run the application, so we do not need to rely on what is currently installed on the host (and don't need to worry that it may change between deployments). We can easily share containers while we work, and be sure that everyone we share with gets the same container that works in the same way.

This makes containers & images a very desirable way to build and deploy applications. They are commonly used at many companies.

To summarise, a container:

- is a runnable instance of an image. We can create, start, stop, move, or delete containers
- can be run on local machines, virtual machines or deployed to the cloud
- is portable (can be run on any OS)
- is isolated from other containers and runs its own software, binaries, and configurations

For even more on containers, you can read Julia Evan's fantastic guide to [What even is a container?](https://jvns.ca/blog/2016/10/10/what-even-is-a-container/).

> [!NOTE]
>
> In this track, we'll use the terms containerise and dockerise interchangeably to mean the same thing: making an application run in a container using Docker.
