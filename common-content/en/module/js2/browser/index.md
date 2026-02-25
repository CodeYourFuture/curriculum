+++
title = 'User interfaces'

time = 10
[objectives]
    1='Define static html'
    2='Explain why we interact with user interfaces'
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

User interfaces provide the gateway between a user and a complex application.
When navigating the internet, we continually interact with web pages to access data and interact with complex web applications.

A {{<tooltip title="web browser">}} provides a user interface to interact with web pages.{{</tooltip>}} is capable of fetching HTML documents from a server, and then rendering the document to create a user interface. If every time a user visits a website, they get the same plain HTML document back, we say this content is static.

By static, we mean that the server's job was just to hand over the HTML document, and then the browser takes over. A user may interact with the browser's interface, e.g. to scroll, type in a text field, or drag-and-drop an image around, but this is done purely by interacting with the browser - the browser won't talk to the server about this.
