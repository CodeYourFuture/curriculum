+++
title = "Working with forms"

time = 20
[objectives]
    1='Define controlled components'
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

Modern web applications often involve interacting with forms such as creating an account, adding a blog post or posting a comment. We need to declare form inputs and get the values entered by users to do something with it (like display them on a page or send them in a POST request). So, how do we do this in React?

A popular pattern for building forms and collect user data is the **controlled component** pattern. A pattern is a repeated solution to a problem that is useful in multiple similar cases. Let's have a look at an example:

<iframe src="https://codesandbox.io/embed/4jq1yqy8kx?view=editor&module=%2Fsrc%2Fsimplereminder.js&hidenavigation=1"
     style="width:100%; height: 500px; border:0; border-radius: 4px; overflow:hidden;"
     title="Controlled Component"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

We're controlling the value of the input by using the value from the reminder state. This means that we can only change the value by updating the _state_. It is done using the `onChange` attribute and the `handleChange` function, called every time the input value changes. This happens when a new character is added or removed.

If we didn't call `setReminder` in the `handleChange` function, then the input's value would never change. It would appear as if you couldn't type in the input!

Finally, the value we keep in the reminder state is displayed on the screen as today's reminder.

(We could have also transformed the string _before_ we set it with `setReminder`, by calling `toUpperCase()` on the string.)
