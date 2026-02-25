+++
title="Linting and formatting"

time=30
hide_from_overview=true
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

### 🧰 Check your setup

- [ ] You must have a UNIX operating system (MacOS or Linux). Don't use Windows.
- [ ] You must have [VSCode](https://code.visualstudio.com/) installed. Don't use another editor.
- [ ] You must have the **CYF [VS Code extension pack](https://marketplace.visualstudio.com/items?itemName=CodeYourFuture.cyf-extension-pack)** installed and Prettier enabled. Don't use another formatter.

### 🧹 Linting and formatting

Using a shared formatting convention makes sure your "diffs" ( _differences_ between the codebase and your changes) only show the code you _intentionally_ wrote, and not a bunch of spaces or tabs. It will also help you read your own code as you work on it.

{{<note type="tip" title="VS Code format on save">}}

1. In Visual Studio open the settings file (Code > Preferences > Settings)
1. Search for editor format
1. Set `editor.formatOnSave` and `editor.formatOnPaste` to `true`
1. Set the "Default Formatter" to be Prettier
1. In your editor, write some html and save the file. It should be formatted (indented) automatically.
   {{</note>}}

Ask for help on Slack if you are having trouble with Prettier. If you can find a group also blocked by this, schedule a thirty minute study session to set this up together.

Your pull requests may be automatically rejected if your code is not formatted and linted.
