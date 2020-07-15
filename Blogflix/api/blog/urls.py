from django.urls import path,include
from . import views
from .views import PostView, myPosts 
from likes.views import featured
urlpatterns = [
    path('', views.PostCreate.as_view()),
    path('all',views.PostList.as_view()),
    path('latest', views.LatestList.as_view()),
    path('<slug>', PostView),
    path('<slug>/edit', views.PostEdit.as_view()),
    path('list/myposts',myPosts,name='post_view'),
    path('<slug>/likes/',include('likes.urls')),
    path('<slug>/comments/',include('comments.urls','comments_api')),
    path('popular/authors', views.PopularAuthor),
    path('featured/list',featured)
]