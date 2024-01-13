+++
title = 'Vite'
headless = true
time = 30
facilitation = false
emoji= '🧩'
[objectives]
    1='Create a new React app with Vite'
    2='Run the app in development mode'
+++

Vite is a build tool. It is the _default_ build tool for [Vue](https://vuejs.org/guide/quick-start), [SvelteKit](https://kit.svelte.dev/), [Preact](https://preactjs.com/guide/v10/getting-started/) and [Solid](https://www.solidjs.com/guides/getting-started). It is a _common_ build tool for [React](https://react.dev/learn/start-a-new-react-project) and we will use it in this course.

In your terminal, run:

```zsh
npm create vite@latest
```

And choose these options:

```zsh
# Project name:
react-vite
# Select a framework:
React
# Select a variant:
JavaScript + SWC
```

Change into the new directory and start the development server:

```zsh
cd react-vite
npm run dev
```

{{<note type="tip" title="Create React App">}}
The default build tool for React used to be [`create-react-app`](https://create-react-app.dev/). This is no longer maintained or recommended by the React team. It is still used in many tutorials and examples, but it is not the best way to start a new React project nowadays.
{{</note>}}
