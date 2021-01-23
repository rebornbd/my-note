### Fix Emmet not working after Django Extension Installation

#### Step 01:
```python
# go to
File->Preferences->Settings->Extensions->Auto Rename Tag Configurations->Edit In Setting.Json
```

#### Step 02: (past below code) [link](https://marketplace.visualstudio.com/items?itemName=batisteo.vscode-django)
```js
"files.associations": {
        "**/*.html": "html",
        "**/templates/**/*.html": "django-html",
        "**/templates/**/*": "django-txt",
        "**/requirements{/**,*}.{txt,in}": "pip-requirements"
},
"emmet.includeLanguages": {"django-html": "html"},
```
