+++
title = '🐕 🎞️ fetch films'
[build]
    render = false
    list = 'local'
    publishResources = false
time = 60
facilitation = false
emoji= '🧩'
[objectives]
    1='Apply fetch to get data from an API'
+++

Now that we have a basic understanding of Web APIs and Promises, let's use our knowledge to get some data from an API. There's [a list of films](/js3/blocks/fetch-films/data.json) stored in a JSON file in this directory. We'll use `fetch` to get the data from this API and then render it to the page.

> 🎯 **Success criterion:** You have a working app that fetches data from an API and renders it to the page.

{{<tabs name="getFilms">}}
{{<tab name="Try it yourself">}}

### 🧠 Think back to your [filterFilms](/filterFilms.html) project.

1. Find your completed code. You're going to iterate on this code to fetch the films from the API instead of using the data in the file.
2. Update the state to start with an empty array. We can't work with films we haven't fetched yet!

```js
const state = {
  films: [],
};
```

3. Make a new `getFilms` function to use `fetch` to get the data from the API. The URL is `//curriculum.codeyourfuture.io/js3/blocks/fetch-films/data.json`

4. Use:

- `fetch` to get the data
- `async`/`await` to make sure the function waits for the fetch to complete before trying to get the json data from the response
- `response.json()` to get the data from the response
- a `try...catch` block to handle any errors that might occur

  {{</tab>}}
  {{<tab name="Check your understanding">}}

```js
const getFilms = async () => {
  try {
    const response = await fetch(
      "//curriculum.codeyourfuture.io/js3/blocks/fetch-films/data.json"
    );
    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};
```

{{</tab>}}
{{</tabs>}}

We've added a `try...catch` block to handle any errors that might occur. We've also added `await` to the `fetch` and `response.json()` calls. This means that the function will sensibly wait for the `fetch` to complete before trying to get the json data from the response.

In our last implementation, we called the render function straight away. This time, we need to wait for the films to be fetched before we can render them. Write a new async function to initialise our app. Try to write it yourself first, then check your understanding below.

<details>
<summary>

Your `init` function should look something like this:</summary>

```js
// Initial render, which is distinct from the render function as it loads our films into memory from the API.
// Subsequent render calls do not need to call the API to get the films - we already know the films and can remember them.
async function init() {
  try {
    const films = await getFilms();
    state.films = films;
    render(filmContainer, films);
  } catch (error) {
    console.error(error);
  }
}
```

The name _`init` is a convention. It has no special meaning in the JavaScript language._

</details>

### 🎁 Finally!

And let's now call this function at the end of our script.

```js
init();
```

{{<note type="tip" title="Need help?">}}
🧧 Here's an [example implementation](/js3/blocks/fetch-films/filterFilms.html) you can <a download href="/js3/blocks/fetch-films/filterFilms.html">download</a>.
{{</note>}}
