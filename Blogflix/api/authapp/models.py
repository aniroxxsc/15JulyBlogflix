from django.db import models
from django.contrib.auth.models import AbstractUser
# Create your models here.

class User(AbstractUser):
    email = models.EmailField(verbose_name='email', max_length=255,null=True)
    profilepic= models.ImageField(upload_to='profilepic/',default='images/profiledp.jpg')
    instagram=models.URLField(null=True)
    linkedin=models.URLField(null=True)
    github=models.URLField(null=True)
    facebook=models.URLField(null=True)
    bio = models.TextField(default="UPES ACM & ACM-W Member")
    phone = models.CharField(max_length=12, null=True)
    username = models.IntegerField(unique=True)
    REQUIRED_FIELDS = ['phone','first_name','last_name',"profilepic","instagram","linkedin","github","facebook","bio",'email']
    USERNAME_FIELD = 'username'

    def get_username(self):
        return str(self.username)

class Subscribe(models.Model):
    name = models.CharField(max_length=30)
    email = models.EmailField(verbose_name='email', max_length=255)