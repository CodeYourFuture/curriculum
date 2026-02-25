+++
title = "Docker"
time = 90
objectives = [
  "Run applications with `docker` (e.g. `docker run -dp 80:80 docker/getting-started`).",
  "Explain what files a Docker container has access to.",
  "Explain what processes can be seen from inside a Docker container.",
  "Read a `Dockerfile` and explain what each line does.",
  "Start and manage docker containers with `docker run`, `docker ps`, `docker stop`, and `docker rm`.",
]
[build]
  render = "never"
  list = "local"
  publishResources = false
+++

Docker is an open platform for developing, deploying, and running applications, based around containers and images. Docker provides tooling and a platform to manage the lifecycle of our containers:

- We develop the application and its supporting components using containers.
- The container becomes the unit for distributing and testing the application.
- When ready, we deploy the application onto a production environment that will handle real workloads.

This works the same whether the production environment is a local data center, a cloud provider, or a hybrid of the two.

{{<note type="Reading and Tutorial">}}
Read [this guide to get an overview of Docker](https://docs.docker.com/get-started/overview/).

To build hands-on familiarity with Docker, complete parts 1, 2 and 3 of [this tutorial](https://docs.docker.com/get-started/workshop/). Make sure you have met the learning objectives on this page.
{{</note>}}
