+++
title = "Docker Compose"
time = 120
objectives = [
  "Explain the purpose of Docker Compose.",
  "Write a Docker Compose configuration including built and pulled images.",
  "Connect containers on a network with Docker Compose.",
  "Build and run services with Docker Compose.",
  "View individual service logs with Docker Compose.",
]
[build]
  render = "never"
  list = "local"
  publishResources = false
+++

Most software systems consist of multiple components (e.g. a frontend, one or more backends, a database, etc). These systems need to be able to talk to each other.

Docker Compose is a tool for running and connecting multiple Docker containers. It uses a config file to define which containers are needed, and how they should be connected.

{{<note type="Exercise">}}
Follow [this guide to Docker Compose](https://betterstack.com/community/guides/scaling-docker/docker-compose-getting-started/). Make sure you have me the learning objectives on this page.
{{</note>}}
