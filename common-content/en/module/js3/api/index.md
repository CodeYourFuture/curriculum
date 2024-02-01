+++
title = '🌐 API Request examples'
headless = true
time = 10
facilitation = false
emoji= '🧩'
[objectives]
1="GET Data from API's"
2="POST Data to API's"
+++

Let's try more API interactions

To get song details of all songs we can make a `GET` request to the songs page

```
const url = 'https://curriculum.codeyourfuture.io/api/songs';

fetch(url).then(response => response.json())
    .then(data => console.log('All songs:', data));
```

Next, to retrieve details only for Adele's "Rolling in the Deep" we can send a `GET` request to the song's page

This time, the URL can include the ID of the song we are interested in

```
const url = 'https://curriculum.codeyourfuture.io/api/song/5';

fetch(url).then(response => response.json())
    .then(data => console.log('Song No 5:', data));
```

To update the popularity of a song, API's might use a `POST` method to the song's page with the song's ID included in the URL

As a response, it will display the newly updated details
```
const url = 'https://curriculum.codeyourfuture.io/api/song/3';

const updateRequest = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        popularity: 97
    }),
};

fetch(url, updateRequest)
    .then(response => response.json())
    .then(updatedData => console.log('Updated Song No 3:', updatedData));
```

Note please that, each API can utilize various types of {{<tooltip title="HTTP request methods">}}
GET
POST
PUT
DELETE
PATCH<br>
<a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods" target="_blank">and more...</a>
{{</tooltip>}} to perform CRUD operations on data, and they may require you to include a different type of `Authentication` methods for security reasons.