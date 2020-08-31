---
title: Bash or ZSH add executable
tags:
  - terminal
---

For Bash:

~/.bashrc
~/.bash_profile

For ZSH:

~/.zshrc
~/.zshenv


## What is the difference between .bash_profile and .bashrc?

`.bash_profile` is executed for login shells, while `.bashrc` is executed for interactive non-login shells.

When you login (type username and password) via console, either sitting at the machine, or remotely via ssh: `.bash_profile` is executed to configure your shell before the initial command prompt.

But, if you’ve already logged into your machine and open a new terminal window (xterm) then `.bashrc` is executed before the window command prompt. `.bashrc` is also run when you start a new bash instance by typing `/bin/bash` in a terminal.

On OS X, Terminal by default runs a login shell every time, so this is a little different to most other systems, but you can configure that in the preferences.

zsh is extra cool functionality that can be added on your terminal. For zsh `.zshrc` resembles `.bashrc` and `.zshenv` resembles `.zshenv`.


## Add environment variable or exucutable path to .bashrc or .zshrc

Say we like to add type `mysql` in terminal and `/usr/local/opt/mysql@5.7/bin/mysql` should be executed. In this case we have to add the path to `.bashrc` or `.zshrc` as you prefered one.


To do this in terminal type:

```bash
echo 'export PATH="/usr/local/opt/mysql@5.7/bin:$PATH"' >> ~/.bashrc

# For ZSH

echo 'export PATH="/usr/local/opt/mysql@5.7/bin:$PATH"' >> ~/.zshrc
```

To add environment variable the process is almost the same.

```bash
echo 'export NODE_OPTIONS="--max-old-space-size=16384"' >> ~/.bashrc

# For ZSH

echo 'export NODE_OPTIONS="--max-old-space-size=16384"' >> ~/.zshrc
```

## Activate new configuration

You can simply restart the terminal to activate the new configuration. Otherwise run the following command to activate it instantly.

The question can be paraphased as: 

How do I reload `.bashrc` or `.zshrc` without logging out and back in?

```bash
source ~/.bashrc
source ~/.zshrc

# or you can use the shorter version of the command:

. ~/.bashrc
. ~/.zshrc
```