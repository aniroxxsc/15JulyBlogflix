from django.shortcuts import render
from rest_framework import generics, status
from rest_framework.decorators import api_view,renderer_classes
from .serializer import PostSerializer, AuthorSerializer ,MyBlogSerializer
from .models import Post
from .tasks import ConvertToImg
from rest_framework.response import Response
import logging
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from django.db.models import Count
from authapp.models import User
from authapp.serializer import UserSerializer
from rest_framework.renderers import JSONRenderer
from rest_framework.views   import APIView
from operator import itemgetter 
# Create your views here.
logger = logging.getLogger('django')

class PostCreate(generics.CreateAPIView):
    """
    API View to create a new Post.
    """
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    logger.info('List View')
    def perform_create(self, serializer):
        serializer.save()
        ConvertToImg(serializer.data['content'],serializer.data['slug'])

class PostList(generics.ListAPIView):
    queryset=Post.objects.all()
    serializer_class= MyBlogSerializer


class PostEdit(generics.RetrieveUpdateAPIView):
    """
    API View to edit a post
    """
    serializer_class = PostSerializer
    lookup_field = 'slug'
    def get_queryset(self):
        slug = self.kwargs.get('slug')
        return Post.objects.filter(slug=slug)

    def perform_create(self, serializer):
        serializer.save()
        ConvertToImg(serializer.data['content'],serializer.data['slug'])



class LatestList(generics.ListCreateAPIView):
    """
    API View to create a new Post.
    """
    queryset=Post.objects.all()[:10]
    serializer_class = AuthorSerializer
    logger.info('List View Latest')



@api_view(['GET',])
def PostView(request,slug):
    try:
        post = Post.objects.filter(slug=slug)
        logger.info('Post view func')
    except Post.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    if request.method == 'GET':
        serializer= AuthorSerializer(post,many=True)
        return Response(serializer.data)



@api_view(['GET',])
def myPosts(request):    
    try:
        user_post = Post.objects.filter(user=request.user)
    except Post.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    if request.method == 'GET':
        serializer= MyBlogSerializer(user_post,many=True)
        return Response(serializer.data)


@api_view(['GET'])
def PopularAuthor(request):
    n=User.objects.all().count()
    users = User.objects.all()
    contents=[]
    popular=[]
    for x in range(n):
        content=Post.objects.filter(user=users[x].id).count()
        contents.append({"user" : users[x].username, "count": content})
    final_data = sorted(contents, key=itemgetter('count'),reverse = True)[:3]
    for i in range(3):
        popular+=User.objects.filter(username=final_data[i]["user"])
    serializer=UserSerializer(popular,many=True)
    return Response(serializer.data)