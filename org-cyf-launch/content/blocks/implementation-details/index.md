+++
title="Implementation details"
description="Identifying constraints and opportunities in the implementation of your product."
modules="The Launch"
week="1"
skills=["Teamwork","Time/Project Management"]
objectives=["Identify identities, resources, and data in your proposed system", "Clarify technical jargon"]
time=30
[build]
  render = 'never'
  list = 'local'
  publishResources = false 
+++

When planning your work, you have two important aspects: 1) understanding the implementation **constraints** and opportunities and 2) writing your user stories.

### Implementation details

Define the implementation details for your product. Discuss your implementation details. During the discussion, clarify the technical jargon so everyone can understand and be part of the discussion.

1. What information will we need and/or provide to do that? For example, what pages could you have, and which endpoints must you use?

2. What entities/resources/data will we have in the system?

3. What information do we need to store to achieve the goals? Define the collections in the database.

4. What are we going to need to expose to the React app? Examples:

5. 1. Are you going to have an endpoint for a resource?
   2. Do you need calculation or aggregation between the database and the frontend?
   3. What will the REST API look like?
6. We sketched out the page previously. Do we need to review it? How could we decompose them into separate components to work on?

7. Identify the "edges" between different tasks (e.g. you have to agree on an API so that the backend and frontend match up or on the props passed between a parent component and a child component)
