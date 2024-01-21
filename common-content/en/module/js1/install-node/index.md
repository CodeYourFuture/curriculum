+++
title = '🧰 Install Node'
headless = true
time = 20
facilitation = false
emoji= '🧩'
[objectives]
    1='Download and install Node'
+++

If you get stuck on any of the below or above instructions, please post in your class channel on Slack.

## On Ubuntu

1. Check whether you already have NodeJS installed by running `node -v` in a terminal. The command should return a version number. If it does, you can skip the next steps.

2. Install NodeJS and npm by copying and pasting the following into the terminal:

```terminal
sudo apt-get install -y curl && curl -sL https://deb.nodesource.com/setup_18.x | sudo -E bash - && sudo apt-get install -y nodejs
```

3. Check that you have successfully installed NodeJS by ensuring that the command `node -v` returns returns a version number e.g. "v18.12.1"

4. Check that you have successfully installed npm by ensuring that the command `npm -v` returns a version number e.g. "8.19.2"

## On Mac

1. Install Homebrew, which is a package manager for MacOS. Copy and paste the following command into your terminal:

```terminal
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

2. Ensure that you have successfully installed Homebrew by entering ` brew -v` in your terminal - you should get an output that says something like `"Homebrew <version number>"`

3. Install NodeJS and npm by typing `brew install node@18`

4. Check that you have successfully installed NodeJS by ensuring that the command `node -v` returns a version number e.g. "v18.12.1"

5. Check that you have successfully installed npm by ensuring that the command `npm -v` returns a version number e.g. "8.19.2"
