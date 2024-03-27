---
emoji: 🚀
title: Deploying to Fly.io
description: Learn how to deploy your website to Fly.io
weight: 8
---

[Fly.io](https://fly.io/) is a provider that allows you to deploy backend applications that are converted into docker containers. It also allows you to start up a small PostgreSQL database on their system. By making sure that the [frontend is served through the backend](../guides/deployment-flyio/serving-frontend) you can easily deploy your entire stack on fly.io.

The main drawback of fly.io is that its free trial only allows you to deploy exactly two systems. For a full stack application this would be the backend (which is also serving the frontend), and the database, meaning you would only be able to deploy a single project freely.
