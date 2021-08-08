### OneToOne vs ForeignKey
```py
# User(1) ----- (1)Profile  | OneToOne
# User(1) ----- (M)Post     | ForeignKey

class User(models.Model):
    username = models.CharField(max_length=100, unique=True)
    password = models.CharField(max_length=100, null=True, blank=True)
    address  = models.TextField(null=True, blank=True)
    
    def __str__(self):
        return f"{self.username}"

class Profile(models.Model):
    profile_img = models.CharField(max_length=100, null=True, blank=True)
    user = models.OneToOneField(User, related_name='profile', on_delete=models.CASCADE)
    
    def __str__(self):
        return f"pro-{self.user.username}"

class Post(models.Model):
    title = models.CharField(max_length=200, null=True, blank=True)
    desc  = models.TextField(null=True, blank=True)
    user  = models.ForeignKey(User, related_name='posts', on_delete=models.CASCADE)
    
    def __str__(self):
        return f"{self.title}"
```

#### BUT WHEN, ForeignKey act as OneToOne
```py
class Profile(models.Model):
    profile_img = models.CharField(max_length=100, null=True, blank=True)
    user = models.OneToOneField(User, related_name='profile', on_delete=models.CASCADE)

######################### WHERE, ForeignKey is UNIQUE #########################
class Post(models.Model):
    title = models.CharField(max_length=200, null=True, blank=True)
    desc  = models.TextField(null=True, blank=True)
    user  = models.ForeignKey(User, related_name='posts', on_delete=models.CASCADE, unique=True)

########## console ###########
# python manage.py shell
###### ForeignKey ######
users = User.objects.all()
user = users[0]
user.posts.all()        # return <QuerySet [<Post: post-01>]>
# NB: IF A USER HAVE POST, THEN IT'S ALWAYS RETURN A QuerySet WITH A SINGLE POST

###### OneToOne ######
users = User.objects.all()
user = users[0]
user.profile            # return <Profile: pro-rahim>
# NB: A USER HAVE A Profile, THEN IT'S ALWAYS RETURN A THE ACTUAL Profile | NOT ANY QuerySet
```
