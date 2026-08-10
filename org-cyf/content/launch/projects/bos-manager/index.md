+++
title = "Basic Online Skills Manager"
+++

## Business problem

Our digital literacy course, Basic Online Skills, is a big hit with our commercial and outreach partners. Having a 3-week-long course that gives outreach partner clients good knowledge of how to use their mobiles safely ensures they are no longer ostracised from the digital world.

However, we have a very manual internal process, which means we end up making small mistakes, forgetting information, or emailing people on a 1-2-1 basis.

We want all stakeholders to have the information they need.
* Commercial partners (e.g. Capgemini): ability to request a new course and visibility of how all courses are going
* Outreach partner (e.g. New Beginnings or DWP): ability to request a date range and visibility of their specific course and clients (who are our trainees)
* CYF Staff: ability to add partners, view courses, view trainees' outcomes (including assignments and attendance), update date for delivery
* Trainees (clients of Outreach partner): ability to sign up for a course, receive an email confirming and reminding them, view their attendance and progress, view resources
* Volunteers: sign up to volunteer for specific locations/dates, view their sign-ups and info about the outreach partner, receive an email confirming and reminding, view resources

We cannot build everything, so we need to think about prioritising the biggest pain points - which are around the first 3 stakeholder groups.

### Requirements

We need a portal with a frontend and backend saving data safely and with privacy.

Commercial partner should have a login (could be a company login, rather than per person) and be able to give us the main information of their request (i.e. which Account, which Contract, location (city), trainee target (number), deadline this must be delivered).

The CYF staff can then identify the Outreach partner (could be a company login, rather than per person). They can view the opportunities in their location (city), select it and give us further information, such as: main contact at your organisation for this course, target group of your clients, tech proficiency level of clients, goal with this course, planned date (should be 3 weeks calculated from the 1st selected date), venue/address, lunch arrangement, expenses, etc. 

When viewing the plan of all courses, we can now view which Outreach partner is against which opportunities, the dates, and the number of trainees - as well as view more details depending on the stakeholder's level of access. 

CYF Staff can then confirm this course is moving forward. The Outreach partner will receive an email with the link for their clients (our trainees) to sign up for the course. Ideally, also receive a flyer they can share.

Trainees will sign up on a form with mandatory information about their background. They will receive a confirmation email and reminder emails. As part of the sign-up process, trainees must tick a box to agree to receive emails from CYF, as required by GDPR.
Only authorised team members may access trainee information, and only when they need it for their work. Any background information trainees share may count as "sensitive" (for example, anything about health or disability) and needs extra care and protection. We'll only keep personal data for as long as we need it, and we'll tell trainees clearly what data we collect and how they can ask us to change or delete it.

Trainees typically have _very_ limited digital skills, so any UI they are expected to view must be very simple, obvious, and not rely on icons instead of text.

Volunteers can then log in and see opportunities in their location - and further away if they are willing to travel. They can sign up for 1, multiple or all dates. They will receive a confirmation email and reminder emails.

Stretch goal: It would be useful for there to be milestones in trainee sign-up that, when they are hit, automatically send an email. e.g. 25% sign up, 50% etc. This would be sent to the partner and CYF, so we get updates on how sign-ups are going.

As with all projects, it should work, be accessible, have enough testing, and be deployed. 

We want to use this actively, so it needs to be easy for CodeYourFuture volunteers to keep deployed, maintain, and maybe even improve. For this to be possible, there needs to be documentation that clearly outlines how to use the platform and how to maintain it. Any data should be stored in a PostgreSQL database, and the backend should be implemented in typed Python or TypeScript.

Everything else is up to you.
