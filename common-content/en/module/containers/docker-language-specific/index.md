+++
title = "Docker (language-specific)"
time = 90
objectives = [
  "Build a Docker image for an application.",
  "Optimise the size of a docker image with multi-stage builds.",
  "Expose a port from a Docker container and connect to it from the host.",
  "Attach a volume to a Docker container.",
  "Start, stop, name, and restart a Docker container.",
  "Run an existing Docker image published by someone else, and connect to it from your own.",
]
[build]
  render = "never"
  list = "local"
  publishResources = false
+++

For the language you want to work in, find the language-specific tutorial in [the list of guides](https://docs.docker.com/guides/). For example:
* [Go](https://docs.docker.com/language/golang/)
  - You only need to do steps 1-4, you can skip configuring CI and running containers in Kubernetes.
* [Java](https://docs.docker.com/guides/java/)
  - You only need to do steps 1-3 - you can skip configuring CI and running containers in Kubernetes.
  - Note that this tutorial uses `docker-compose` to manage multiple Docker containers - we will learn more about this soon.

Follow the tutorial, and make sure you have met the learning objectives on this page.

Spend some time on these steps, and feel free to complete other tutorials too. It's very important to grasp the core ideas of containers, images and docker:

- Docker is a set of tools for managing containers and images.
- Images are frozen file systems that hold everything a container needs to run.
- Containers are the running application, based on an image.
