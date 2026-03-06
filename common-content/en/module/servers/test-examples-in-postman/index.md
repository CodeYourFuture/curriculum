+++
title = 'Test Examples in Postman'

time = 30
[objectives]
    1='Fork a Postman workspace'
    2='Run a request in Postman'
    4='Test a request in Postman'
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

You will need to create an account with Postman to complete this task. Follow along with the video [Writing Tests in Postman with Examples](https://www.youtube.com/watch?v=oXW-C2bM0wE).

> 📮 [Interactive Postman Workspace](https://www.postman.com/postman/workspace/test-examples-in-postman/documentation/1559645-820d771d-70ab-452f-9edd-0904dbc315b8)

{{<note type="activity" title="Test your movies API">}}

1. Given a user wants to see all the movies, when they make a GET request to `/movies`, then they should receive a list of all the movies.

1. Given a user wants to see a single movie, when they make a GET request to `/movies/:movieId`, then they should receive a single movie.

1. Given a user wants to add a movie, when they make a POST request to `/movies`, then they should receive a success message.

1. Given a user wants to update a movie, when they make a PUT request to `/movies/:movieId`, then they should receive a success message.

{{</note>}}
