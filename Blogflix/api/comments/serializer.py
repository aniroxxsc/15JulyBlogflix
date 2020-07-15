from rest_framework.serializers import(
    HyperlinkedIdentityField,
    ModelSerializer,
    SerializerMethodField
    )
from rest_framework import serializers
from comments.models import Comment
from authapp.serializer import UserCreateSerializer

class CommentSerializer(ModelSerializer):
    class Meta:
        model = Comment
        fields = [
            'user',
            'content',
            'post',
            'id',
            'username',
        ]