from django.urls import path, include
from .views import UserActivationView,userlist
from django.conf.urls import  url

urlpatterns = [
    url(r'^', include('djoser.urls')),
    url(r'^', include('djoser.urls.authtoken')),
    url(r'^users/activate/(?P<uid>[\w-]+)/(?P<token>[\w-]+)/$', UserActivationView.as_view()),
    url(r'^allusers/(?P<pk>[\w-]+)',userlist)
]