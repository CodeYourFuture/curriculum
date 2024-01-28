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

To learn the release date of Adele's "Rolling in the Deep," we can make a GET request to the songs page

```
const url = 'https://curriculum.codeyourfuture.io/js3/api/songs'

fetch(url).then(response => response.json())
    .then(data => console.log('All songs:', data));
```

Next, to get details only of Adele's "Rolling in the Deep," we can make a GET request to the song page

This time url can include the ID of the song we want 

```
const url = 'https://curriculum.codeyourfuture.io/js3/api/song/5'

fetch(url).then(response => response.json())
    .then(data => console.log('Song No 5:', data));
```


//@TODO: add post request to update song information