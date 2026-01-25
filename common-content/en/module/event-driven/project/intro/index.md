+++
title = "Project: Kafka Cron Scheduler"
time = 10
objectives = [
  "Explain the objectives of the module project.",
]
[build]
  render = "never"
  list = "local"
  publishResources = false
+++

Throughout this module, you will be building a project.

The purpose of the project is to allow a user to specify command lines that should be run on some schedule, and then have those command lines be run on that schedule, on different computers. The more computers we add to the pool of runners, the more command lines we can run at a time.

To simplify deployment, we will use docker compose to simulate having multiple runner computers.

Because you will be learning lots of new things in this project, we will split this project up into steps. We will:
1. Build a local cron scheduler that parses the file format and runs simplified tasks at the required intervals.
2. Dockerise this local cron scheduler so we can run it in Docker.
3. Insert Kafka into the process. Have our cron scheduler produce a message into a Kafka queue, and a consumer pull it out.
4. Make our producer produce command lines to run, and our consumer run them.
5. Introduce multiple queues.
6. Handle errors.
7. Add monitoring.
8. Add alerting.
