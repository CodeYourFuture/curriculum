+++
title = "Running commands"
time = 60
objectives = [
  "Pass command lines from a config file, via a producer, to a consumer.",
  "Execute command lines in a consumer."
]
[build]
  render = "never"
  list = "local"
  publishResources = false
+++

Now that we have a producer passing messages and a consumer receiving them, we can make the messages more useful.

Modify the producer so that it expects a command line to be present in the supplied crontab file after the schedule.

Modify its JSON message it produces to include the command line to run.

Modify the consumer to read the JSON message, run the command, and log its output.

> [!WARNING]
>
> For the purposes of keeping this project scope tractable, we are ignoring two things.
>
> The first is security: simply run commands as the user that our consumer runs as.
>
> The second thing is that we are assuming the jobs to be run consist of commands available on the consumers.
>
> You may address these concerns later in an optional extension of the project if you have time.
