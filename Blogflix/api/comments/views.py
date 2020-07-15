from django.shortcuts import render
from rest_framework import generics
from .serializer import CommentSerializer
from comments.models import Comment
from blog.models import Post
from django.shortcuts import redirect
import logging
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.pagination import PageNumberPagination
from rest_framework.generics import ListAPIView
from rest_framework.permissions import IsAuthenticated

from django.shortcuts import get_list_or_404, get_object_or_404
logger = logging.getLogger('django')
# Create your views here.
@api_view(['GET',])
def comment_view(request,slug):
    
    try:
        comment_post = Comment.objects.filter(post=slug)
        logger.info('comment view func')
    except Comment.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    if request.method == 'GET':
        serializer= CommentSerializer(comment_post,many=True)
        return Response(serializer.data)

@api_view(['DELETE',])
@permission_classes((IsAuthenticated,))
def comment_delete(request,slug,ck):
    
    try:
        comment_post =Comment.objects.get(post=slug,id=ck)
    except Comment.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    user = request.user
    if comment_post.user != user:
        logger.info('details')
        return Response({'response' : "You don\'t have permission to delete that"})
    
    if request.method == 'DELETE':
        logger.info('comment delete')
        operation = comment_post.delete()
        data = {}
        if operation:
            data["success"] = "delete successful"
        else:
            data["failure"] = "delete failure"
        return Response(data=data)

@api_view(['POST',])
@permission_classes((IsAuthenticated,))
def comment_create(request, slug):
    comment = Comment() 
    if request.method == 'POST':
        logger.info('details')
        serializer = CommentSerializer(comment, data=request.data)
        if serializer.is_valid():
            logger.info('comment create')
            serializer.save()
        post = get_object_or_404(Post, slug=slug)
        content = request.POST.get('content')
        username = request.POST.get('username')
        user = request.user
    Comment.objects.create(post=post, user=user, content=content, username=username)
    return Response(serializer.data,status = status.HTTP_201_CREATED,)

class CommentView(ListAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
    logger.info('comment view')
