# Curriculum Platform

> [!TIP]
> Docs: https://common.codeyourfuture.io

## What is it?

This is a white label multi-tenant platform for us and our code school friends to use to manage our curricula. It's built on top of [Hugo](https://gohugo.io/) and [Netlify CMS](https://www.netlifycms.org/).

The platform, layout, styles and components are all developed in the Hugo module [/common-theme](/common-theme).

The content is developed in the Hugo module [/common-content](/common-content). This content is all headless blocks. It doesn't create any pages on your site unless you call it somewhere.

Multi-language support is provided by [Hugo's i18n support](https://gohugo.io/content-management/multilingual/).

Each org or team configures its own Hugo site that mounts the common theme and content modules, and then makes any customisations they need and deploys it wherever they want. You can use any repo to do this and your site can be as simple as a `hugo.toml` and a `content/_index.md`.

## Examples

- https://curriculum.codeyourfuture.io/
- https://projects.codeyourfuture.io/
- https://workshops.codeyourfuture.io/
- https://programming.codeyourfuture.io/
- https://guides.codeyourfuture.io/
- https://launch.codeyourfuture.io/
- https://piscine.codeyourfuture.io/
- https://sdc.codeyourfuture.io/
- https://curriculum.migracode.org/

## Developing a site

To develop a specific site, `cd` into the relevant sub-directory and follow the instructions in the `README.md` file.

## To build a new site

1. In the root of this repo, or in your own repo, run:

```bash
hugo new site org-{your-org-name}
cd org-{your-org-name}
```

2. Initialise your new site as a hugo module, as only modules can import modules:

```zsh
hugo mod init github.com/{your-org}/{your-repo}/{your-module}
```

Then add the common theme and content modules as hugo modules to hugo.toml:

```toml
[module]
  [[module.imports]]
    path = 'github.com/CodeYourFuture/curriculum/common-theme'
  [[module.imports]]
    path = 'github.com/CodeYourFuture/curriculum/common-content'
    [[module.imports.mounts]]
      source = 'en'
      target = 'content'
```

Look at the [org-cyf](/org-cyf/) and [org-cyf-tracks](/org-cyf-tracks/) examples for more details and options.

To customise the css, make a dir `assets/custom-theme` and throw any scss in there. It will be compiled and added last.

To add site logo/s, make a dir and add svgs to `assets/custom-images/site-logo/`. They will be added to the site header.

Add your content to `content/` and customise the site config in `config.toml`. Please contribute any improvements you make back to the common theme and content modules.

For each module you import, add a `replace` directive to your `go.mod` file - if you forget to do this, you won't get live updates to your site when shared content changes. CI will remind you if you forget.

## To locally develop your site

Check [org-cyf/README.md](/org-cyf/README.md) on how to set up your local environment. Once that is done you can `cd` into the site you wish to develop, and run `npm run start:dev` to get a live preview.
