# base.html
```html
<!doctype html>

{% load static %}

<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' name='viewport' />
    <meta name="viewport" content="width=device-width" />

    <title>{% block title_name %} TITLE {% endblock title_name %}</title>

    <link rel="icon" type="image/png" href="{% static 'assets/img/fav.ico' %}" />

    <!--     Fonts and icons     -->
    <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Roboto+Slab:400,700|Material+Icons" />
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css" />

    <!-- CSS Files -->
    <link href="{% static 'assets/css/bootstrap.min.css' %}" rel="stylesheet" />

    <!-- custom css -->
    <link href="{% static 'assets/css/custom.css' %}" rel="stylesheet" />
</head>
<body>
    

    {% block content %}

    {% endblock content %}


    <!--   Core JS Files   -->
    <script src="{% static 'assets/js/jquery-2.2.4.min.js' %}" type="text/javascript"></script>
    <script src="{% static 'assets/js/bootstrap.min.js' %}" type="text/javascript"></script>
    <script src="{% static 'assets/js/jquery.bootstrap.js' %}" type="text/javascript"></script>

    <!-- custom script -->
    <script src="{% static 'assets/js/myscript/custom.script.js' %}"></script>
</body>
</html>
```
