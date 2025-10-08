+++
title = 'Query Parameters'

time = 20
[objectives]
    1='Identify a query parameter in a URL'
    2='Write code that responds to a query parameter'
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

So, what is a **query parameter?**

A query string is the part of a URL (Uniform Resource Locater) after the question mark (?). It is meant to send small amounts of information to the server via the url. This information is usually used as parameters to query a database, or maybe to filter results.

Here is an example of a URL with query strings attached: `https://stackabuse.com/?page=2&limit=3`

#### ❓ Detect Query Parameters

Try sending different responses at different endpoints. Remember the `app.get()` method? To set up routing in your server, we need to repeat this method with different endpoints.

```js
app.get("/", (req, res) => {
  let searchQuery = req.query.search;
  res.send("Hello World! You searched for " + searchQuery);
});
```

Test this endpoint with query parameters: `http://localhost:3000?search=hello`

Now your turn!

{{<note type="activity" title="Respond 10m">}}

Add some code so that your server returns the amount of chocolate that you want from your `/chocolate` endpoint.

##### 🧪 Acceptance Criteria

_Given_ a chocolate endpoint
_When_ I load `http://localhost:3000/chocolate?amount=3
`
_Then_ I see the message "Gimme 3 chocolates!"

{{</note>}}

### ❓❓ Multiple Query Parameters

What if we want to detect and read multiple parameters? If we use a URL from earlier as an example, here is how we would **send** multiple query parameters:

> https://api.sunrise-sunset.org/json?lat=51.5311&lng=0.0481

Here we have one parameter called "lat" and another "lng". The first parameter starts with ? All subsequent parameters start with &amp;.

Here is how we would do that in Node:

```js
app.get("/json", (req, res) => {
  let lat = req.query.lat;
  let lng = req.query.lng;
  res.send(`You searched for Lat: ${lat} and Lng: ${lng}`);
});
```

{{<note type="activity" title="Compute 10m">}}

Add some code so that your server takes 2 values that we will multiply together and return the value.

##### 🧪 Acceptance Criteria

_Given_ a multiply endpoint
_When_ I call `http://localhost:3000/multiply?value1=2&value2=10`
_Then_ it returns a value of `20`

{{</note>}}
