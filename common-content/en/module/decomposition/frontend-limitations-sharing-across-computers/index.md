+++
title = "Limited sharing across computers"
headless = true
time = 20
facilitation = false
hide_from_overview = true
objectives = [
    "Explain why sharing state across computers may require us to write (or use) a backend.",
]
+++

The [Web Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API) allows a website to store data so that if you leave a website, and go back to it, it remembers some things.

{{<multiple-choice
   question="Where does the Web Storage API store data?"
   answers="Locally in the web browser on the computer you're using. | On the website you're using, no matter what computer you're using. | It's synchronised with your email, so as long as you're logged in you can access it."
   feedback="Right - Web Storage APIs just store information on your computer. | No - Check again. | No - Web Storage doesn't know anything about your email."
   correct="0" >}}

A frontend has no way of bringing your data with you when you move between different computers.

Imagine you're using a to do list website on your computer, which only has a frontend. You add an item to the list. We can use the Web Storage API to make sure if you close the tab, and go back to the list, the item is still there.

But if you open the website on your phone, you won't see that item. Because the Web Storage API only stores the information locally in your web browser - on your computer.

This is one of the limitations of a static frontend - on its own, it can't share information across devices.

If we want to share information across devices, we'll need some backend to store that information, and share it.

One computer needs to tell the backend to store it, so that the other computer can ask the backend for the information.

We could write our own backend, or we could use an existing service like [Firebase](https://firebase.google.com/) which provides backends for things like authentication and data storage without us needing to run a backend ourselves.

But if we want to share information between devices, we need to use _some_ backend.

Any website that lets you log in will involve a backend.

{{<multiple-choice
   question="If I'm using a website, and want to send a link to the page I'm viewing to a friend, does the website need a backend?"
   answers="Yes - to be able to share the information between computers, it needs a backend. | No - a link will always work and show the same content. | It depends - on some websites links can work without a backend, but others need a backend."
   feedback="Not always - if the website is just static, a link should work fine. | Sometimes! But only if the content it always the same for all users and a user can't change it. | Yes! Some websites are always the same for everyone, and links just work. Other websites, where users can change things (e.g. our to do list example), need some way of storing what things have changed, and this is normally a backend.<br /><br />Hint: If 'it depends' is a possible answer, it's _almost_ always the correct one!"
   correct="2" >}}
