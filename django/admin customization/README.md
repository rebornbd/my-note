### admin customizations

```python
myproject
static
media

templates
|
+-----admin
|     |
|     +----- base.html
|     +----- base_site.html
|     +----- change_form.html
|     +----- 404.html
|     +----- 500.html
|
+-----registration
      |
      +----- logged_out.html
      +----- password_change_form.html
      +----- password_reset_form.html
      +----- password_reset_email.html
```


#### base_site.html (templates/admin/base_site.html)
```python
{% extends "admin/base.html" %}
{% load static %}

{% block title %}
    {{ title }} | {{ site_title|default:_('DJANGO SITE ADMIN') }}
{% endblock %}

{% block extrahead %}
    <link rel="icon" href="{% static 'img/fav.ico' %}" />
{% endblock %}

{% block branding %}
    <h1 id="site-name"><a href="{% url 'admin:index' %}">ADMIN PANEL</a></h1>
{% endblock %}

{% block extrastyle %}
    <link rel="stylesheet" type="text/css" href="{% static 'css/admin/custom.admin.css' %}" />
{% endblock %}

{% block nav-global %} {% endblock %}
```

#### custom.admin.css (static/css/admin/custom.admin.css)
```css
.module h2, .module caption, .inline-group h2,#header {   
    /* margin: 0;
    padding: 2px 5px 3px 5px; */
    font-size: 11px;
    text-align: left;
    font-weight: bold;
    background: #5A5C69;
    color: #f8f9fc;
}

#branding h1, #branding h1 a:link, #branding h1 a:visited {
    color: #ffffff;
}

.breadcrumbs, .selector-chosen h2, .submit-row input[type=submit] {
    background-color: #4B70DD !important;
}

form .aligned div.help a {
    background-color: #4B70DD;
    color: #f8f9fc;
    padding: 5px;
}
```

#### admin panel
![admin-panel](https://img.imageupload.net/2020/09/30/django-admin-panel.md.png?raw=true)

