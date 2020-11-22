### Add Git Branch Name to Terminal
-----------------------------------

#### step-01: enter below command (os - ubuntu)
```bash
sudo nano ~/.bashrc
```

#### step-02: add the below content to the bottom of the open file
```bash
# show git branch name

## option 01:
force_color_prompt=yes
color_prompt=yes

parse_git_branch() {
 git branch 2> /dev/null | sed -e '/^[^*]/d' -e 's/* \(.*\)/(\1)/'
}
if [ "$color_prompt" = yes ]; then
    PS1="${debian_chroot:+($debian_chroot)}\[\033[01;32m\]\u@\h\[\033[00m\]:\[\033[01;34m\]\w\[\033[00m\]\$(parse_git_branch)\[\033[00m\] \n$ "
else
    PS1='${debian_chroot:+($debian_chroot)}\u@\h:\w\$ '
fi
unset color_prompt force_color_prompt


## option 02:
force_color_prompt=yes
color_prompt=yes

parse_git_branch() {
 git branch 2> /dev/null | sed -e '/^[^*]/d' -e 's/* \(.*\)/(\1)/'
}

export PS1="${debian_chroot:+($debian_chroot)}\[\033[01;32m\]\u@\h\[\033[00m\]:\[\033[01;34m\]\w\[\033[00m\]\$(parse_git_branch)\[\033[00m\] \n$ "
unset color_prompt force_color_prompt
```

#### step-03: enter the last command
```
source ~/.bashrc
```

### bonus (fish shell)
install fish shell [website](https://fishshell.com/)
```bash
sudo apt-add-repository ppa:fish-shell/release-3
sudo apt-get update
sudo apt-get install fish

# switch default shell to fish-shell
fish
```

##### @thanks
