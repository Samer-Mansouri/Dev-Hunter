from django.shortcuts import render  
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth.models import User
from .models import Post,Rating, Comment, Message
from .serializers import PostSerializer, CommentSerializer, PostUserSerializer, RatingSerializer, MessageSerializer
from rest_framework.pagination import PageNumberPagination
from rest_framework.generics import ListAPIView
from rest_framework.views import APIView
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework_simplejwt.authentication import JWTAuthentication
from django.conf import settings
from django.core.cache.backends.base import DEFAULT_TIMEOUT
from django.views.decorators.cache import cache_page
from django.core.cache import cache
from django.http import Http404
from rest_framework.parsers import MultiPartParser, FormParser
from user.models import User
from rest_framework import generics



# Create your views here.
class ApiPostListView(ListAPIView):
  queryset = Post.objects.all().order_by('-created_on')
  serializer_class = PostSerializer

class ApiMessageListView(APIView):
  permission_classes = (IsAuthenticated, )
  authentication_classes = (JWTAuthentication,)

  def get_object(self, pk):
        try:
            return User.objects.get(pk=pk)
        except User.DoesNotExist:
            raise Http404

  def get(self, request, format=None):
        messages = Message.objects.filter(receiver=request.user.id)
        serializer = MessageSerializer(messages, many=True)
        return Response(serializer.data)

class UserPostListAPIView(APIView):


    #parser_classes = [MultiPartParser, FormParser]

    def get_object(self, pk):
        try:
            return User.objects.get(pk=pk)
        except User.DoesNotExist:
            raise Http404

    def get(self, request, pk):
        user = self.get_object(pk)
        queryset = Post.objects.filter(user=user).order_by('-created_on')
        #paginate_queryset = paginator.paginate_queryset(queryset, request)
        serializer = PostSerializer(queryset, many=True).data
        data = serializer
        print(data)
        return Response(data)
  
  #pagination_class = PageNumberPagination

class PostApi(APIView):
    permission_classes = (IsAuthenticated,)
    authentication_classes = (JWTAuthentication, )
    parser_classes = [MultiPartParser, FormParser]

    def get_object(self, pk):
        try:
            return Post.objects.get(pk=pk)
        except Post.DoesNotExist:
            raise Http404

    def get(self, request):
        #paginator = PageNumberPagination()
        queryset = Post.objects.all().order_by('-created_on')
        print(queryset)
        #paginate_queryset = paginator.paginate_queryset(queryset, request)
        serializer = Post(queryset, many=True).data
        data = serializer
        return Response(data)
  
    def post(self, request, format=None):
        
        print(request.user.id)
        p = {"user": request.user.id}
        print(request.data.get("title"))
        data = {**request.data, **p}
        print(data)
        #del data['avatar']
        serializer = PostSerializer(data=data, partial=True)
        serializer.is_valid(raise_exception=True)
        session = serializer.save()
        
        return Response({"Success":"Project created with success"})

class SinglePostAPIView(APIView):


    def get_object(self, pk):
        try:
            return Post.objects.get(pk=pk)
        except Post.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        post = self.get_object(pk) 
        serializer = PostUserSerializer(post) 
        return Response(serializer.data)
    

class CommentAPI(APIView):

    permission_classes = (IsAuthenticated,)
    authentication_classes = (JWTAuthentication, )

    def get_object(self, pk):
        try:
            return Post.objects.get(pk=pk)
        except Post.DoesNotExist:
            raise Http404

    def get(self, request):
        #paginator = PageNumberPagination()
        queryset = Comment.objects.order_by('-created_on')
        #paginate_queryset = paginator.paginate_queryset(queryset, request)
        serializer = Post(queryset, many=True).data
        data = serializer
        return Response(data)
  
    def post(self, request, pk, format=None):
        print(pk)
        p = {"user": request.user.id}
        post = {"post": self.get_object(pk).id}
        data = {**request.data, **p, **post}
        print(data)
        #del data['avatar']
        serializer = CommentSerializer(data=data, partial=True)
        serializer.is_valid(raise_exception=True)
        comment = serializer.save()
        
        return Response({"Success":"Comment created with success"})

class RatingAPI(APIView):

    permission_classes = (IsAuthenticated,)
    authentication_classes = (JWTAuthentication, )

    def get_object(self, pk):
        try:
            return Post.objects.get(pk=pk)
        except Post.DoesNotExist:
            raise Http404

    def get(self, request, pk):
        #paginator = PageNumberPagination()
        queryset = Rating.objects.filter(user=request.user.id, post=self.get_object(pk).id)
        #paginate_queryset = paginator.paginate_queryset(queryset, request)
        serializer = RatingSerializer(queryset, many=True).data
        data = serializer
        return Response(data)
  
    def post(self, request, pk, format=None):
        print(pk)
        p = {"user": request.user.id}
        post = {"post": self.get_object(pk).id}
        data = {**request.data, **p, **post}
        print(data)
        #del data['avatar']
        serializer = RatingSerializer(data=data, partial=True)
        serializer.is_valid(raise_exception=True)
        rate = serializer.save()
        
        return Response({"Success":"Post rated with success"})
    
    """def check_permissions(self, request):
        print(request.user)
        if not request.user.is_protector or request.user.is_student:
                self.permission_denied(request)"""

class MessageAPI(APIView):

    permission_classes = (IsAuthenticated,)
    authentication_classes = (JWTAuthentication, )
   

    def get_object(self, pk):
        try:
            return User.objects.get(pk=pk)
        except User.DoesNotExist:
            raise Http404

    def get(self, request, pk):
        #paginator = PageNumberPagination()
        queryset = Rating.objects.filter(user=request.user.id, post=self.get_object(pk).id)
        #paginate_queryset = paginator.paginate_queryset(queryset, request)
        serializer = RatingSerializer(queryset, many=True).data
        data = serializer
        return Response(data)
  
    def post(self, request, pk, format=None):
        p = {"sender": request.user.id}
        r = {"receiver": self.get_object(pk).id}
        data = {**request.data, **p, **r}
        #del data['avatar']
        serializer = MessageSerializer(data=data, partial=True)
        serializer.is_valid(raise_exception=True)
        message = serializer.save()
        
        return Response({"Success":"Message sent with success"})