### django all user related issue

```
01) user CRUD
```

```py
# 01) USER CRUD:
# ==============
# CREATE: user | superuser:
# -------------------------
from django.contrib.auth.models import User

# assume user data
userUsername = "rahim"
userEmail = "rahim@gmail.com"
userPassword = "12345"

# general-user
user = User(username=userUsername)
user.email = userEmail              # optional
user.set_password(userPassword)
user.save()

# superuser
user = User(username=userUsername, email=userEmail)
user.is_staff = True
user.is_superuser = True
user.set_password(userPassword)
user.save()


# UPDATE: update-user-password:
# -----------------------------
# assume user data
userID = 1
userUsername = 'rahim'
previousPassword = "12345"
newPassword = "my-new-pass"

def updateUserPassword():
    user = User.objects.get(pk=userID) | User.objects.get(id=userID)
    user = User.objects.filter(username=userUsername).first()

    if user is not None:
        if isinstance(user, User):
            if user.check_password(previousPassword):
                user.set_password(newPassword)
                user.save()
            else:
                print("old password is not matched")
        else:
            print("this user is not an isinstance of User model")



# DELETE:
# -------
# assume user data
userID = 1

# method: 01
def deleteUser01():
    try:
        user = User.objects.get(pk=userID)
        user.delete()
    except ExceptionError as err:
        print(f"error: {str(err)}")

# method: 02
def deleteUser02():
    user = User.objects.filter(id=userID).first()
    
    if isinstance(user, User):
        user.delete()
    else:
        print(f"id={userID}: don't have a user")
```
