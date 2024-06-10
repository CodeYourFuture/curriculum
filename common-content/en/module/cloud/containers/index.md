+++
title = 'What are containers for?'
headless = true
time = 5
facilitation = false
emoji= '🛸'
+++

Imagine you have one server and you want to host two projects. One project runs version 8 of Node, but the other needs version 14. The libraries each project needs are in conflict; we need to separate them. We keep the dependencies separate by using containers.

The container is a little world just for your project. Everything the project needs to run is inside its container. The same container that runs on your laptop will run on any other server, and will have exactly the same behaviour. It’s a spaceship for your code you can take anywhere: it’s contained in its container.

Two projects might be tricky to manage without containers, but what about two hundred projects, or two thousand? It would be chaos.

It’s more secure to separate your code in this way. If one project has a vulnerability, then it can’t leak out into another. It’s also cheaper, which is important.
