from django.db import models
from authapp.models import User

# Create your models here.
class Post(models.Model): 
    content = models.TextField()
    title=models.TextField()
    description=models.TextField()
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    CreateTime = models.DateTimeField(auto_now_add=True)
    slug=models.SlugField(max_length=10, primary_key=True)
    thumbnail=models.ImageField(upload_to="images/",verbose_name='Image', default='images/thumbnail.jpg', blank=True)
    def __str__(self):
        return self.title

    class Meta:
        ordering=('-CreateTime',)

