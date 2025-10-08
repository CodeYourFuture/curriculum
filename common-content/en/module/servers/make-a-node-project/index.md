+++
title = 'Make a Node Project'

time = 30
[objectives]
    1='Create a new repo from scratch'
    2='Initialize a Node project'
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

### 🆕 Create a [new repo](https://github.com/new)

<details>
   <summary>1. Go to github.com/new and choose these settings (click to expand):</summary>

| Question                         | Answer                               |
| -------------------------------- | ------------------------------------ |
| Repository template              | No template                          |
| Owner                            | YOUR_GITHUB_USERNAME                 |
| Repository name                  | Express-101                          |
| Description                      | My first Express web server          |
| Visibility                       | Public                               |
| Initialize this repository with: | :white_check_mark: Add a README file |
| Add .gitignore                   | Node                                 |
| Choose a license                 | MIT License                          |

</details>

2. Click **Create repository**

### ♊ Clone your repo

Clone your newly made repo to your local machine. You are going to be working in this folder for the rest of the study session.

### Initialize your project

{{<note title="Build your project from scratch">}}

1. Open your project in VS Code
2. Open the terminal
3. Run `npm init -y` to initialize your project
4. Run `npm install express` to install Express
5. Commit your changes and push them to GitHub

{{</note>}}

### Start your [README](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes)

{{<note title="Every repo needs a readme">}}

1. Open README.md in VS Code
2. Add a title and description
3. Add a link to the [Express documentation](https://expressjs.com/)
4. Write a sentence about what you are going to build
5. Commit your changes and push them to GitHub

{{</note>}}
