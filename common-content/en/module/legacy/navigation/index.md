+++
title = "Finding things"
description="Finding Your Way Through Legacy Code"
time = 25
emoji= "🧭"
[build]
  render = 'never'
  list = 'local'
  publishResources = false
[objectives]
    1="Use IDE features to navigate an unfamiliar codebase"
    2="Trace a request flow through an application"
    3="Sketch system architecture"
+++

> By tracing request flows, drawing maps, and using code search tools, you can efficiently find your way through legacy code.

### 1. 🔍 Find

We're going to use the features of our IDE to help us. [VSCode](https://code.visualstudio.com/docs/getstarted/getting-started) has a million features for this, but we're just going to start with four: **Open** file, **Find** references, **Peek** definition, and **Find in** files.

#### 📂 1. Open file : `Cmd+P`

Open the [Purple Forest codebase](https://github.com/CodeYourFuture/Module-Legacy-Code). Let's start at the router. Press `Cmd+P` and type `router`. O*p*en the file `router.mjs` and look at where it shows up in the [Explorer](https://code.visualstudio.com/docs/getstarted/userinterface#_explorer-view). What else is in that /directory? Why have these files been grouped together? Write down your ideas.

What does this module do? What can it tell you about the system?

#### 🏷 2. Find references: `fn+Shift+F12`

In `router.mjs` there is a function called `handleRouteChange`. What is using this function? Where is it called?

Press `fn+Shift+F12` . This will show you a references panel with links to every place that references this function. Double click on a reference to navigate to that file.

#### 🫣 3. Peek definition: `fn+F12`

Now you're in `index.mjs` you can see _where_ the function is called, but you can't see the details of the function. Double click on the function name to select it and now press `Fn+Option+F12`. This opens the **peek panel**, which shows you the function definition _without_ leaving the file you're in.

#### 🗃 4. Find in files: `Cmd+Shift+F`

Is that everything to do with the router? Press `Cmd+Shift+F` and search for `route`. What else do you find?

> [!TIP]
> Repeat this process with `navigateTo`. Practice using keyboard shortcuts to navigate your codebase. As the code you work with gets more complicated, scrolling through files becomes enormously time-consuming.

## 2. 📞 Trace a Request Flow

Open Purple Forest on your local machine. Read the README to get it running, and launch the app with [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer). Again, Devtools has a million features but we're going to use four: [Event Listener](https://developer.chrome.com/blog/easily-jump-to-event-listeners) panel, [Network](https://developer.chrome.com/docs/devtools/network) panel, [Sources](https://developer.chrome.com/docs/devtools/sources) panel, and [Local Storage](https://developer.chrome.com/docs/devtools/storage/localstorage) in the Application panel.

**Inspect** the login form and find the event listener in the listener panel. Make a prediction. What will happen, step by step, when we submit this form? (apart from "log in"). Write down your answer in a numbered list. It doesn't have to be perfect, just make a prediction.

Now open the Network panel. {{<tooltip title="Log in">}}You can **find** the seed login details in the codebase you are reading!{{</tooltip>}} as user `sample`. What do you see? Write down any observations you can make, quickly - just bullet points.

In your notebook, sketch the flow of the request from the user click to the server response. Complete this flowchart:

```mermaid
---
config:
  look: handDrawn
---
graph LR
    A[Login form submit] -->|Event| B[handleLogin] -->C[?]
```

Your completed flowchart should show the full path from the user click to the UI update and show answers to the following questions:

- What function makes a request to the server?
- What is the endpoint?
- What comes back from the server?
- Where does that response go next?
- What drives the UI update?

<details>
<summary>Some help if you are completely stuck</summary>
Login form submit --> Event calls--> handleLogin --> Sends form data to apiService.login --> Fetches token & success from /login --> calls updateState --> State updates, persists to localStorage, dispatches state-change event --> Router listens for event and --> calls Home View --> calls Render --> renders Profile, Timeline, and Logout components with current State
</details>

### 3. 🖍 Sketch the System from different perspectives

The practice of sketching clarifies the mental model of the system in your mind. It doesn't have to be complicated. The router module calls different "[views](https://medium.com/front-end-weekly/what-is-a-view-in-web-application-6a2836eed4eb)". Where are the views defined? What do they do? Here's a quick sketch showing the relationship between the router and views:

```mermaid
---
config:
  look: handDrawn
---
graph LR
    A[Router] -->|matches url| B[Views]
    B --> C[Home View]
    B --> D[Login View]
```

What about the relationship between views and components? Find the components that are called in the home view. In your notebook, draw your own diagram showing the relationship between `views/home` and `components/*`.

You could also sketch:

- **Data Flow Map**: Illustrate how data moves through the system
- **Component Tree**: Show the hierarchy of components
- **Dependency Map**: Identify which modules depend on each other
