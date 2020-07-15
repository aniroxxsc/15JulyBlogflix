from rest_framework import serializers
from .models import Post
from authapp.serializer import UserSerializer



class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ['content','title','user','CreateTime', 'description','slug','thumbnail']




class AuthorSerializer(serializers.ModelSerializer):
    user=UserSerializer()
    class Meta:
        model = Post 
        fields = ['content','title','user','CreateTime', 'description','slug','thumbnail']


class MyBlogSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ['title','user','CreateTime', 'description','slug','thumbnail']