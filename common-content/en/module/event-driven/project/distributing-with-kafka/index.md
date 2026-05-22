+++
title = "Distributing with Kafka"
time = 90
objectives = [
  "Run a Kafka queue using `docker-compose`.",
  "Produce messages into a Kafka queue from a custom written producer.",
  "Consume messages from a Kafka queue in a custom written consumer.",
  "Consume different messages from a Kafka queue from multiple consumers on the same topic.",
  "Run a Kafka pipeline with producers and consumers in `docker-compose`.",
]
[build]
  render = "never"
  list = "local"
  publishResources = false
+++

Having built a local cron scheduler, we can now expand this to create a functional distributed cron system. We will build two separate programs:

- A Kafka producer that reads configuration files for jobs and queues tasks for execution
- A Kafka consumer that dequeues jobs from a queue and runs them

In _this_ step, we will just make dummy producers and consumers that send messages on the correct scheduler and log that they were received. In the next step we will make them actually run command lines.

Kafka itself is a queue that lets you communicate single messages in a structured and asynchronous way between producers and consumers. Therefore, all the scheduling logic for managing recurring jobs must be part of your producer (although it is recommended to reuse a suitable library to assist with parsing crontabs and scheduling). Every time a job is due to be run, your producer creates a new message and writes it to Kafka, for a consumer to dequeue and run.

We'll need to be able to run Kafka. The easiest way is to use `docker-compose`. The [conduktor/kafka-stack-docker-compose](https://github.com/conduktor/kafka-stack-docker-compose) project provides several starter configurations for running Kafka. The config for `zk-single-kafka-single.yml` will work for development purposes.

There are existing Kafka clients for many languages, such as:
* A [Golang Kafka client](https://docs.confluent.io/kafka-clients/go/current/overview.html#go-example-code).
* A [Java Kafka client](https://docs.confluent.io/kafka-clients/java/current/overview.html).

We may want to run other Docker containers later, so we may want to make our own copy of that docker compose configuration that we can add to.

Our producer program needs to be able to do the following:

- Read and parse a file with cron job definitions (we'll set up our own for this project, don't reuse the system cron config file because we will want to modify the format later) - you should already have written this code.
- Write a message to Kafka specifying the command to run, the intended start time of the job, and any other information that we think is necessary. It probably makes sense to encode this information as JSON.
- We will also need to [create a Kafka topic](https://kafka.apache.org/documentation/#quickstart_createtopic). In a production environment we would probably use separate tooling to manage topics (perhaps Terraform), but for this project, we can create our Kafka topic using code like these examples in [Go](https://github.com/confluentinc/examples/blob/7.3.0-post/clients/cloud/go/producer.go#L39) or [Java](https://github.com/confluentinc/examples/blob/6d4c49b20662cb4c8b4a668622cb2e9442b59a20/clients/cloud/java/src/main/java/io/confluent/examples/clients/cloud/ProducerExample.java#L39).

Our consumer program needs to be able to do the following things:

- Read job information from a Kafka queue (decoding JSON)
- Execute the commands to run the jobs (assume this is a simple one-line command that you can `exec` for now) - for now we will just log the job number (like we were doing in our local version), but in a future step, we will make it run commands.
- Because the producer is writing jobs to the queue when they are ready to run, your consumer does not need to do any scheduling or to parse crontab format

We want to run two consumers - therefore, when we create our topic, we should create two partitions of the topic. We will also need to specify a key for each Kafka message that we produce - Kafka assigns messages to partitions based on a hash of the message ID. We can generate UUIDs to use as keys.

We can build Docker containers for our producer and consumer and add these to our docker-compose configuration. We should create a Makefile or script to make this repeatable.

Test our implementation and observe both of our consumers running jobs scheduled by your producer. What happens if we only create one partition in our topic? What happens if we create three?
