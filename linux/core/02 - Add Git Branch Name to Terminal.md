### Add Git Branch Name to Terminal
-----------------------------------

#### step-01: enter below command (os - ubuntu)
```bash
sudo nano ~/.bashrc
```

#### step-02: add the below content to the bottom of the open file
```bash
# Show git branch name
force_color_prompt=yes
color_prompt=yes
parse_git_branch() {
 git branch 2> /dev/null | sed -e '/^[^*]/d' -e 's/* \(.*\)/(\1)/'
}
if [ "$color_prompt" = yes ]; then
 PS1='${debian_chroot:+($debian_chroot)}\[\033[01;32m\]\u@\h\[\033[00m$
else
 PS1='${debian_chroot:+($debian_chroot)}\u@\h:\w $(parse_git_branch)\n$
fi
unset color_prompt force_color_prompt
```

#### step-03: enter the last command
```
source ~/.bashrc
```

##### @thanks
