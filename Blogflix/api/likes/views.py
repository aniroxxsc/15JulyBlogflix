from django.shortcuts import render
from rest_framework import generics
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.decorators import permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.generics import ListAPIView
from rest_framework.generics import CreateAPIView
from blog.serializer import AuthorSerializer
from rest_framework import status
from .serializer import LikeSerializer
from .models import Like
from operator import itemgetter 
from blog.models import Post
# Create your views here.

from django.shortcuts import get_object_or_404


class LikeList(generics.ListAPIView):
    """
    API View to create a new Like.
    """
    queryset = Like.objects.all()
    serializer_class = LikeSerializer
    def get_queryset(self):
        user = self.request.user
        return Like.objects.filter(user=user,)

#like_create adds like to a post

@api_view(['POST',])
@permission_classes((IsAuthenticated,))
def like_create(request, slug):
    like = Like(user=request.user) 
    if request.method == 'POST':
        serializer = LikeSerializer(like, data=request.data)
        if serializer.is_valid():
            serializer.save()
        post = get_object_or_404(Post, slug=slug)
        user = request.user
    if Like.objects.filter(user=request.user, post=post).exists() :
        temp = Like.objects.filter(user=request.user, post=post)
        temp.delete()
        count = Like.objects.filter(post=post).count()
        return Response(
            {
                "message":"Removed like",
                "status" : False,
                "count" : count,
                }
        )
    else :
        Like.objects.create(post=post, user=user)
        count = Like.objects.filter(post=post).count()
        return Response(
            {
                "message":"Like done successfully",
                "status" : True,
                "count" : count,
                }
        )



@api_view(['GET',])
def like_view(request,slug):
    
    try:
        #comment_post =Comment.objects.get(post=pk)
        #comment_post = get_object_or_404(Comment,post=pk)
        like_post = Like.objects.filter(post=slug)
    except Like.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    if request.method == 'GET':
        serializer= LikeSerializer(like_post,many=True)
        return Response(serializer.data)



@api_view(['GET'])
def featured(request):
    n=Post.objects.all().count()
    post = Post.objects.all()
    contents=[]
    featured=[]
    for x in range(n):
        content=Like.objects.filter(post=post[x].slug).count()
        contents.append({"post" : post[x].slug, "count": content})
    final_data = sorted(contents, key=itemgetter('count'),reverse = True)[:5]
    for i in range(5):
        featured+=Post.objects.filter(slug=final_data[i]["post"])
    serializer=AuthorSerializer(featured,many=True)
    return Response(serializer.data)