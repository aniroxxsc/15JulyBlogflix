from django.db import models
from authapp.models import User
from blog.models import Post
# Create your models here.

class Comment(models.Model):
    user=models.ForeignKey(User, related_name="user", on_delete=models.CASCADE)
    username=models.CharField(max_length=200)
    content=models.TextField()
    post=models.ForeignKey(Post, on_delete=models.CASCADE, default='00000')
    CreateTime = models.DateTimeField(auto_now_add=True)

