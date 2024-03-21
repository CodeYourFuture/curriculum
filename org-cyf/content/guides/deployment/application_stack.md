---
id: application_stack
title: The application stack
weight: 3
emoji: 🖥️
---

# The application stack

In the previous section, we talked about the fact that most full-stack web applications have multiple layers (generally at least a frontend and a backend component and some kind of persistence layer in the form of a database). In this section, we go through these layers and talk about how they are usually deployed.

## Frontend

In the curriculum we teach, frontend files are considered static. What this means is that once you deploy them, they will never change until the next deployment comes. Your `index.html`, `index.js` files, your CSS files and your image assets will always contain the same content regardless of how many times they are downloaded and shown in browsers around the world.

This makes them an ideal candidate to serve them through CDNs, Content Delivery Networks. These systems deploy your static files around the globe allowing people to access them quickly. Serving static files is fairly inexpensive, as you only need disk space and bandwidth, so a lot of companies provide this for free for small projects and you only need to pay once your user count becomes large enough.

CloudFlare Pages and Netlify are some examples of CDN providers that have generous free tiers allowing you to host your static files with them. GitHub Pages, while not strictly considered a CDN, also allows you to host files from your repository simply.

{{<note type="warning" title="Other frameworks">}}
Do note that while the fact that frontend files are static is true for the frameworks we teach, it is not universally true for all frameworks. Web-focused languages like PHP, and MVC frameworks like Ruby on Rails or Django, allow you to create dynamic frontend files. Some React frameworks also support server-side rendering which can make the frontend part of your application dynamic, and ineligible to be served through CDNs. Anything static, like CSS files or images however you can still serve through CDNs, and it is generally still a good idea to do so to improve your application's loading speed.
{{</note>}}

CDNs are however not the only way to deploy and serve your frontend. You can also add code to your backend server that will enable it to serve your static files. This allows you to use any of the backend providers (that support persistent deployments) to serve your frontend as well. The main benefit of this approach is that your frontend and backend parts remain closely tied together, you can for example easily deploy them at the same time making sure there are no version discrepancies between the two. However you would lose the benefits of CDNs, and although serving static files are not computationally too involved they still need to be handled, which will in turn slow down your backend.

## Backend

In contrast to the frontend, your backend systems are almost always considered dynamic. Every request they receive they need to generate a response on the fly based on the request and usually the contents of the database. This means deploying backends are much more involved, and this shows in free offerings as well - there are fewer options to host your backends for free, and the available ones have hefty limitations, forcing you to pay for an upgrade.

To deploy your backend there are generally two wide categories of deployment mechanisms: persistent and serverless.

### Persistent deployment

In a persistent deployment scenario, you run your backend server all the time. This is very similar to how you usually run your backend during development on your local computer. This allows you to fully utilize the features of your backend framework, including features like backend workers. Latency - the time needed for your server to respond - is usually quite low compared to serverless deployments.

The biggest drawback is that running a server constantly is more expensive, therefore free tiers are in very limited supply. Glitch, Render and Fly.io are some providers that still offer this, but all of them have strict limitations: the first two will for example stop your server if it doesn't receive activity for a longer time. This will make your service very slow whenever it needs to be restarted.

Apart from the providers above persistent deployment is what people usually use VPS providers for, and the big players usually have a free tier available. AWS's EC2, Azure's Virtual Machines and Google's Compute Platform all have a one-year time-limited trial that allows you to use their slowest computer for free. However because neither of these services supports automated deployments out of the box, and it is very easy to accidentally overshoot the trial package (for example by accidentally starting up a slightly larger computer than the slowest one) we don't recommend any of these options for the projects we do in the curriculum.

### Serverless deployment

Serverless, sometimes called on-demand, functional or lambda deployments means that your server is not running constantly. Whenever there is a request the serverless provider will start up your backend, let it serve the request and then stop it immediately afterward.

Benefits of this approach are that your service doesn't consume resources unless it's used. It is usually aimed for systems that are either not used constantly, or where there are periods of high usage, which needs more resources to handle. Running your backend on-demand only is also less expensive, so there are more free options available to use.

The drawback of this approach is that your server is getting started and stopped all the time, so it needs to be developed in a way to make this less of a problem. Unfortunately, Express.JS is not designed with serverless operation in mind, but there is a plugin to allow its core functions to operate. However anything that requires your system to run constantly, including global variables or backend workers will not work and need to be replaced with an alternative. The constant starting and stopping is slow; therefore serverless functions have a higher latency than persistent servers.

Netlify Functions, Cloudflare Pages, Supabase Functions are some examples that have free tiers available, and big players like AWS's Lambda also provide support for this in their time-limited free tier.

## Database

The final part of a full stack application is the persistence layer, which is usually a database, in our current curriculum likely a relational database, like Postgres.

It's not the only kind of data store that you might need. For example, if your application needs to support file uploads and you need to store those files somewhere you would need to opt in for some kind of file storage server as well, this is outside of the scope of this guide however.

Free Postgres databases are offered by Supabase, Fly.io and Render with some limitations. Other kinds of SQL databases are available from Cloudflare and are present inside the free tiers of AWS, Azure and GCP. These offerings do not follow Postgres' SQL standard, however, so are outside of the scope of this guide.
