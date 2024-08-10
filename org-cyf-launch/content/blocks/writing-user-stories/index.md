---
title: Writing user stories
description: Clear user stories with defined acceptance criteria ensure we can
  deliver a feature efficiently and with less re-work.
modules: The Launch
week: "1"
skills:
  - Teamwork
  - Time/Project Management
objectives:
  - Planning your work as a team
time: 60
prep: Ensure your team has a clear MVP and Design
introduction: "When planning your work, you have two important aspects:
  understanding the implementation constraints and opportunities and writing
  your user stories."
exercises:
  - name: Implementation details
    time: 30
    goal: Define the implementation details for your product
    content: >-
      Discuss your implementation details. During the discussion, ensure that
      the technical jargon is clarified to the team so everyone can understand
      and be part of the discussion.


      1. What information will they need and/or provide to do that? For example, what pages could you have, and which endpoints must you use?

      2. What entities/resources/data will we have in the system?

      3. What information do we need to store to achieve the goals? Define the collections in the database.

      4. What are we going to need to expose to the React app? Examples:

      5. 1. Are you going to have an endpoint for a resource
         2. Do you need calculation or aggregation between the database and the frontend
         3. What will the REST API look like
      6. You sketched out the page previously. Do we need to review it? How could we decompose them into separate [components](https://syllabus.codeyourfuture.io/react/week-1/lesson) to work on?

      7. Identify the "edges" between different tasks (e.g. you have to agree on an API so that the backend and frontend match up or on the props passed between a parent component and a child component)
  - name: Write the user stories
    time: 30
    goal: Write user stories for the planning session
    content: >-
      When raising your tickets, you can have two types of tickets: 


      * a user story, which focussed on business value (Format: AS A \[role], I WANT \[action], SO THAT \[outcome] + acceptance criteria \[rules/scenarios])

      * technical ticket, which is a step in the direction of a user story (Background \[why], acceptance criteria \[rules/scenarios]


      1. Discuss and agree on the first 5 or 6 user stories that need to be done. Just use titles to identify them.

      2. Work on 1 user story and 1 technical ticket together as a team.

      3. Now, each team member chooses one ticket and writes it. Think about clarity so that anyone outside the team can understand it, too. They will be discussed in the next session.
---
