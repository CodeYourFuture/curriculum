+++
title = 'Install Postman'

time = 30
[objectives]
    1='Install Postman'
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

> Install [Postman](https://www.getpostman.com/downloads/)

### Troubleshooting

If you get:

`error while loading shared libraries: libgconf-2.so.4: cannot open shared object file: No such file or directory`

You may first need to run this in the terminal:

`sudo apt-get install -y libgconf-2-4`

If you get a blank screen when you open Postman, try logging out of the app and choosing "Use the Lightweight API Client" instead.

For now you will only need the [Lightweight API Client](https://learning.postman.com/docs/getting-started/basics/using-api-client/#accessing-the-lightweight-api-client).

### Alternatives

If you have an old computer you might find Postman being very slow or becoming unresponsive. In this case you could try:

- [Thunder Client](https://www.thunderclient.io/): this VS Code extension has a similar user interface to Postman
- [Hoppscotch](https://hoppscotch.io/): this web app runs in the browser.
