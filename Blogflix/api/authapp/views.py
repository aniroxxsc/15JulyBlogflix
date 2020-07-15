from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status, generics
from rest_framework.views import APIView
from datetime import datetime
import requests
from .serializer import UserCreateSerializer
from .models import User
# Create your views here.

class UserActivationView(APIView):
    def get (self, request, uid, token):
        protocol = 'https://' if request.is_secure() else 'http://'
        web_url = protocol + request.get_host()
        post_url = web_url + "/auth/users/activation/"
        post_data = {'uid': uid, 'token': token}
        result = requests.post(post_url, data = post_data)
        # content = result.text()
        print(result)
        return Response(result)


@api_view(['GET',])
def userlist(request,pk):
    try:
        user = User.objects.filter(id=pk)
    except User.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    if request.method == 'GET':
        serializer= UserCreateSerializer(user,many=True)
        return Response(serializer.data)
