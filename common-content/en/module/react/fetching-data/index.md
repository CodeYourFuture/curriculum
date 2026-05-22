+++
title = "Fetching data"

time = 5
[objectives]
    1="Explain why fetch doesn't work in React"
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

Often when you create a React app, you will want to fetch data from an API and display it inside your components. How do we do this in React?

You might think that we could just fetch the data in the component like this, but unfortunately it won't work. Try it out in the CodeSandbox below.

<iframe src="https://codesandbox.io/embed/fnfyu?view=Editor+%2B+Preview"
     style="width:100%; height: 500px; border:0; border-radius: 4px; overflow:hidden;"
     title="Async data fetching in React (not working)"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

This is because React is synchronous, while `fetch` is asynchronous. If we look in the console, we'll see that the `imgSrc` will always be null when we try to render it. React will try to render before `fetch ` has had time to get the data from the API.

So how do we fix this? We need to use a React hook called `useEffect`.
