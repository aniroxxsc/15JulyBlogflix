from django.contrib import admin
from django.urls import path,include
from . import views

from .views import(
   comment_delete,
   comment_create,
   CommentView,
   comment_view,
   )

app_name = 'comments'

urlpatterns = [
   path('',views.CommentView.as_view(), name='thread'), #for all comments in database
   path('view',comment_view,name='view'),  #for all comments on post id=pk
   path('create',comment_create,name='create'),
   path('<int:ck>/delete',comment_delete,name='delete'),  #delete is working, therefore can delete comments only by the user who wrote it
   ]