+++
title = "🗂️ Forms with multiple fields"
headless = true
time = 20
facilitation = false
emoji= '🧩'
[objectives]
    1='Handle multiple user inputs in a form'
    2='Use a single event handler for multiple inputs'
    3='Use a single state variable for multiple inputs'
+++

Let's have a look at a more complex example. Here we will build a form for users to create a personal account. Make sure to select `CreateAccountForm.js` in the menu to you're looking at the right part of the code.

<iframe src="https://codesandbox.io/embed/qy3cd?view=editor&module=%2Fsrc%2Fcreateaccountform.js&hidenavigation=1"
     style="width:100%; height: 500px; border:0; border-radius: 4px; overflow:hidden;"
     title="Controlled Component with multiple fields"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

We now have three different inputs named `username`, `email` and `password`. There is a corresponding state variable and change handler function for each value.

---

### 🧼 Inlining event handlers

We could make our code a bit shorter if we inlined our event handlers:

<iframe src="https://codesandbox.io/embed/1z90l?view=editor&module=%2Fsrc%2Fcreateaccountform.js&hidenavigation=1"
     style="width:100%; height: 500px; border:0; border-radius: 4px; overflow:hidden;"
     title="Controlled Component with centralised handlers"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

---

### 🧺 Centralising event handlers

Sometimes we need to put all of our update logic in one function. Maybe we need to validate the user's input before we set it in state.

We can use a single `handleChange` function, that is reused to keep track of changes for all of the form fields. To be able to tell which `<input>` is being updated, we check the `event.target.name` field. This corresponds to the name attribute on the `<input>` (e.g. `<input name="username">`).

Based on this value, we then decide which state to update:

<iframe src="https://codesandbox.io/embed/1z90l?view=editor&hidenavigation=1"
     style="width:100%; height: 500px; border:0; border-radius: 4px; overflow:hidden;"
     title="Controlled Component with centralised handlers"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
