+++
title = 'Ship It'

time = 60
[objectives]
1='Export JavaScript written in CYF Blocks into a website'
2='Update an already-deployed website with new features'
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

Websites don't just stay the same forever - we make changes to them, and we want our users to be able to see and use our changes.

You just built some new feature for the website you shipped last week - let's integrate those changes into your website, and push them to GitHub. Last week, we configured Netlify to automatically deploy a new version any time you push changes to GitHub. This means that when you push your changes to GitHub, your website should automatically update, and people can use your changes.

#### You will need:

- The folder with your website from last week (you can re-export it from CodePen if you've lost it)
- An account with GitHub and to be logged in
- The generated code from your CYF Blocks work - click the "Generated Code" tab to see it

{{<note type="activity" title=" Exercise">}}
First you'll integrate the code you made in CYF Blocks into your website locally, then you'll push it to GitHub to update your deployed website.
{{</note>}}

### Step by step

#### Step One : Integrate the code locally

1. Open up VSCode (which you should already have installed).
1. In VSCode, open up the folder where your website is saved (**File > Open Folder** and choose the unzipped folder).
1. Now your IDE shows your code just like Codepen did. Take a look.
1. By default, VSCode doesn't show you how the code renders (i.e. what the page looks like), only the HTML iteslf. But VSCode has extensions which can help with this! [Install the Live Preview extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode.live-server). After it's installed, right-click on your code and click the "Show Preview" menu item. Now you can also view the rendered view right in your browser. Take a look! In the future you will find more VSCode extensions which are useful too - feel free to experiment with them!
1. Try changing your HTML in some way. Make sure you see the change reflected in the preview.
1. If one doesn't already exist, create a new file called `script.js` (**File > New File**) in the same directory as your `index.html`.
1. From CYF Blocks, click the "Generated Code" tab to see the JavaScript you created by putting together your blocks. Copy it all, and paste in in your new `script.js` file, and save the file.
1. In your `index.html` page, add the following HTML, just before your the end of your body tag (before the `</body>`):
   ```html
   <script src="script.js" type="text/javascript"></script>
   ```
1. If the code you wrote needs elements from your CYF Blocks page, in CYF Blocks switch back to the "Static HTML" tab and copy that into your `index.html` wherever it makes sense. (You may not need to do this if you were already using elements and IDs that were already in your page).
1. Test it out! Use your website locally and make sure it works as you expect. Fix anything that doesn't work.

#### Step Two : GitHub

1. Go to the same page as you used last week to upload your website (https://github.com/YOUR_GITHUB_NAME/YOUR_PROJECT_NAME/upload).
1. Find the directory your website is in locally on your computer, and drag any new or changed files (probably `index.html` and `script.js`) into the page.
1. Press "Commit changes".
1. Netlify should _automatically_ deploy a new version with your changes - wait a minute then open up the netlify website you set up last week.
1. 🎉 Congratulations! You shipped it! Your website has new features!
