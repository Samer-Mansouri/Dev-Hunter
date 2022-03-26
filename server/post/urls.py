from django.urls import path
from .views import (
  CommentAPI,
  RatingAPI,
  PostApi,
  ApiPostListView,
  SinglePostAPIView,
  MessageAPI,
  UserPostListAPIView,
  ApiMessageListView,
)
from rest_framework_simplejwt import views as jwt_views





app_name = "user"

urlpatterns = [
  path('comment/<int:pk>', CommentAPI.as_view(), name="comment"),
  path('rate/<int:pk>', RatingAPI.as_view(), name="rate"),
  path('post', PostApi.as_view(), name="post"),
  path('posts', ApiPostListView.as_view(), name="posts"),
  path('singlepost/<int:pk>', SinglePostAPIView.as_view(), name="singlepost"),
  path('message/<int:pk>', MessageAPI.as_view(), name="message"),
  path('userposts/<int:pk>', UserPostListAPIView.as_view(), name="user-post"),
  path('messages', ApiMessageListView.as_view(), name="messages")
]