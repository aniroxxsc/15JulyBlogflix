from djoser.serializers import UserCreateSerializer
from rest_framework import serializers
from .models import User


class UserCreateSerializer(UserCreateSerializer):

    class Meta(UserCreateSerializer.Meta):
        model = User
        fields = ('id','email','username','password','first_name','last_name','phone','profilepic','instagram','github','facebook','linkedin','bio')


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id','email','username','first_name','last_name','phone','profilepic','instagram','github','facebook','linkedin','bio')