### Git Basic
-------------

#### basic
```bash
git clone https://github.com/rebornbd/demo-repo.git

git status
git add .
git add *.html
git add index.html

git commit -m "enter title"
git commit -m "enter title" -m "description"


```

### connecting to github with ssh
```bash
# Generating a new SSH key
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"

# Adding your SSH key to the ssh-agent
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_rsa

# Adding a new SSH key to your GitHub account
link: https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account

## testing
# Testing your SSH connection
ssh -T git@github.com
```
