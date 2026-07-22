+++
title = "Career Mentors Matching"
+++

## Business problem

Having a career mentor can change a person’s life. 

A good mentor accelerates your career growth by providing guidance, actionable feedback, and industry connections. They can also act as an experienced sounding board, helping you navigate challenges and build your confidence. To ensure the relationship is the most effective, we want to help pair mentors (volunteers) and mentees (trainees) in the best way.

Currently, our process is a spreadsheet with names of mentors, and a mentee adds their name to it. This has many issues and doesn’t provide a great user experience. For example:
* People forget to add trainee names to the spreadsheet, and this results in some mentors appearing like they are available when they are not
* People forget where the spreadsheet is saved, which causes frustration
* People forget to remove trainee names if they are no longer working together
* People can accidentally delete data or miss lines further up in the spreadsheet, which show available mentors
* People find it difficult to navigate the spreadsheet to easily identify available mentors
* People find it time consuming strolling through a huge list of names to try and identify an available mentor, so end up with mentors whose background isn't the best match to their desires

What we need is a robust and reliable platform in which mentees (trainees) and mentors (volunteers) can share some basic information, which will match them as well as possible. This portal should also show who people are matched with and the relationship status (active, inactive) in the background (visible to CYF staff and volunteers responsible for managing resourcing of career mentoring).

We want an easy way of finding the best mentor-mentee match, so this can lead to a successful relationship. And if the relationship isn't the right one, support both sides in finding their next match.

### Requirements

We need a frontend and backend that save the users' data as well as changes in matches.

Data should be safely stored, and data privacy is very important. Each user can view only their own data and the data of whoever they were matched with. CYF staff should be able to view all information.

Each mentee (trainee) should be able to enter their name, email, link their scheduler, add their LinkedIn, and answer some questions.

Each mentor (volunteer) should be able to enter their name, email, link their scheduler, add their LinkedIn, and answer some questions.

The app should then match people according to specific data sets: availability, location, profession, career goal or current profession.

The system should show mentees the mentor option, and they can accept it for a chemistry session (to identify if it's a good match). When they accept, the system sends an email with the match. (Stretch goal: show 3 top matches, and the mentee can choose one of them)

The system should ask mentors and mentees to confirm that they will work together after a week. Either of the users can say that the chemistry session didn't happen yet or reject/continue the relationship. If the option is rejected, the system should run again and find a different match. If no response after a week, the system should unassign the mentor/mentee and send an email about it. The mentee can then run the match again.

If there is no mentor available, the system should display a holding message for the mentee and send an alert to a CYF email to inform them that a mentee is awaiting a mentor. 

As with all projects, it should work, be accessible, have enough testing, and be deployed. 

We want to use this actively, so it needs to be easy for CodeYourFuture volunteers to keep deployed, maintain, and maybe even improve. For this to be possible, there needs to be documentation that clearly outlines how to use the platform and how to maintain it. Any data should be stored in a PostgreSQL database, and the backend should be implemented in TypeScript. The frontend can be implemented in TypeScript or JavaScript, and if a framework is used it should be React (but you aren't required to use a framework).

Everything else is up to you.
