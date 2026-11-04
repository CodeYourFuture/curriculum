+++
title = "Accredible Badges for CYF course completion"
+++

## Business problem

To add credibility and a graduation stamp to our course, we use Accredible certification. You can read more about their digital badge on [their website](https://www.accredible.com/blog/what-is-a-digital-badge).

Sending these out is nowadays a manual task in which we identify who completed the course, upload this information to their website, and this way they are sent to the individual graduates.

We have a new portal, CYF Portal, which is used for the Intro to Programming and Software Development course to track all the coursework and deliverables. In the new system, we have a decision log that calculates the completion of a course, which should be the trigger for the badge emission.  We want to work with Accredible’s API and issue the badges automatically.

The CYF Portal is in production, so you will be part of a squad in this team. You have to build it using the existing tech stack and libraries, working in parallel with the existing team. 

If you want to see how the portal works for trainees, you can use this link to sign up for our [QA environment](https://monoco.qa.codeyourfuture.io/apply). Once you set yourself up locally, you’ll also be able to see the portal easily. Please do NOT sign up on our production portal, since this skews our data for our grants and partners.


### Requirements

The main things we need you to do are:
1. Understand the existing tech stack: we use Supabase and TypeScript with React, so there is quite a lot to take in
2. Compare the different types of API connections we already have: Docuseal and Duolingo are the two main ones we want you to look into. You should use one of them to reuse the logic.
3. Interpret how the Accredible API works
4. Think about the solutions for the below edge (and there might be more):
    a. An admin can unfile a completion. What happens to a badge we've already issued?
    b. Graduates who already have a badge issued by hand. How do we stop the automation from issuing them a second one? A cut-over date would probably be enough to cover this.
5. Create an ADR (Architecture Decision Record) suggesting which of the existing API connection types will be reused for the Accredible badge connection. This must be approved by the core Portal team before development starts.
6. Develop the connection to Accredible and save data, if needed, against each user/course completion
7. Design, using the existing library, the front end in which trainees can view and the link to download their badge once they finish a course 
8. All features must be approved by 1 peer-trainee and your tech consultant. The ultimate approval before deployment in prod has to be done by the main CYF Portal team.

### Stretch Goal
Email the trainees with a completion email (we have a template already!) and the link to their badge.