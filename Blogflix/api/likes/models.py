from django.db import models
from authapp.models import User
from blog.models import Post
from django.utils import timezone


# Create your models here.
class Like(models.Model):
    user=models.ForeignKey(User, on_delete=models.CASCADE)
    post=models.ForeignKey(Post, on_delete=models.CASCADE, default='00000')
    timestamp = models.DateTimeField(default=timezone.now)