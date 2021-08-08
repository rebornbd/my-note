### django model relationship
```
1) OneToOne
2) ManyToOne | ForeignKey
3) ManyToMany
```

#### 01) OneToOne
```py
# User(1) ----- (1)Profile

##### model #####
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

########## console ###########
# python manage.py shell
>> from myapp.models import User, Profile
>>
>> # CREATE OBJECT
>> # ++++++++++++++
>> u1 = User(username="rahim")
>> u1.save()
>> 
>> p1 = Profile(profile_img="profiles/i-12hu6_uid98-10.png", user=u1)
>> p1.save()
>> # ++++++++++++++
>>
>> users = User.objects.all()
>> user = users[0]
>> profile = user.profile
>>
>> profiles = Profile.objects.all()
>> profile = profiles[0] | profiles.first()
>> user = profile.user
```
