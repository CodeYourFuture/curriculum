+++
title = 'Why do we need pipelines?'
headless = true
time = 5
facilitation = false
emoji= '🧩'
[objectives]
    1='Create a CI flow and run unit tests'
    2='Create a CD flow and deploy to the Cloud'
    3='Run small end-to-end tests on the whole thing'
+++

When you are the only developer on a project, it's fine to deploy it manually, but when you have hundreds of developers running hundreds of projects you need to design and automate the process, or it will be slow, insecure, and prone to error. This is called a pipeline.

The pipeline is like a factory. The car moves down the conveyor belt and the different workers attach the wheels and fix the steering wheel in place and paint the outside until the car is complete and ready to go.

The conveyor belt is the pipeline and the workers are the tasks. Everything starts as software in your repo. The trigger to start moving along the pipeline is configured by the pipeline engineer; the trigger starts the pipeline tasks like tests, linking libraries, compile Javascript modules, and so on. When you have everything together you are ready to deploy, so you can move to another conveyor belt, which leads to... the Cloud!

The idea is that everything happens automatically so that as a developer you don't forget any steps, or introduce avoidable errors in to production. The pipeline engineer will design, build, and maintain these pipelines according to the needs of the business. Security should be part of the pipeline (DevSecOps).
