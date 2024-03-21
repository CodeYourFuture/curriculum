---
id: deployment
title: From your computer to the world
weight: 2
emoji: 🖥️
---

# From your computer to the world

While in this curriculum we are mainly going to concentrate on free deployment options to showcase your work you need to understand what "making your work available for the world wide web to see" actually means. In the following section, we will go through a couple of scenarios that are building on each other to show you an idea of why deployments are done in the way they are done.

## In-person demos

The easiest, but least convenient way to show your work to others, is to invite them to your computer on which you have your application running. This would assume you know each of your users and trust them enough to give them access to your computer. Also, this assumes your users are happy enough to come to your place physically.

Unfortunately, neither of these expectations is usually safe to make, so this option is only valid in a limited set of circumstances. Having the ability to demo your work on your computer is useful in classroom settings to show others what you've done and if you have questions. This will remain a useful way during work as well, as pairing with others and demoing them your work is a tried and tested way to showcase what you have done so far to your team.

## Enabling DMZ on router

In the previous scenario, the biggest difficulty was that the users had to come to your machine physically in person to look at your website. We can avoid that if we keep your computer connected to your home broadband, and (among other updates that are outside of the scope of this guide) change the firewall settings on your router to allow connections from the outside world to reach your computer (this is usually called the DMZ option). You would then need to keep your machine turned on all the time, and make sure that the work that you have been doing is also running constantly.

If everything goes well this makes your development computer visible to the world-wide-web and people would be able to see your website. However at any time you need to turn off or restart your machine, or you accidentally stop your running application, maybe to deliver updates to it, they would immediately lose access. Also, they would always see the latest development version you are working on, which might not be something that you want to show the world yet.

Home broadband systems are also usually not that stable, and if yours is not unlimited you would also need to check the cost of extra bandwidth. Speaking of extra costs, your electricity bill will also increase by keeping your machine running 24/7. And finally, any misconfiguration in your router or computer firewall will enable keen hackers to access your internal network which can usually have serious consequences.

## Home server

The next idea is to outsource running your application and have a dedicated computer running your website. You could buy a second machine (this could be an inexpensive one like a Raspberry PI), and set up your router's DMZ settings to point to that instead of your development box. Let's call this second computer a **server** from now on.

Once you install everything on it as well to mimic your desktop computer this server will then also be able to run your work the same way your development machine can run it. You would need to find a way to copy your work from the development machine to this server (we'll cover some of these in the _manual deployment_ section), but at least you are free to turn off your main computer with the knowledge that your website remains up and visible to your users.

Because your development machine and server are now running two separate versions of your codebase, you can now also always decide which version you want to run on your server, with the version running on it is usually called **production**. Your database will also be running separately, making it less likely to accidentally update something over there instead of on your development one.

## Co-location and VPS

While this is a more valid scenario (and some production systems are running like this), there are still a lot of security and privacy implications of running a server at your own home. The next step would be to use a so-called co-location company, who are specializes in providing a place to store your server machines for a fee. This fee would, among others, cover the electricity, bandwidth and the security of the facility. Once you put your server over there you usually get remote access to your server to allow updates, but generally, they will make sure that the computer is powered on 24/7 and is connected to the internet.

The next idea is to avoid the big upfront cost of buying a full computer and just rent one. Most hosting companies have an option for you to rent a dedicated server for a monthly price. Depending on budget this still has a hefty price tag, so after a while, you might realize that your project isn't actually that resource intensive and doesn't require a full server.

That's where VPS (Virtual Private Server) providers come in. They allow you to rent _part_ of a computer running in a virtual machine. There are lots of well-known companies in this sector, like Amazon Web Services, Google Cloud Platform, Microsoft Azure, Digital Ocean, Linode or Ionos just to name a few. You might be able to get access to the slowest computer from these companies completely free on a time-limited trial basis, or they can be as inexpensive as £1-2 a month.

## As-a-service

Running your application stack on a VPS is already a good deployment option, but not the only one. In the examples above we have been running the frontend, backend and database part of our application on the same computer. However, these systems actually have different computational needs. Serving static frontend files for example needs bandwidth and disk space but doesn't really require a fast computer or much memory. Databases on the other hand do need a lot of memory to operate efficiently.

Therefore if you split out your work into separate layers you would be able to deploy each layer on a system that is designed for the needs of that particular layer. For example, the database part can run on a dedicated DaaS (Database-as-a-service) instance, while the frontend can be served on fast CDNs (Content Delivery Networks). There are again plenty of companies providing these services, and fortunately, some have free tiers available to trial them out. Some of these free tiers are generous enough that they can be used to deploy and host simple applications, and we will talk about them in more detail later.
