+++
title = "Install Node with nvm"
time = 20 
[objectives] 
1="Download and install Node using nvm"
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

If you get stuck on any of the below or above instructions, please post in your class channel on Slack.

{{<note type="tip">}}

Check if you already have NodeJS installed by running `node -v` in a terminal. The command should return a version number. If it does, you can skip the next steps.

{{</note>}}

## 🐧 On Ubuntu

1. Install nvm by running the following commands in your terminal:

```terminal
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
```

2. After the installation is complete, you'll need to source the nvm script by running:

```terminal
source ~/.bashrc
```

3. Install the latest LTS version of Node.js by running:

```terminal
nvm install --lts
```

4. Check that you have successfully installed Node.js by running:

```terminal
node -v
```

You should see a version number like `v22.11.0`.

5. Check that you have successfully installed npm by running:

```terminal
npm -v
```

You should see a version number like `10.9.0`.

##  On Mac

1. Install the the Xcode Command Line Developer Tools by running the following command in your terminal:

```terminal
xcode-select --install
```

These may already be installed, in which case you will see "xcode-select: note: Command line tools are already installed." and can continue to the next step.

2. Create a (Non-Login Interactive) Shell Configuration File:

```terminal
touch ~/.zshrc
```

3. Install nvm:

```terminal
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
```

4. After the installation is complete, you'll need to source the nvm script by running:

```terminal
source ~/.zshrc
```

5. Install the latest LTS version of Node.js by running:

```terminal
nvm install --lts
```

6. Check that you have successfully installed Node.js by running:

```terminal
node -v
```

You should see a version number like `v22.11.0`.

7. Check that you have successfully installed npm by running:

```terminal
npm -v
```

You should see a version number like `10.9.0`.

{{<note type="tip" title="Protip">}}
Using nvm allows you to easily install and manage multiple versions of Node.js on your system. This will help you access projects that use older versions of Node.js.
{{</note>}}
