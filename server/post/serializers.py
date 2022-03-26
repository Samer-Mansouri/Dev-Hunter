from rest_framework import serializers
from django_restql.mixins import DynamicFieldsMixin
from .models import Post, Rating, Comment, Message


class PostSerializer(DynamicFieldsMixin, serializers.ModelSerializer):

    username = serializers.SerializerMethodField('get_username_from_author')


    class Meta:
        model = Post
        fields = ['id', 'user', 'title', 'description', 'github_url', 'project_pic', 'username', 'created_on']

    def get_username_from_author(self, post):
      username = post.user.username
      return username

class PostUserSerializer(DynamicFieldsMixin, serializers.ModelSerializer):


  class Meta:
        model = Post
        fields = ['id', 'user', 'title', 'description', 'github_url', 'project_pic', 'created_on']



class RatingSerializer(DynamicFieldsMixin, serializers.ModelSerializer):

    username = serializers.SerializerMethodField('get_username_from_author')

    class Meta:
        model = Rating
        fields = ['user', 'post', 'rate', 'username']
    
    def get_username_from_author(self, post):
      username = post.user.username
      return username

class CommentSerializer(DynamicFieldsMixin, serializers.ModelSerializer):

    username = serializers.SerializerMethodField('get_username_from_author')

    class Meta:
        model = Comment
        fields = ['user', 'post', 'comment', 'created_on', 'username']
    
    def get_username_from_author(self, post):
      username = post.user.username
      return username

class PostCommentSerializer(DynamicFieldsMixin, serializers.ModelSerializer):

    username = serializers.SerializerMethodField('get_username_from_user')
    
    class Meta:
      model = Comment
      fields = ['user', 'post', 'comment', 'created_on', 'username']

    def get_username_from_user(self, comment):
      first_name = comment.user.first_name
      last_name = comment.user.last_name
      name = first_name + " " + last_name
      return name

class MessageSerializer(DynamicFieldsMixin, serializers.ModelSerializer):

    sender_username = serializers.SerializerMethodField('get_username_from_sender')

    class Meta:
      model = Message
      fields = ['sender', 'receiver', 'subject', 'message', 'sender_username']

    def get_username_from_sender(self, message):
      return message.sender.username



    def get_username_from_user(self, comment):
      first_name = comment.user.first_name
      last_name = comment.user.last_name
      name = first_name + " " + last_name
      return name