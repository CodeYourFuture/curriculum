+++
title = 'Requesting from a remote API'
headless = true
time = 20
facilitation = false
emoji= '🧩'
[objectives]
+++

Let's suppose we have a remote API hosted at the following url: "https://api-film-data.com".

As we're trying to access film data this API will make film data available on a particular endpoint. IN reality, we would check the documentation to discover information about such an endpoint but we can assume we're working with a **`/films` endpoint**. This means if we make a HTTP GET request to this endpoint then we can get access some film data.

We can make a request to a remote API in several different ways. First off, we can make a request to an API using an application like Postman. Postman is a rest client: it is an application that enables users to make a request.

{{<tabs name="Call an API">}}
{{<tab name="📲 Call an API">}}

1. Download the [Postman application](https://www.postman.com/downloads/) if you've not done so already

2. Identify a web API from this [list of public APIs](https://github.com/public-apis/public-apis). In most cases, you'll also need to obtain an API key to make use of their API.

3. Make a GET request to one of the endpoints and check you can see a valid response.

{{</tab>}}
{{</tabs>}}
