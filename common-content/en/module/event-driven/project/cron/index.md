+++
title = "Cron"
time = 300
objectives = [
  "Describe the purpose of cron.",
  "Write a crontab to run a job every minute, or at fixed times.",
  "Write a program to parse files containing crontabs and schedule jobs.",
]
[build]
  render = "never"
  list = "local"
  publishResources = false
+++

We are going to implement a distributed version of the `cron` job scheduler (read about [cron](https://en.wikipedia.org/wiki/Cron) if you are not familiar with it). Cron jobs are defined by two attributes: the command to be executed, and either the schedule that the job should run on or a definition of the times that the job should execute. The schedule is defined according
to the `crontab` format.

Most languages have parsers of the crontab format - you do not need to write one yourself, (though it can be an interesting challenge!). Some examples:
* For Go, the most widely used is [robfig/cron](https://github.com/robfig/cron).
* For Java, [Quartz](https://www.quartz-scheduler.org/documentation/quartz-2.4.x/) has a Cron parser/scheduler, see [this quick start guide](https://betterstack.com/community/questions/how-to-run-cron-jobs-in-java/) for how to use it.\
  Note that Quartz parsing requires a leading seconds specifier, which is non-standard. You can convert a regular cron expression to a Quartz-compatible one by adding the prefix `"0 "`.

The `cron` tool common to Unix operating systems runs jobs on a schedule. Cron only works on a single hosts. We want to create a version of cron that can schedule jobs across multiple workers, running on different hosts.

### Writing a cron scheduler without Kafka

The first step won't involve Kafka at all, or running custom jobs. These will come later.

{{<note type="Exercise">}}
Write code which will parse a file which contains a list of crontabs, one per line, and print "Running job [line number]" for each line on the schedule.

e.g. if passed the file:
```
* * * * *
15 * * * *
```

Your program should print "Running job 0" every minute, and "Running job 1" once an hour at quarter past the hour.
{{</note>}}

{{<note type="Exercise">}}
Create a Docker image for your cron scheduler program. Make sure you can run the image.
{{</note>}}
